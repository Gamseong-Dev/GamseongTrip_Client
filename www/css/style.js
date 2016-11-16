import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profile-content": {
        "textAlign": "center",
        "height": "45%",
        "width": "100%",
        "position": "relative",
        "borderBottom": "1px solid lightgray",
        "backgroundColor": "#ff7f00",
        "opacity": 0.95,
        "marginTop": "-5%"
    },
    "profile-content-reply": {
        "display": "flex",
        "height": "25%",
        "width": "100%",
        "position": "relative",
        "borderBottom": "1px solid lightgray"
    },
    "feed-content-reply": {
        "display": "flex",
        "height": "10%",
        "width": "100%",
        "position": "relative",
        "paddingLeft": "3%",
        "paddingTop": "3%",
        "paddingBottom": ": 2%",
        "marginTop": "-2%",
        "borderTop": "1px solid lightgray"
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
    "profileUserImage": {
        "marginTop": "20%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "0%",
        "width": 70,
        "height": 70,
        "borderRadius": "50%",
        "background": "#47a3da",
        "display": "inline-block"
    },
    "userInfo": {
        "marginTop": 0.5,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "profile-name": {
        "fontSize": 1,
        "fontWeight": "500",
        "color": "#fff",
        "whiteSpace": "nowrap"
    },
    "profile-email": {
        "fontSize": 0.9,
        "marginTop": "-5%",
        "fontWeight": "500",
        "color": "#fff",
        "whiteSpace": "nowrap"
    },
    "profile_Topcont": {
        "width": "100%",
        "height": "45%",
        "display": "flex",
        "justifyContent": "space-between"
    },
    "panelbody": {
        "width": "100%",
        "height": "auto",
        "display": "flex",
        "justifyContent": "space-between",
        "flexDirection": "column"
    },
    "menupanel": {
        "width": "100%",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "textAlign": "left",
        "display": "inline-block",
        "textDecoration": "none",
        "fontSize": 1.2,
        "fontWeight": "300",
        "borderBottom": "0.1em solid lightgray"
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
    "nestedComp": {
        "width": "100%",
        "position": "absolute"
    },
    "userImageConf": {
        "width": 7,
        "height": 7,
        "borderRadius": "50%",
        "background": "#47a3da",
        "display": "inline-block"
    },
    "simpleHr": {
        "border": 0,
        "height": 1,
        "background": "#ddd"
    },
    "replyHr": {
        "border": 0,
        "width": "100%",
        "height": 1,
        "background": "#ddd"
    }
});