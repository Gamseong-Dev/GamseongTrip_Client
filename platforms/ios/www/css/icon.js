import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "iconion-ios-bell": {
        "fontSize": "30px !important"
    },
    "iconion-home": {
        "fontSize": "30px !important"
    },
    "iconion-android-mail": {
        "fontSize": "30px !important"
    },
    "iconion-ios-search-strong": {
        "fontSize": "30px !important"
    },
    "iconion-ios-home-outline": {
        "fontSize": "20px !important"
    },
    "iconion-thumbsup": {
        "fontSize": "20px !important"
    },
    "iconion-search": {
        "fontSize": "20px !important"
    },
    "iconion-gear-a": {
        "fontSize": "20px !important"
    },
    "iconion-android-exit": {
        "fontSize": "20px !important"
    },
    "ion-ios-heart": {
        "color": "#ff7f00"
    },
    "ion-camera": {
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3,
        "fontSize": 30
    }
});