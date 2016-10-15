import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profile": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 20,
        "width": 60,
        "height": 60,
        "borderRadius": "50%",
        "background": "#47a3da"
    },
    "": {
        "flexDirection": "row",
        "height": "30%",
        "position": "relative"
    },
    "profile-content": {
        "flexDirection": "row",
        "height": "30%",
        "position": "relative"
    },
    "profile-name": {
        "fontSize": 1.8
    },
    "profile-email": {
        "fontSize": 1.2
    }
});