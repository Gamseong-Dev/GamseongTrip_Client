import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "feedTemp": {
        "display": "flex",
        "flex": 1,
        "flexDirection": "column",
        "marginBottom": 2,
        "border": "0.1em solid gray"
    },
    "feedTempTop": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "borderBottom": "0.1em solid gray",
        "width": "100%",
        "marginBottom": 1,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "infoLineCont": {
        "marginTop": 1
    },
    "infoLine1": {
        "display": "flex",
        "flexDirection": "row",
        "width": "100%"
    },
    "infoLine2": {
        "width": "100%",
        "marginTop": -0.8,
        "color": "gray",
        "fontSize": 0.9
    },
    "moment": {
        "right": 1,
        "position": "absolute"
    }
});