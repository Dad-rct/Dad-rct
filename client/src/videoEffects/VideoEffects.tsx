import * as React from "react";
import styled from "styled-components";
import { useMatch } from "react-router"
import { HashRouter } from "react-router-dom"
import { BackgroundReplace } from "./BackgroundReplace";
import { FaceData, MeshReplace } from "./MeshReplace";
import { render } from "react-dom"
const Button = styled.div`
    background-color: blue;
    border-radius: 5px;
    color: white;
    width: fit-content;
`


export const VideoEffectsRoute: React.FC = () => {
    const match = useMatch("/videoEffect")
    if (!match) return null
    return <VideoEffects />
}

export const VideoEffects: React.FC = () => {
    const maskInstance = React.useRef<BackgroundReplace>();
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        (async () => {
            if (!videoRef.current) return;
            maskInstance.current = new BackgroundReplace();
            videoRef.current.srcObject = maskInstance.current.stream();
            videoRef.current.play();
            maskInstance.current.start({
                type: "replace",
                src: "/apps/assets/videoBackgrounds/disney.jpg",
                jitterFrames: 2,
                blurRadius: 40
            });
        })();
        return () => {
            maskInstance.current?.stop();
        }
    }, []);

    return <Overlay>
        <video ref={videoRef} />
        <Button onClick={() => {
            maskInstance.current && maskInstance.current.start({
                type: "replace",
                src: "/apps/assets/videoBackgrounds/disney.jpg",
                jitterFrames: 2,
                blurRadius: 40
            });
        }}>Background 1</Button>
        <Button onClick={() => {
            maskInstance.current && maskInstance.current.start({
                type: "replace",
                src: "/apps/assets/videoBackgrounds/office.jpg",
                jitterFrames: 2,
                blurRadius: 40
            });
        }}>Background 2</Button>
        <Button onClick={() => {
            maskInstance.current && maskInstance.current.start({
                type: "bokeh",
                jitterFrames: 2,
                blurRadius: 40
            });
        }}>Background 3</Button>
    </Overlay>
}


export const FaceEffectsRoute: React.FC = () => {
    const match = useMatch("/face")
    if (!match) return null
    return <FaceEffects />
}

type FaceSVGRefs = {
    leftEye: SVGPathElement,
    rightEye: SVGPathElement
}

const FaceEffects: React.FC = () => {
    const meshInstance = React.useRef<MeshReplace>();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const videoRefShow = React.useRef<HTMLVideoElement>(null);
    const floMojiRef = React.useRef<SVGSVGElement>(null);
    const svgRefs = React.useRef<FaceSVGRefs>().current;
    const leftEyeOpen = React.useRef(true);
    const counter = React.useRef(1);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const onFrame = (data: FaceData) => {
        if (!floMojiRef.current) return;
        const { rotation } = data;
        floMojiRef.current.style.transform = `perspective(500px) rotateX(${rotation.pitch / 2}deg) rotateY(${rotation.yaw / 2}deg) rotateZ(${rotation.roll / 2}deg)`
        if (data.eyes.left.isOpen === false) {
            console.log("$RT", "left eye closed");
        }

        if (data.eyes.left.isOpen != leftEyeOpen.current && svgRefs?.leftEye) {
            if (data.eyes.left.isOpen) {
                svgRefs.leftEye.style.transform = "scaleY(1)"
            } else {
                svgRefs.leftEye.style.transform = "scaleY(0.5)"
            }
            leftEyeOpen.current = data.eyes.left.isOpen
        }
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, 600, 600);
                ctx.fillStyle = "white";
                for (const meshPoint of data.meshPoints) {
                    ctx.fillRect(meshPoint.x * 600, meshPoint.y * 600, 2, 2);
                }
                ctx.fill();
            }
        }
        return;
    }
    React.useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.fillRect(100, 100, 10, 10);
                ctx.fill();
            }
        }
    }, [])
    React.useEffect(() => {
        (async () => {
            if (!videoRef.current || !videoRefShow.current) return;
            meshInstance.current = new MeshReplace();
            videoRef.current.srcObject = meshInstance.current.stream(25, onFrame);
            videoRef.current.play();
            meshInstance.current.start({ videoTag: videoRefShow.current });
        })();
        return () => {
            meshInstance.current?.stop();
        }
    }, []);

    return <Overlay>
        <video ref={videoRef} style={{ position: "absolute" }} />
        <video ref={videoRefShow} />
        <canvas width={600} height={600} ref={canvasRef} style={{ width: 600, height: 600 }}>

        </canvas>
        <FloMoji ref={floMojiRef} viewBox="0 0 128 160">
            <ellipse cx="64" cy="80" rx="60" ry="80" fill="blue" />
            <ellipse ref={svgRefs?.leftEye} cx="43" cy="48" rx="7" ry="8.5" fill="black" />
            <ellipse ref={svgRefs?.rightEye} cx="85" cy="48" rx="7" ry="8.5" fill="black" />

            <ellipse cx="64" cy="64" rx="9" ry="7" fill="black" />

        </FloMoji>
    </Overlay>
}

const Overlay = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #e1e1e1;
    z-index: 100;

    & video {
        width: 640px;
        height: 360px;
        border: 1px solid #ff0000;
    }

    & canvas {

        border: 1px solid #0000ff;
        background: #000;
    }
`;

const FloMoji = styled.svg`
    width: 256px;
    height: 256px;
    border: 1px solid hotpink;
`


const App: React.FC = () => {

    const [started, setStart] = React.useState(false);
    if (started)
        return <HashRouter>
            <FaceEffectsRoute />
            <VideoEffectsRoute />
        </HashRouter>
    return <Button onClick={() => {
        new AudioContext(); setStart(true)
    }}>
        Start
    </Button>
}


window["bootstrapProducer"] = () => {
    // Register a service worker

    render(<App />
        , document.querySelector("#video"));

}