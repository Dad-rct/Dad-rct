import Color from "color";
interface node {
    position: [number, number]
    size: number
    angle: number
    children: [node, node] | null
}

let addRightAngle = Math.PI / 8
let addLeftAngle = -Math.PI / 3
let sizeReducerLeft = 0.6
let sizeReducerRight = 0.6
const canvasHeight = 820;
const canvasWidth = 1180;
const maxDepth = 11;
const startSize = 200;
let startColor = rgbaFromHex("#783C00");
let endColor = rgbaFromHex("#008800");
const trunkLength = 200
let widthDecreaseRatio = 2;
let initialWidth = 50;

let startNode: node | null = null
let leftHandle: [number, number] | undefined = undefined
let rightHandle: [number, number] | undefined = undefined
let rootHandle: [number, number] | undefined = undefined
let movingChild: { type: "left" | "right", offset: [number, number] } | undefined = undefined
const handleRadius = 15;

function rgbaFromHex(hex: string): [number, number, number] {
    const rgb = Color(hex);
    return [rgb.red(), rgb.green(), rgb.blue()]
}

function addChildren(node: node) {
    const [xP, yP] = node.position;
    //h = size
    //y = a , a/h=cos(t) a = h * cos(t)
    const leftAngle = node.angle + addLeftAngle
    const yIncLeft = node.size * sizeReducerLeft * Math.cos(leftAngle)
    const xIncLeft = node.size * sizeReducerLeft * Math.sin(leftAngle)
    const left: node = {
        angle: leftAngle,
        children: null,
        position: [xP + xIncLeft, yP - yIncLeft],
        size: node.size * sizeReducerLeft
    }
    const rightAngle = node.angle + addRightAngle
    const yIncRight = node.size * sizeReducerRight * Math.cos(rightAngle)
    const xIncRight = node.size * sizeReducerRight * Math.sin(rightAngle)
    const right: node = {
        angle: rightAngle,
        children: null,
        position: [xP + xIncRight, yP - yIncRight],
        size: node.size * sizeReducerRight
    }
    node.children = [left, right]
    return [left, right] as const
}

function start() {
    const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")
    const start = (coordinates: [x: number, y: number]) => {
        const [x, y] = coordinates;
        [leftHandle, rightHandle].forEach(circle => {
            if (circle && isIntersect([x, y], [...circle, handleRadius])) {
                if (circle === leftHandle)
                    movingChild = { type: "left", offset: [x - circle[0], y - circle[1]] }
                else
                    movingChild = { type: "right", offset: [x - circle[0], y - circle[1]] }

            }
        });
    };
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        if (touch) {
            start(screenToCanvasCoordinates([touch.clientX, touch.clientY]))
        }
    });
    canvas.addEventListener('mousedown', (e) => {
        start(screenToCanvasCoordinates([e.clientX, e.clientY]));
    });

    document.addEventListener("mouseup", () => movingChild = undefined);
    document.addEventListener("touchend", () => movingChild = undefined);
    const screenToCanvasCoordinates = (c: [x: number, y: number]): [x: number, y: number] => {
        const x = canvasWidth * (c[0] - canvas.getBoundingClientRect().x) / canvas.clientWidth
        const y = canvasHeight * (c[1] - canvas.getBoundingClientRect().y) / canvas.clientHeight
        return [x, y];
    }
    const calulateAngleOfRotation = (args: {
        centre: { x: number, y: number },
        point: { x: number, y: number }
    }): number => {
        const { centre, point } = args;
        if (centre.x === point.x)
            return point.y < centre.y ? 0 : Math.PI
        if (centre.y === point.y)
            return point.x < centre.x ? 2 * Math.PI * 3 / 4
                : 2 * Math.PI * 1 / 4
        const baseAngle = Math.atan(
            Math.abs((point.x - centre.x)) /
            Math.abs(point.y - centre.y)
        );
        if (point.x > centre.x) {
            //right semi
            if (point.y < centre.y) {
                //Q1
                return baseAngle
            }
            //Q2
            return 2 * Math.PI * (2 / 4) - baseAngle
        } else {
            //left semi
            if (point.y > centre.y) {
                //Q3
                return baseAngle + 2 * Math.PI * (2 / 4)
            }
            //Q4
            return 2 * Math.PI - baseAngle
        }
    }
    const handleMove = (coordinates: [x: number, y: number]) => {
        if (movingChild && rootHandle && context && startNode) {
            const [x, y] = coordinates;
            const newCentre = [x - movingChild.offset[0], y - movingChild.offset[1]];
            const newSize = Math.sqrt((newCentre[0] - rootHandle[0]) ** 2 + (newCentre[1] - rootHandle[1]) ** 2);
            const newAngle = calulateAngleOfRotation({
                centre: { x: rootHandle[0], y: rootHandle[1] },
                point: { x: newCentre[0], y: newCentre[1] }
            });
            const newRatio = Math.min(0.9, newSize / startSize)
            switch (movingChild.type) {
                case "left":
                    sizeReducerLeft = newRatio
                    addLeftAngle = newAngle
                    break
                case "right":
                    sizeReducerRight = newRatio
                    addRightAngle = newAngle
            }
            context.clearRect(0, 0, canvas.width, canvas.height)
            addChildren(startNode);
            drawNode(startNode, context, 0, movingChild.type)
        }
    }
    canvas.addEventListener("mousemove", e => {
        handleMove(screenToCanvasCoordinates([e.clientX, e.clientY]))
    });
    canvas.addEventListener("touchmove", e => {
        const touch = e.touches[0];
        if (touch) {
            handleMove(screenToCanvasCoordinates([touch.clientX, touch.clientY]))
        }
    })
    if (context) {

        context.lineCap = "round"
        startNode = {
            angle: 0,
            children: null,
            position: [canvas.width / 2, canvas.height * .67],
            size: startSize
        }
        rootHandle = startNode.position
        addChildren(startNode);
        drawNode(startNode, context, 0, "left");
        /*
                setInterval(() => {
                    addRightAngle += 0.1;
                    addLeftAngle += 0.03;
                    context.clearRect(0, 0, canvas.width, canvas.height)
                    addChildren(startNode);
        
                    drawNode(startNode, context, 0, "left")
                }, 32)
                */
    }
    const redraw = () => {
        if (context && startNode) {
            context.clearRect(0, 0, canvas.width, canvas.height)
            addChildren(startNode);
            drawNode(startNode, context, 0, "left")
        }
    }
    (window as any).functions = {
        setBackgroundColor: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {

                document.body.style.backgroundColor = e.target.value
            }
        },
        setStartColor: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {
                startColor = rgbaFromHex(e.target.value);
                redraw();
            }
        },
        setEndColor: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {
                endColor = rgbaFromHex(e.target.value);
                redraw();
            }
        },
        setThickness: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {
                initialWidth = widthDecreaseRatio * parseInt(e.target.value, 10);
                redraw();
            }
        },
        setGrowth: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {
                sizeReducerLeft = sizeReducerRight = parseInt(e.target.value) / 10;
                redraw();
            }
        },
        setTaper: (e: Event) => {
            if (e.target instanceof HTMLInputElement) {
                widthDecreaseRatio = parseInt(e.target.value) / 2;
                redraw();
            }
        },
    }
}
function isIntersect(point: [number, number], circle: [number, number, number]) {
    return Math.sqrt((point[0] - circle[0]) ** 2 + (point[1] - circle[1]) ** 2) <= circle[2];
}
function subtractColors(col1: readonly [number, number, number], col2: readonly [number, number, number]): [number, number, number] {
    return [col1[0] - col2[0], col1[1] - col2[1], col1[2] - col2[2]];
}
function addColors(col1: readonly [number, number, number], col2: readonly [number, number, number]): [number, number, number] {
    return [col1[0] + col2[0], col1[1] + col2[1], col1[2] + col2[2]];
}

function divideColors(col1: readonly [number, number, number], div: number): [number, number, number] {
    return [col1[0] / div, col1[1] / div, col1[2] / div];
}
function multipleColors(col1: readonly [number, number, number], mult: number): [number, number, number] {
    return [col1[0] * mult, col1[1] * mult, col1[2] * mult];
}
function drawTrunk(startNode: node, context: CanvasRenderingContext2D) {
    //draw the trunk 
    context.beginPath()
    context.moveTo(startNode.position[0], startNode.position[1])
    context.lineWidth = initialWidth
    context.lineTo(startNode.position[0], startNode.position[1] + trunkLength)
    const startColorDepth = addColors(startColor, multipleColors(divideColors(subtractColors(endColor, startColor), maxDepth + 2), 0));
    const endColorDepth = addColors(startColor, multipleColors(divideColors(subtractColors(endColor, startColor), maxDepth + 2), 1));
    const grd = context.createLinearGradient(startNode.position[0], startNode.position[1] + trunkLength, startNode.position[0], startNode.position[1])
    grd.addColorStop(0, `rgb(${startColorDepth.join(",")})`)
    grd.addColorStop(1, `rgb(${endColorDepth.join(",")})`)
    context.strokeStyle = grd
    context.stroke()
}

function drawNode(node: node, context: CanvasRenderingContext2D, depth: number, leftOrRight: "left" | "right") {
    if (depth === 0) drawTrunk(node, context);
    context.beginPath();
    const startColorDepth = addColors(startColor, multipleColors(divideColors(subtractColors(endColor, startColor), maxDepth + 2), depth + 1));
    const endColorDepth = addColors(startColor, multipleColors(divideColors(subtractColors(endColor, startColor), maxDepth + 2), depth + 2));
    const [x, y] = node.position;
    if (depth < maxDepth)
        addChildren(node)
    if (node.children) {
        for (const child of node.children) {
            context.beginPath()
            context.lineWidth = initialWidth / (widthDecreaseRatio * (2 + depth))
            const [childX, childY] = child.position
            const grd = context.createLinearGradient(x, y, childX, childY)
            grd.addColorStop(0, `rgb(${startColorDepth.join(",")})`)
            grd.addColorStop(1, `rgb(${endColorDepth.join(",")})`)
            context.strokeStyle = grd
            context.moveTo(x, y)
            context.lineTo(childX, childY)
            context.stroke();
            drawNode(child, context, depth + 1, child === node.children[0] ? "left" : "right");
        }
        if (depth === 1) {
            context.beginPath()
            context.strokeStyle = "#66F"
            context.fillStyle = "#66F"
            context.lineWidth = 1;
            context.arc(node.position[0], node.position[1], 15, 0, 2 * Math.PI);
            if (leftOrRight === "left")
                leftHandle = node.position
            else
                rightHandle = node.position
            context.fill()
            context.stroke()
        }
    }
}

document.onreadystatechange = state => {
    if (document.readyState === "complete") {
        start();
    }
}
