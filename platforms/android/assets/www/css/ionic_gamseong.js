import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "tabs-color-gamseong tab-item": {
        "color": "rgba(130, 130, 130, 0.4)",
        "opacity": 1
    },
    "tabs-color-gamseong tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-gamseong tab-itemtab-item-active": {
        "color": "#ff7f00",
        "border": "0 solid  #ff7f00"
    },
    "tabs-color-gamseong tab-itemactive": {
        "color": "#ff7f00",
        "border": "0 solid  #ff7f00"
    },
    "tabs-color-gamseong tab-itemactivated": {
        "color": "#ff7f00",
        "border": "0 solid  #ff7f00"
    },
    "tabs-color-gamseong tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-gamseong tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-gamseong tab-itemactivated badge": {
        "opacity": 1
    },
    "barbar-stable": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#ff7f00",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#444"
    },
    "barbar-stable title": {
        "color": "#fff"
    },
    "barbar-stablebar-footer": {
        "backgroundImage": "linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%)"
    },
    "bar-stable button": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "color": "#fff"
    },
    "bar-stable button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-stable buttonactive": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "bar-stable buttonactivated": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "bar-stable buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-stable buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "tabs": {
        "display": "flex",
        "WebkitBoxDirection": "normal",
        "WebkitBoxOrient": "horizontal",
        "WebkitFlexDirection": "horizontal",
        "MozFlexDirection": "horizontal",
        "MsFlexDirection": "horizontal",
        "flexDirection": "horizontal",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "WebkitJustifyContent": "center",
        "MozJustifyContent": "center",
        "justifyContent": "center",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "borderColor": "#fff",
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#fff",
        "position": "absolute",
        "bottom": 0,
        "zIndex": 5,
        "width": "100%",
        "height": 49,
        "borderTop": "none !important",
        "borderStyle": "solid",
        "borderTopWidth": 0,
        "backgroundSize": 0,
        "lineHeight": 49
    },
    "tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#fff"
    },
    "toggle": {
        "position": "relative",
        "display": "inline-block",
        "pointerEvents": "auto",
        "marginTop": -5,
        "marginRight": -5,
        "marginBottom": -5,
        "marginLeft": -5,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "toggle input:checked + track": {
        "borderColor": "#ff7f00",
        "backgroundColor": "#ff7f00"
    },
    "toggledragging handle": {
        "backgroundColor": "#f2f2f2 !important"
    },
    "toggle-small input:checked + track handle": {
        "WebkitTransform": "translate3d(16px, 0, 0)",
        "transform": "translate3d(16px, 0, 0)",
        "background": "#ff7f00"
    },
    "bar-footer": {
        "bottom": 0,
        "borderTopWidth": 1,
        "borderBottomWidth": 0,
        "backgroundPosition": "top",
        "height": 60
    }
});