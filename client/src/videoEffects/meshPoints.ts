// Full Mesh Points
export const full = {
    leftEye: [263, 249, 390, 373, 374, 380, 381, 382, 362, 466, 388, 387, 386, 385, 384, 398],
    rightEye: [33, 7, 163, 144, 145, 153, 154, 155, 133, 246, 161, 160, 159, 158, 157, 173],
    leftIris: [475, 476, 477, 474],
    rightIris: [470, 471, 472, 469],
    rightEyebrow: [46, 53, 52, 65, 55, 70, 63, 105, 66, 107],
    leftEyebrow: [276, 283, 282, 295, 285, 300, 293, 334, 296, 336],
    nose: [1],
    lips: [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 185, 40, 39, 37, 0, 267, 269, 270, 409, 78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 191, 80, 81, 82, 13, 312, 311, 310, 415]
}

// POIs
export const minimal = {
    rightEye: [33, 145, 159, 133],      // [Outside, Bottom, Top, Inside]
    leftEye: [263, 374, 386, 362],      // [Outside, Bottom, Top, Inside]
    leftIris: [475, 476, 477, 474],     // [N, W, S, E]
    rightIris: [470, 471, 472, 469],
    rightEyebrow: [70, 105, 107],       // [Outside,   Top,    Inside];
    leftEyebrow: [300, 334, 336],       // [Outside,   Top,    Inside];
    nose: [1],
    lips: [61, 0, 13, 14, 17, 291],     // [Left,  UpperLip Top,   UpperLipBottom, LowerLipTop,    LowerLipBottom, Right]
    
    plane: [10, 152, 127, 356],         // [N, S, E, W]
    oval: [10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],

    orientation: [1, 127, 356],               // nose, leftEar, rightEar, forehead, chin
}