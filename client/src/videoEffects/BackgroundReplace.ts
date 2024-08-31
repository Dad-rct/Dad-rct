import { Results, SelfieSegmentation } from "@mediapipe/selfie_segmentation";
import { Camera } from "./Camera";

type BufferKey = "mask" | "output" | "background";
type Buffers = {
    [key in BufferKey]?: CanvasBuffer
}
type CanvasBuffer = [ OffscreenCanvas, OffscreenCanvasRenderingContext2D ];
type FrameCallback = (buffer: OffscreenCanvas) => Promise<void>;
type Options = {
    jitterFrames: number,
    blurRadius: number,
    maskBlur: number,
    threshold: number,
    lowCutoff: number
} & ({
    type: "bokeh"
    blurRadius: number,
} | {
    type: "replace",
    src: string
});


/**
 * Rolls up the SelfieSegmentation tf model and post processing into an easier to use class
 */
export class BackgroundReplace {
    private options: Options;

    private segmenter: SelfieSegmentation;
    private buffers: Buffers = {};
    private prevFrames: Array<ImageData> = [];
    private bgImageSrc: string;
    private camera: Camera;

    constructor(camera?: Camera) {
        this.segmenter = new SelfieSegmentation({
            //Todo: host models locally
            locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
        });
        this.segmenter.setOptions({ modelSelection: 1 });
        this.camera = camera || new Camera();
    }

    public async start(options: Partial<Options>) {
        this.options = Object.assign({
            type: "bokeh",
            blurRadius: 10,
            jitterFrames: 2,
            maskBlur: 3,
            threshold: 160,
            lowCutoff: 127
        } as Options, options);

        // Stop the camera if it is already running
        if (this.camera.isReady) this.camera.stop();

        await this.camera.init();
        await this.camera.start(async (video) => {
            await this.segmenter.send({ image: video });
        });
    }

    public async pause() {
        this.camera.pause();
    }

    public stop() {
        this.segmenter.close();
        this.prevFrames = [];
        this.buffers = {};
        this.bgImageSrc = "";
    }

    public onFrame(callback: FrameCallback) {
        this.segmenter.onResults(async (results) => {
            const [frame] = await this.backgroundReplace(results);
            await callback(frame);
        });
    }

    public stream(fps?: number) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.segmenter.onResults(async (results) => {
            const [frame] = await this.backgroundReplace(results);
            canvas.width = frame.width;
            canvas.height = frame.height;
            ctx.drawImage(frame, 0,0);
        });
        return canvas.captureStream(fps);
    }
  
    private ensureBuffer(key: BufferKey, w: number, h: number) {
        if (this.buffers[key]) {
            return this.buffers[key] as CanvasBuffer;
        } else {
            console.log("Creating buffer:", key)
            const canvas = new OffscreenCanvas(w,h);
            const ctx = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D;
            this.buffers[key] = [ canvas, ctx ];
            return this.buffers[key] as CanvasBuffer;
        }
    }

    private ensureImageBuffer(src: string, width: number, height: number) {
        const [canvas, ctx] = this.ensureBuffer("background", width, height);
        if (this.bgImageSrc !== src) {
            const img = new Image();
            img.onload = () => {
                var ratio = Math.max( width / img.width, height / img.height);
                var shiftX = (width - img.width * ratio) / 2;
                var shiftY = (height - img.height * ratio) / 2;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    img, 0, 0, img.width, img.height,
                    shiftX, shiftY, 
                    img.width * ratio, img.height * ratio
                );
            };
            this.bgImageSrc = img.src = src;
        } 
        return [canvas, ctx] as CanvasBuffer;
    }

    private mask(results: Results) {
        const { width, height } = results.image;
        const [ canvas, ctx ] = this.ensureBuffer("mask", width, height);
        
        ctx.save();
        ctx.clearRect(0,0,width, height);
        ctx.filter = `blur(${this.options.maskBlur}px)`;
        ctx.drawImage(results.segmentationMask, 0, 0);
        const editableImage = ctx.getImageData(0, 0, width, height);
        const originalImage = new ImageData(new Uint8ClampedArray(editableImage.data), editableImage.width, editableImage.height);

        for (let i = 0; i < editableImage.data.length; i += 4) {
            if (editableImage.data[i + 3] > 253) {
                // If the network is fairly certain its a person just go with it
                editableImage.data[i + 3] = 255;
            } else {
                let val = editableImage.data[i + 3];
                // Mix in previous frames if we have any
                // Helps to reduce jitter as the model lacks temporal consistency
                if (this.prevFrames.length) {
                    let pval = 0;
                    for (let frame of this.prevFrames)
                        pval += frame.data[i + 3];
                    val = (val + pval) / (this.prevFrames.length + 1);
                }
                // Linear map the input values to full range alpha
                // Input: lowCutoff to 255
                // Output: 32 to 255
                editableImage.data[i + 3] = ((255-32) * (val - this.options.lowCutoff)) / (255 - this.options.lowCutoff)+32;
            }
        }
        
        ctx.putImageData(editableImage, 0, 0);
        ctx.restore();

        // Store the last frame
        if (this.options.jitterFrames) {
            this.prevFrames.unshift(originalImage);
            if (this.prevFrames.length > this.options.jitterFrames) {
                this.prevFrames = this.prevFrames.slice(0, this.options.jitterFrames);
            }
        }    
        return canvas;
    }

    private backgroundReplace(results: Results) {
        const { width, height } = results.image;
        const [ canvas, ctx ] = this.ensureBuffer("output", width, height);

        const mask = this.mask(results);
        ctx.save();
        
        // Draw the original captured image
        ctx.drawImage(results.image, 0, 0);
        
        // Keep the original image where the mask overlaps
        ctx.globalCompositeOperation = "destination-in";
        ctx.filter = `blur(4px)`;
        ctx.drawImage(mask, 0, 0);

        // Draw the new background under the current contents
        ctx.globalCompositeOperation = "destination-over";
        switch (this.options.type) {
            case "bokeh":
                ctx.filter = `blur(${this.options.blurRadius}px)`;
                ctx.drawImage(results.image, 0, 0);
                break;

            case "replace":
                const [bg] = this.ensureImageBuffer(this.options.src, width, height);
                ctx.filter = "none";
                ctx.drawImage(bg, 0, 0);
                break;
        }
           
        ctx.restore();
        return [canvas, mask];
    }
}