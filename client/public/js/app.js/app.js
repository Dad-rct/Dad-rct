/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../js/producer/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

let emmet = {
    top: 0
};
let lives = 5;
let score = 0;
let level = 1;
let emmetSpeed = 2;
let emmetTop = 0;
let studSpeedS = 5;
let studFreq = 4;
let interval = undefined;
let keyDown = undefined;
let shiftDown = undefined;
let lastKeyDown = performance.now();
const studs = [];
const studFactory = () => {
    if (interval)
        clearTimeout(interval);
    interval = setInterval(() => {
        newStud();
    }, studFreq * 1000);
};
const aha = new Audio("../sounds/aha.mp3");
const playAha = () => {
    aha.currentTime = 2.2;
    aha.play();
};
const setScore = () => {
    console.debug("set score to ", new String(score.toString()).padStart(5, "0"));
    const element = document.querySelector(".score");
    if (element) {
        element.innerHTML = new String(score.toString()).padStart(5, "0").toString();
    }
};
const getMainWindow = () => {
    const ret = document.querySelector("#main");
    if (ret === undefined)
        throw new Error("No main window found");
    return ret;
};
const getEmmet = () => {
    const ret = document.querySelector(".emmet");
    if (ret === undefined)
        throw new Error("No emmet element found");
    return ret;
};
const getEmmetNuts = () => {
    const ret = document.querySelector(".emmet .nuts");
    if (ret === undefined)
        throw new Error("No emmet nuts element found");
    return ret;
};
const animateframe = (ts) => {
    var _a, _b, _c;
    const mainWindow = getMainWindow();
    const emmetElement = getEmmet();
    const emmetNutsElement = getEmmetNuts();
    if (keyDown) {
        const duration = ts - lastKeyDown;
        const windowSize = mainWindow.clientHeight;
        const pixelsPerMillisecond = windowSize / (emmetSpeed * 1000);
        let multiplier = 0;
        switch (keyDown) {
            case "w":
                multiplier = shiftDown ? -2 : -1;
                break;
            case "s":
                multiplier = shiftDown ? 2 : 1;
                break;
        }
        if (multiplier != 0) {
            emmet.top += multiplier * pixelsPerMillisecond * duration;
            emmet.top = Math.max(0, emmet.top);
            emmet.top = Math.min(mainWindow.clientHeight - emmetElement.clientHeight, emmet.top);
            if (emmetElement) {
                emmetElement.style.top = emmet.top + "px";
            }
        }
        lastKeyDown = ts;
    }
    for (const [idx, stud] of studs.entries()) {
        const { left, element, last_animate } = stud;
        const duration = ts - last_animate;
        const windowSize = mainWindow.clientWidth;
        const pixelsPerMillisecond = windowSize / (studSpeedS * 1000);
        const pixels = pixelsPerMillisecond * duration;
        stud.left = left + pixels;
        element.style.left = Math.floor(stud.left) + "px";
        //check for collision with emmet
        const emmetRect = emmetElement.getBoundingClientRect();
        const studRect = element.getBoundingClientRect();
        const emmetBallsRect = emmetNutsElement.getBoundingClientRect();
        if (emmetBallsRect.top < studRect.top && emmetBallsRect.bottom > studRect.bottom && studRect.right >= emmetBallsRect.left) {
            score += 5000;
            setScore();
            studs.splice(idx, 1);
            (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
            playAha();
        }
        else if (emmetRect.top < studRect.top && emmetRect.bottom > studRect.bottom && studRect.right >= emmetRect.left + (emmetRect.right - emmetRect.left) / 2) {
            //emmet hit the stud
            score += 1000;
            setScore();
            studs.splice(idx, 1);
            (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(element);
        }
        else if (stud.left > windowSize - element.clientWidth) {
            //emmet missed the stud.
            studs.splice(idx, 1);
            (_c = element.parentElement) === null || _c === void 0 ? void 0 : _c.removeChild(element);
        }
        else {
            stud.last_animate = ts;
        }
    }
    requestAnimationFrame(animateframe);
};
const newStud = () => {
    const stud = document.createElement("div");
    stud.classList.add("stud");
    stud.style.left = "0px";
    const minStudTop = 64;
    const mainWindow = getMainWindow();
    const maxStudTop = mainWindow.clientHeight - minStudTop - 16; //16 is the height of a stud
    const studTop = Math.floor(Math.random() * (maxStudTop - minStudTop) + minStudTop);
    stud.style.top = studTop + "px";
    mainWindow.appendChild(stud);
    studs.push({ left: 0, element: stud, last_animate: performance.now() });
};
document.onreadystatechange = state => {
    if (document.readyState === "complete") {
        level = 1;
        score = 0;
        lives = 5;
        setScore();
        newStud();
        studFactory();
        requestAnimationFrame(animateframe);
    }
};
document.addEventListener("keydown", evt => {
    keyDown = evt.key.toLowerCase();
    shiftDown = evt.shiftKey;
    lastKeyDown = evt.timeStamp;
});
document.addEventListener("keyup", () => {
    keyDown = shiftDown = undefined;
});


/***/ })

/******/ });
//# sourceMappingURL=app.js.map