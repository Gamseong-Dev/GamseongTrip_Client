import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
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
    },
    "feedItem": {
        "border": "1px solid #ddd",
        "marginTop": 1.4,
        "backgroundColor": "#fff",
        "color": "#444",
        "position": "relative",
        "zIndex": 2,
        "display": "block",
        "fontSize": 16
    },
    "funcBox": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "height": 2,
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "borderTop": "1px solid #ddd",
        "marginTop": 0.2,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "likeBtn": {
        "display": "flex",
        "color": "#555",
        "fontSize": 12
    },
    "unLikeBtn": {
        "backgroundColor": "#ff7f00",
        "opacity": 0.6,
        "width": 80,
        "height": 15,
        "color": "#555",
        "fontSize": 12,
        "paddingLeft": "2%",
        "paddingRight": "2%"
    },
    "feedIcon": {
        "fontSize": 1.3,
        "marginRight": 0.3
    },
    "feed-content-reply": {
        "display": "flex",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 1.2,
        "paddingBottom": 0,
        "paddingLeft": 1.2,
        "flexDirection": "row",
        "alignItems": "center",
        "borderTop": "1px solid lightgray"
    },
    "feedInfoTop": {
        "display": "flex",
        "flexDirection": "row",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "feedImage": {
        "maxWidth": 40,
        "maxHeight": 40,
        "borderRadius": "50%",
        "marginRight": 0.5
    },
    "replyImage": {
        "maxWidth": 30,
        "maxHeight": 30,
        "borderRadius": "50%",
        "marginRight": 0.5
    },
    "nameParentBox": {
        "width": "100%",
        "display": "flex",
        "justifyContent": "space-between"
    },
    "feedContent": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "width": "100%",
        "minHeight": 50,
        "maxHeight": 300,
        "textOverflow": "ellipsis",
        "overflow": "scroll"
    },
    "replyCont": {
        "display": "flex",
        "flexDirection": "row"
    },
    "replyContent": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "nameFont": {
        "fontSize": 1,
        "fontWeight": "500",
        "color": "#333"
    }
});