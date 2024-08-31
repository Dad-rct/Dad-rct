import { FaceMesh, NormalizedLandmark, NormalizedLandmarkList } from "@mediapipe/face_mesh";
import { Camera } from "./Camera";
import { minimal } from "./meshPoints";

type BufferKey = "output";
type Buffers = {
    [key in BufferKey]?: CanvasBuffer
}
type CanvasBuffer = [OffscreenCanvas, OffscreenCanvasRenderingContext2D];
type FrameCallback = (data: FaceData) => Promise<void> | void;
type Options = {
    videoTag: HTMLVideoElement
};

export type FaceData = {
    rotation: Rotation
    eyes: {
        left: EyeData
        right: EyeData
    },
    meshPoints: NormalizedLandmarkList
}

type EyeData = {
    isOpen: boolean,
    openRate: number,
    lowerPos: number,
    upperPos: number,
    normalizedPupil: {
        x: number,
        y: number
    },
    pupil: {
        x: number, y: number
    }
}

type Rotation = {
    yaw: number
    pitch: number
    roll: number
}

export class MeshReplace {
    private options: Options;

    private faceMesh: FaceMesh;
    private buffers: Buffers = {};
    private prevFrames: Array<ImageData> = [];
    private bgImageSrc: string;
    private camera: Camera;

    constructor(camera?: Camera) {
        this.faceMesh = new FaceMesh({
            //Todo: host models locally
            locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,

        });
        this.faceMesh.setOptions({
            refineLandmarks: true,
            minDetectionConfidence: 0.2,
            maxNumFaces: 3
        });
        this.camera = camera || new Camera();
    }

    public async start(options: Options) {
        this.options = Object.assign({}, options);

        // Stop the camera if it is already running
        if (this.camera.isReady) this.camera.stop();
        await this.camera.init(options.videoTag);
        await this.camera.start(async (video) => {
            await this.faceMesh.send({ image: video });
        });
    }

    public async pause() {
        this.camera.pause();
    }

    public stop() {
        this.faceMesh.close();
        this.prevFrames = [];
        this.buffers = {};
        this.bgImageSrc = "";
    }

    private drawPoints(meshPoints: Array<NormalizedLandmark>, points: Array<number>, ctx: CanvasRenderingContext2D, fillStyle: string) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.save();
        ctx.fillStyle = fillStyle;
        for (let point of points) {
            const x = meshPoints[point].x * w;
            const y = meshPoints[point].y * h;
            ctx.fillRect(x, y, 10, 10);
        }
        ctx.restore();
    }


    private drawPoint(coordinates: NormalizedLandmark, ctx: CanvasRenderingContext2D, fillStyle: string) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.save();
        ctx.fillStyle = fillStyle;
        const x = coordinates.x * w;
        const y = coordinates.y * h;
        ctx.fillRect(x, y, 10, 10);
        ctx.restore();
    }
    private drawPupil(ctx: CanvasRenderingContext2D, data: EyeData, xRadius: number) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.beginPath()
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "yellow";
        ctx.ellipse(
            data.pupil.x * w,
            data.pupil.y * h,
            2 * xRadius * w,
            2 * xRadius * h,
            0,
            0, 2 * Math.PI
        );
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        //ctx.moveTo(data.normalizedPupil.x * w, data.normalizedPupil.y * h);

        ctx.ellipse(
            data.pupil.x * w,
            data.pupil.y * h,
            xRadius * w / 2,
            xRadius * w,
            0,
            0, 2 * Math.PI
        );
        ctx.fill();
        ctx.stroke();
    }
    private drawBugEyes(
        ctx: CanvasRenderingContext2D,
        data: FaceData,
    ) {
        const pupilRadius = this.getDistance({ ...data.eyes.left.pupil, z: 0 }, { ...data.eyes.right.pupil, z: 0 }) / 4
        this.drawPupil(ctx, data.eyes.left, pupilRadius)
        this.drawPupil(ctx, data.eyes.right, pupilRadius)

    }

    /**
     * Approximate pupil based on iris position if available if not use the eye itself
     * @param meshPoints Results object from the FaceMesh network
     * @param side l|r Which eye. Left or Right
     * @returns Normalized coordinates {x: number y: number z: number }
     */
    private getPupil(meshPoints: Array<NormalizedLandmark>, side: "l" | "r", useIris?: boolean) {
        useIris = useIris && meshPoints.length > 469;
        const points = useIris ?
            side == "l" ? minimal.leftIris : minimal.rightIris :
            side == "l" ? minimal.leftEye : minimal.rightEye;
        const coords = points.map((point => meshPoints[point]));
        return this.getCentre(coords);
    }

    /**
     * Get center of a group of points
     * @param landmarks 
     * @returns Normalized coordinates {x: number y: number z: number }
     */
    private getCentre(landmarks: Array<NormalizedLandmark>) {
        const range = landmarks.reduce((prev, curr, idx) => {
            return {
                xMax: Math.max(prev.xMax, curr.x),
                yMax: Math.max(prev.yMax, curr.y),
                zMax: Math.max(prev.zMax, curr.z),
                xMin: Math.min(prev.xMin, curr.x),
                yMin: Math.min(prev.yMin, curr.y),
                zMin: Math.min(prev.zMin, curr.z)
            }
        }, {
            xMin: Number.MAX_SAFE_INTEGER,
            xMax: Number.MIN_SAFE_INTEGER,
            yMin: Number.MAX_SAFE_INTEGER,
            yMax: Number.MIN_SAFE_INTEGER,
            zMin: Number.MAX_SAFE_INTEGER,
            zMax: Number.MIN_SAFE_INTEGER
        });
        const result = {
            x: (range.xMin + range.xMax) * 0.5,
            y: (range.yMin + range.yMax) * 0.5,
            z: (range.zMin + range.zMax) * 0.5
        }
        return result;
    }

    private getDistance(p1: NormalizedLandmark, p2?: NormalizedLandmark, axis?: { x?: boolean, y?: boolean, z?: boolean }) {
        p2 = p2 || { x: 0, y: 0, z: 0 };
        const x = (!axis || axis.x) ? (p2.x - p1.x) ** 2 : 0;
        const y = (!axis || axis.y) ? (p2.y - p1.y) ** 2 : 0;
        const z = (!axis || axis.z) ? (p2.z - p1.z) ** 2 : 0;
        return Math.sqrt(x + y + z);
    }

    /**
     * Returns for each eye:
     *  Gaze direction
     *  Eye openness 
     *  Eyebrow height
     *  
     * @returns 
     */
    private getEyeData(meshPoints: Array<NormalizedLandmark>, side: "l" | "r"): EyeData {
        // Might be more accurate to use the iris?
        //const haveIris = meshPoints.length > 469;        

        const browPoints = side == "l" ? minimal.leftEyebrow : minimal.rightEyebrow;
        const eyePoints = side == "l" ? minimal.leftEye : minimal.rightEye;
        const irisPoints = side == "l" ? minimal.leftIris : minimal.rightIris;

        const eyeCoords = eyePoints.map((point => meshPoints[point]));
        const irisCoords = irisPoints.map((point => meshPoints[point]));
        const browCoords = browPoints.map((point => meshPoints[point]));
        const [eyeOuter, eyeLower, eyeUpper, eyeInner] = eyeCoords;

        const eyeCenter = this.getCentre(eyeCoords);
        const eyeHeight = this.getDistance(eyeLower, eyeUpper);
        const eyeWidth = this.getDistance(eyeOuter, eyeInner);
        const irisDiameter = this.getDistance(irisCoords[0], irisCoords[2]);


        const openRate = eyeHeight / irisDiameter;
        const isOpen = openRate > 0.35;
        const lowerPos = this.getDistance(eyeCenter, eyeLower) / (irisDiameter / 2);
        const upperPos = this.getDistance(eyeCenter, eyeUpper) / (irisDiameter / 2);

        // Get pupil coordinates normalized and relative to the eye
        const eyePupil = this.getPupil(meshPoints, side, true);
        const xMin = Math.min(eyeOuter.x, eyeInner.x);
        const xMax = Math.max(eyeOuter.x, eyeInner.x);
        const normalizedPupil = {
            x: (eyePupil.x - xMin) / (xMax - xMin),
            y: (eyePupil.y - eyeLower.y) / (eyeUpper.y - eyeLower.y)
        }

        return {
            isOpen, openRate, lowerPos, upperPos,
            normalizedPupil, pupil: eyePupil
        }
    }

    private getMouthData() {
        return {}
    }

    private getYawPitchRoll(meshPoints: Array<NormalizedLandmark>) {
        const orientationPts = minimal.orientation.map((point => meshPoints[point]));

        // A point near the centre of the head (avg of ears at the moment)
        const ctrPoint = {
            x: (orientationPts[1].x + orientationPts[2].x) * 0.5,
            y: (orientationPts[1].y + orientationPts[2].y) * 0.5,
            z: 0
        };

        const yaw = Math.atan2(
            ctrPoint.x - orientationPts[0].x,
            ctrPoint.z - orientationPts[0].z
        ) * 57.295;

        const pitchAdj = this.getDistance(orientationPts[0], ctrPoint, { x: true, z: true })
        const pitch = Math.atan2(
            ctrPoint.y - orientationPts[0].y,
            pitchAdj
        ) * 57.295;

        // This is a bit of a mess
        const hPoint = { x: orientationPts[1].x, y: orientationPts[2].y, z: 0 };
        const earDist = this.getDistance(orientationPts[1], orientationPts[2], { x: true, y: true });
        const hDist = this.getDistance(hPoint, orientationPts[2], { x: true, y: true });
        const dRoll = earDist / hDist % 1;
        const roll = earDist == hDist ?
            0 :
            (hPoint.y > orientationPts[1].y) ?
                Math.asin(dRoll % 1) * 57.295 :
                Math.asin(dRoll % 1) * -57.295;


        return { yaw, pitch, roll }
    }

    public stream(fps?: number, frameCallback?: FrameCallback) {
        const canvas = document.createElement("canvas");
        canvas.style.display = "none"
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.faceMesh.onResults(async (results) => {
            const frame = results.image;
            canvas.width = frame.width;
            canvas.height = frame.height;

            if (
                !results ||
                !results.multiFaceLandmarks ||
                !results.multiFaceLandmarks[0] ||
                !results.multiFaceLandmarks[0].length
            ) return;
            for (const meshPoints of results.multiFaceLandmarks) {
                const ret = {
                    rotation: this.getYawPitchRoll(meshPoints),
                    eyes: {
                        left: this.getEyeData(meshPoints, "l"),
                        right: this.getEyeData(meshPoints, "r")
                    },
                    meshPoints
                }
                frameCallback && await frameCallback(ret);


                //this.drawPoints(meshPoints, minimal.orientation, ctx, "red");
                //this.drawPoints(meshPoints, minimal.leftEye, ctx, "grey")
                //this.drawPoints(meshPoints, minimal.rightEye, ctx, "grey")
                this.drawBugEyes(
                    ctx,
                    ret
                );
                //this.drawPoints(meshPoints, minimal.lips, ctx, "green");
                // this.drawPoint({ x: ret.eyes.left.normalizedPupil.x, y: ret.eyes.left.normalizedPupil.y, z: 0 }, ctx, "blue")
                // this.drawPoints(meshPoints, minimal.leftEyebrow, ctx, "green");
                //this.drawPoints(meshPoints, minimal.rightEyebrow, ctx, "green");
                //this.drawPoints(meshPoints, minimal.leftIris, ctx, "green");
                // this.drawPoints(meshPoints, minimal.leftEye, ctx, "green");
                //this.drawPoints(meshPoints, minimal.rightEye, ctx, "green");
                //this.drawPoints(meshPoints, minimal.orientation, ctx, "green");
            }

        });
        return canvas.captureStream(fps);
    }

    private ensureBuffer(key: BufferKey, w: number, h: number) {
        if (this.buffers[key]) {
            return this.buffers[key] as CanvasBuffer;
        } else {
            console.log("Creating buffer:", key)
            const canvas = new OffscreenCanvas(w, h);
            const ctx = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D;
            this.buffers[key] = [canvas, ctx];
            return this.buffers[key] as CanvasBuffer;
        }
    }

}