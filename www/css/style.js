import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profileCont": {
        "width": "auto",
        "height": "auto",
        "display": "flex",
        "justifyContent": "space-between",
        "flexDirection": "column"
    },
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
        "position": "absolute",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "profile_Image": {
        "height": 100
    },
    "tabBox": {
        "width": 6,
        "height": 5,
        "textAlign": "center",
        "textDecoration": "none"
    },
    "tabtext": {
        "color": "\"black\"  font-size: 0.5em"
    },
    "tabtextBold": {
        "fontSize": 1.8
    },
    "profileTab": {
        "paddingTop": "4%",
        "width": "79%",
        "marginRight": "1%",
        "backgroundColor": "transparent",
        "background": "#fff",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "slide-tab": {
        "display": "table",
        "overflow": "hidden"
    },
    "slide-tab li": {
        "float": "right",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slide-tab a": {
        "color": "#888",
        "fontWeight": "500",
        "display": "block",
        "letterSpacing": 0,
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "textDecoration": "none",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "current a": {
        "color": "#47a3da"
    },
    "slideBox": {
        "height": "80%",
        "width": "100%",
        "bottom": 0,
        "left": 0,
        "top": 0
    },
    "nestedComp": {
        "top": 100,
        "width": "100%",
        "position": "absolute"
    }
});