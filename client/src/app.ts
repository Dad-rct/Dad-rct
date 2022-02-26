
let emmet = {
    top: 0
}

let lives = 5
let score = 0
let level = 1

let emmetSpeed = 2
let emmetTop = 0
let studSpeedS = 5;
let studFreq = 4;
let interval: any = undefined
let keyDown: string | undefined = undefined
let shiftDown: boolean | undefined = undefined
let lastKeyDown = performance.now()
interface iStudEntry {
    left: number,
    element: HTMLDivElement,
    last_animate: number
}
const studs: iStudEntry[] = []

const studFactory = () => {
    if (interval) clearTimeout(interval);
    interval = setInterval(() => {
        newStud()
    }, studFreq * 1000)
}
const aha = new Audio("../sounds/aha.mp3")
const playAha = () => {
    aha.currentTime = 2.2
    aha.play();
}
const setScore = () => {
    console.debug("set score to ", new String(score.toString()).padStart(5, "0"))
    const element = document.querySelector(".score")
    if (element) {
        element.innerHTML = new String(score.toString()).padStart(5, "0").toString()
    }
}
const getMainWindow = () => {
    const ret = document.querySelector("#main")
    if (ret === undefined)
        throw new Error("No main window found")
    return ret as HTMLDivElement
}
const getEmmet = () => {
    const ret = document.querySelector(".emmet")
    if (ret === undefined)
        throw new Error("No emmet element found")
    return ret as HTMLDivElement
}
const getEmmetNuts = () => {
    const ret = document.querySelector(".emmet .nuts")
    if (ret === undefined)
        throw new Error("No emmet nuts element found")
    return ret as HTMLDivElement
}
const animateframe = (ts: number) => {
    const mainWindow = getMainWindow()
    const emmetElement = getEmmet()
    const emmetNutsElement = getEmmetNuts()

    if (keyDown) {
        const duration = ts - lastKeyDown
        const windowSize = mainWindow.clientHeight
        const pixelsPerMillisecond = windowSize / (emmetSpeed * 1000)
        let multiplier = 0
        switch (keyDown) {
            case "w":
                multiplier = shiftDown ? -2 : -1
                break;
            case "s":
                multiplier = shiftDown ? 2 : 1
                break;
        }
        if (multiplier != 0) {

            emmet.top += multiplier * pixelsPerMillisecond * duration
            emmet.top = Math.max(0, emmet.top)
            emmet.top = Math.min(mainWindow.clientHeight - emmetElement.clientHeight, emmet.top)
            if (emmetElement) {
                emmetElement.style.top = emmet.top + "px"

            }
        }
        lastKeyDown = ts

    }
    for (const [idx, stud] of studs.entries()) {
        const { left, element, last_animate } = stud
        const duration = ts - last_animate
        const windowSize = mainWindow.clientWidth
        const pixelsPerMillisecond = windowSize / (studSpeedS * 1000)
        const pixels = pixelsPerMillisecond * duration
        stud.left = left + pixels
        element.style.left = Math.floor(stud.left) + "px";
        //check for collision with emmet

        const emmetRect = emmetElement.getBoundingClientRect()
        const studRect = element.getBoundingClientRect()
        const emmetBallsRect = emmetNutsElement.getBoundingClientRect()
        if (emmetBallsRect.top < studRect.top && emmetBallsRect.bottom > studRect.bottom && studRect.right >= emmetBallsRect.left) {
            score += 5000
            setScore()
            studs.splice(idx, 1)
            element.parentElement?.removeChild(element);
            playAha()

        }
        else if (emmetRect.top < studRect.top && emmetRect.bottom > studRect.bottom && studRect.right >= emmetRect.left + (emmetRect.right - emmetRect.left) / 2) {
            //emmet hit the stud
            score += 1000
            setScore()
            studs.splice(idx, 1)
            element.parentElement?.removeChild(element);

        }
        else if (stud.left > windowSize - element.clientWidth) {
            //emmet missed the stud.
            studs.splice(idx, 1)
            element.parentElement?.removeChild(element);
        } else {
            stud.last_animate = ts
        }
    }
        requestAnimationFrame(animateframe);
}

const newStud = () => {
    const stud = document.createElement("div");
    stud.classList.add("stud");
    stud.style.left = "0px";
    const minStudTop = 64
    const mainWindow = getMainWindow()
    const maxStudTop = mainWindow.clientHeight - minStudTop - 16 //16 is the height of a stud
    const studTop = Math.floor(Math.random() * (maxStudTop - minStudTop) + minStudTop)
    stud.style.top = studTop + "px"
    mainWindow.appendChild(stud);
    studs.push({ left: 0, element: stud, last_animate: performance.now() });
}
document.onreadystatechange = state => {
    if (document.readyState === "complete") {
        level = 1;
        score = 0;
        lives = 5;
        setScore()
        newStud();
        studFactory()
        requestAnimationFrame(animateframe);
    }
}
document.addEventListener("keydown", evt => {
    keyDown = evt.key.toLowerCase()
    shiftDown = evt.shiftKey
    lastKeyDown = evt.timeStamp
})
document.addEventListener("keyup", () => {
    keyDown = shiftDown = undefined
})

