import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profile-content": {
        "flexDirection": "row",
        "height": "30%",
        "width": "100%",
        "position": "relative"
    },
    "userImage": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 20,
        "width": 60,
        "height": 60,
        "borderRadius": "50%",
        "background": "#47a3da",
        "display": "inline-block"
    },
    "userInfo": {
        "width": 300,
        "height": "100%"
    },
    "profile-name": {
        "fontSize": 1.3
    },
    "profile-email": {
        "fontSize": 1
    }
});