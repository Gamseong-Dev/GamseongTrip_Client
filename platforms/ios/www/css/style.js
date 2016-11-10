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
        "position": "relative",
        "borderBottom": "1px solid lightgray"
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
        "fontSize": 1.6,
        "fontWeight": "400"
    },
    "profile-email": {
        "fontSize": 1,
        "fontWeight": "100"
    },
    "profile_Topcont": {
        "width": "100%",
        "height": 100,
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
    "slideBox": {
        "height": 150,
        "width": "100%",
        "bottom": 0,
        "left": 0,
        "top": 0,
        "flexDirection": "column",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "nestedComp": {
        "top": 100,
        "width": "100%",
        "position": "absolute"
    },
    "messageImage": {
        "width": 45,
        "height": 45,
        "borderRadius": "50%",
        "background": "#47a3da",
        "display": "inline-block",
        "marginRight": 10
    },
    "messageCont": {
        "display": "flex",
        "flex": 1,
        "flexDirection": "column"
    },
    "messageTop": {
        "display": "flex",
        "borderBottom": "0.1em solid gray",
        "width": "100%",
        "paddingTop": 0.4,
        "paddingRight": 0,
        "paddingBottom": 0.4,
        "paddingLeft": 0,
        "marginBottom": 1
    },
    "messageInfo": {
        "display": "flex",
        "marginBottom": -0.4
    },
    "messageInfoText": {
        "fontWeight": "700",
        "fontSize": 1,
        "color": "black",
        "marginLeft": 0.3,
        "marginRight": 1
    },
    "messageBox": {
        "width": "100%",
        "height": 20,
        "border": "0.1em dashed gray",
        "borderRadius": "1%"
    },
    "messageSend": {
        "marginTop": 1.5
    },
    "messageSendBar": {
        "background": "gray"
    },
    "slideCont": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between"
    },
    "weekTitle": {
        "borderBottom": "0.1em solid gray",
        "background": "gray",
        "height": 2
    },
    "settingCont": {
        "width": "100%",
        "flexDirection": "column",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "settingTop": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "userImageConf": {
        "width": 7,
        "height": 7,
        "borderRadius": "50%",
        "background": "#47a3da",
        "display": "inline-block"
    },
    "s_input": {
        "background": "#f2f2f2",
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 0.7,
        "paddingRight": 0.7,
        "paddingBottom": 0.7,
        "paddingLeft": 0.7
    },
    "switch": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "border": "none"
    }
});