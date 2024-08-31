type onFrameCallback = (video: HTMLVideoElement, frame: number, meta: VideoFrameMetadata) => Promise<void>

export class Camera {
    private video: HTMLVideoElement | null
    private stream: MediaStream | null
    private initialized: Promise<boolean> | boolean = false;
    private frameHandle: number;

    public get isReady() {
        return this.initialized;
    }

    public async init(videoTag: HTMLVideoElement) {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720, frameRate: 25, facingMode: { ideal: "user" } }, audio: false });
        this.initialized = new Promise<boolean>((resolve) => {
            this.video = videoTag;
            this.video.srcObject = this.stream;
            this.video.onloadedmetadata = () => {
                this.initialized = true;
                resolve(true);
            }
        })
        return this.initialized;
    }

    public async start(onFrame: onFrameCallback) {
        const fn = async (frame: number, meta: VideoFrameMetadata) => {
            if (!this.video) return;
            await onFrame(this.video, frame, meta);
            this.frameHandle = this.video.requestVideoFrameCallback(fn);
        }

        if (!this.video || !this.initialized) throw "Call Camera.init first";
        await this.video.play();
        this.frameHandle = this.video.requestVideoFrameCallback(fn);
    }

    public pause() {
        if (!this.video || !this.initialized) throw "Call Camera.init first";
        this.video.pause();
        this.video.cancelVideoFrameCallback(this.frameHandle);
    }

    public stop() {
        this.video && this.video.pause();
        (this.video && this.frameHandle) && this.video.cancelVideoFrameCallback(this.frameHandle);
        this.stream = null;
        this.video = null;
        this.initialized = false;
    }
}