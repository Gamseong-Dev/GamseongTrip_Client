import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "dateFont": {
        "fontSize": 13,
        "color": "#999"
    },
    "addressFont": {
        "fontSize": 12,
        "color": "#333"
    },
    "feedFont": {
        "color": "#111",
        "whiteSpace": "pre-line",
        "height": 90
    },
    "likeCountBox": {
        "width": "50%",
        "height": "30%",
        "marginRight": "-5%",
        "marginTop": "-2%"
    },
    "ion-android-pin": {
        "marginTop": "-1%",
        "fontSize": 14
    },
    "ion-side-menu": {
        "width": 20
    }
});