import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profile-content": {
        "display": "flex",
        "flexDirection": "row",
        "height": "30%",
        "width": "100%",
        "position": "relative"
    },
    "userImage": {
        "marginTop": "20%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "20%",
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
    },
    "profile_Topcont": {
        "width": "100%",
        "height": 100,
        "marginTop": 40,
        "position": "absolute",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "profile_Image": {
        "width": "29%",
        "height": 100
    },
    "tabBox": {
        "width": 100,
        "height": 98,
        "textAlign": "center"
    },
    "tabtext": {
        "color": "black"
    },
    "tabtextBold": {
        "fontSize": 30
    },
    "profileTab": {
        "paddingTop": "6%",
        "width": "79%",
        "marginRight": "1%",
        "backgroundColor": "transparent",
        "background": "#fff",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between"
    }
});