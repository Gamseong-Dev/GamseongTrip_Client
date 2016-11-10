import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ion": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "ionicons": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "ion-alert:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-alert-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-add:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-add-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-alarm-clock:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-alert:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-apps:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-archive:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-back:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-down:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropdown:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropdown-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropleft:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropleft-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropright:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropright-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropup:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-dropup-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-forward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-arrow-up:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-attach:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-bar:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-bicycle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-boat:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-bookmark:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-bulb:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-bus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-calendar:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-call:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-camera:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cancel:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-car:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cart:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-chat:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-checkbox:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-checkbox-blank:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-checkbox-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-checkbox-outline-blank:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-checkmark-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-clipboard:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-close:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cloud:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cloud-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cloud-done:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-cloud-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-color-palette:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-compass:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-contact:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-contacts:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-contract:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-create:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-delete:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-desktop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-document:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-done:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-done-all:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-download:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-drafts:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-exit:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-expand:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-favorite:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-favorite-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-film:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-folder:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-folder-open:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-funnel:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-globe:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-hand:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-hangout:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-happy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-home:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-image:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-laptop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-list:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-locate:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-lock:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-mail:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-map:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-menu:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-microphone:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-microphone-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-more-horizontal:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-more-vertical:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-navigate:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-notifications:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-notifications-none:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-notifications-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-open:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-options:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-people:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-person:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-person-add:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-phone-landscape:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-phone-portrait:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-pin:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-plane:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-playstore:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-print:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-radio-button-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-radio-button-on:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-refresh:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-remove:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-remove-circle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-restaurant:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-sad:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-search:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-send:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-settings:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-share:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-share-alt:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-star:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-star-half:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-star-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-stopwatch:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-subway:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-sunny:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-sync:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-textsms:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-time:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-train:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-unlock:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-upload:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-volume-down:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-volume-mute:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-volume-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-volume-up:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-walk:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-warning:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-watch:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-android-wifi:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-aperture:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-archive:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-down-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-down-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-down-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-expand:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-graph-down-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-graph-down-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-graph-up-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-graph-up-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-left-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-left-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-left-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-move:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-resize:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-return-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-return-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-right-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-right-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-right-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-shrink:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-swap:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-up-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-up-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-arrow-up-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-asterisk:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-at:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-backspace:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-backspace-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-battery-charging:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-battery-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-battery-full:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-battery-half:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-battery-low:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-beaker:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-beer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bluetooth:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bonfire:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bookmark:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bowtie:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-briefcase:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-bug:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-calculator:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-calendar:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-camera:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-card:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-cash:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatbox:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatbox-working:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatboxes:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatbubble:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatbubble-working:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chatbubbles:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-checkmark:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-checkmark-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-checkmark-round:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chevron-down:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chevron-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chevron-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-chevron-up:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-clipboard:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-clock:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-close:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-close-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-close-round:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-closed-captioning:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-cloud:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-code:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-code-download:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-code-working:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-coffee:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-compass:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-compose:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-connection-bars:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-contrast:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-crop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-cube:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-disc:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-document:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-document-text:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-drag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-earth:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-easel:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-edit:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-egg:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-eject:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-email:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-email-unread:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-erlenmeyer-flask:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-erlenmeyer-flask-bubbles:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-eye:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-eye-disabled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-female:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-filing:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-film-marker:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-fireball:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-flag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-flame:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-flash:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-flash-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-folder:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-fork:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-fork-repo:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-forward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-funnel:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-gear-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-gear-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-grid:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-hammer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-happy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-happy-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-headphone:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-heart:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-heart-broken:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-help:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-help-buoy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-help-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-home:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-icecream:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-image:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-images:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-information:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-information-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ionic:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-alarm:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-alarm-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-albums:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-albums-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-americanfootball:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-americanfootball-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-analytics:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-analytics-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-back:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-down:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-forward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-thin-down:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-thin-left:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-thin-right:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-thin-up:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-arrow-up:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-at:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-at-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-barcode:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-barcode-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-baseball:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-baseball-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-basketball:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-basketball-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bell:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bell-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-body:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-body-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bolt:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bolt-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-book:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-book-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bookmarks:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-bookmarks-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-box:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-box-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-briefcase:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-briefcase-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-browsers:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-browsers-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-calculator:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-calculator-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-calendar:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-calendar-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-camera:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-camera-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cart:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cart-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-chatboxes:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-chatboxes-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-chatbubble:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-chatbubble-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-checkmark:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-checkmark-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-checkmark-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-circle-filled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-circle-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-clock:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-clock-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-close:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-close-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-close-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud-download:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud-download-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud-upload:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloud-upload-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloudy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloudy-night:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloudy-night-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cloudy-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cog:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-cog-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-color-filter:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-color-filter-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-color-wand:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-color-wand-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-compose:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-compose-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-contact:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-contact-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-copy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-copy-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-crop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-crop-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-download:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-download-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-drag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-email:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-email-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-eye:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-eye-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-fastforward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-fastforward-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-filing:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-filing-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-film:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-film-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flag-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flame:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flame-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flask:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flask-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flower:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-flower-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-folder:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-folder-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-football:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-football-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-game-controller-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-game-controller-a-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-game-controller-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-game-controller-b-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-gear:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-gear-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-glasses:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-glasses-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-grid-view:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-grid-view-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-heart:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-heart-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-help:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-help-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-help-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-home:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-home-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-infinite:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-infinite-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-information:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-information-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-information-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-ionic-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-keypad:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-keypad-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-lightbulb:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-lightbulb-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-list:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-list-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-location:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-location-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-locked:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-locked-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-loop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-loop-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-medical:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-medical-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-medkit:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-medkit-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-mic:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-mic-off:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-mic-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-minus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-minus-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-minus-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-monitor:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-monitor-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-moon:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-moon-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-more:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-more-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-musical-note:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-musical-notes:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-navigate:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-navigate-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-nutrition:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-nutrition-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paper:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paper-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paperplane:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paperplane-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-partlysunny:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-partlysunny-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pause:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pause-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paw:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-paw-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-people:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-people-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-person:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-person-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-personadd:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-personadd-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-photos:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-photos-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pie:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pie-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pint:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pint-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-play:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-play-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-plus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-plus-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-plus-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pricetag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pricetag-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pricetags:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pricetags-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-printer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-printer-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pulse:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-pulse-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rainy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rainy-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-recording:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-recording-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-redo:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-redo-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-refresh:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-refresh-empty:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-refresh-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-reload:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-reverse-camera:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-reverse-camera-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rewind:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rewind-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rose:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-rose-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-search:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-search-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-settings:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-settings-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-shuffle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-shuffle-strong:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-skipbackward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-skipbackward-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-skipforward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-skipforward-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-snowy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-speedometer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-speedometer-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-star:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-star-half:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-star-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-stopwatch:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-stopwatch-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-sunny:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-sunny-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-telephone:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-telephone-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-tennisball:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-tennisball-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-thunderstorm:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-thunderstorm-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-time:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-time-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-timer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-timer-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-toggle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-toggle-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-trash:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-trash-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-undo:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-undo-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-unlocked:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-unlocked-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-upload:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-upload-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-videocam:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-videocam-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-volume-high:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-volume-low:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-wineglass:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-wineglass-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-world:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ios-world-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ipad:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-iphone:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ipod:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-jet:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-key:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-knife:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-laptop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-leaf:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-levels:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-lightbulb:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-link:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-load-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-load-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-load-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-load-d:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-location:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-lock-combination:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-locked:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-log-in:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-log-out:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-loop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-magnet:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-male:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-man:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-map:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-medkit:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-merge:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-mic-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-mic-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-mic-c:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-minus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-minus-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-minus-round:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-model-s:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-monitor:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-more:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-mouse:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-music-note:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-navicon:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-navicon-round:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-navigate:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-network:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-no-smoking:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-nuclear:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-outlet:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-paintbrush:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-paintbucket:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-paper-airplane:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-paperclip:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pause:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-person:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-person-add:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-person-stalker:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pie-graph:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pin:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pinpoint:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pizza:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-plane:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-planet:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-play:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-playstation:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-plus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-plus-circled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-plus-round:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-podium:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pound:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-power:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pricetag:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pricetags:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-printer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-pull-request:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-qr-scanner:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-quote:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-radio-waves:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-record:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-refresh:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-reply:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-reply-all:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ribbon-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-ribbon-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-sad:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-sad-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-scissors:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-search:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-settings:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-share:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-shuffle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-skip-backward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-skip-forward:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-android:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-android-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-angular:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-angular-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-apple:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-apple-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-bitcoin:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-bitcoin-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-buffer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-buffer-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-chrome:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-chrome-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-codepen:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-codepen-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-css3:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-css3-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-designernews:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-designernews-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-dribbble:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-dribbble-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-dropbox:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-dropbox-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-euro:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-euro-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-facebook:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-facebook-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-foursquare:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-foursquare-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-freebsd-devil:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-github:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-github-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-google:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-google-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-googleplus:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-googleplus-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-hackernews:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-hackernews-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-html5:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-html5-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-instagram:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-instagram-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-javascript:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-javascript-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-linkedin:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-linkedin-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-markdown:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-nodejs:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-octocat:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-pinterest:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-pinterest-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-python:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-reddit:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-reddit-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-rss:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-rss-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-sass:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-skype:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-skype-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-snapchat:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-snapchat-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-tumblr:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-tumblr-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-tux:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-twitch:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-twitch-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-twitter:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-twitter-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-usd:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-usd-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-vimeo:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-vimeo-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-whatsapp:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-whatsapp-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-windows:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-windows-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-wordpress:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-wordpress-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-yahoo:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-yahoo-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-yen:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-yen-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-youtube:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-social-youtube-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-soup-can:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-soup-can-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-speakerphone:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-speedometer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-spoon:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-star:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-stats-bars:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-steam:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-stop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-thermometer:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-thumbsdown:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-thumbsup:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-toggle:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-toggle-filled:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-transgender:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-trash-a:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-trash-b:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-trophy:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-tshirt:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-tshirt-outline:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-umbrella:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-university:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-unlocked:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-upload:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-usb:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-videocamera:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-volume-high:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-volume-low:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-volume-medium:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-volume-mute:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-wand:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-waterdrop:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-wifi:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-wineglass:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-woman:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-wrench:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "ion-xbox:before": {
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "content": ""
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "fontFamily": "sans-serif",
        "WebkitTextSizeAdjust": "100%",
        "MsTextSizeAdjust": "100%",
        "overflow": "hidden",
        "MsTouchAction": "pan-y",
        "touchAction": "pan-y"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 14,
        "lineHeight": 20,
        "WebkitTouchCallout": "none",
        "WebkitFontSmoothing": "antialiased",
        "fontSmoothing": "antialiased",
        "WebkitTextSizeAdjust": "none",
        "MozTextSizeAdjust": "none",
        "textSizeAdjust": "none",
        "WebkitTapHighlightColor": "transparent",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "overflow": "hidden",
        "color": "#000",
        "wordWrap": "break-word",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "textRendering": "optimizeLegibility",
        "WebkitBackfaceVisibility": "hidden",
        "WebkitUserDrag": "none",
        "MsContentZooming": "none"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "h1": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 36,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "h2": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 30,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "h3": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 24,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "h4": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 18,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "h5": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 14,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "h6": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 12,
        "color": "#000",
        "fontWeight": "500",
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 1.2
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "quotes": "none",
        "borderLeft": "5px solid gray"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 1,
        "fontFamily": "monospace, serif",
        "whiteSpace": "pre-wrap"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "outline": 0,
        "WebkitUserDrag": "none",
        "WebkitTapHighlightColor": "transparent",
        "color": "#387ef5"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "display": "block",
        "fontStyle": "normal",
        "lineHeight": 1.42857
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "fontStyle": "normal"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 1,
        "fontFamily": "monospace, serif"
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "fontStyle": "italic"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "WebkitUserDrag": "none"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 1,
        "fontFamily": "monospace, serif"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "quotes": "\\201C\" \"\\201D\" \"\\2018\" \"\\2019"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": 1,
        "fontFamily": "monospace, serif"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "85%"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "fontWeight": "bold"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "75%",
        "position": "relative",
        "lineHeight": 0,
        "bottom": -0.25
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "75%",
        "position": "relative",
        "lineHeight": 0,
        "top": -0.5
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "fontWeight": "bold"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "center": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "lineHeight": 1.42857,
        "fontWeight": "bold"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "lineHeight": 1.42857
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "listStyle": "none"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "listStyle": "none"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625,
        "border": "1px solid #c0c0c0",
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "borderSpacing": 0,
        "borderCollapse": "collapse"
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "zIndex": 0,
        "overflow": "hidden",
        "minHeight": "100%",
        "maxHeight": "100%",
        "width": 275,
        "backgroundColor": "#fff"
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "verticalAlign": "baseline",
        "font": "inherit",
        "fontSize": "100%"
    },
    "blockquote:before": {
        "content": ""
    },
    "blockquote:after": {
        "content": ""
    },
    "q:before": {
        "content": ""
    },
    "q:after": {
        "content": ""
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "script": {
        "display": "none !important"
    },
    "button": {
        "outline": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontFamily": "inherit",
        "outlineOffset": 0,
        "outlineStyle": "none",
        "outlineWidth": 0,
        "WebkitFontSmoothing": "inherit",
        "backgroundImage": "none",
        "lineHeight": "normal",
        "textTransform": "none",
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    ":focus": {
        "outline": 0
    },
    "a:focus": {
        "outline": 0
    },
    "button:focus": {
        "outline": 0
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0
    },
    "a[href]:hover": {
        "cursor": "pointer"
    },
    "hr": {
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "height": 0
    },
    "input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontFamily": "inherit",
        "outlineOffset": 0,
        "outlineStyle": "none",
        "outlineWidth": 0,
        "WebkitFontSmoothing": "inherit",
        "backgroundImage": "none",
        "lineHeight": "normal"
    },
    "select": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontFamily": "inherit",
        "outlineOffset": 0,
        "outlineStyle": "none",
        "outlineWidth": 0,
        "WebkitFontSmoothing": "inherit",
        "backgroundImage": "none",
        "textTransform": "none"
    },
    "textarea": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontFamily": "inherit",
        "outlineOffset": 0,
        "outlineStyle": "none",
        "outlineWidth": 0,
        "WebkitFontSmoothing": "inherit",
        "backgroundImage": "none",
        "overflow": "auto",
        "verticalAlign": "top"
    },
    "html input[type=\"button\"]": {
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=\"reset\"]": {
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=\"submit\"]": {
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "input[type=\"search\"]": {
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "WebkitAppearance": "textfield"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "ionic-body": {
        "WebkitTouchCallout": "none",
        "WebkitFontSmoothing": "antialiased",
        "fontSmoothing": "antialiased",
        "WebkitTextSizeAdjust": "none",
        "MozTextSizeAdjust": "none",
        "textSizeAdjust": "none",
        "WebkitTapHighlightColor": "transparent",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "overflow": "hidden",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#000",
        "wordWrap": "break-word",
        "fontSize": 14,
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "lineHeight": 20,
        "textRendering": "optimizeLegibility",
        "WebkitBackfaceVisibility": "hidden",
        "WebkitUserDrag": "none",
        "MsContentZooming": "none"
    },
    "bodygrade-b": {
        "textRendering": "auto"
    },
    "bodygrade-c": {
        "textRendering": "auto"
    },
    "content": {
        "position": "relative"
    },
    "scroll-content": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "overflow": "hidden",
        "marginTop": -1,
        "paddingTop": 1,
        "marginBottom": -1,
        "width": "auto",
        "height": "auto"
    },
    "menu scroll-contentscroll-content-false": {
        "zIndex": 11
    },
    "scroll-view": {
        "position": "relative",
        "display": "block",
        "overflow": "hidden",
        "marginTop": -1
    },
    "scroll-viewoverflow-scroll": {
        "position": "relative"
    },
    "scroll-viewscroll-x": {
        "overflowX": "scroll",
        "overflowY": "hidden"
    },
    "scroll-viewscroll-y": {
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "scroll-viewscroll-xy": {
        "overflowX": "scroll",
        "overflowY": "scroll"
    },
    "scroll": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "WebkitTouchCallout": "none",
        "WebkitTextSizeAdjust": "none",
        "MozTextSizeAdjust": "none",
        "textSizeAdjust": "none",
        "WebkitTransformOrigin": "left top",
        "transformOrigin": "left top"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "scroll-bar": {
        "position": "absolute",
        "zIndex": 9999
    },
    "ng-animate scroll-bar": {
        "visibility": "hidden"
    },
    "scroll-bar-h": {
        "right": 2,
        "bottom": 3,
        "left": 2,
        "height": 3
    },
    "scroll-bar-h scroll-bar-indicator": {
        "height": "100%"
    },
    "scroll-bar-v": {
        "top": 2,
        "right": 3,
        "bottom": 2,
        "width": 3
    },
    "scroll-bar-v scroll-bar-indicator": {
        "width": "100%"
    },
    "scroll-bar-indicator": {
        "position": "absolute",
        "borderRadius": 4,
        "background": "rgba(0, 0, 0, 0.3)",
        "opacity": 1,
        "WebkitTransition": "opacity 0.3s linear",
        "transition": "opacity 0.3s linear"
    },
    "scroll-bar-indicatorscroll-bar-fade-out": {
        "opacity": 0
    },
    "platform-android scroll-bar-indicator": {
        "borderRadius": 0
    },
    "grade-b scroll-bar-indicator": {
        "background": "#aaa"
    },
    "grade-c scroll-bar-indicator": {
        "background": "#aaa"
    },
    "grade-b scroll-bar-indicatorscroll-bar-fade-out": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "grade-c scroll-bar-indicatorscroll-bar-fade-out": {
        "WebkitTransition": "none",
        "transition": "none"
    },
    "ion-infinite-scroll": {
        "height": 60,
        "width": "100%",
        "display": "flex",
        "WebkitBoxDirection": "normal",
        "WebkitBoxOrient": "horizontal",
        "WebkitFlexDirection": "row",
        "MozFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "WebkitJustifyContent": "center",
        "MozJustifyContent": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center"
    },
    "ion-infinite-scroll icon": {
        "color": "#666666",
        "fontSize": 30
    },
    "ion-infinite-scroll:not(active) spinner": {
        "display": "none"
    },
    "ion-infinite-scroll:not(active) icon:before": {
        "display": "none"
    },
    "overflow-scroll": {
        "overflowX": "hidden",
        "overflowY": "scroll",
        "WebkitOverflowScrolling": "touch",
        "MsOverflowStyle": "-ms-autohiding-scrollbar",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "position": "absolute"
    },
    "overflow-scrollpane": {
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "overflow-scroll scroll": {
        "position": "static",
        "height": "100%",
        "WebkitTransform": "translate3d(0, 0, 0)"
    },
    "has-header": {
        "top": 44
    },
    "no-header": {
        "top": 0
    },
    "has-subheader": {
        "top": 88
    },
    "has-tabs-top": {
        "top": 93
    },
    "has-headerhas-subheaderhas-tabs-top": {
        "top": 137
    },
    "has-footer": {
        "bottom": 44
    },
    "has-subfooter": {
        "bottom": 88
    },
    "has-tabs": {
        "bottom": 49
    },
    "bar-footerhas-tabs": {
        "bottom": 49
    },
    "has-tabspane": {
        "bottom": 49,
        "height": "auto"
    },
    "bar-footerhas-tabspane": {
        "bottom": 49,
        "height": "auto"
    },
    "bar-subfooterhas-tabs": {
        "bottom": 93
    },
    "has-footerhas-tabs": {
        "bottom": 93
    },
    "pane": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "WebkitTransitionDuration": 0,
        "transitionDuration": 0,
        "zIndex": 1,
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#fff",
        "overflow": "hidden"
    },
    "view": {
        "zIndex": 1,
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#fff",
        "overflow": "hidden"
    },
    "view-container": {
        "position": "absolute",
        "display": "block",
        "width": "100%",
        "height": "100%"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "h1 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "fontSize": 24
    },
    "h2 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "fontSize": 18
    },
    "h3 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "fontSize": 14
    },
    "h4 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "fontSize": 14
    },
    "h5 small": {
        "fontWeight": "normal",
        "lineHeight": 1
    },
    "h6 small": {
        "fontWeight": "normal",
        "lineHeight": 1
    },
    "h1:first-child": {
        "marginTop": 0
    },
    "h2:first-child": {
        "marginTop": 0
    },
    "h3:first-child": {
        "marginTop": 0
    },
    "h1 + h1": {
        "marginTop": 10
    },
    "h1 + h2": {
        "marginTop": 10
    },
    "h1 + h3": {
        "marginTop": 10
    },
    "h2 + h1": {
        "marginTop": 10
    },
    "h2 + h2": {
        "marginTop": 10
    },
    "h2 + h3": {
        "marginTop": 10
    },
    "h3 + h1": {
        "marginTop": 10
    },
    "h3 + h2": {
        "marginTop": 10
    },
    "h3 + h3": {
        "marginTop": 10
    },
    "blockquote p": {
        "fontWeight": "300",
        "fontSize": 17.5,
        "lineHeight": 1.25
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote small": {
        "display": "block",
        "lineHeight": 1.42857
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "asubdued": {
        "paddingRight": 10,
        "color": "#888",
        "textDecoration": "none"
    },
    "asubdued:hover": {
        "textDecoration": "none"
    },
    "asubdued:last-child": {
        "paddingRight": 0
    },
    "action-sheet-backdrop": {
        "WebkitTransition": "background-color 150ms ease-in-out",
        "transition": "background-color 150ms ease-in-out",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 11,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "transparent"
    },
    "action-sheet-backdropactive": {
        "backgroundColor": "rgba(0, 0, 0, 0.4)"
    },
    "action-sheet-wrapper": {
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)",
        "WebkitTransition": "all cubic-bezier(0.36, 0.66, 0.04, 1) 500ms",
        "transition": "all cubic-bezier(0.36, 0.66, 0.04, 1) 500ms",
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "width": "100%",
        "maxWidth": 500,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "action-sheet-up": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "action-sheet": {
        "marginLeft": 8,
        "marginRight": 8,
        "width": "auto",
        "zIndex": 11,
        "overflow": "hidden"
    },
    "action-sheet button": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "width": "100%",
        "borderRadius": 0,
        "borderColor": "#d1d3d6",
        "backgroundColor": "transparent",
        "color": "#007aff",
        "fontSize": 21
    },
    "action-sheet button:hover": {
        "color": "#007aff"
    },
    "action-sheet buttondestructive": {
        "color": "#ff3b30"
    },
    "action-sheet buttondestructive:hover": {
        "color": "#ff3b30"
    },
    "action-sheet buttonactive": {
        "boxShadow": "none",
        "borderColor": "#d1d3d6",
        "color": "#007aff",
        "background": "#e4e5e7"
    },
    "action-sheet buttonactivated": {
        "boxShadow": "none",
        "borderColor": "#d1d3d6",
        "color": "#007aff",
        "background": "#e4e5e7"
    },
    "action-sheet-has-icons icon": {
        "position": "absolute",
        "left": 16
    },
    "action-sheet-title": {
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "color": "#8f8f8f",
        "textAlign": "center",
        "fontSize": 13
    },
    "action-sheet-group": {
        "marginBottom": 8,
        "borderRadius": 4,
        "backgroundColor": "#fff",
        "overflow": "hidden"
    },
    "action-sheet-group button": {
        "borderWidth": "1px 0px 0px 0px"
    },
    "action-sheet-group button:first-child:last-child": {
        "borderWidth": 0
    },
    "action-sheet-options": {
        "background": "#f1f2f3"
    },
    "action-sheet-cancel button": {
        "fontWeight": "500"
    },
    "action-sheet-open": {
        "pointerEvents": "none"
    },
    "action-sheet-openmodal-open modal": {
        "pointerEvents": "none"
    },
    "action-sheet-open action-sheet-backdrop": {
        "pointerEvents": "auto"
    },
    "platform-android action-sheet-backdropactive": {
        "backgroundColor": "rgba(0, 0, 0, 0.2)"
    },
    "platform-android action-sheet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "platform-android action-sheet action-sheet-title": {
        "textAlign": "left",
        "borderColor": "transparent",
        "fontSize": 14,
        "color": "#666",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    },
    "platform-android action-sheet button": {
        "textAlign": "left",
        "borderColor": "transparent",
        "fontSize": 16,
        "color": "inherit"
    },
    "platform-android action-sheet buttonactive": {
        "background": "#e8e8e8"
    },
    "platform-android action-sheet buttonactivated": {
        "background": "#e8e8e8"
    },
    "platform-android action-sheet-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderRadius": 0,
        "backgroundColor": "#fafafa"
    },
    "platform-android action-sheet-cancel": {
        "display": "none"
    },
    "platform-android action-sheet-has-icons button": {
        "paddingLeft": 56
    },
    "backdrop": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 11,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.4)",
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransition": "0.1s opacity linear",
        "transition": "0.1s opacity linear"
    },
    "backdropvisible": {
        "visibility": "visible"
    },
    "backdropactive": {
        "opacity": 1
    },
    "bar": {
        "display": "flex",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "position": "absolute",
        "right": 0,
        "left": 0,
        "zIndex": 9,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "width": "100%",
        "height": 44,
        "borderWidth": 0,
        "borderStyle": "solid",
        "borderTop": "1px solid transparent",
        "borderBottom": "1px solid #ddd",
        "backgroundColor": "white",
        "backgroundSize": 0
    },
    "barbar-clear": {
        "border": "none",
        "background": "none",
        "color": "#fff"
    },
    "barbar-clear button": {
        "color": "#fff"
    },
    "barbar-clear title": {
        "color": "#fff"
    },
    "baritem-input-inset item-input-wrapper": {
        "marginTop": -1
    },
    "baritem-input-inset item-input-wrapper input": {
        "paddingLeft": 8,
        "width": "94%",
        "height": 28,
        "background": "transparent"
    },
    "barbar-light": {
        "borderColor": "#ddd",
        "backgroundColor": "white",
        "backgroundImage": "linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%)",
        "color": "#444"
    },
    "barbar-light title": {
        "color": "#444"
    },
    "barbar-lightbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)"
    },
    "barbar-stable": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#444"
    },
    "barbar-stable title": {
        "color": "#444"
    },
    "barbar-stablebar-footer": {
        "backgroundImage": "linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%)"
    },
    "barbar-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "backgroundImage": "linear-gradient(0deg, #0c60ee, #0c60ee 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-positive title": {
        "color": "#fff"
    },
    "barbar-positivebar-footer": {
        "backgroundImage": "linear-gradient(180deg, #0c60ee, #0c60ee 50%, transparent 50%)"
    },
    "barbar-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "backgroundImage": "linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-calm title": {
        "color": "#fff"
    },
    "barbar-calmbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #0a9dc7, #0a9dc7 50%, transparent 50%)"
    },
    "barbar-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "backgroundImage": "linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-assertive title": {
        "color": "#fff"
    },
    "barbar-assertivebar-footer": {
        "backgroundImage": "linear-gradient(180deg, #e42112, #e42112 50%, transparent 50%)"
    },
    "barbar-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "backgroundImage": "linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-balanced title": {
        "color": "#fff"
    },
    "barbar-balancedbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #28a54c, #28a54c 50%, transparent 50%)"
    },
    "barbar-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "backgroundImage": "linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-energized title": {
        "color": "#fff"
    },
    "barbar-energizedbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #e6b500, #e6b500 50%, transparent 50%)"
    },
    "barbar-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "backgroundImage": "linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-royal title": {
        "color": "#fff"
    },
    "barbar-royalbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #6b46e5, #6b46e5 50%, transparent 50%)"
    },
    "barbar-dark": {
        "borderColor": "#111",
        "backgroundColor": "#444444",
        "backgroundImage": "linear-gradient(0deg, #111, #111 50%, transparent 50%)",
        "color": "#fff"
    },
    "barbar-dark title": {
        "color": "#fff"
    },
    "barbar-darkbar-footer": {
        "backgroundImage": "linear-gradient(180deg, #111, #111 50%, transparent 50%)"
    },
    "bar title": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "left": 0,
        "zIndex": 0,
        "overflow": "hidden",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "minWidth": 30,
        "height": 43,
        "textAlign": "center",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "fontSize": 17,
        "fontWeight": "500",
        "lineHeight": 44
    },
    "bar titletitle-left": {
        "textAlign": "left"
    },
    "bar titletitle-right": {
        "textAlign": "right"
    },
    "bar title a": {
        "color": "inherit"
    },
    "bar button": {
        "zIndex": 1,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "minWidth": "initial",
        "minHeight": 31,
        "fontWeight": "400",
        "fontSize": 13,
        "lineHeight": 32
    },
    "bar buttonbutton-icon:before": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontSize": 32,
        "lineHeight": 32,
        "verticalAlign": "top"
    },
    "bar button icon:before": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontSize": 20,
        "lineHeight": 32
    },
    "bar buttonicon:before": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontSize": 20,
        "lineHeight": 32
    },
    "bar buttonicon-left:before": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontSize": 20,
        "lineHeight": 32
    },
    "bar buttonicon-right:before": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontSize": 20,
        "lineHeight": 32
    },
    "bar buttonbutton-icon": {
        "fontSize": 17
    },
    "bar buttonbutton-icon icon:before": {
        "verticalAlign": "top",
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-iconicon-left:before": {
        "verticalAlign": "top",
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-iconicon-right:before": {
        "verticalAlign": "top",
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-clear": {
        "paddingRight": 2,
        "paddingLeft": 2,
        "fontWeight": "300",
        "fontSize": 17
    },
    "bar buttonbutton-clear icon:before": {
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-clearicon:before": {
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-clearicon-left:before": {
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonbutton-clearicon-right:before": {
        "fontSize": 32,
        "lineHeight": 32
    },
    "bar buttonback-button": {
        "display": "block",
        "marginRight": 5,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap",
        "fontWeight": "400"
    },
    "bar buttonback-buttonactive": {
        "opacity": 0.2
    },
    "bar buttonback-buttonactivated": {
        "opacity": 0.2
    },
    "bar button-bar > button": {
        "minHeight": 31,
        "lineHeight": 32
    },
    "bar buttons > button": {
        "minHeight": 31,
        "lineHeight": 32
    },
    "bar button-bar + button": {
        "marginLeft": 5
    },
    "bar button + button-bar": {
        "marginLeft": 5
    },
    "bar buttons": {
        "display": "inherit"
    },
    "bar buttonsprimary-buttons": {
        "display": "inherit"
    },
    "bar buttonssecondary-buttons": {
        "display": "inherit"
    },
    "bar buttons span": {
        "display": "inline-block"
    },
    "bar buttons-left span": {
        "marginRight": 5,
        "display": "inherit"
    },
    "bar buttons-right span": {
        "marginLeft": 5,
        "display": "inherit"
    },
    "bar title + button:last-child": {
        "position": "absolute",
        "top": 5,
        "right": 5,
        "bottom": 5
    },
    "bar > button + button:last-child": {
        "position": "absolute",
        "top": 5,
        "right": 5,
        "bottom": 5
    },
    "bar > buttonpull-right": {
        "position": "absolute",
        "top": 5,
        "right": 5,
        "bottom": 5
    },
    "bar buttonspull-right": {
        "position": "absolute",
        "top": 5,
        "right": 5,
        "bottom": 5
    },
    "bar title + buttons": {
        "position": "absolute",
        "top": 5,
        "right": 5,
        "bottom": 5
    },
    "platform-android nav-bar-has-subheader bar": {
        "backgroundImage": "none"
    },
    "platform-android bar back-button icon:before": {
        "fontSize": 24
    },
    "platform-android bar title": {
        "fontSize": 19,
        "lineHeight": 44
    },
    "bar-light button": {
        "borderColor": "#ddd",
        "backgroundColor": "white",
        "color": "#444"
    },
    "bar-light button:hover": {
        "color": "#444",
        "textDecoration": "none"
    },
    "bar-light buttonactive": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "bar-light buttonactivated": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "bar-light buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#444",
        "fontSize": 17
    },
    "bar-light buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-stable button": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "color": "#444"
    },
    "bar-stable button:hover": {
        "color": "#444",
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
        "color": "#444",
        "fontSize": 17
    },
    "bar-stable buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-positive button": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "color": "#fff"
    },
    "bar-positive button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-positive buttonactive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "bar-positive buttonactivated": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "bar-positive buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-positive buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-calm button": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "color": "#fff"
    },
    "bar-calm button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-calm buttonactive": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "bar-calm buttonactivated": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "bar-calm buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-calm buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-assertive button": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "color": "#fff"
    },
    "bar-assertive button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-assertive buttonactive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "bar-assertive buttonactivated": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "bar-assertive buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-assertive buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-balanced button": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "color": "#fff"
    },
    "bar-balanced button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-balanced buttonactive": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "bar-balanced buttonactivated": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "bar-balanced buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-balanced buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-energized button": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "color": "#fff"
    },
    "bar-energized button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-energized buttonactive": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "bar-energized buttonactivated": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "bar-energized buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-energized buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-royal button": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "color": "#fff"
    },
    "bar-royal button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-royal buttonactive": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "bar-royal buttonactivated": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "bar-royal buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-royal buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-dark button": {
        "borderColor": "#111",
        "backgroundColor": "#444444",
        "color": "#fff"
    },
    "bar-dark button:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "bar-dark buttonactive": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "bar-dark buttonactivated": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "bar-dark buttonbutton-clear": {
        "borderColor": "transparent",
        "background": "none",
        "boxShadow": "none",
        "color": "#fff",
        "fontSize": 17
    },
    "bar-dark buttonbutton-icon": {
        "borderColor": "transparent",
        "background": "none"
    },
    "bar-header": {
        "top": 0,
        "borderTopWidth": 0,
        "borderBottomWidth": 1
    },
    "bar-headerhas-tabs-top": {
        "borderBottomWidth": 0,
        "backgroundImage": "none"
    },
    "tabs-top bar-header": {
        "borderBottomWidth": 0,
        "backgroundImage": "none"
    },
    "bar-footer": {
        "bottom": 0,
        "borderTopWidth": 1,
        "borderBottomWidth": 0,
        "backgroundPosition": "top",
        "height": 44
    },
    "bar-footeritem-input-inset": {
        "position": "absolute"
    },
    "bar-footer title": {
        "height": 43,
        "lineHeight": 44
    },
    "bar-tabs": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bar-subheader": {
        "top": 44,
        "height": 44
    },
    "bar-subheader title": {
        "height": 43,
        "lineHeight": 44
    },
    "bar-subfooter": {
        "bottom": 44,
        "height": 44
    },
    "bar-subfooter title": {
        "height": 43,
        "lineHeight": 44
    },
    "nav-bar-block": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "left": 0,
        "zIndex": 9
    },
    "bar back-buttonhide": {
        "display": "none"
    },
    "bar buttons hide": {
        "display": "none"
    },
    "nav-bar-tabs-top bar": {
        "backgroundImage": "none"
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
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#444",
        "position": "absolute",
        "bottom": 0,
        "zIndex": 5,
        "width": "100%",
        "height": 49,
        "borderStyle": "solid",
        "borderTopWidth": 1,
        "backgroundSize": 0,
        "lineHeight": 49
    },
    "tabs tab-item badge": {
        "backgroundColor": "#444",
        "color": "#f8f8f8"
    },
    "tabs-light > tabs": {
        "borderColor": "#ddd",
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%)",
        "color": "#444"
    },
    "tabstabs-light": {
        "borderColor": "#ddd",
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%)",
        "color": "#444"
    },
    "tabs-light > tabs tab-item badge": {
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "tabstabs-light tab-item badge": {
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "tabs-stable > tabs": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#444"
    },
    "tabstabs-stable": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "color": "#444"
    },
    "tabs-stable > tabs tab-item badge": {
        "backgroundColor": "#444",
        "color": "#f8f8f8"
    },
    "tabstabs-stable tab-item badge": {
        "backgroundColor": "#444",
        "color": "#f8f8f8"
    },
    "tabs-positive > tabs": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "backgroundImage": "linear-gradient(0deg, #0c60ee, #0c60ee 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "backgroundImage": "linear-gradient(0deg, #0c60ee, #0c60ee 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-positive > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#387ef5"
    },
    "tabstabs-positive tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#387ef5"
    },
    "tabs-calm > tabs": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "backgroundImage": "linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "backgroundImage": "linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-calm > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#11c1f3"
    },
    "tabstabs-calm tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#11c1f3"
    },
    "tabs-assertive > tabs": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "backgroundImage": "linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "backgroundImage": "linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-assertive > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#ef473a"
    },
    "tabstabs-assertive tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#ef473a"
    },
    "tabs-balanced > tabs": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "backgroundImage": "linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "backgroundImage": "linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-balanced > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#33cd5f"
    },
    "tabstabs-balanced tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#33cd5f"
    },
    "tabs-energized > tabs": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "backgroundImage": "linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "backgroundImage": "linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-energized > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#ffc900"
    },
    "tabstabs-energized tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#ffc900"
    },
    "tabs-royal > tabs": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "backgroundImage": "linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "backgroundImage": "linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-royal > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#886aea"
    },
    "tabstabs-royal tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#886aea"
    },
    "tabs-dark > tabs": {
        "borderColor": "#111",
        "backgroundColor": "#444",
        "backgroundImage": "linear-gradient(0deg, #111, #111 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabstabs-dark": {
        "borderColor": "#111",
        "backgroundColor": "#444",
        "backgroundImage": "linear-gradient(0deg, #111, #111 50%, transparent 50%)",
        "color": "#fff"
    },
    "tabs-dark > tabs tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "tabstabs-dark tab-item badge": {
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "tabs-striped tabs": {
        "backgroundColor": "white",
        "backgroundImage": "none",
        "border": "none",
        "borderBottom": "1px solid #ddd",
        "paddingTop": 2
    },
    "tabs-striped tab-itemtab-item-active": {
        "marginTop": -2,
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-striped tab-itemactive": {
        "marginTop": -2,
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-striped tab-itemactivated": {
        "marginTop": -2,
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-striped tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-striped tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-striped tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-light tabs": {
        "backgroundColor": "#fff"
    },
    "tabs-stripedtabs-light tab-item": {
        "color": "rgba(68, 68, 68, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-light tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-light tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-light tab-itemactive": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-light tab-itemactivated": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-top tab-itemtab-item-active badge": {
        "top": "4%"
    },
    "tabs-stripedtabs-top tab-itemactive badge": {
        "top": "4%"
    },
    "tabs-stripedtabs-top tab-itemactivated badge": {
        "top": "4%"
    },
    "tabs-stripedtabs-stable tabs": {
        "backgroundColor": "#f8f8f8"
    },
    "tabs-stripedtabs-stable tab-item": {
        "color": "rgba(68, 68, 68, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-stable tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-stable tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-stable tab-itemactive": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-stable tab-itemactivated": {
        "marginTop": -2,
        "color": "#444",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#444"
    },
    "tabs-stripedtabs-positive tabs": {
        "backgroundColor": "#387ef5"
    },
    "tabs-stripedtabs-positive tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-positive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-positive tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-positive tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-positive tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-calm tabs": {
        "backgroundColor": "#11c1f3"
    },
    "tabs-stripedtabs-calm tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-calm tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-calm tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-calm tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-calm tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-assertive tabs": {
        "backgroundColor": "#ef473a"
    },
    "tabs-stripedtabs-assertive tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-assertive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-assertive tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-assertive tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-assertive tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-balanced tabs": {
        "backgroundColor": "#33cd5f"
    },
    "tabs-stripedtabs-balanced tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-balanced tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-balanced tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-balanced tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-balanced tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-energized tabs": {
        "backgroundColor": "#ffc900"
    },
    "tabs-stripedtabs-energized tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-energized tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-energized tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-energized tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-energized tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-royal tabs": {
        "backgroundColor": "#886aea"
    },
    "tabs-stripedtabs-royal tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-royal tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-royal tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-royal tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-royal tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-dark tabs": {
        "backgroundColor": "#444"
    },
    "tabs-stripedtabs-dark tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-dark tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-dark tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-dark tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-dark tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "borderStyle": "solid",
        "borderWidth": "2px 0 0 0",
        "borderColor": "#fff"
    },
    "tabs-stripedtabs-background-light tabs": {
        "backgroundColor": "#fff",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-stable tabs": {
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-positive tabs": {
        "backgroundColor": "#387ef5",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-calm tabs": {
        "backgroundColor": "#11c1f3",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-assertive tabs": {
        "backgroundColor": "#ef473a",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-balanced tabs": {
        "backgroundColor": "#33cd5f",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-energized tabs": {
        "backgroundColor": "#ffc900",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-royal tabs": {
        "backgroundColor": "#886aea",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-background-dark tabs": {
        "backgroundColor": "#444",
        "backgroundImage": "none"
    },
    "tabs-stripedtabs-color-light tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-light tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-light tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#fff",
        "border": "0 solid #fff",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-light tab-itemactive": {
        "marginTop": -2,
        "color": "#fff",
        "border": "0 solid #fff",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-light tab-itemactivated": {
        "marginTop": -2,
        "color": "#fff",
        "border": "0 solid #fff",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-light tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-light tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-light tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-stable tab-item": {
        "color": "rgba(248, 248, 248, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-stable tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-stable tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-stable tab-itemactive": {
        "marginTop": -2,
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-stable tab-itemactivated": {
        "marginTop": -2,
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-stable tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-stable tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-stable tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-positive tab-item": {
        "color": "rgba(56, 126, 245, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-positive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-positive tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#387ef5",
        "border": "0 solid #387ef5",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-positive tab-itemactive": {
        "marginTop": -2,
        "color": "#387ef5",
        "border": "0 solid #387ef5",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-positive tab-itemactivated": {
        "marginTop": -2,
        "color": "#387ef5",
        "border": "0 solid #387ef5",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-positive tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-positive tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-positive tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-calm tab-item": {
        "color": "rgba(17, 193, 243, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-calm tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-calm tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#11c1f3",
        "border": "0 solid #11c1f3",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-calm tab-itemactive": {
        "marginTop": -2,
        "color": "#11c1f3",
        "border": "0 solid #11c1f3",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-calm tab-itemactivated": {
        "marginTop": -2,
        "color": "#11c1f3",
        "border": "0 solid #11c1f3",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-calm tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-calm tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-calm tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-assertive tab-item": {
        "color": "rgba(239, 71, 58, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-assertive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-assertive tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#ef473a",
        "border": "0 solid #ef473a",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-assertive tab-itemactive": {
        "marginTop": -2,
        "color": "#ef473a",
        "border": "0 solid #ef473a",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-assertive tab-itemactivated": {
        "marginTop": -2,
        "color": "#ef473a",
        "border": "0 solid #ef473a",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-assertive tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-assertive tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-assertive tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-balanced tab-item": {
        "color": "rgba(51, 205, 95, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-balanced tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-balanced tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#33cd5f",
        "border": "0 solid #33cd5f",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-balanced tab-itemactive": {
        "marginTop": -2,
        "color": "#33cd5f",
        "border": "0 solid #33cd5f",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-balanced tab-itemactivated": {
        "marginTop": -2,
        "color": "#33cd5f",
        "border": "0 solid #33cd5f",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-balanced tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-balanced tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-balanced tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-energized tab-item": {
        "color": "rgba(255, 201, 0, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-energized tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-energized tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#ffc900",
        "border": "0 solid #ffc900",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-energized tab-itemactive": {
        "marginTop": -2,
        "color": "#ffc900",
        "border": "0 solid #ffc900",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-energized tab-itemactivated": {
        "marginTop": -2,
        "color": "#ffc900",
        "border": "0 solid #ffc900",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-energized tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-energized tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-energized tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-royal tab-item": {
        "color": "rgba(136, 106, 234, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-royal tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-royal tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#886aea",
        "border": "0 solid #886aea",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-royal tab-itemactive": {
        "marginTop": -2,
        "color": "#886aea",
        "border": "0 solid #886aea",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-royal tab-itemactivated": {
        "marginTop": -2,
        "color": "#886aea",
        "border": "0 solid #886aea",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-royal tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-royal tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-royal tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-dark tab-item": {
        "color": "rgba(68, 68, 68, 0.4)",
        "opacity": 1
    },
    "tabs-stripedtabs-color-dark tab-item badge": {
        "opacity": 0.4
    },
    "tabs-stripedtabs-color-dark tab-itemtab-item-active": {
        "marginTop": -2,
        "color": "#444",
        "border": "0 solid #444",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-dark tab-itemactive": {
        "marginTop": -2,
        "color": "#444",
        "border": "0 solid #444",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-dark tab-itemactivated": {
        "marginTop": -2,
        "color": "#444",
        "border": "0 solid #444",
        "borderTopWidth": 2
    },
    "tabs-stripedtabs-color-dark tab-itemtab-item-active badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-dark tab-itemactive badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-stripedtabs-color-dark tab-itemactivated badge": {
        "top": 2,
        "opacity": 1
    },
    "tabs-background-light tabs": {
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%)",
        "borderColor": "#ddd"
    },
    "tabs-background-light > tabs": {
        "backgroundColor": "#fff",
        "backgroundImage": "linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%)",
        "borderColor": "#ddd"
    },
    "tabs-background-stable tabs": {
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "borderColor": "#b2b2b2"
    },
    "tabs-background-stable > tabs": {
        "backgroundColor": "#f8f8f8",
        "backgroundImage": "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
        "borderColor": "#b2b2b2"
    },
    "tabs-background-positive tabs": {
        "backgroundColor": "#387ef5",
        "backgroundImage": "linear-gradient(0deg, #0c60ee, #0c60ee 50%, transparent 50%)",
        "borderColor": "#0c60ee"
    },
    "tabs-background-positive > tabs": {
        "backgroundColor": "#387ef5",
        "backgroundImage": "linear-gradient(0deg, #0c60ee, #0c60ee 50%, transparent 50%)",
        "borderColor": "#0c60ee"
    },
    "tabs-background-calm tabs": {
        "backgroundColor": "#11c1f3",
        "backgroundImage": "linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%)",
        "borderColor": "#0a9dc7"
    },
    "tabs-background-calm > tabs": {
        "backgroundColor": "#11c1f3",
        "backgroundImage": "linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%)",
        "borderColor": "#0a9dc7"
    },
    "tabs-background-assertive tabs": {
        "backgroundColor": "#ef473a",
        "backgroundImage": "linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%)",
        "borderColor": "#e42112"
    },
    "tabs-background-assertive > tabs": {
        "backgroundColor": "#ef473a",
        "backgroundImage": "linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%)",
        "borderColor": "#e42112"
    },
    "tabs-background-balanced tabs": {
        "backgroundColor": "#33cd5f",
        "backgroundImage": "linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%)",
        "borderColor": "#28a54c"
    },
    "tabs-background-balanced > tabs": {
        "backgroundColor": "#33cd5f",
        "backgroundImage": "linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%)",
        "borderColor": "#28a54c"
    },
    "tabs-background-energized tabs": {
        "backgroundColor": "#ffc900",
        "backgroundImage": "linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%)",
        "borderColor": "#e6b500"
    },
    "tabs-background-energized > tabs": {
        "backgroundColor": "#ffc900",
        "backgroundImage": "linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%)",
        "borderColor": "#e6b500"
    },
    "tabs-background-royal tabs": {
        "backgroundColor": "#886aea",
        "backgroundImage": "linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%)",
        "borderColor": "#6b46e5"
    },
    "tabs-background-royal > tabs": {
        "backgroundColor": "#886aea",
        "backgroundImage": "linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%)",
        "borderColor": "#6b46e5"
    },
    "tabs-background-dark tabs": {
        "backgroundColor": "#444",
        "backgroundImage": "linear-gradient(0deg, #111, #111 50%, transparent 50%)",
        "borderColor": "#111"
    },
    "tabs-background-dark > tabs": {
        "backgroundColor": "#444",
        "backgroundImage": "linear-gradient(0deg, #111, #111 50%, transparent 50%)",
        "borderColor": "#111"
    },
    "tabs-color-light tab-item": {
        "color": "rgba(255, 255, 255, 0.4)",
        "opacity": 1
    },
    "tabs-color-light tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-light tab-itemtab-item-active": {
        "color": "#fff",
        "border": "0 solid #fff"
    },
    "tabs-color-light tab-itemactive": {
        "color": "#fff",
        "border": "0 solid #fff"
    },
    "tabs-color-light tab-itemactivated": {
        "color": "#fff",
        "border": "0 solid #fff"
    },
    "tabs-color-light tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-light tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-light tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-stable tab-item": {
        "color": "rgba(248, 248, 248, 0.4)",
        "opacity": 1
    },
    "tabs-color-stable tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-stable tab-itemtab-item-active": {
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8"
    },
    "tabs-color-stable tab-itemactive": {
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8"
    },
    "tabs-color-stable tab-itemactivated": {
        "color": "#f8f8f8",
        "border": "0 solid #f8f8f8"
    },
    "tabs-color-stable tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-stable tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-stable tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-positive tab-item": {
        "color": "rgba(56, 126, 245, 0.4)",
        "opacity": 1
    },
    "tabs-color-positive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-positive tab-itemtab-item-active": {
        "color": "#387ef5",
        "border": "0 solid #387ef5"
    },
    "tabs-color-positive tab-itemactive": {
        "color": "#387ef5",
        "border": "0 solid #387ef5"
    },
    "tabs-color-positive tab-itemactivated": {
        "color": "#387ef5",
        "border": "0 solid #387ef5"
    },
    "tabs-color-positive tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-positive tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-positive tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-calm tab-item": {
        "color": "rgba(17, 193, 243, 0.4)",
        "opacity": 1
    },
    "tabs-color-calm tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-calm tab-itemtab-item-active": {
        "color": "#11c1f3",
        "border": "0 solid #11c1f3"
    },
    "tabs-color-calm tab-itemactive": {
        "color": "#11c1f3",
        "border": "0 solid #11c1f3"
    },
    "tabs-color-calm tab-itemactivated": {
        "color": "#11c1f3",
        "border": "0 solid #11c1f3"
    },
    "tabs-color-calm tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-calm tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-calm tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-assertive tab-item": {
        "color": "rgba(239, 71, 58, 0.4)",
        "opacity": 1
    },
    "tabs-color-assertive tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-assertive tab-itemtab-item-active": {
        "color": "#ef473a",
        "border": "0 solid #ef473a"
    },
    "tabs-color-assertive tab-itemactive": {
        "color": "#ef473a",
        "border": "0 solid #ef473a"
    },
    "tabs-color-assertive tab-itemactivated": {
        "color": "#ef473a",
        "border": "0 solid #ef473a"
    },
    "tabs-color-assertive tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-assertive tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-assertive tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-balanced tab-item": {
        "color": "rgba(51, 205, 95, 0.4)",
        "opacity": 1
    },
    "tabs-color-balanced tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-balanced tab-itemtab-item-active": {
        "color": "#33cd5f",
        "border": "0 solid #33cd5f"
    },
    "tabs-color-balanced tab-itemactive": {
        "color": "#33cd5f",
        "border": "0 solid #33cd5f"
    },
    "tabs-color-balanced tab-itemactivated": {
        "color": "#33cd5f",
        "border": "0 solid #33cd5f"
    },
    "tabs-color-balanced tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-balanced tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-balanced tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-energized tab-item": {
        "color": "rgba(255, 201, 0, 0.4)",
        "opacity": 1
    },
    "tabs-color-energized tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-energized tab-itemtab-item-active": {
        "color": "#ffc900",
        "border": "0 solid #ffc900"
    },
    "tabs-color-energized tab-itemactive": {
        "color": "#ffc900",
        "border": "0 solid #ffc900"
    },
    "tabs-color-energized tab-itemactivated": {
        "color": "#ffc900",
        "border": "0 solid #ffc900"
    },
    "tabs-color-energized tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-energized tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-energized tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-royal tab-item": {
        "color": "rgba(136, 106, 234, 0.4)",
        "opacity": 1
    },
    "tabs-color-royal tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-royal tab-itemtab-item-active": {
        "color": "#886aea",
        "border": "0 solid #886aea"
    },
    "tabs-color-royal tab-itemactive": {
        "color": "#886aea",
        "border": "0 solid #886aea"
    },
    "tabs-color-royal tab-itemactivated": {
        "color": "#886aea",
        "border": "0 solid #886aea"
    },
    "tabs-color-royal tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-royal tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-royal tab-itemactivated badge": {
        "opacity": 1
    },
    "tabs-color-dark tab-item": {
        "color": "rgba(68, 68, 68, 0.4)",
        "opacity": 1
    },
    "tabs-color-dark tab-item badge": {
        "opacity": 0.4
    },
    "tabs-color-dark tab-itemtab-item-active": {
        "color": "#444",
        "border": "0 solid #444"
    },
    "tabs-color-dark tab-itemactive": {
        "color": "#444",
        "border": "0 solid #444"
    },
    "tabs-color-dark tab-itemactivated": {
        "color": "#444",
        "border": "0 solid #444"
    },
    "tabs-color-dark tab-itemtab-item-active badge": {
        "opacity": 1
    },
    "tabs-color-dark tab-itemactive badge": {
        "opacity": 1
    },
    "tabs-color-dark tab-itemactivated badge": {
        "opacity": 1
    },
    "ion-tabstabs-color-active-light tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-light tab-itemtab-item-active": {
        "color": "#fff"
    },
    "ion-tabstabs-color-active-light tab-itemactive": {
        "color": "#fff"
    },
    "ion-tabstabs-color-active-light tab-itemactivated": {
        "color": "#fff"
    },
    "ion-tabstabs-stripedtabs-color-active-light tab-itemtab-item-active": {
        "borderColor": "#fff",
        "color": "#fff"
    },
    "ion-tabstabs-stripedtabs-color-active-light tab-itemactive": {
        "borderColor": "#fff",
        "color": "#fff"
    },
    "ion-tabstabs-stripedtabs-color-active-light tab-itemactivated": {
        "borderColor": "#fff",
        "color": "#fff"
    },
    "ion-tabstabs-color-active-stable tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-stable tab-itemtab-item-active": {
        "color": "#f8f8f8"
    },
    "ion-tabstabs-color-active-stable tab-itemactive": {
        "color": "#f8f8f8"
    },
    "ion-tabstabs-color-active-stable tab-itemactivated": {
        "color": "#f8f8f8"
    },
    "ion-tabstabs-stripedtabs-color-active-stable tab-itemtab-item-active": {
        "borderColor": "#f8f8f8",
        "color": "#f8f8f8"
    },
    "ion-tabstabs-stripedtabs-color-active-stable tab-itemactive": {
        "borderColor": "#f8f8f8",
        "color": "#f8f8f8"
    },
    "ion-tabstabs-stripedtabs-color-active-stable tab-itemactivated": {
        "borderColor": "#f8f8f8",
        "color": "#f8f8f8"
    },
    "ion-tabstabs-color-active-positive tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-positive tab-itemtab-item-active": {
        "color": "#387ef5"
    },
    "ion-tabstabs-color-active-positive tab-itemactive": {
        "color": "#387ef5"
    },
    "ion-tabstabs-color-active-positive tab-itemactivated": {
        "color": "#387ef5"
    },
    "ion-tabstabs-stripedtabs-color-active-positive tab-itemtab-item-active": {
        "borderColor": "#387ef5",
        "color": "#387ef5"
    },
    "ion-tabstabs-stripedtabs-color-active-positive tab-itemactive": {
        "borderColor": "#387ef5",
        "color": "#387ef5"
    },
    "ion-tabstabs-stripedtabs-color-active-positive tab-itemactivated": {
        "borderColor": "#387ef5",
        "color": "#387ef5"
    },
    "ion-tabstabs-color-active-calm tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-calm tab-itemtab-item-active": {
        "color": "#11c1f3"
    },
    "ion-tabstabs-color-active-calm tab-itemactive": {
        "color": "#11c1f3"
    },
    "ion-tabstabs-color-active-calm tab-itemactivated": {
        "color": "#11c1f3"
    },
    "ion-tabstabs-stripedtabs-color-active-calm tab-itemtab-item-active": {
        "borderColor": "#11c1f3",
        "color": "#11c1f3"
    },
    "ion-tabstabs-stripedtabs-color-active-calm tab-itemactive": {
        "borderColor": "#11c1f3",
        "color": "#11c1f3"
    },
    "ion-tabstabs-stripedtabs-color-active-calm tab-itemactivated": {
        "borderColor": "#11c1f3",
        "color": "#11c1f3"
    },
    "ion-tabstabs-color-active-assertive tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-assertive tab-itemtab-item-active": {
        "color": "#ef473a"
    },
    "ion-tabstabs-color-active-assertive tab-itemactive": {
        "color": "#ef473a"
    },
    "ion-tabstabs-color-active-assertive tab-itemactivated": {
        "color": "#ef473a"
    },
    "ion-tabstabs-stripedtabs-color-active-assertive tab-itemtab-item-active": {
        "borderColor": "#ef473a",
        "color": "#ef473a"
    },
    "ion-tabstabs-stripedtabs-color-active-assertive tab-itemactive": {
        "borderColor": "#ef473a",
        "color": "#ef473a"
    },
    "ion-tabstabs-stripedtabs-color-active-assertive tab-itemactivated": {
        "borderColor": "#ef473a",
        "color": "#ef473a"
    },
    "ion-tabstabs-color-active-balanced tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-balanced tab-itemtab-item-active": {
        "color": "#33cd5f"
    },
    "ion-tabstabs-color-active-balanced tab-itemactive": {
        "color": "#33cd5f"
    },
    "ion-tabstabs-color-active-balanced tab-itemactivated": {
        "color": "#33cd5f"
    },
    "ion-tabstabs-stripedtabs-color-active-balanced tab-itemtab-item-active": {
        "borderColor": "#33cd5f",
        "color": "#33cd5f"
    },
    "ion-tabstabs-stripedtabs-color-active-balanced tab-itemactive": {
        "borderColor": "#33cd5f",
        "color": "#33cd5f"
    },
    "ion-tabstabs-stripedtabs-color-active-balanced tab-itemactivated": {
        "borderColor": "#33cd5f",
        "color": "#33cd5f"
    },
    "ion-tabstabs-color-active-energized tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-energized tab-itemtab-item-active": {
        "color": "#ffc900"
    },
    "ion-tabstabs-color-active-energized tab-itemactive": {
        "color": "#ffc900"
    },
    "ion-tabstabs-color-active-energized tab-itemactivated": {
        "color": "#ffc900"
    },
    "ion-tabstabs-stripedtabs-color-active-energized tab-itemtab-item-active": {
        "borderColor": "#ffc900",
        "color": "#ffc900"
    },
    "ion-tabstabs-stripedtabs-color-active-energized tab-itemactive": {
        "borderColor": "#ffc900",
        "color": "#ffc900"
    },
    "ion-tabstabs-stripedtabs-color-active-energized tab-itemactivated": {
        "borderColor": "#ffc900",
        "color": "#ffc900"
    },
    "ion-tabstabs-color-active-royal tab-item": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-royal tab-itemtab-item-active": {
        "color": "#886aea"
    },
    "ion-tabstabs-color-active-royal tab-itemactive": {
        "color": "#886aea"
    },
    "ion-tabstabs-color-active-royal tab-itemactivated": {
        "color": "#886aea"
    },
    "ion-tabstabs-stripedtabs-color-active-royal tab-itemtab-item-active": {
        "borderColor": "#886aea",
        "color": "#886aea"
    },
    "ion-tabstabs-stripedtabs-color-active-royal tab-itemactive": {
        "borderColor": "#886aea",
        "color": "#886aea"
    },
    "ion-tabstabs-stripedtabs-color-active-royal tab-itemactivated": {
        "borderColor": "#886aea",
        "color": "#886aea"
    },
    "ion-tabstabs-color-active-dark tab-item": {
        "color": "#fff"
    },
    "ion-tabstabs-color-active-dark tab-itemtab-item-active": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-dark tab-itemactive": {
        "color": "#444"
    },
    "ion-tabstabs-color-active-dark tab-itemactivated": {
        "color": "#444"
    },
    "ion-tabstabs-stripedtabs-color-active-dark tab-itemtab-item-active": {
        "borderColor": "#444",
        "color": "#444"
    },
    "ion-tabstabs-stripedtabs-color-active-dark tab-itemactive": {
        "borderColor": "#444",
        "color": "#444"
    },
    "ion-tabstabs-stripedtabs-color-active-dark tab-itemactivated": {
        "borderColor": "#444",
        "color": "#444"
    },
    "tabs-toptabs-striped": {
        "paddingBottom": 0
    },
    "tabs-toptabs-striped tab-item": {
        "background": "transparent",
        "WebkitTransition": "color .1s ease",
        "MozTransition": "color .1s ease",
        "MsTransition": "color .1s ease",
        "OTransition": "color .1s ease",
        "transition": "color .1s ease"
    },
    "tabs-toptabs-striped tab-itemtab-item-active": {
        "marginTop": 1,
        "borderWidth": "0px 0px 2px 0px !important",
        "borderStyle": "solid"
    },
    "tabs-toptabs-striped tab-itemactive": {
        "marginTop": 1,
        "borderWidth": "0px 0px 2px 0px !important",
        "borderStyle": "solid"
    },
    "tabs-toptabs-striped tab-itemactivated": {
        "marginTop": 1,
        "borderWidth": "0px 0px 2px 0px !important",
        "borderStyle": "solid"
    },
    "tabs-toptabs-striped tab-itemtab-item-active > badge": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-itemtab-item-active > i": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-itemactive > badge": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-itemactive > i": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-itemactivated > badge": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-itemactivated > i": {
        "marginTop": -1
    },
    "tabs-toptabs-striped tab-item badge": {
        "WebkitTransition": "color .2s ease",
        "MozTransition": "color .2s ease",
        "MsTransition": "color .2s ease",
        "OTransition": "color .2s ease",
        "transition": "color .2s ease"
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemtab-item-active tab-title": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemtab-item-active i": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemactive tab-title": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemactive i": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemactivated tab-title": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-striped:not(tabs-icon-left):not(tabs-icon-top) tab-itemactivated i": {
        "display": "block",
        "marginTop": -1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-item": {
        "marginTop": 1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemtab-item-active tab-title": {
        "marginTop": -0.1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemtab-item-active i": {
        "marginTop": -0.1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemactive tab-title": {
        "marginTop": -0.1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemactive i": {
        "marginTop": -0.1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemactivated tab-title": {
        "marginTop": -0.1
    },
    "tabs-toptabs-stripedtabs-icon-left tab-itemactivated i": {
        "marginTop": -0.1
    },
    "tabs-top > tabs": {
        "top": 44,
        "paddingTop": 0,
        "backgroundPosition": "bottom",
        "borderTopWidth": 0,
        "borderBottomWidth": 1
    },
    "tabstabs-top": {
        "top": 44,
        "paddingTop": 0,
        "backgroundPosition": "bottom",
        "borderTopWidth": 0,
        "borderBottomWidth": 1
    },
    "tabs-top > tabs tab-itemtab-item-active badge": {
        "top": "4%"
    },
    "tabs-top > tabs tab-itemactive badge": {
        "top": "4%"
    },
    "tabs-top > tabs tab-itemactivated badge": {
        "top": "4%"
    },
    "tabstabs-top tab-itemtab-item-active badge": {
        "top": "4%"
    },
    "tabstabs-top tab-itemactive badge": {
        "top": "4%"
    },
    "tabstabs-top tab-itemactivated badge": {
        "top": "4%"
    },
    "tabs-top ~ bar-header": {
        "borderBottomWidth": 0
    },
    "tab-item": {
        "WebkitBoxFlex": 1,
        "WebkitFlex": 1,
        "MozBoxFlex": 1,
        "MozFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "display": "block",
        "overflow": "hidden",
        "maxWidth": 150,
        "height": "100%",
        "color": "inherit",
        "textAlign": "center",
        "textDecoration": "none",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "fontWeight": "400",
        "fontSize": 14,
        "fontFamily": "\"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif",
        "opacity": 0.7
    },
    "tab-item:hover": {
        "cursor": "pointer"
    },
    "tab-itemtab-hidden": {
        "display": "none"
    },
    "tabs-item-hide > tabs": {
        "display": "none"
    },
    "tabstabs-item-hide": {
        "display": "none"
    },
    "tabs-icon-top > tabs tab-item": {
        "fontSize": 10,
        "lineHeight": 14
    },
    "tabs-icon-toptabs tab-item": {
        "fontSize": 10,
        "lineHeight": 14
    },
    "tabs-icon-bottom > tabs tab-item": {
        "fontSize": 10,
        "lineHeight": 14
    },
    "tabs-icon-bottomtabs tab-item": {
        "fontSize": 10,
        "lineHeight": 14
    },
    "tab-item icon": {
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": 32,
        "fontSize": 32
    },
    "tabs-icon-lefttabs tab-item": {
        "fontSize": 10
    },
    "tabs-icon-left > tabs tab-item": {
        "fontSize": 10
    },
    "tabs-icon-righttabs tab-item": {
        "fontSize": 10
    },
    "tabs-icon-right > tabs tab-item": {
        "fontSize": 10
    },
    "tabs-icon-lefttabs tab-item icon": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1,
        "paddingRight": 3
    },
    "tabs-icon-lefttabs tab-item tab-title": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1
    },
    "tabs-icon-left > tabs tab-item icon": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1,
        "paddingRight": 3
    },
    "tabs-icon-left > tabs tab-item tab-title": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1
    },
    "tabs-icon-righttabs tab-item icon": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1,
        "paddingLeft": 3
    },
    "tabs-icon-righttabs tab-item tab-title": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1
    },
    "tabs-icon-right > tabs tab-item icon": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1,
        "paddingLeft": 3
    },
    "tabs-icon-right > tabs tab-item tab-title": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginTop": -0.1
    },
    "tabs-icon-lefttabs tab-item icon:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-lefttabs tab-item tab-title:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-left > tabs tab-item icon:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-left > tabs tab-item tab-title:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-righttabs tab-item icon:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-righttabs tab-item tab-title:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-right > tabs tab-item icon:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-right > tabs tab-item tab-title:before": {
        "fontSize": 24,
        "lineHeight": 49
    },
    "tabs-icon-only > tabs icon": {
        "lineHeight": "inherit"
    },
    "tabs-icon-onlytabs icon": {
        "lineHeight": "inherit"
    },
    "tab-itemhas-badge": {
        "position": "relative"
    },
    "tab-item badge": {
        "position": "absolute",
        "top": "4%",
        "right": "calc(50% - 26px)",
        "paddingTop": 1,
        "paddingRight": 6,
        "paddingBottom": 1,
        "paddingLeft": 6,
        "height": "auto",
        "fontSize": 12,
        "lineHeight": 16
    },
    "tab-itemtab-item-active": {
        "opacity": 1
    },
    "tab-itemactive": {
        "opacity": 1
    },
    "tab-itemactivated": {
        "opacity": 1
    },
    "tab-itemtab-item-activetab-item-light": {
        "color": "#fff"
    },
    "tab-itemactivetab-item-light": {
        "color": "#fff"
    },
    "tab-itemactivatedtab-item-light": {
        "color": "#fff"
    },
    "tab-itemtab-item-activetab-item-stable": {
        "color": "#f8f8f8"
    },
    "tab-itemactivetab-item-stable": {
        "color": "#f8f8f8"
    },
    "tab-itemactivatedtab-item-stable": {
        "color": "#f8f8f8"
    },
    "tab-itemtab-item-activetab-item-positive": {
        "color": "#387ef5"
    },
    "tab-itemactivetab-item-positive": {
        "color": "#387ef5"
    },
    "tab-itemactivatedtab-item-positive": {
        "color": "#387ef5"
    },
    "tab-itemtab-item-activetab-item-calm": {
        "color": "#11c1f3"
    },
    "tab-itemactivetab-item-calm": {
        "color": "#11c1f3"
    },
    "tab-itemactivatedtab-item-calm": {
        "color": "#11c1f3"
    },
    "tab-itemtab-item-activetab-item-assertive": {
        "color": "#ef473a"
    },
    "tab-itemactivetab-item-assertive": {
        "color": "#ef473a"
    },
    "tab-itemactivatedtab-item-assertive": {
        "color": "#ef473a"
    },
    "tab-itemtab-item-activetab-item-balanced": {
        "color": "#33cd5f"
    },
    "tab-itemactivetab-item-balanced": {
        "color": "#33cd5f"
    },
    "tab-itemactivatedtab-item-balanced": {
        "color": "#33cd5f"
    },
    "tab-itemtab-item-activetab-item-energized": {
        "color": "#ffc900"
    },
    "tab-itemactivetab-item-energized": {
        "color": "#ffc900"
    },
    "tab-itemactivatedtab-item-energized": {
        "color": "#ffc900"
    },
    "tab-itemtab-item-activetab-item-royal": {
        "color": "#886aea"
    },
    "tab-itemactivetab-item-royal": {
        "color": "#886aea"
    },
    "tab-itemactivatedtab-item-royal": {
        "color": "#886aea"
    },
    "tab-itemtab-item-activetab-item-dark": {
        "color": "#444"
    },
    "tab-itemactivetab-item-dark": {
        "color": "#444"
    },
    "tab-itemactivatedtab-item-dark": {
        "color": "#444"
    },
    "itemtabs": {
        "display": "flex",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "itemtabs icon:before": {
        "position": "relative"
    },
    "tab-itemdisabled": {
        "opacity": 0.4,
        "cursor": "default",
        "pointerEvents": "none"
    },
    "tab-item[disabled]": {
        "opacity": 0.4,
        "cursor": "default",
        "pointerEvents": "none"
    },
    "nav-bar-tabs-tophide ~ view-container tabs-top tabs": {
        "top": 0
    },
    "pane[hide-nav-bar=\"true\"] has-tabs-top": {
        "top": 49
    },
    "menu scroll-content": {
        "zIndex": 10
    },
    "menu bar-header": {
        "zIndex": 11
    },
    "menu-content": {
        "WebkitTransform": "none",
        "transform": "none",
        "boxShadow": "-1px 0px 2px rgba(0, 0, 0, 0.2), 1px 0px 2px rgba(0, 0, 0, 0.2)"
    },
    "menu-open menu-content pane": {
        "pointerEvents": "none"
    },
    "menu-open menu-content scroll-content": {
        "pointerEvents": "none"
    },
    "menu-open menu-content scroll-content scroll": {
        "pointerEvents": "none"
    },
    "menu-open menu-content scroll-content:not(overflow-scroll)": {
        "overflow": "hidden"
    },
    "grade-b menu-content": {
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "right": -1,
        "left": -1,
        "borderRight": "1px solid #ccc",
        "borderLeft": "1px solid #ccc",
        "boxShadow": "none"
    },
    "grade-c menu-content": {
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "right": -1,
        "left": -1,
        "borderRight": "1px solid #ccc",
        "borderLeft": "1px solid #ccc",
        "boxShadow": "none"
    },
    "menu-left": {
        "left": 0
    },
    "menu-right": {
        "right": 0
    },
    "aside-openaside-resizing menu-right": {
        "display": "none"
    },
    "menu-animated": {
        "WebkitTransition": "-webkit-transform 200ms ease",
        "transition": "transform 200ms ease"
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 10,
        "width": "100%",
        "height": "100%"
    },
    "modal-backdrop-bg": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 10,
        "width": "100%",
        "height": "100%",
        "pointerEvents": "none"
    },
    "modal": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "zIndex": 10,
        "overflow": "hidden",
        "minHeight": "100%",
        "width": "100%",
        "backgroundColor": "#fff"
    },
    "modal-open": {
        "pointerEvents": "none"
    },
    "modal-open modal": {
        "pointerEvents": "auto"
    },
    "modal-open modal-backdrop": {
        "pointerEvents": "auto"
    },
    "modal-openloading-active modal": {
        "pointerEvents": "none"
    },
    "modal-openloading-active modal-backdrop": {
        "pointerEvents": "none"
    },
    "popover-backdrop": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 10,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "transparent"
    },
    "popover-backdropactive": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "popover": {
        "position": "absolute",
        "top": "25%",
        "left": "50%",
        "zIndex": 10,
        "display": "block",
        "marginTop": 12,
        "marginLeft": -110,
        "height": 280,
        "width": 220,
        "backgroundColor": "#fff",
        "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.4)",
        "opacity": 0,
        "borderRadius": 2
    },
    "popover item:first-child": {
        "borderTop": 0
    },
    "popover item:last-child": {
        "borderBottom": 0
    },
    "popoverpopover-bottom": {
        "marginTop": -12
    },
    "popover bar-header": {
        "borderRadius": 2,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "popover scroll-content": {
        "zIndex": 1,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "popover has-header": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "popover-arrow": {
        "display": "none"
    },
    "platform-ios popover": {
        "boxShadow": "0 0 40px rgba(0, 0, 0, 0.08)",
        "borderRadius": 10
    },
    "platform-ios popover bar-header": {
        "WebkitBorderTopRightRadius": 10,
        "borderTopRightRadius": 10,
        "WebkitBorderTopLeftRadius": 10,
        "borderTopLeftRadius": 10
    },
    "platform-ios popover scroll-content": {
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0,
        "borderRadius": 10
    },
    "platform-ios popover scroll-contenthas-header": {
        "marginTop": 0
    },
    "platform-ios popover-arrow": {
        "position": "absolute",
        "display": "block",
        "top": -17,
        "width": 30,
        "height": 19,
        "overflow": "hidden"
    },
    "platform-ios popover-arrow:after": {
        "position": "absolute",
        "top": 12,
        "left": 5,
        "width": 20,
        "height": 20,
        "backgroundColor": "#fff",
        "borderRadius": 3,
        "content": "''",
        "WebkitTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "platform-ios popover-bottom popover-arrow": {
        "top": "auto",
        "bottom": -10
    },
    "platform-ios popover-bottom popover-arrow:after": {
        "top": -6
    },
    "platform-android popover": {
        "marginTop": -32,
        "backgroundColor": "#fafafa",
        "boxShadow": "0 2px 6px rgba(0, 0, 0, 0.35)"
    },
    "platform-android popover item": {
        "borderColor": "#fafafa",
        "backgroundColor": "#fafafa",
        "color": "#4d4d4d"
    },
    "platform-android popoverpopover-bottom": {
        "marginTop": 32
    },
    "platform-android popover-backdrop": {
        "backgroundColor": "transparent"
    },
    "platform-android popover-backdropactive": {
        "backgroundColor": "transparent"
    },
    "popover-open": {
        "pointerEvents": "none"
    },
    "popover-open popover": {
        "pointerEvents": "auto"
    },
    "popover-open popover-backdrop": {
        "pointerEvents": "auto"
    },
    "popover-openloading-active popover": {
        "pointerEvents": "none"
    },
    "popover-openloading-active popover-backdrop": {
        "pointerEvents": "none"
    },
    "popup-container": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "background": "transparent",
        "display": "flex",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "WebkitJustifyContent": "center",
        "MozJustifyContent": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "zIndex": 12,
        "visibility": "hidden"
    },
    "popup-containerpopup-showing": {
        "visibility": "visible"
    },
    "popup-containerpopup-hidden popup": {
        "WebkitAnimationName": "scaleOut",
        "animationName": "scaleOut",
        "WebkitAnimationDuration": "0.1s",
        "animationDuration": "0.1s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "popup-containeractive popup": {
        "WebkitAnimationName": "superScaleIn",
        "animationName": "superScaleIn",
        "WebkitAnimationDuration": "0.2s",
        "animationDuration": "0.2s",
        "WebkitAnimationTimingFunction": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "popup-container popup": {
        "width": 250,
        "maxWidth": "100%",
        "maxHeight": "90%",
        "borderRadius": 0,
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "display": "flex",
        "WebkitBoxDirection": "normal",
        "WebkitBoxOrient": "vertical",
        "WebkitFlexDirection": "column",
        "MozFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "popup-container input": {
        "width": "100%"
    },
    "popup-container textarea": {
        "width": "100%"
    },
    "popup-head": {
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "borderBottom": "1px solid #eee",
        "textAlign": "center"
    },
    "popup-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 15
    },
    "popup-sub-title": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "normal",
        "fontSize": 11
    },
    "popup-body": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "overflow": "auto"
    },
    "popup-buttons": {
        "display": "flex",
        "WebkitBoxDirection": "normal",
        "WebkitBoxOrient": "horizontal",
        "WebkitFlexDirection": "row",
        "MozFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "minHeight": 65
    },
    "popup-buttons button": {
        "WebkitBoxFlex": 1,
        "WebkitFlex": 1,
        "MozBoxFlex": 1,
        "MozFlex": 1,
        "MsFlex": 1,
        "flex": 1,
        "display": "block",
        "minHeight": 45,
        "borderRadius": 2,
        "lineHeight": 20,
        "marginRight": 5
    },
    "popup-buttons button:last-child": {
        "marginRight": 0
    },
    "popup-open": {
        "pointerEvents": "none"
    },
    "popup-openmodal-open modal": {
        "pointerEvents": "none"
    },
    "popup-open popup-backdrop": {
        "pointerEvents": "auto"
    },
    "popup-open popup": {
        "pointerEvents": "auto"
    },
    "loading-container": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "zIndex": 13,
        "display": "flex",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "WebkitJustifyContent": "center",
        "MozJustifyContent": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "WebkitTransition": "0.2s opacity linear",
        "transition": "0.2s opacity linear",
        "visibility": "hidden",
        "opacity": 0
    },
    "loading-container:not(visible) icon": {
        "display": "none"
    },
    "loading-container:not(visible) spinner": {
        "display": "none"
    },
    "loading-containervisible": {
        "visibility": "visible"
    },
    "loading-containeractive": {
        "opacity": 1
    },
    "loading-container loading": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderRadius": 5,
        "backgroundColor": "rgba(0, 0, 0, 0.7)",
        "color": "#fff",
        "textAlign": "center",
        "textOverflow": "ellipsis",
        "fontSize": 15
    },
    "loading-container loading h1": {
        "color": "#fff"
    },
    "loading-container loading h2": {
        "color": "#fff"
    },
    "loading-container loading h3": {
        "color": "#fff"
    },
    "loading-container loading h4": {
        "color": "#fff"
    },
    "loading-container loading h5": {
        "color": "#fff"
    },
    "loading-container loading h6": {
        "color": "#fff"
    },
    "item": {
        "borderColor": "#ddd",
        "backgroundColor": "#fff",
        "color": "#444",
        "position": "relative",
        "zIndex": 2,
        "display": "block",
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "borderWidth": 1,
        "borderStyle": "solid",
        "fontSize": 16,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "fontSize": 16,
        "fontWeight": "normal",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "fontSize": 14,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "fontSize": 12,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "fontSize": 10,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "fontSize": 10,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item p": {
        "color": "#666",
        "fontSize": 14,
        "marginBottom": 2,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item h1:last-child": {
        "marginBottom": 0
    },
    "item h2:last-child": {
        "marginBottom": 0
    },
    "item h3:last-child": {
        "marginBottom": 0
    },
    "item h4:last-child": {
        "marginBottom": 0
    },
    "item h5:last-child": {
        "marginBottom": 0
    },
    "item h6:last-child": {
        "marginBottom": 0
    },
    "item p:last-child": {
        "marginBottom": 0
    },
    "item badge": {
        "display": "flex",
        "position": "absolute",
        "top": 16,
        "right": 32
    },
    "itemitem-button-right badge": {
        "right": 67
    },
    "itemitem-divider badge": {
        "top": 8
    },
    "item badge + badge": {
        "marginRight": 5
    },
    "itemitem-light": {
        "borderColor": "#ddd",
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "itemitem-stable": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "color": "#444"
    },
    "itemitem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "color": "#fff"
    },
    "itemitem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "color": "#fff"
    },
    "itemitem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "color": "#fff"
    },
    "itemitem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "color": "#fff"
    },
    "itemitem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "color": "#fff"
    },
    "itemitem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "color": "#fff"
    },
    "itemitem-dark": {
        "borderColor": "#111",
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "item[ng-click]:hover": {
        "cursor": "pointer"
    },
    "list-borderless item": {
        "borderWidth": 0
    },
    "item-borderless": {
        "borderWidth": 0
    },
    "itemactive": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "itemactivated": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item-complexactive item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item-complexactivated item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item item-contentactive": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item item-contentactivated": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "itemactiveitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "itemactivateditem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item-complexactive item-contentitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item-complexactivated item-contentitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item item-contentactiveitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "item item-contentactivateditem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#D9D9D9"
    },
    "itemactiveitem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "itemactivateditem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexactive item-contentitem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexactivated item-contentitem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item item-contentactiveitem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item item-contentactivateditem-light": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "itemactiveitem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "itemactivateditem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexactive item-contentitem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexactivated item-contentitem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item item-contentactiveitem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item item-contentactivateditem-lightitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "itemactiveitem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "itemactivateditem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexactive item-contentitem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexactivated item-contentitem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item item-contentactiveitem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item item-contentactivateditem-stable": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "itemactiveitem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "itemactivateditem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexactive item-contentitem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexactivated item-contentitem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item item-contentactiveitem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item item-contentactivateditem-stableitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "itemactiveitem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "itemactivateditem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexactive item-contentitem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexactivated item-contentitem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item item-contentactiveitem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item item-contentactivateditem-positive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "itemactiveitem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "itemactivateditem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexactive item-contentitem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexactivated item-contentitem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item item-contentactiveitem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item item-contentactivateditem-positiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "itemactiveitem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "itemactivateditem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexactive item-contentitem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexactivated item-contentitem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item item-contentactiveitem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item item-contentactivateditem-calm": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "itemactiveitem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "itemactivateditem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexactive item-contentitem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexactivated item-contentitem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item item-contentactiveitem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item item-contentactivateditem-calmitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "itemactiveitem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "itemactivateditem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexactive item-contentitem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexactivated item-contentitem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item item-contentactiveitem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item item-contentactivateditem-assertive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "itemactiveitem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "itemactivateditem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexactive item-contentitem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexactivated item-contentitem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item item-contentactiveitem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item item-contentactivateditem-assertiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "itemactiveitem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "itemactivateditem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexactive item-contentitem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexactivated item-contentitem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item item-contentactiveitem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item item-contentactivateditem-balanced": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "itemactiveitem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "itemactivateditem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexactive item-contentitem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexactivated item-contentitem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item item-contentactiveitem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item item-contentactivateditem-balanceditem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "itemactiveitem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "itemactivateditem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexactive item-contentitem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexactivated item-contentitem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item item-contentactiveitem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item item-contentactivateditem-energized": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "itemactiveitem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "itemactivateditem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexactive item-contentitem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexactivated item-contentitem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item item-contentactiveitem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item item-contentactivateditem-energizeditem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "itemactiveitem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "itemactivateditem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexactive item-contentitem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexactivated item-contentitem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item item-contentactiveitem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item item-contentactivateditem-royal": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "itemactiveitem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "itemactivateditem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexactive item-contentitem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexactivated item-contentitem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item item-contentactiveitem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item item-contentactivateditem-royalitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "itemactiveitem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "itemactivateditem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexactive item-contentitem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexactivated item-contentitem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item item-contentactiveitem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item item-contentactivateditem-dark": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "itemactiveitem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "itemactivateditem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexactive item-contentitem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexactivated item-contentitem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item item-contentactiveitem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item item-contentactivateditem-darkitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item h1": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h1": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h2": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h3": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h4": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h5": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content h6": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "item-content p": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "aitem": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "aitem:hover": {
        "textDecoration": "none"
    },
    "aitem:focus": {
        "textDecoration": "none"
    },
    "item-complex": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "aitemitem-complex": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "buttonitemitem-complex": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "item-complex item-content": {
        "position": "relative",
        "zIndex": 2,
        "paddingTop": 16,
        "paddingRight": 49,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "border": "none",
        "backgroundColor": "#fff"
    },
    "item-radio item-content": {
        "position": "relative",
        "zIndex": 2,
        "paddingTop": 16,
        "paddingRight": 49,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "border": "none",
        "backgroundColor": "#fff"
    },
    "aitem-content": {
        "display": "block",
        "color": "inherit",
        "textDecoration": "none"
    },
    "item-text-wrap item": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap item-content": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h1": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h2": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h3": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h4": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h5": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap h6": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-text-wrap p": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap item-content": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-body h1": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body h2": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body h3": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body h4": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body h5": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body h6": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-body p": {
        "overflow": "visible",
        "whiteSpace": "normal",
        "marginTop": 16,
        "marginBottom": 16
    },
    "item-complexitem-text-wrap": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h1": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h2": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h3": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h4": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h5": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap h6": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-text-wrap p": {
        "overflow": "visible",
        "whiteSpace": "normal"
    },
    "item-complexitem-light > item-content": {
        "borderColor": "#ddd",
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "item-complexitem-light > item-contentactive": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexitem-light > item-content:active": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexitem-light > item-contentactiveitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexitem-light > item-content:activeitem-complex > item-content": {
        "borderColor": "#ccc",
        "backgroundColor": "#fafafa"
    },
    "item-complexitem-stable > item-content": {
        "borderColor": "#b2b2b2",
        "backgroundColor": "#f8f8f8",
        "color": "#444"
    },
    "item-complexitem-stable > item-contentactive": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexitem-stable > item-content:active": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexitem-stable > item-contentactiveitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexitem-stable > item-content:activeitem-complex > item-content": {
        "borderColor": "#a2a2a2",
        "backgroundColor": "#e5e5e5"
    },
    "item-complexitem-positive > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#387ef5",
        "color": "#fff"
    },
    "item-complexitem-positive > item-contentactive": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexitem-positive > item-content:active": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexitem-positive > item-contentactiveitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexitem-positive > item-content:activeitem-complex > item-content": {
        "borderColor": "#0c60ee",
        "backgroundColor": "#0c60ee"
    },
    "item-complexitem-calm > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#11c1f3",
        "color": "#fff"
    },
    "item-complexitem-calm > item-contentactive": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexitem-calm > item-content:active": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexitem-calm > item-contentactiveitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexitem-calm > item-content:activeitem-complex > item-content": {
        "borderColor": "#0a9dc7",
        "backgroundColor": "#0a9dc7"
    },
    "item-complexitem-assertive > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#ef473a",
        "color": "#fff"
    },
    "item-complexitem-assertive > item-contentactive": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexitem-assertive > item-content:active": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexitem-assertive > item-contentactiveitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexitem-assertive > item-content:activeitem-complex > item-content": {
        "borderColor": "#e42112",
        "backgroundColor": "#e42112"
    },
    "item-complexitem-balanced > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#33cd5f",
        "color": "#fff"
    },
    "item-complexitem-balanced > item-contentactive": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexitem-balanced > item-content:active": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexitem-balanced > item-contentactiveitem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexitem-balanced > item-content:activeitem-complex > item-content": {
        "borderColor": "#28a54c",
        "backgroundColor": "#28a54c"
    },
    "item-complexitem-energized > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#ffc900",
        "color": "#fff"
    },
    "item-complexitem-energized > item-contentactive": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexitem-energized > item-content:active": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexitem-energized > item-contentactiveitem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexitem-energized > item-content:activeitem-complex > item-content": {
        "borderColor": "#e6b500",
        "backgroundColor": "#e6b500"
    },
    "item-complexitem-royal > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#886aea",
        "color": "#fff"
    },
    "item-complexitem-royal > item-contentactive": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexitem-royal > item-content:active": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexitem-royal > item-contentactiveitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexitem-royal > item-content:activeitem-complex > item-content": {
        "borderColor": "#6b46e5",
        "backgroundColor": "#6b46e5"
    },
    "item-complexitem-dark > item-content": {
        "borderColor": "#111",
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "item-complexitem-dark > item-contentactive": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexitem-dark > item-content:active": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexitem-dark > item-contentactiveitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-complexitem-dark > item-content:activeitem-complex > item-content": {
        "borderColor": "#000",
        "backgroundColor": "#262626"
    },
    "item-icon-left icon": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 0,
        "height": "100%",
        "fontSize": 32,
        "left": 11
    },
    "item-icon-right icon": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 0,
        "height": "100%",
        "fontSize": 32,
        "right": 11
    },
    "item-icon-left icon:before": {
        "display": "block",
        "width": 32,
        "textAlign": "center"
    },
    "item-icon-right icon:before": {
        "display": "block",
        "width": 32,
        "textAlign": "center"
    },
    "item fill-icon": {
        "minWidth": 30,
        "minHeight": 30,
        "fontSize": 28
    },
    "item-icon-left": {
        "paddingLeft": 54
    },
    "item-complexitem-icon-left": {
        "paddingLeft": 0
    },
    "item-complexitem-icon-left item-content": {
        "paddingLeft": 54
    },
    "item-icon-right": {
        "paddingRight": 54
    },
    "item-complexitem-icon-right": {
        "paddingRight": 0
    },
    "item-complexitem-icon-right item-content": {
        "paddingRight": 54
    },
    "item-icon-leftitem-icon-right icon:first-child": {
        "right": "auto"
    },
    "item-icon-leftitem-icon-right icon:last-child": {
        "left": "auto"
    },
    "item-icon-left item-delete icon": {
        "left": "auto"
    },
    "item-icon-left icon-accessory": {
        "color": "#ccc",
        "fontSize": 16,
        "left": 3
    },
    "item-icon-right icon-accessory": {
        "color": "#ccc",
        "fontSize": 16,
        "right": 3
    },
    "item-button-left": {
        "paddingLeft": 72
    },
    "item-button-left > button": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "left": 11,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-left item-content > button": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "left": 11,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-left > button icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-left item-content > button icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-left > button > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-left item-content > button > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right": {
        "paddingRight": 80
    },
    "aitemitem-button-right": {
        "paddingRight": 80
    },
    "buttonitemitem-button-right": {
        "paddingRight": 80
    },
    "item-button-right > button": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "right": 16,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right item-content > button": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "right": 16,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right > buttons": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "right": 16,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right item-content > buttons": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 8,
        "right": 16,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right > button icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-right item-content > button icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-right > buttons icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-right item-content > buttons icon:before": {
        "position": "relative",
        "left": "auto",
        "width": "auto",
        "lineHeight": 31
    },
    "item-button-right > button > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right item-content > button > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right > buttons > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-right item-content > buttons > button": {
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "minWidth": 34,
        "minHeight": 34,
        "fontSize": 18,
        "lineHeight": 32
    },
    "item-button-leftitem-button-right button:first-child": {
        "right": "auto"
    },
    "item-button-leftitem-button-right button:last-child": {
        "left": "auto"
    },
    "item-avatar": {
        "paddingLeft": 72,
        "minHeight": 72
    },
    "item-avatar item-content": {
        "paddingLeft": 72,
        "minHeight": 72
    },
    "item-avatar-left": {
        "paddingLeft": 72,
        "minHeight": 72
    },
    "item-avatar-left item-content": {
        "paddingLeft": 72,
        "minHeight": 72
    },
    "item-avatar > img:first-child": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar item-image": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar item-content > img:first-child": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar item-content item-image": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-left > img:first-child": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-left item-image": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-left item-content > img:first-child": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-left item-content item-image": {
        "position": "absolute",
        "top": 16,
        "left": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-right": {
        "paddingRight": 72,
        "minHeight": 72
    },
    "item-avatar-right item-content": {
        "paddingRight": 72,
        "minHeight": 72
    },
    "item-avatar-right > img:first-child": {
        "position": "absolute",
        "top": 16,
        "right": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-right item-image": {
        "position": "absolute",
        "top": 16,
        "right": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-right item-content > img:first-child": {
        "position": "absolute",
        "top": 16,
        "right": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-avatar-right item-content item-image": {
        "position": "absolute",
        "top": 16,
        "right": 16,
        "maxWidth": 40,
        "maxHeight": 40,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%"
    },
    "item-thumbnail-left": {
        "paddingTop": 8,
        "paddingLeft": 106,
        "minHeight": 100
    },
    "item-thumbnail-left item-content": {
        "paddingTop": 8,
        "paddingLeft": 106,
        "minHeight": 100
    },
    "item-thumbnail-left > img:first-child": {
        "position": "absolute",
        "top": 10,
        "left": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-left item-image": {
        "position": "absolute",
        "top": 10,
        "left": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-left item-content > img:first-child": {
        "position": "absolute",
        "top": 10,
        "left": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-left item-content item-image": {
        "position": "absolute",
        "top": 10,
        "left": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-avataritem-complex": {
        "paddingTop": 0,
        "paddingLeft": 0
    },
    "item-avatar-leftitem-complex": {
        "paddingTop": 0,
        "paddingLeft": 0
    },
    "item-thumbnail-leftitem-complex": {
        "paddingTop": 0,
        "paddingLeft": 0
    },
    "item-thumbnail-right": {
        "paddingTop": 8,
        "paddingRight": 106,
        "minHeight": 100
    },
    "item-thumbnail-right item-content": {
        "paddingTop": 8,
        "paddingRight": 106,
        "minHeight": 100
    },
    "item-thumbnail-right > img:first-child": {
        "position": "absolute",
        "top": 10,
        "right": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-right item-image": {
        "position": "absolute",
        "top": 10,
        "right": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-right item-content > img:first-child": {
        "position": "absolute",
        "top": 10,
        "right": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-thumbnail-right item-content item-image": {
        "position": "absolute",
        "top": 10,
        "right": 10,
        "maxWidth": 80,
        "maxHeight": 80,
        "width": "100%",
        "height": "100%"
    },
    "item-avatar-rightitem-complex": {
        "paddingTop": 0,
        "paddingRight": 0
    },
    "item-thumbnail-rightitem-complex": {
        "paddingTop": 0,
        "paddingRight": 0
    },
    "item-image": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "item-image img:first-child": {
        "width": "100%",
        "verticalAlign": "middle"
    },
    "item-image list-img": {
        "width": "100%",
        "verticalAlign": "middle"
    },
    "item-body": {
        "overflow": "auto",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "textOverflow": "inherit",
        "whiteSpace": "normal"
    },
    "item-divider": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "minHeight": 30,
        "backgroundColor": "#f5f5f5",
        "color": "#222",
        "fontWeight": "500"
    },
    "platform-ios item-divider-platform": {
        "paddingTop": 26,
        "textTransform": "uppercase",
        "fontWeight": "300",
        "fontSize": 13,
        "backgroundColor": "#efeff4",
        "color": "#555"
    },
    "item-divider-ios": {
        "paddingTop": 26,
        "textTransform": "uppercase",
        "fontWeight": "300",
        "fontSize": 13,
        "backgroundColor": "#efeff4",
        "color": "#555"
    },
    "platform-android item-divider-platform": {
        "fontWeight": "300",
        "fontSize": 13
    },
    "item-divider-android": {
        "fontWeight": "300",
        "fontSize": 13
    },
    "item-note": {
        "float": "right",
        "color": "#aaa",
        "fontSize": 14
    },
    "item-left-editable item-content": {
        "WebkitTransitionDuration": "250ms",
        "transitionDuration": "250ms",
        "WebkitTransitionTimingFunction": "ease-in-out",
        "transitionTimingFunction": "ease-in-out",
        "WebkitTransitionProperty": "-webkit-transform",
        "MozTransitionProperty": "-moz-transform",
        "transitionProperty": "transform"
    },
    "item-right-editable item-content": {
        "WebkitTransitionDuration": "250ms",
        "transitionDuration": "250ms",
        "WebkitTransitionTimingFunction": "ease-in-out",
        "transitionTimingFunction": "ease-in-out",
        "WebkitTransitionProperty": "-webkit-transform",
        "MozTransitionProperty": "-moz-transform",
        "transitionProperty": "transform"
    },
    "list-left-editing item-left-editable item-content": {
        "WebkitTransform": "translate3d(50px, 0, 0)",
        "transform": "translate3d(50px, 0, 0)"
    },
    "item-left-editingitem-left-editable item-content": {
        "WebkitTransform": "translate3d(50px, 0, 0)",
        "transform": "translate3d(50px, 0, 0)"
    },
    "item-remove-animateng-leave": {
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms"
    },
    "item-remove-animateng-leave item-content": {
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransitionTimingFunction": "ease-in",
        "transitionTimingFunction": "ease-in",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all"
    },
    "item-remove-animateng-leave:last-of-type": {
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransitionTimingFunction": "ease-in",
        "transitionTimingFunction": "ease-in",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all"
    },
    "item-remove-animateng-leaveng-leave-active item-content": {
        "opacity": 0,
        "WebkitTransform": "translate3d(-100%, 0, 0) !important",
        "transform": "translate3d(-100%, 0, 0) !important"
    },
    "item-remove-animateng-leaveng-leave-active:last-of-type": {
        "opacity": 0
    },
    "item-remove-animateng-leaveng-leave-active ~ ion-item:not(ng-leave)": {
        "WebkitTransform": "translate3d(0, -webkit-calc(-100% + 1px), 0)",
        "transform": "translate3d(0, calc(-100% + 1px), 0)",
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.25, 0.81, 0.24, 1)",
        "transitionTimingFunction": "cubic-bezier(0.25, 0.81, 0.24, 1)",
        "WebkitTransitionProperty": "all",
        "transitionProperty": "all"
    },
    "item-left-edit": {
        "WebkitTransition": "all ease-in-out 125ms",
        "transition": "all ease-in-out 125ms",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 0,
        "width": 50,
        "height": "100%",
        "lineHeight": "100%",
        "display": "none",
        "opacity": 0,
        "WebkitTransform": "translate3d(-21px, 0, 0)",
        "transform": "translate3d(-21px, 0, 0)"
    },
    "item-left-edit button": {
        "height": "100%"
    },
    "item-left-edit buttonicon": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 0,
        "height": "100%"
    },
    "item-left-editvisible": {
        "display": "block"
    },
    "item-left-editvisibleactive": {
        "opacity": 1,
        "WebkitTransform": "translate3d(8px, 0, 0)",
        "transform": "translate3d(8px, 0, 0)"
    },
    "list-left-editing item-left-edit": {
        "WebkitTransitionDelay": "125ms",
        "transitionDelay": "125ms"
    },
    "item-delete buttonicon": {
        "color": "#ef473a",
        "fontSize": 24
    },
    "item-delete buttonicon:hover": {
        "opacity": 0.7
    },
    "item-right-edit": {
        "WebkitTransition": "all ease-in-out 250ms",
        "transition": "all ease-in-out 250ms",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 3,
        "width": 75,
        "height": "100%",
        "background": "inherit",
        "paddingLeft": 20,
        "display": "block",
        "opacity": 0,
        "WebkitTransform": "translate3d(75px, 0, 0)",
        "transform": "translate3d(75px, 0, 0)"
    },
    "item-right-edit button": {
        "minWidth": 50,
        "height": "100%"
    },
    "item-right-edit buttonicon": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": 0,
        "height": "100%",
        "fontSize": 32
    },
    "item-right-editvisible": {
        "display": "block"
    },
    "item-right-editvisibleactive": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "item-reorder buttonicon": {
        "color": "#444",
        "fontSize": 32
    },
    "item-reordering": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 9,
        "width": "100%",
        "boxShadow": "0px 0px 10px 0px #aaa"
    },
    "item-reordering item-reorder": {
        "zIndex": 9
    },
    "item-placeholder": {
        "opacity": 0.7
    },
    "item-options": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 1,
        "height": "100%"
    },
    "item-options button": {
        "height": "100%",
        "border": "none",
        "borderRadius": 0,
        "display": "inline-flex",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "WebkitAlignItems": "center",
        "MozAlignItems": "center",
        "alignItems": "center"
    },
    "item-options button:before": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "list": {
        "position": "relative",
        "paddingTop": 1,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "marginBottom": 20
    },
    "list:last-child": {
        "marginBottom": 0
    },
    "list:last-childcard": {
        "marginBottom": 40
    },
    "list-header": {
        "marginTop": 20,
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "backgroundColor": "transparent",
        "color": "#222",
        "fontWeight": "bold"
    },
    "cardlist list-item": {
        "paddingRight": 1,
        "paddingLeft": 1
    },
    "card": {
        "overflow": "hidden",
        "marginTop": 20,
        "marginRight": 10,
        "marginBottom": 20,
        "marginLeft": 10,
        "borderRadius": 2,
        "backgroundColor": "#fff",
        "paddingTop": 1,
        "paddingBottom": 1,
        "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.3)"
    },
    "list-inset": {
        "overflow": "hidden",
        "marginTop": 20,
        "marginRight": 10,
        "marginBottom": 20,
        "marginLeft": 10,
        "borderRadius": 2,
        "backgroundColor": "#fff"
    },
    "card item": {
        "borderLeft": 0,
        "borderRight": 0,
        "marginRight": 0,
        "marginLeft": 0
    },
    "card item:first-child": {
        "borderTop": 0,
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "card item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2,
        "marginBottom": -1
    },
    "padding card": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "padding list-inset": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "list-inset item:first-child": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "padding > list item:first-child": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "card item:first-child item-content": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "list-inset item:first-child item-content": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "padding > list item:first-child item-content": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "list-inset item:last-child": {
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2,
        "marginBottom": -1
    },
    "padding > list item:last-child": {
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2
    },
    "card item:last-child item-content": {
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2
    },
    "list-inset item:last-child item-content": {
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2
    },
    "padding > list item:last-child item-content": {
        "borderBottomRightRadius": 2,
        "borderBottomLeftRadius": 2
    },
    "list-inset item": {
        "marginRight": 0,
        "marginLeft": 0
    },
    "padding > list item": {
        "marginRight": 0,
        "marginLeft": 0
    },
    "padding-horizontal > list item": {
        "marginRight": 0,
        "marginLeft": 0
    },
    "card itemitem-input input": {
        "paddingRight": 44
    },
    "list-inset itemitem-input input": {
        "paddingRight": 44
    },
    "padding > list itemitem-input input": {
        "paddingRight": 44
    },
    "padding-horizontal > list itemitem-input input": {
        "paddingRight": 44
    },
    "padding-left > list item": {
        "marginLeft": 0
    },
    "padding-right > list item": {
        "marginRight": 0
    },
    "badge": {
        "backgroundColor": "transparent",
        "color": "#AAAAAA",
        "zIndex": 1,
        "display": "inline-block",
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "minWidth": 10,
        "borderRadius": 10,
        "verticalAlign": "baseline",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "fontWeight": "bold",
        "fontSize": 14,
        "lineHeight": 16
    },
    "badge:empty": {
        "display": "none"
    },
    "tabs tab-item badgebadge-light": {
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "badgebadge-light": {
        "backgroundColor": "#fff",
        "color": "#444"
    },
    "tabs tab-item badgebadge-stable": {
        "backgroundColor": "#f8f8f8",
        "color": "#444"
    },
    "badgebadge-stable": {
        "backgroundColor": "#f8f8f8",
        "color": "#444"
    },
    "tabs tab-item badgebadge-positive": {
        "backgroundColor": "#387ef5",
        "color": "#fff"
    },
    "badgebadge-positive": {
        "backgroundColor": "#387ef5",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-calm": {
        "backgroundColor": "#11c1f3",
        "color": "#fff"
    },
    "badgebadge-calm": {
        "backgroundColor": "#11c1f3",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-assertive": {
        "backgroundColor": "#ef473a",
        "color": "#fff"
    },
    "badgebadge-assertive": {
        "backgroundColor": "#ef473a",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-balanced": {
        "backgroundColor": "#33cd5f",
        "color": "#fff"
    },
    "badgebadge-balanced": {
        "backgroundColor": "#33cd5f",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-energized": {
        "backgroundColor": "#ffc900",
        "color": "#fff"
    },
    "badgebadge-energized": {
        "backgroundColor": "#ffc900",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-royal": {
        "backgroundColor": "#886aea",
        "color": "#fff"
    },
    "badgebadge-royal": {
        "backgroundColor": "#886aea",
        "color": "#fff"
    },
    "tabs tab-item badgebadge-dark": {
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "badgebadge-dark": {
        "backgroundColor": "#444",
        "color": "#fff"
    },
    "button badge": {
        "position": "relative",
        "top": -1
    },
    "slider": {
        "position": "relative",
        "visibility": "hidden",
        "overflow": "hidden"
    },
    "slider-slides": {
        "position": "relative",
        "height": "100%"
    },
    "slider-slide": {
        "position": "relative",
        "display": "block",
        "float": "left",
        "width": "100%",
        "height": "100%",
        "verticalAlign": "top"
    },
    "slider-slide-image > img": {
        "width": "100%"
    },
    "slider-pager": {
        "position": "absolute",
        "bottom": 20,
        "zIndex": 1,
        "width": "100%",
        "height": 15,
        "textAlign": "center"
    },
    "slider-pager slider-pager-page": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3,
        "width": 15,
        "color": "#000",
        "textDecoration": "none",
        "opacity": 0.3
    },
    "slider-pager slider-pager-pageactive": {
        "WebkitTransition": "opacity 0.4s ease-in",
        "transition": "opacity 0.4s ease-in",
        "opacity": 1
    },
    "slider-slideng-enter": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "slider-slideng-leave": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "slider-slideng-animate": {
        "WebkitTransition": "none !important",
        "transition": "none !important",
        "WebkitAnimation": "none 0s",
        "animation": "none 0s"
    },
    "slider-pager-pageng-enter": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "slider-pager-pageng-leave": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "slider-pager-pageng-animate": {
        "WebkitTransition": "none !important",
        "transition": "none !important",
        "WebkitAnimation": "none 0s",
        "animation": "none 0s"
    },
    "swiper-container": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "overflow": "hidden",
        "zIndex": 1
    },
    "swiper-container-no-flexbox swiper-slide": {
        "float": "left"
    },
    "swiper-container-vertical > swiper-wrapper": {
        "WebkitBoxOrient": "vertical",
        "MozBoxOrient": "vertical",
        "MsFlexDirection": "column",
        "WebkitFlexDirection": "column",
        "flexDirection": "column"
    },
    "swiper-wrapper": {
        "position": "relative",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "display": "flex",
        "WebkitTransitionProperty": "-webkit-transform",
        "MozTransitionProperty": "-moz-transform",
        "OTransitionProperty": "-o-transform",
        "MsTransitionProperty": "-ms-transform",
        "transitionProperty": "transform",
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "WebkitTransform": "translate3d(0px, 0, 0)",
        "MozTransform": "translate3d(0px, 0, 0)",
        "OTransform": "translate(0px, 0px)",
        "MsTransform": "translate3d(0px, 0, 0)",
        "transform": "translate3d(0px, 0, 0)"
    },
    "swiper-container-android swiper-slide": {
        "WebkitTransform": "translate3d(0px, 0, 0)",
        "MozTransform": "translate3d(0px, 0, 0)",
        "OTransform": "translate(0px, 0px)",
        "MsTransform": "translate3d(0px, 0, 0)",
        "transform": "translate3d(0px, 0, 0)"
    },
    "swiper-container-multirow > swiper-wrapper": {
        "WebkitBoxLines": "multiple",
        "MozBoxLines": "multiple",
        "MsFlexWrap": "wrap",
        "WebkitFlexWrap": "wrap",
        "flexWrap": "wrap"
    },
    "swiper-container-free-mode > swiper-wrapper": {
        "WebkitTransitionTimingFunction": "ease-out",
        "MozTransitionTimingFunction": "ease-out",
        "MsTransitionTimingFunction": "ease-out",
        "OTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "swiper-slide": {
        "display": "block",
        "WebkitFlexShrink": 0,
        "MsFlex": "0 0 auto",
        "flexShrink": 0,
        "width": "100%",
        "height": "100%",
        "position": "relative"
    },
    "swiper-container-autoheight": {
        "height": "auto"
    },
    "swiper-container-autoheight swiper-slide": {
        "height": "auto"
    },
    "swiper-container-autoheight swiper-wrapper": {
        "WebkitBoxAlign": "start",
        "MsFlexAlign": "start",
        "WebkitAlignItems": "flex-start",
        "alignItems": "flex-start",
        "WebkitTransitionProperty": "-webkit-transform, height",
        "MozTransitionProperty": "-moz-transform",
        "OTransitionProperty": "-o-transform",
        "MsTransitionProperty": "-ms-transform",
        "transitionProperty": "transform, height"
    },
    "swiper-container swiper-notification": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "pointerEvents": "none",
        "opacity": 0,
        "zIndex": -1000
    },
    "swiper-wp8-horizontal": {
        "MsTouchAction": "pan-y",
        "touchAction": "pan-y"
    },
    "swiper-wp8-vertical": {
        "MsTouchAction": "pan-x",
        "touchAction": "pan-x"
    },
    "swiper-button-prev": {
        "position": "absolute",
        "top": "50%",
        "width": 27,
        "height": 44,
        "marginTop": -22,
        "zIndex": 10,
        "cursor": "pointer",
        "MozBackgroundSize": "27px 44px",
        "WebkitBackgroundSize": "27px 44px",
        "backgroundSize": "27px 44px",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\")",
        "left": 10,
        "right": "auto"
    },
    "swiper-button-next": {
        "position": "absolute",
        "top": "50%",
        "width": 27,
        "height": 44,
        "marginTop": -22,
        "zIndex": 10,
        "cursor": "pointer",
        "MozBackgroundSize": "27px 44px",
        "WebkitBackgroundSize": "27px 44px",
        "backgroundSize": "27px 44px",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\")",
        "right": 10,
        "left": "auto"
    },
    "swiper-button-prevswiper-button-disabled": {
        "opacity": 0.35,
        "cursor": "auto",
        "pointerEvents": "none"
    },
    "swiper-button-nextswiper-button-disabled": {
        "opacity": 0.35,
        "cursor": "auto",
        "pointerEvents": "none"
    },
    "swiper-container-rtl swiper-button-next": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\")",
        "left": 10,
        "right": "auto"
    },
    "swiper-button-prevswiper-button-black": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-container-rtl swiper-button-nextswiper-button-black": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-button-prevswiper-button-white": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-container-rtl swiper-button-nextswiper-button-white": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-container-rtl swiper-button-prev": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\")",
        "right": 10,
        "left": "auto"
    },
    "swiper-button-nextswiper-button-black": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-container-rtl swiper-button-prevswiper-button-black": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-button-nextswiper-button-white": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-container-rtl swiper-button-prevswiper-button-white": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")"
    },
    "swiper-pagination": {
        "position": "absolute",
        "textAlign": "center",
        "WebkitTransition": "300ms",
        "MozTransition": "300ms",
        "OTransition": "300ms",
        "transition": "300ms",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "MsTransform": "translate3d(0, 0, 0)",
        "OTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "zIndex": 10
    },
    "swiper-paginationswiper-pagination-hidden": {
        "opacity": 0
    },
    "swiper-pagination-bullet": {
        "width": 8,
        "height": 8,
        "display": "inline-block",
        "borderRadius": "100%",
        "background": "#000",
        "opacity": 0.2
    },
    "buttonswiper-pagination-bullet": {
        "border": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "boxShadow": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "WebkitAppearance": "none",
        "appearance": "none"
    },
    "swiper-pagination-clickable swiper-pagination-bullet": {
        "cursor": "pointer"
    },
    "swiper-pagination-white swiper-pagination-bullet": {
        "background": "#fff"
    },
    "swiper-pagination-bullet-active": {
        "opacity": 1
    },
    "swiper-pagination-white swiper-pagination-bullet-active": {
        "background": "#fff"
    },
    "swiper-pagination-black swiper-pagination-bullet-active": {
        "background": "#000"
    },
    "swiper-container-vertical > swiper-pagination": {
        "right": 10,
        "top": "50%",
        "WebkitTransform": "translate3d(0px, -50%, 0)",
        "MozTransform": "translate3d(0px, -50%, 0)",
        "OTransform": "translate(0px, -50%)",
        "MsTransform": "translate3d(0px, -50%, 0)",
        "transform": "translate3d(0px, -50%, 0)"
    },
    "swiper-container-vertical > swiper-pagination swiper-pagination-bullet": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "display": "block"
    },
    "swiper-container-horizontal > swiper-pagination": {
        "bottom": 10,
        "left": 0,
        "width": "100%"
    },
    "swiper-container-horizontal > swiper-pagination swiper-pagination-bullet": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "swiper-container-3d": {
        "WebkitPerspective": 1200,
        "MozPerspective": 1200,
        "OPerspective": 1200,
        "perspective": 1200
    },
    "swiper-container-3d swiper-wrapper": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d"
    },
    "swiper-container-3d swiper-slide": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d"
    },
    "swiper-container-3d swiper-slide-shadow-left": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "pointerEvents": "none",
        "zIndex": 10,
        "backgroundImage": "linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)"
    },
    "swiper-container-3d swiper-slide-shadow-right": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "pointerEvents": "none",
        "zIndex": 10,
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)"
    },
    "swiper-container-3d swiper-slide-shadow-top": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "pointerEvents": "none",
        "zIndex": 10,
        "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)"
    },
    "swiper-container-3d swiper-slide-shadow-bottom": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "pointerEvents": "none",
        "zIndex": 10,
        "backgroundImage": "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)"
    },
    "swiper-container-3d swiper-cube-shadow": {
        "WebkitTransformStyle": "preserve-3d",
        "MozTransformStyle": "preserve-3d",
        "MsTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d"
    },
    "swiper-container-coverflow swiper-wrapper": {
        "MsPerspective": 1200
    },
    "swiper-container-fadeswiper-container-free-mode swiper-slide": {
        "WebkitTransitionTimingFunction": "ease-out",
        "MozTransitionTimingFunction": "ease-out",
        "MsTransitionTimingFunction": "ease-out",
        "OTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "swiper-container-fade swiper-slide": {
        "pointerEvents": "none"
    },
    "swiper-container-fade swiper-slide swiper-slide": {
        "pointerEvents": "none"
    },
    "swiper-container-fade swiper-slide-active": {
        "pointerEvents": "auto"
    },
    "swiper-container-fade swiper-slide-active swiper-slide-active": {
        "pointerEvents": "auto"
    },
    "swiper-container-cube": {
        "overflow": "visible"
    },
    "swiper-container-cube swiper-slide": {
        "pointerEvents": "none",
        "visibility": "hidden",
        "WebkitTransformOrigin": "0 0",
        "MozTransformOrigin": "0 0",
        "MsTransformOrigin": "0 0",
        "transformOrigin": "0 0",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden",
        "width": "100%",
        "height": "100%",
        "zIndex": 1
    },
    "swiper-container-cubeswiper-container-rtl swiper-slide": {
        "WebkitTransformOrigin": "100% 0",
        "MozTransformOrigin": "100% 0",
        "MsTransformOrigin": "100% 0",
        "transformOrigin": "100% 0"
    },
    "swiper-container-cube swiper-slide-active": {
        "pointerEvents": "auto",
        "visibility": "visible"
    },
    "swiper-container-cube swiper-slide-next": {
        "pointerEvents": "auto",
        "visibility": "visible"
    },
    "swiper-container-cube swiper-slide-prev": {
        "pointerEvents": "auto",
        "visibility": "visible"
    },
    "swiper-container-cube swiper-slide-next + swiper-slide": {
        "pointerEvents": "auto",
        "visibility": "visible"
    },
    "swiper-container-cube swiper-slide-shadow-top": {
        "zIndex": 0,
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "swiper-container-cube swiper-slide-shadow-bottom": {
        "zIndex": 0,
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "swiper-container-cube swiper-slide-shadow-left": {
        "zIndex": 0,
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "swiper-container-cube swiper-slide-shadow-right": {
        "zIndex": 0,
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "swiper-container-cube swiper-cube-shadow": {
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "width": "100%",
        "height": "100%",
        "background": "#000",
        "opacity": 0.6,
        "WebkitFilter": "blur(50px)",
        "filter": "blur(50px)",
        "zIndex": 0
    },
    "swiper-scrollbar": {
        "borderRadius": 10,
        "position": "relative",
        "MsTouchAction": "none",
        "background": "rgba(0, 0, 0, 0.1)"
    },
    "swiper-container-horizontal > swiper-scrollbar": {
        "position": "absolute",
        "left": "1%",
        "bottom": 3,
        "zIndex": 50,
        "height": 5,
        "width": "98%"
    },
    "swiper-container-vertical > swiper-scrollbar": {
        "position": "absolute",
        "right": 3,
        "top": "1%",
        "zIndex": 50,
        "width": 5,
        "height": "98%"
    },
    "swiper-scrollbar-drag": {
        "height": "100%",
        "width": "100%",
        "position": "relative",
        "background": "rgba(0, 0, 0, 0.5)",
        "borderRadius": 10,
        "left": 0,
        "top": 0
    },
    "swiper-scrollbar-cursor-drag": {
        "cursor": "move"
    },
    "swiper-lazy-preloader": {
        "width": 42,
        "height": 42,
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "marginLeft": -21,
        "marginTop": -21,
        "zIndex": 10,
        "WebkitTransformOrigin": "50%",
        "MozTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitAnimation": "swiper-preloader-spin 1s steps(12, end) infinite",
        "MozAnimation": "swiper-preloader-spin 1s steps(12, end) infinite",
        "animation": "swiper-preloader-spin 1s steps(12, end) infinite"
    },
    "swiper-lazy-preloader:after": {
        "display": "block",
        "content": "",
        "width": "100%",
        "height": "100%",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");  background-position: 50%;  -webkit-background-size: 100%;  background-size: 100%;  background-repeat: no-repeat; }.swiper-lazy-preloader-white:after {  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }@-webkit-keyframes swiper-preloader-spin {  100% {    -webkit-transform: rotate(360deg); } }@keyframes swiper-preloader-spin {  100% {    transform: rotate(360deg); } }ion-slides {  width: 100%;  height: 100%;  display: block; }.slide-zoom {  display: block;  width: 100%;  text-align: center; }.swiper-container {  width: 100%;  height: 100%;  padding: 0;  overflow: hidden; }.swiper-wrapper {  position: absolute;  left: 0;  top: 0;  width: 100%;  height: 100%;  padding: 0; }.swiper-slide {  width: 100%;  height: 100%;  box-sizing: border-box;   }  .swiper-slide img {    width: auto;    height: auto;    max-width: 100%;    max-height: 100%; }.scroll-refresher {  position: absolute;  top: -60px;  right: 0;  left: 0;  overflow: hidden;  margin: auto;  height: 60px; }  .scroll-refresher .ionic-refresher-content {    position: absolute;    bottom: 15px;    left: 0;    width: 100%;    color: #666666;    text-align: center;    font-size: 30px; }    .scroll-refresher .ionic-refresher-content .text-refreshing,    .scroll-refresher .ionic-refresher-content .text-pulling {      font-size: 16px;      line-height: 16px; }    .scroll-refresher .ionic-refresher-content.ionic-refresher-with-text {      bottom: 10px; }  .scroll-refresher .icon-refreshing,  .scroll-refresher .icon-pulling {    width: 100%;    -webkit-backface-visibility: hidden;    backface-visibility: hidden;    -webkit-transform-style: preserve-3d;    transform-style: preserve-3d; }  .scroll-refresher .icon-pulling {    -webkit-animation-name: refresh-spin-back;    animation-name: refresh-spin-back;    -webkit-animation-duration: 200ms;    animation-duration: 200ms;    -webkit-animation-timing-function: linear;    animation-timing-function: linear;    -webkit-animation-fill-mode: none;    animation-fill-mode: none;    -webkit-transform: translate3d(0, 0, 0) rotate(0deg);    transform: translate3d(0, 0, 0) rotate(0deg); }  .scroll-refresher .icon-refreshing,  .scroll-refresher .text-refreshing {    display: none; }  .scroll-refresher .icon-refreshing {    -webkit-animation-duration: 1.5s;    animation-duration: 1.5s; }  .scroll-refresher.active .icon-pulling:not(.pulling-rotation-disabled) {    -webkit-animation-name: refresh-spin;    animation-name: refresh-spin;    -webkit-transform: translate3d(0, 0, 0) rotate(-180deg);    transform: translate3d(0, 0, 0) rotate(-180deg); }  .scroll-refresher.active.refreshing {    -webkit-transition: -webkit-transform 0.2s;    transition: -webkit-transform 0.2s;    -webkit-transition: transform 0.2s;    transition: transform 0.2s;    -webkit-transform: scale(1, 1);    transform: scale(1, 1); }    .scroll-refresher.active.refreshing .icon-pulling,    .scroll-refresher.active.refreshing .text-pulling {      display: none; }    .scroll-refresher.active.refreshing .icon-refreshing,    .scroll-refresher.active.refreshing .text-refreshing {      display: block; }    .scroll-refresher.active.refreshing.refreshing-tail {      -webkit-transform: scale(0, 0);      transform: scale(0, 0); }.overflow-scroll > .scroll {  -webkit-overflow-scrolling: touch;  width: 100%; }  .overflow-scroll > .scroll.overscroll {    position: fixed;    right: 0;    left: 0; }.overflow-scroll.padding > .scroll.overscroll {  padding: 10px; }@-webkit-keyframes refresh-spin {  0% {    -webkit-transform: translate3d(0, 0, 0) rotate(0); }  100% {    -webkit-transform: translate3d(0, 0, 0) rotate(180deg); } }@keyframes refresh-spin {  0% {    transform: translate3d(0, 0, 0) rotate(0); }  100% {    transform: translate3d(0, 0, 0) rotate(180deg); } }@-webkit-keyframes refresh-spin-back {  0% {    -webkit-transform: translate3d(0, 0, 0) rotate(180deg); }  100% {    -webkit-transform: translate3d(0, 0, 0) rotate(0); } }@keyframes refresh-spin-back {  0% {    transform: translate3d(0, 0, 0) rotate(180deg); }  100% {    transform: translate3d(0, 0, 0) rotate(0); } }.spinner {  stroke: #444;  fill: #444; }  .spinner svg {    width: 28px;    height: 28px; }  .spinner.spinner-light {    stroke: #fff;    fill: #fff; }  .spinner.spinner-stable {    stroke: #f8f8f8;    fill: #f8f8f8; }  .spinner.spinner-positive {    stroke: #387ef5;    fill: #387ef5; }  .spinner.spinner-calm {    stroke: #11c1f3;    fill: #11c1f3; }  .spinner.spinner-balanced {    stroke: #33cd5f;    fill: #33cd5f; }  .spinner.spinner-assertive {    stroke: #ef473a;    fill: #ef473a; }  .spinner.spinner-energized {    stroke: #ffc900;    fill: #ffc900; }  .spinner.spinner-royal {    stroke: #886aea;    fill: #886aea; }  .spinner.spinner-dark {    stroke: #444;    fill: #444; }.spinner-android {  stroke: #4b8bf4; }.spinner-ios,.spinner-ios-small {  stroke: #69717d; }.spinner-spiral .stop1 {  stop-color: #fff;  stop-opacity: 0; }.spinner-spiral.spinner-light .stop1 {  stop-color: #444; }.spinner-spiral.spinner-light .stop2 {  stop-color: #fff; }.spinner-spiral.spinner-stable .stop2 {  stop-color: #f8f8f8; }.spinner-spiral.spinner-positive .stop2 {  stop-color: #387ef5; }.spinner-spiral.spinner-calm .stop2 {  stop-color: #11c1f3; }.spinner-spiral.spinner-balanced .stop2 {  stop-color: #33cd5f; }.spinner-spiral.spinner-assertive .stop2 {  stop-color: #ef473a; }.spinner-spiral.spinner-energized .stop2 {  stop-color: #ffc900; }.spinner-spiral.spinner-royal .stop2 {  stop-color: #886aea; }.spinner-spiral.spinner-dark .stop2 {  stop-color: #444; }form {  margin: 0 0 1.42857; }legend {  display: block;  margin-bottom: 1.42857;  padding: 0;  width: 100%;  border: 1px solid #ddd;  color: #444;  font-size: 21px;  line-height: 2.85714; }  legend small {    color: #f8f8f8;    font-size: 1.07143; }label,input,button,select,textarea {  font-weight: normal;  font-size: 14px;  line-height: 1.42857; }input,button,select,textarea {  font-family: \"-apple-system\", \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif; }.item-input {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  -webkit-box-align: center;  -ms-flex-align: center;  -webkit-align-items: center;  -moz-align-items: center;  align-items: center;  position: relative;  overflow: hidden;  padding: 6px 0 5px 16px; }  .item-input input {    -webkit-border-radius: 0;    border-radius: 0;    -webkit-box-flex: 1;    -webkit-flex: 1 220px;    -moz-box-flex: 1;    -moz-flex: 1 220px;    -ms-flex: 1 220px;    flex: 1 220px;    -webkit-appearance: none;    -moz-appearance: none;    appearance: none;    margin: 0;    padding-right: 24px;    background-color: transparent; }  .item-input .button .icon {    -webkit-box-flex: 0;    -webkit-flex: 0 0 24px;    -moz-box-flex: 0;    -moz-flex: 0 0 24px;    -ms-flex: 0 0 24px;    flex: 0 0 24px;    position: static;    display: inline-block;    height: auto;    text-align: center;    font-size: 16px; }  .item-input .button-bar {    -webkit-border-radius: 0;    border-radius: 0;    -webkit-box-flex: 1;    -webkit-flex: 1 0 220px;    -moz-box-flex: 1;    -moz-flex: 1 0 220px;    -ms-flex: 1 0 220px;    flex: 1 0 220px;    -webkit-appearance: none;    -moz-appearance: none;    appearance: none; }  .item-input .icon {    min-width: 14px; }.platform-windowsphone .item-input input {  flex-shrink: 1; }.item-input-inset {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  -webkit-box-align: center;  -ms-flex-align: center;  -webkit-align-items: center;  -moz-align-items: center;  align-items: center;  position: relative;  overflow: hidden;  padding: 10.66667px; }.item-input-wrapper {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  -webkit-box-flex: 1;  -webkit-flex: 1 0;  -moz-box-flex: 1;  -moz-flex: 1 0;  -ms-flex: 1 0;  flex: 1 0;  -webkit-box-align: center;  -ms-flex-align: center;  -webkit-align-items: center;  -moz-align-items: center;  align-items: center;  -webkit-border-radius: 4px;  border-radius: 4px;  padding-right: 8px;  padding-left: 8px;  background: #eee; }.item-input-inset .item-input-wrapper input {  padding-left: 4px;  height: 29px;  background: transparent;  line-height: 18px; }.item-input-wrapper ~ .button {  margin-left: 10.66667px; }.input-label {  display: table;  padding: 7px 10px 7px 0px;  max-width: 200px;  width: 35%;  color: #444;  font-size: 16px; }.placeholder-icon {  color: #aaa; }  .placeholder-icon:first-child {    padding-right: 6px; }  .placeholder-icon:last-child {    padding-left: 6px; }.item-stacked-label {  display: block;  background-color: transparent;  box-shadow: none; }  .item-stacked-label .input-label, .item-stacked-label .icon {    display: inline-block;    padding: 4px 0 0 0px;    vertical-align: middle; }.item-stacked-label input,.item-stacked-label textarea {  -webkit-border-radius: 2px;  border-radius: 2px;  padding: 4px 8px 3px 0;  border: none;  background-color: #fff; }.item-stacked-label input {  overflow: hidden;  height: 46px; }.item-select.item-stacked-label select {  position: relative;  padding: 0px;  max-width: 90%;  direction: ltr;  white-space: pre-wrap;  margin: -3px; }.item-floating-label {  display: block;  background-color: transparent;  box-shadow: none; }  .item-floating-label .input-label {    position: relative;    padding: 5px 0 0 0;    opacity: 0;    top: 10px;    -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;    transition: opacity 0.15s ease-in, top 0.2s linear; }    .item-floating-label .input-label.has-input {      opacity: 1;      top: 0;      -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;      transition: opacity 0.15s ease-in, top 0.2s linear; }textarea,input[type=\"text\"],input[type=\"password\"],input[type=\"datetime\"],input[type=\"datetime-local\"],input[type=\"date\"],input[type=\"month\"],input[type=\"time\"],input[type=\"week\"],input[type=\"number\"],input[type=\"email\"],input[type=\"url\"],input[type=\"search\"],input[type=\"tel\"],input[type=\"color\"] {  color: #111;  vertical-align: middle;  font-size: 14px;}.platform-ios input[type=\"datetime-local\"],.platform-ios input[type=\"date\"],.platform-ios input[type=\"month\"],.platform-ios input[type=\"time\"],.platform-ios input[type=\"week\"],.platform-android input[type=\"datetime-local\"],.platform-android input[type=\"date\"],.platform-android input[type=\"month\"],.platform-android input[type=\"time\"],.platform-android input[type=\"week\"] {  padding-top: 8px; }.item-input input,.item-input textarea {  width: 100%; }textarea {  padding-left: 0; }  textarea::-moz-placeholder {    color: #aaaaaa; }  textarea:-ms-input-placeholder {    color: #aaaaaa; }  textarea::-webkit-input-placeholder {    color: #aaaaaa;    text-indent: -3px; }textarea {  height: auto; }textarea,input[type=\"text\"],input[type=\"password\"],input[type=\"datetime\"],input[type=\"datetime-local\"],input[type=\"date\"],input[type=\"month\"],input[type=\"time\"],input[type=\"week\"],input[type=\"number\"],input[type=\"email\"],input[type=\"url\"],input[type=\"search\"],input[type=\"tel\"],input[type=\"color\"] {  border: 0; }input[type=\"radio\"],input[type=\"checkbox\"] {  margin: 0;  line-height: normal; }.item-input input[type=\"file\"],.item-input input[type=\"image\"],.item-input input[type=\"submit\"],.item-input input[type=\"reset\"],.item-input input[type=\"button\"],.item-input input[type=\"radio\"],.item-input input[type=\"checkbox\"] {  width: auto; }input[type=\"file\"] {  line-height: 34px; }.previous-input-focus,.cloned-text-input + input,.cloned-text-input + textarea {  position: absolute !important;  left: -9999px;  width: 200px; }input::-moz-placeholder,textarea::-moz-placeholder {  color: #aaaaaa; }input:-ms-input-placeholder,textarea:-ms-input-placeholder {  color: #aaaaaa; }input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {  color: #aaaaaa;  text-indent: 0; }input[disabled],select[disabled],textarea[disabled],input[readonly]:not(.cloned-text-input),textarea[readonly]:not(.cloned-text-input),select[readonly] {  background-color: #f8f8f8;  cursor: not-allowed; }input[type=\"radio\"][disabled],input[type=\"checkbox\"][disabled],input[type=\"radio\"][readonly],input[type=\"checkbox\"][readonly] {  background-color: transparent; }.checkbox {  position: relative;  display: inline-block;  padding: 7px 7px;  cursor: pointer; }  .checkbox input:before,  .checkbox .checkbox-icon:before {    border-color: #ddd; }  .checkbox input:checked:before,  .checkbox input:checked + .checkbox-icon:before {    background: #387ef5;    border-color: #387ef5; }.checkbox-light input:before,.checkbox-light .checkbox-icon:before {  border-color: #ddd; }.checkbox-light input:checked:before,.checkbox-light input:checked + .checkbox-icon:before {  background: #ddd;  border-color: #ddd; }.checkbox-stable input:before,.checkbox-stable .checkbox-icon:before {  border-color: #b2b2b2; }.checkbox-stable input:checked:before,.checkbox-stable input:checked + .checkbox-icon:before {  background: #b2b2b2;  border-color: #b2b2b2; }.checkbox-positive input:before,.checkbox-positive .checkbox-icon:before {  border-color: #387ef5; }.checkbox-positive input:checked:before,.checkbox-positive input:checked + .checkbox-icon:before {  background: #387ef5;  border-color: #387ef5; }.checkbox-calm input:before,.checkbox-calm .checkbox-icon:before {  border-color: #11c1f3; }.checkbox-calm input:checked:before,.checkbox-calm input:checked + .checkbox-icon:before {  background: #11c1f3;  border-color: #11c1f3; }.checkbox-assertive input:before,.checkbox-assertive .checkbox-icon:before {  border-color: #ef473a; }.checkbox-assertive input:checked:before,.checkbox-assertive input:checked + .checkbox-icon:before {  background: #ef473a;  border-color: #ef473a; }.checkbox-balanced input:before,.checkbox-balanced .checkbox-icon:before {  border-color: #33cd5f; }.checkbox-balanced input:checked:before,.checkbox-balanced input:checked + .checkbox-icon:before {  background: #33cd5f;  border-color: #33cd5f; }.checkbox-energized input:before,.checkbox-energized .checkbox-icon:before {  border-color: #ffc900; }.checkbox-energized input:checked:before,.checkbox-energized input:checked + .checkbox-icon:before {  background: #ffc900;  border-color: #ffc900; }.checkbox-royal input:before,.checkbox-royal .checkbox-icon:before {  border-color: #886aea; }.checkbox-royal input:checked:before,.checkbox-royal input:checked + .checkbox-icon:before {  background: #886aea;  border-color: #886aea; }.checkbox-dark input:before,.checkbox-dark .checkbox-icon:before {  border-color: #444; }.checkbox-dark input:checked:before,.checkbox-dark input:checked + .checkbox-icon:before {  background: #444;  border-color: #444; }.checkbox input:disabled:before,.checkbox input:disabled + .checkbox-icon:before {  border-color: #ddd; }.checkbox input:disabled:checked:before,.checkbox input:disabled:checked + .checkbox-icon:before {  background: #ddd; }.checkbox.checkbox-input-hidden input {  display: none !important; }.checkbox input,.checkbox-icon {  position: relative;  width: 28px;  height: 28px;  display: block;  border: 0;  background: transparent;  cursor: pointer;  -webkit-appearance: none; }  .checkbox input:before,  .checkbox-icon:before {    display: table;    width: 100%;    height: 100%;    border-width: 1px;    border-style: solid;    border-radius: 28px;    background: #fff;    content: ' ';    -webkit-transition: background-color 20ms ease-in-out;    transition: background-color 20ms ease-in-out; }.checkbox input:checked:before,input:checked + .checkbox-icon:before {  border-width: 2px; }.checkbox input:after,.checkbox-icon:after {  -webkit-transition: opacity 0.05s ease-in-out;  transition: opacity 0.05s ease-in-out;  -webkit-transform: rotate(-45deg);  transform: rotate(-45deg);  position: absolute;  top: 33%;  left: 25%;  display: table;  width: 14px;  height: 6px;  border: 1px solid #fff;  border-top: 0;  border-right: 0;  content: ' ';  opacity: 0; }.platform-android .checkbox-platform input:before,.platform-android .checkbox-platform .checkbox-icon:before,.checkbox-square input:before,.checkbox-square .checkbox-icon:before {  border-radius: 2px;  width: 72%;  height: 72%;  margin-top: 14%;  margin-left: 14%;  border-width: 2px; }.platform-android .checkbox-platform input:after,.platform-android .checkbox-platform .checkbox-icon:after,.checkbox-square input:after,.checkbox-square .checkbox-icon:after {  border-width: 2px;  top: 19%;  left: 25%;  width: 13px;  height: 7px; }.platform-android .item-checkbox-right .checkbox-square .checkbox-icon::after {  top: 31%; }.grade-c .checkbox input:after,.grade-c .checkbox-icon:after {  -webkit-transform: rotate(0);  transform: rotate(0);  top: 3px;  left: 4px;  border: none;  color: #fff;  content: '\\2713';  font-weight: bold;  font-size: 20px; }.checkbox input:checked:after,input:checked + .checkbox-icon:after {  opacity: 1; }.item-checkbox {  padding-left: 60px; }  .item-checkbox.active {    box-shadow: none; }.item-checkbox .checkbox {  position: absolute;  top: 50%;  right: 8px;  left: 8px;  z-index: 3;  margin-top: -21px; }.item-checkbox.item-checkbox-right {  padding-right: 60px;  padding-left: 16px; }.item-checkbox-right .checkbox input,.item-checkbox-right .checkbox-icon {  float: right; }.item-toggle {  pointer-events: none; }.toggle {  position: relative;  display: inline-block;  pointer-events: auto;  margin: -5px;  padding: 5px; }  .toggle input:checked + .track {    border-color: #4cd964;    background-color: #4cd964; }  .toggle.dragging .handle {    background-color: #f2f2f2 !important; }.toggle.toggle-light input:checked + .track {  border-color: #ddd;  background-color: #ddd; }.toggle.toggle-stable input:checked + .track {  border-color: #b2b2b2;  background-color: #b2b2b2; }.toggle.toggle-positive input:checked + .track {  border-color: #387ef5;  background-color: #387ef5; }.toggle.toggle-calm input:checked + .track {  border-color: #11c1f3;  background-color: #11c1f3; }.toggle.toggle-assertive input:checked + .track {  border-color: #ef473a;  background-color: #ef473a; }.toggle.toggle-balanced input:checked + .track {  border-color: #33cd5f;  background-color: #33cd5f; }.toggle.toggle-energized input:checked + .track {  border-color: #ffc900;  background-color: #ffc900; }.toggle.toggle-royal input:checked + .track {  border-color: #886aea;  background-color: #886aea; }.toggle.toggle-dark input:checked + .track {  border-color: #444;  background-color: #444; }.toggle input {  display: none; }.toggle .track {  -webkit-transition-timing-function: ease-in-out;  transition-timing-function: ease-in-out;  -webkit-transition-duration: 0.3s;  transition-duration: 0.3s;  -webkit-transition-property: background-color, border;  transition-property: background-color, border;  display: inline-block;  box-sizing: border-box;  width: 51px;  height: 31px;  border: solid 2px #e6e6e6;  border-radius: 20px;  background-color: #fff;  content: ' ';  cursor: pointer;  pointer-events: none; }.platform-android4_2 .toggle .track {  -webkit-background-clip: padding-box; }.toggle .handle {  -webkit-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);  transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);  -webkit-transition-property: background-color, transform;  transition-property: background-color, transform;  position: absolute;  display: block;  width: 27px;  height: 27px;  border-radius: 27px;  background-color: #fff;  top: 7px;  left: 7px;  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15); }  .toggle .handle:before {    position: absolute;    top: -4px;    left: -21.5px;    padding: 18.5px 34px;    content: \" \"; }.toggle input:checked + .track .handle {  -webkit-transform: translate3d(20px, 0, 0);  transform: translate3d(20px, 0, 0);  background-color: #fff; }.item-toggle.active {  box-shadow: none; }.item-toggle,.item-toggle.item-complex .item-content {  padding-right: 99px; }.item-toggle.item-complex {  padding-right: 0; }.item-toggle .toggle {  position: absolute;  top: 10px;  right: 16px;  z-index: 3; }.toggle input:disabled + .track {  opacity: .6; }.toggle-small .track {  border: 0;  width: 34px;  height: 15px;  background: #9e9e9e; }.toggle-small input:checked + .track {  background: rgba(0, 150, 137, 0.5); }.toggle-small .handle {  top: 2px;  left: 4px;  width: 21px;  height: 21px;  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25); }.toggle-small input:checked + .track .handle {  -webkit-transform: translate3d(16px, 0, 0);  transform: translate3d(16px, 0, 0);  background: #009689; }.toggle-small.item-toggle .toggle {  top: 19px; }.toggle-small .toggle-light input:checked + .track {  background-color: rgba(221, 221, 221, 0.5); }.toggle-small .toggle-light input:checked + .track .handle {  background-color: #ddd; }.toggle-small .toggle-stable input:checked + .track {  background-color: rgba(178, 178, 178, 0.5); }.toggle-small .toggle-stable input:checked + .track .handle {  background-color: #b2b2b2; }.toggle-small .toggle-positive input:checked + .track {  background-color: rgba(56, 126, 245, 0.5); }.toggle-small .toggle-positive input:checked + .track .handle {  background-color: #387ef5; }.toggle-small .toggle-calm input:checked + .track {  background-color: rgba(17, 193, 243, 0.5); }.toggle-small .toggle-calm input:checked + .track .handle {  background-color: #11c1f3; }.toggle-small .toggle-assertive input:checked + .track {  background-color: rgba(239, 71, 58, 0.5); }.toggle-small .toggle-assertive input:checked + .track .handle {  background-color: #ef473a; }.toggle-small .toggle-balanced input:checked + .track {  background-color: rgba(51, 205, 95, 0.5); }.toggle-small .toggle-balanced input:checked + .track .handle {  background-color: #33cd5f; }.toggle-small .toggle-energized input:checked + .track {  background-color: rgba(255, 201, 0, 0.5); }.toggle-small .toggle-energized input:checked + .track .handle {  background-color: #ffc900; }.toggle-small .toggle-royal input:checked + .track {  background-color: rgba(136, 106, 234, 0.5); }.toggle-small .toggle-royal input:checked + .track .handle {  background-color: #886aea; }.toggle-small .toggle-dark input:checked + .track {  background-color: rgba(68, 68, 68, 0.5); }.toggle-small .toggle-dark input:checked + .track .handle {  background-color: #444; }.item-radio {  padding: 0; }  .item-radio:hover {    cursor: pointer; }.item-radio .item-content {    padding-right: 64px; }.item-radio .radio-icon {    position: absolute;  top: 0;  right: 0;  z-index: 3;  visibility: hidden;  padding: 14px;  height: 100%;  font-size: 24px; }.item-radio input {    position: absolute;  left: -9999px; }  .item-radio input:checked + .radio-content .item-content {        background: #f7f7f7; }  .item-radio input:checked + .radio-content .radio-icon {        visibility: visible; }.range input {  display: inline-block;  overflow: hidden;  margin-top: 5px;  margin-bottom: 5px;  padding-right: 2px;  padding-left: 1px;  width: auto;  height: 43px;  outline: none;  background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ccc), color-stop(100%, #ccc));  background: linear-gradient(to right, #ccc 0%, #ccc 100%);  background-position: center;  background-size: 99% 2px;  background-repeat: no-repeat;  -webkit-appearance: none;   }  .range input::-moz-focus-outer {        border: 0; }  .range input::-webkit-slider-thumb {    position: relative;    width: 28px;    height: 28px;    border-radius: 50%;    background-color: #fff;    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);    cursor: pointer;    -webkit-appearance: none;    border: 0; }  .range input::-webkit-slider-thumb:before {        position: absolute;    top: 13px;    left: -2001px;    width: 2000px;    height: 2px;    background: #444;    content: ' '; }  .range input::-webkit-slider-thumb:after {        position: absolute;    top: -15px;    left: -15px;    padding: 30px;    content: ' '; }  .range input::-ms-fill-lower {    height: 2px;    background: #444; }.range {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  -webkit-box-align: center;  -ms-flex-align: center;  -webkit-align-items: center;  -moz-align-items: center;  align-items: center;  padding: 2px 11px; }  .range.range-light input::-webkit-slider-thumb:before {    background: #ddd; }  .range.range-light input::-ms-fill-lower {    background: #ddd; }  .range.range-stable input::-webkit-slider-thumb:before {    background: #b2b2b2; }  .range.range-stable input::-ms-fill-lower {    background: #b2b2b2; }  .range.range-positive input::-webkit-slider-thumb:before {    background: #387ef5; }  .range.range-positive input::-ms-fill-lower {    background: #387ef5; }  .range.range-calm input::-webkit-slider-thumb:before {    background: #11c1f3; }  .range.range-calm input::-ms-fill-lower {    background: #11c1f3; }  .range.range-balanced input::-webkit-slider-thumb:before {    background: #33cd5f; }  .range.range-balanced input::-ms-fill-lower {    background: #33cd5f; }  .range.range-assertive input::-webkit-slider-thumb:before {    background: #ef473a; }  .range.range-assertive input::-ms-fill-lower {    background: #ef473a; }  .range.range-energized input::-webkit-slider-thumb:before {    background: #ffc900; }  .range.range-energized input::-ms-fill-lower {    background: #ffc900; }  .range.range-royal input::-webkit-slider-thumb:before {    background: #886aea; }  .range.range-royal input::-ms-fill-lower {    background: #886aea; }  .range.range-dark input::-webkit-slider-thumb:before {    background: #444; }  .range.range-dark input::-ms-fill-lower {    background: #444; }.range .icon {  -webkit-box-flex: 0;  -webkit-flex: 0;  -moz-box-flex: 0;  -moz-flex: 0;  -ms-flex: 0;  flex: 0;  display: block;  min-width: 24px;  text-align: center;  font-size: 24px; }.range input {  -webkit-box-flex: 1;  -webkit-flex: 1;  -moz-box-flex: 1;  -moz-flex: 1;  -ms-flex: 1;  flex: 1;  display: block;  margin-right: 10px;  margin-left: 10px; }.range-label {  -webkit-box-flex: 0;  -webkit-flex: 0 0 auto;  -moz-box-flex: 0;  -moz-flex: 0 0 auto;  -ms-flex: 0 0 auto;  flex: 0 0 auto;  display: block;  white-space: nowrap; }.range-label:first-child {  padding-left: 5px; }.range input + .range-label {  padding-right: 5px;  padding-left: 0; }.platform-windowsphone .range input {  height: auto; }.item-select {  position: relative; }  .item-select select {    -webkit-appearance: none;    -moz-appearance: none;    appearance: none;    position: absolute;    top: 0;    bottom: 0;    right: 0;    padding: 0 48px 0 16px;    max-width: 65%;    border: none;    background: #fff;    color: #333;    text-indent: .01px;    text-overflow: '';    white-space: nowrap;    font-size: 14px;    cursor: pointer;    direction: rtl; }  .item-select select::-ms-expand {    display: none; }  .item-select option {    direction: ltr; }  .item-select:after {    position: absolute;    top: 50%;    right: 16px;    margin-top: -3px;    width: 0;    height: 0;    border-top: 5px solid;    border-right: 5px solid transparent;    border-left: 5px solid transparent;    color: #999;    content: \"\";    pointer-events: none; }  .item-select.item-light select {    background: #fff;    color: #444; }  .item-select.item-stable select {    background: #f8f8f8;    color: #444; }  .item-select.item-stable:after, .item-select.item-stable .input-label {    color: #666666; }  .item-select.item-positive select {    background: #387ef5;    color: #fff; }  .item-select.item-positive:after, .item-select.item-positive .input-label {    color: #fff; }  .item-select.item-calm select {    background: #11c1f3;    color: #fff; }  .item-select.item-calm:after, .item-select.item-calm .input-label {    color: #fff; }  .item-select.item-assertive select {    background: #ef473a;    color: #fff; }  .item-select.item-assertive:after, .item-select.item-assertive .input-label {    color: #fff; }  .item-select.item-balanced select {    background: #33cd5f;    color: #fff; }  .item-select.item-balanced:after, .item-select.item-balanced .input-label {    color: #fff; }  .item-select.item-energized select {    background: #ffc900;    color: #fff; }  .item-select.item-energized:after, .item-select.item-energized .input-label {    color: #fff; }  .item-select.item-royal select {    background: #886aea;    color: #fff; }  .item-select.item-royal:after, .item-select.item-royal .input-label {    color: #fff; }  .item-select.item-dark select {    background: #444;    color: #fff; }  .item-select.item-dark:after, .item-select.item-dark .input-label {    color: #fff; }select[multiple], select[size] {  height: auto; }progress {  display: block;  margin: 15px auto;  width: 100%; }.button {  border-color: transparent;  background-color: #f8f8f8;  color: #444;  position: relative;  display: inline-block;  margin: 0;  padding: 0 12px;  min-width: 52px;  min-height: 47px;  border-width: 1px;  border-style: solid;  border-radius: 4px;  vertical-align: top;  text-align: center;  text-overflow: ellipsis;  font-size: 16px;  line-height: 42px;  cursor: pointer; }  .button:hover {    color: #444;    text-decoration: none; }  .button.active, .button.activated {    border-color: #a2a2a2;    background-color: #e5e5e5; }  .button:after {    position: absolute;    top: -6px;    right: -6px;    bottom: -6px;    left: -6px;    content: ' '; }  .button .icon {    vertical-align: top;    pointer-events: none; }  .button .icon:before, .button.icon:before, .button.icon-left:before, .button.icon-right:before {    display: inline-block;    padding: 0 0 1px 0;    vertical-align: inherit;    font-size: 24px;    line-height: 41px;    pointer-events: none; }  .button.icon-left:before {    float: left;    padding-right: .2em;    padding-left: 0; }  .button.icon-right:before {    float: right;    padding-right: 0;    padding-left: .2em; }  .button.button-block, .button.button-full {    margin-top: 10px;    margin-bottom: 10px; }  .button.button-light {    border-color: transparent;    background-color: #fff;    color: #444; }    .button.button-light:hover {      color: #444;      text-decoration: none; }    .button.button-light.active, .button.button-light.activated {      border-color: #a2a2a2;      background-color: #fafafa; }    .button.button-light.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #ddd; }    .button.button-light.button-icon {      border-color: transparent;      background: none; }    .button.button-light.button-outline {      border-color: #ddd;      background: transparent;      color: #ddd; }      .button.button-light.button-outline.active, .button.button-light.button-outline.activated {        background-color: #ddd;        box-shadow: none;        color: #fff; }  .button.button-stable {    border-color: transparent;    background-color: #f8f8f8;    color: #444; }    .button.button-stable:hover {      color: #444;      text-decoration: none; }    .button.button-stable.active, .button.button-stable.activated {      border-color: #a2a2a2;      background-color: #e5e5e5; }    .button.button-stable.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #b2b2b2; }    .button.button-stable.button-icon {      border-color: transparent;      background: none; }    .button.button-stable.button-outline {      border-color: #b2b2b2;      background: transparent;      color: #b2b2b2; }      .button.button-stable.button-outline.active, .button.button-stable.button-outline.activated {        background-color: #b2b2b2;        box-shadow: none;        color: #fff; }  .button.button-positive {    border-color: transparent;    background-color: #387ef5;    color: #fff; }    .button.button-positive:hover {      color: #fff;      text-decoration: none; }    .button.button-positive.active, .button.button-positive.activated {      border-color: #a2a2a2;      background-color: #0c60ee; }    .button.button-positive.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #387ef5; }    .button.button-positive.button-icon {      border-color: transparent;      background: none; }    .button.button-positive.button-outline {      border-color: #387ef5;      background: transparent;      color: #387ef5; }      .button.button-positive.button-outline.active, .button.button-positive.button-outline.activated {        background-color: #387ef5;        box-shadow: none;        color: #fff; }  .button.button-calm {    border-color: transparent;    background-color: #11c1f3;    color: #fff; }    .button.button-calm:hover {      color: #fff;      text-decoration: none; }    .button.button-calm.active, .button.button-calm.activated {      border-color: #a2a2a2;      background-color: #0a9dc7; }    .button.button-calm.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #11c1f3; }    .button.button-calm.button-icon {      border-color: transparent;      background: none; }    .button.button-calm.button-outline {      border-color: #11c1f3;      background: transparent;      color: #11c1f3; }      .button.button-calm.button-outline.active, .button.button-calm.button-outline.activated {        background-color: #11c1f3;        box-shadow: none;        color: #fff; }  .button.button-assertive {    border-color: transparent;    background-color: #ef473a;    color: #fff; }    .button.button-assertive:hover {      color: #fff;      text-decoration: none; }    .button.button-assertive.active, .button.button-assertive.activated {      border-color: #a2a2a2;      background-color: #e42112; }    .button.button-assertive.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #ef473a; }    .button.button-assertive.button-icon {      border-color: transparent;      background: none; }    .button.button-assertive.button-outline {      border-color: #ef473a;      background: transparent;      color: #ef473a; }      .button.button-assertive.button-outline.active, .button.button-assertive.button-outline.activated {        background-color: #ef473a;        box-shadow: none;        color: #fff; }  .button.button-balanced {    border-color: transparent;    background-color: #33cd5f;    color: #fff; }    .button.button-balanced:hover {      color: #fff;      text-decoration: none; }    .button.button-balanced.active, .button.button-balanced.activated {      border-color: #a2a2a2;      background-color: #28a54c; }    .button.button-balanced.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #33cd5f; }    .button.button-balanced.button-icon {      border-color: transparent;      background: none; }    .button.button-balanced.button-outline {      border-color: #33cd5f;      background: transparent;      color: #33cd5f; }      .button.button-balanced.button-outline.active, .button.button-balanced.button-outline.activated {        background-color: #33cd5f;        box-shadow: none;        color: #fff; }  .button.button-energized {    border-color: transparent;    background-color: #ffc900;    color: #fff; }    .button.button-energized:hover {      color: #fff;      text-decoration: none; }    .button.button-energized.active, .button.button-energized.activated {      border-color: #a2a2a2;      background-color: #e6b500; }    .button.button-energized.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #ffc900; }    .button.button-energized.button-icon {      border-color: transparent;      background: none; }    .button.button-energized.button-outline {      border-color: #ffc900;      background: transparent;      color: #ffc900; }      .button.button-energized.button-outline.active, .button.button-energized.button-outline.activated {        background-color: #ffc900;        box-shadow: none;        color: #fff; }  .button.button-royal {    border-color: transparent;    background-color: #886aea;    color: #fff; }    .button.button-royal:hover {      color: #fff;      text-decoration: none; }    .button.button-royal.active, .button.button-royal.activated {      border-color: #a2a2a2;      background-color: #6b46e5; }    .button.button-royal.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #886aea; }    .button.button-royal.button-icon {      border-color: transparent;      background: none; }    .button.button-royal.button-outline {      border-color: #886aea;      background: transparent;      color: #886aea; }      .button.button-royal.button-outline.active, .button.button-royal.button-outline.activated {        background-color: #886aea;        box-shadow: none;        color: #fff; }  .button.button-dark {    border-color: transparent;    background-color: #444;    color: #fff; }    .button.button-dark:hover {      color: #fff;      text-decoration: none; }    .button.button-dark.active, .button.button-dark.activated {      border-color: #a2a2a2;      background-color: #262626; }    .button.button-dark.button-clear {      border-color: transparent;      background: none;      box-shadow: none;      color: #444; }    .button.button-dark.button-icon {      border-color: transparent;      background: none; }    .button.button-dark.button-outline {      border-color: #444;      background: transparent;      color: #444; }      .button.button-dark.button-outline.active, .button.button-dark.button-outline.activated {        background-color: #444;        box-shadow: none;        color: #fff; }.button-small {  padding: 2px 4px 1px;  min-width: 28px;  min-height: 30px;  font-size: 12px;  line-height: 26px; }  .button-small .icon:before, .button-small.icon:before, .button-small.icon-left:before, .button-small.icon-right:before {    font-size: 16px;    line-height: 19px;    margin-top: 3px; }.button-large {  padding: 0 16px;  min-width: 68px;  min-height: 59px;  font-size: 20px;  line-height: 53px; }  .button-large .icon:before, .button-large.icon:before, .button-large.icon-left:before, .button-large.icon-right:before {    padding-bottom: 2px;    font-size: 32px;    line-height: 51px; }.button-icon {  -webkit-transition: opacity 0.1s;  transition: opacity 0.1s;  padding: 0 6px;  min-width: initial;  border-color: transparent;  background: none; }  .button-icon.button.active, .button-icon.button.activated {    border-color: transparent;    background: none;    box-shadow: none;    opacity: 0.3; }  .button-icon .icon:before, .button-icon.icon:before {    font-size: 32px; }.button-clear {  -webkit-transition: opacity 0.1s;  transition: opacity 0.1s;  padding: 0 6px;  max-height: 42px;  border-color: transparent;  background: none;  box-shadow: none; }  .button-clear.button-clear {    border-color: transparent;    background: none;    box-shadow: none;    color: transparent; }  .button-clear.button-icon {    border-color: transparent;    background: none; }  .button-clear.active, .button-clear.activated {    opacity: 0.3; }.button-outline {  -webkit-transition: opacity 0.1s;  transition: opacity 0.1s;  background: none;  box-shadow: none; }  .button-outline.button-outline {    border-color: transparent;    background: transparent;    color: transparent; }    .button-outline.button-outline.active, .button-outline.button-outline.activated {      background-color: transparent;      box-shadow: none;      color: #fff; }.padding > .button.button-block:first-child {  margin-top: 0; }.button-block {  display: block;  clear: both; }  .button-block:after {    clear: both; }.button-full,.button-full > .button {  display: block;  margin-right: 0;  margin-left: 0;  border-right-width: 0;  border-left-width: 0;  border-radius: 0; }button.button-block,button.button-full,.button-full > button.button,input.button.button-block {  width: 100%; }a.button {  text-decoration: none; }  a.button .icon:before, a.button.icon:before, a.button.icon-left:before, a.button.icon-right:before {    margin-top: 2px; }.button.disabled,.button[disabled] {  opacity: .4;  cursor: default !important;  pointer-events: none; }.button-bar {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  -webkit-box-flex: 1;  -webkit-flex: 1;  -moz-box-flex: 1;  -moz-flex: 1;  -ms-flex: 1;  flex: 1;  width: 100%; }  .button-bar.button-bar-inline {    display: block;    width: auto;    *zoom: 1; }    .button-bar.button-bar-inline:before, .button-bar.button-bar-inline:after {      display: table;      content: \"\";      line-height: 0; }    .button-bar.button-bar-inline:after {      clear: both; }    .button-bar.button-bar-inline > .button {      width: auto;      display: inline-block;      float: left; }  .button-bar.bar-light > .button {    border-color: #ddd; }  .button-bar.bar-stable > .button {    border-color: #b2b2b2; }  .button-bar.bar-positive > .button {    border-color: #0c60ee; }  .button-bar.bar-calm > .button {    border-color: #0a9dc7; }  .button-bar.bar-assertive > .button {    border-color: #e42112; }  .button-bar.bar-balanced > .button {    border-color: #28a54c; }  .button-bar.bar-energized > .button {    border-color: #e6b500; }  .button-bar.bar-royal > .button {    border-color: #6b46e5; }  .button-bar.bar-dark > .button {    border-color: #111; }.button-bar > .button {  -webkit-box-flex: 1;  -webkit-flex: 1;  -moz-box-flex: 1;  -moz-flex: 1;  -ms-flex: 1;  flex: 1;  display: block;  overflow: hidden;  padding: 0 16px;  width: 0;  border-width: 1px 0px 1px 1px;  border-radius: 0;  text-align: center;  text-overflow: ellipsis;  white-space: nowrap; }  .button-bar > .button:before,  .button-bar > .button .icon:before {    line-height: 44px; }  .button-bar > .button:first-child {    border-radius: 4px 0px 0px 4px; }  .button-bar > .button:last-child {    border-right-width: 1px;    border-radius: 0px 4px 4px 0px; }  .button-bar > .button:only-child {    border-radius: 4px; }.button-bar > .button-small:before,.button-bar > .button-small .icon:before {  line-height: 28px; }.row {  display: -webkit-box;  display: -webkit-flex;  display: -moz-box;  display: -moz-flex;  display: -ms-flexbox;  display: flex;  padding: 5px;  width: 100%; }.row-wrap {  -webkit-flex-wrap: wrap;  -moz-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap; }.row-no-padding {  padding: 0; }  .row-no-padding > .col {    padding: 0; }.row + .row {  margin-top: -5px;  padding-top: 0; }.col {  -webkit-box-flex: 1;  -webkit-flex: 1;  -moz-box-flex: 1;  -moz-flex: 1;  -ms-flex: 1;  flex: 1;  display: block;  padding: 5px;  width: 100%; }.row-top {  -webkit-box-align: start;  -ms-flex-align: start;  -webkit-align-items: flex-start;  -moz-align-items: flex-start;  align-items: flex-start; }.row-bottom {  -webkit-box-align: end;  -ms-flex-align: end;  -webkit-align-items: flex-end;  -moz-align-items: flex-end;  align-items: flex-end; }.row-center {  -webkit-box-align: center;  -ms-flex-align: center;  -webkit-align-items: center;  -moz-align-items: center;  align-items: center; }.row-stretch {  -webkit-box-align: stretch;  -ms-flex-align: stretch;  -webkit-align-items: stretch;  -moz-align-items: stretch;  align-items: stretch; }.row-baseline {  -webkit-box-align: baseline;  -ms-flex-align: baseline;  -webkit-align-items: baseline;  -moz-align-items: baseline;  align-items: baseline; }.col-top {  -webkit-align-self: flex-start;  -moz-align-self: flex-start;  -ms-flex-item-align: start;  align-self: flex-start; }.col-bottom {  -webkit-align-self: flex-end;  -moz-align-self: flex-end;  -ms-flex-item-align: end;  align-self: flex-end; }.col-center {  -webkit-align-self: center;  -moz-align-self: center;  -ms-flex-item-align: center;  align-self: center; }.col-offset-10 {  margin-left: 10%; }.col-offset-20 {  margin-left: 20%; }.col-offset-25 {  margin-left: 25%; }.col-offset-33, .col-offset-34 {  margin-left: 33.3333%; }.col-offset-50 {  margin-left: 50%; }.col-offset-66, .col-offset-67 {  margin-left: 66.6666%; }.col-offset-75 {  margin-left: 75%; }.col-offset-80 {  margin-left: 80%; }.col-offset-90 {  margin-left: 90%; }.col-10 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 10%;  -moz-box-flex: 0;  -moz-flex: 0 0 10%;  -ms-flex: 0 0 10%;  flex: 0 0 10%;  max-width: 10%; }.col-20 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 20%;  -moz-box-flex: 0;  -moz-flex: 0 0 20%;  -ms-flex: 0 0 20%;  flex: 0 0 20%;  max-width: 20%; }.col-25 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 25%;  -moz-box-flex: 0;  -moz-flex: 0 0 25%;  -ms-flex: 0 0 25%;  flex: 0 0 25%;  max-width: 25%; }.col-33, .col-34 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 33.3333%;  -moz-box-flex: 0;  -moz-flex: 0 0 33.3333%;  -ms-flex: 0 0 33.3333%;  flex: 0 0 33.3333%;  max-width: 33.3333%; }.col-40 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 40%;  -moz-box-flex: 0;  -moz-flex: 0 0 40%;  -ms-flex: 0 0 40%;  flex: 0 0 40%;  max-width: 40%; }.col-50 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 50%;  -moz-box-flex: 0;  -moz-flex: 0 0 50%;  -ms-flex: 0 0 50%;  flex: 0 0 50%;  max-width: 50%; }.col-60 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 60%;  -moz-box-flex: 0;  -moz-flex: 0 0 60%;  -ms-flex: 0 0 60%;  flex: 0 0 60%;  max-width: 60%; }.col-66, .col-67 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 66.6666%;  -moz-box-flex: 0;  -moz-flex: 0 0 66.6666%;  -ms-flex: 0 0 66.6666%;  flex: 0 0 66.6666%;  max-width: 66.6666%; }.col-75 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 75%;  -moz-box-flex: 0;  -moz-flex: 0 0 75%;  -ms-flex: 0 0 75%;  flex: 0 0 75%;  max-width: 75%; }.col-80 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 80%;  -moz-box-flex: 0;  -moz-flex: 0 0 80%;  -ms-flex: 0 0 80%;  flex: 0 0 80%;  max-width: 80%; }.col-90 {  -webkit-box-flex: 0;  -webkit-flex: 0 0 90%;  -moz-box-flex: 0;  -moz-flex: 0 0 90%;  -ms-flex: 0 0 90%;  flex: 0 0 90%;  max-width: 90%; }@media (max-width: 567px) {  .responsive-sm {    -webkit-box-direction: normal;    -moz-box-direction: normal;    -webkit-box-orient: vertical;    -moz-box-orient: vertical;    -webkit-flex-direction: column;    -ms-flex-direction: column;    flex-direction: column; }    .responsive-sm .col, .responsive-sm .col-10, .responsive-sm .col-20, .responsive-sm .col-25, .responsive-sm .col-33, .responsive-sm .col-34, .responsive-sm .col-50, .responsive-sm .col-66, .responsive-sm .col-67, .responsive-sm .col-75, .responsive-sm .col-80, .responsive-sm .col-90 {      -webkit-box-flex: 1;      -webkit-flex: 1;      -moz-box-flex: 1;      -moz-flex: 1;      -ms-flex: 1;      flex: 1;      margin-bottom: 15px;      margin-left: 0;      max-width: 100%;      width: 100%; } }@media (max-width: 767px) {  .responsive-md {    -webkit-box-direction: normal;    -moz-box-direction: normal;    -webkit-box-orient: vertical;    -moz-box-orient: vertical;    -webkit-flex-direction: column;    -ms-flex-direction: column;    flex-direction: column; }    .responsive-md .col, .responsive-md .col-10, .responsive-md .col-20, .responsive-md .col-25, .responsive-md .col-33, .responsive-md .col-34, .responsive-md .col-50, .responsive-md .col-66, .responsive-md .col-67, .responsive-md .col-75, .responsive-md .col-80, .responsive-md .col-90 {      -webkit-box-flex: 1;      -webkit-flex: 1;      -moz-box-flex: 1;      -moz-flex: 1;      -ms-flex: 1;      flex: 1;      margin-bottom: 15px;      margin-left: 0;      max-width: 100%;      width: 100%; } }@media (max-width: 1023px) {  .responsive-lg {    -webkit-box-direction: normal;    -moz-box-direction: normal;    -webkit-box-orient: vertical;    -moz-box-orient: vertical;    -webkit-flex-direction: column;    -ms-flex-direction: column;    flex-direction: column; }    .responsive-lg .col, .responsive-lg .col-10, .responsive-lg .col-20, .responsive-lg .col-25, .responsive-lg .col-33, .responsive-lg .col-34, .responsive-lg .col-50, .responsive-lg .col-66, .responsive-lg .col-67, .responsive-lg .col-75, .responsive-lg .col-80, .responsive-lg .col-90 {      -webkit-box-flex: 1;      -webkit-flex: 1;      -moz-box-flex: 1;      -moz-flex: 1;      -ms-flex: 1;      flex: 1;      margin-bottom: 15px;      margin-left: 0;      max-width: 100%;      width: 100%; } }.hide {  display: none; }.opacity-hide {  opacity: 0; }.grade-b .opacity-hide,.grade-c .opacity-hide {  opacity: 1;  display: none; }.show {  display: block; }.opacity-show {  opacity: 1; }.invisible {  visibility: hidden; }.keyboard-open .hide-on-keyboard-open {  display: none; }.keyboard-open .tabs.hide-on-keyboard-open + .pane .has-tabs,.keyboard-open .bar-footer.hide-on-keyboard-open + .pane .has-footer {  bottom: 0; }.inline {  display: inline-block; }.disable-pointer-events {  pointer-events: none; }.enable-pointer-events {  pointer-events: auto; }.disable-user-behavior {  -webkit-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  -webkit-touch-callout: none;  -webkit-tap-highlight-color: transparent;  -webkit-tap-highlight-color: transparent;  -webkit-user-drag: none;  -ms-touch-action: none;  -ms-content-zooming: none; }.click-block {  position: absolute;  top: 0;  right: 0;  bottom: 0;  left: 0;  opacity: 0;  z-index: 99999;  -webkit-transform: translate3d(0, 0, 0);  transform: translate3d(0, 0, 0);  overflow: hidden; }.click-block-hide {  -webkit-transform: translate3d(-9999px, 0, 0);  transform: translate3d(-9999px, 0, 0); }.no-resize {  resize: none; }.block {  display: block;  clear: both; }  .block:after {    display: block;    visibility: hidden;    clear: both;    height: 0;    content: \".\"; }.full-image {  width: 100%; }.clearfix {  *zoom: 1; }  .clearfix:before, .clearfix:after {    display: table;    content: \"\";    line-height: 0; }  .clearfix:after {    clear: both; }.padding {  padding: 10px; }.padding-top,.padding-vertical {  padding-top: 10px; }.padding-right,.padding-horizontal {  padding-right: 10px; }.padding-bottom,.padding-vertical {  padding-bottom: 10px; }.padding-left,.padding-horizontal {  padding-left: 10px; }.iframe-wrapper {  position: fixed;  -webkit-overflow-scrolling: touch;  overflow: scroll; }  .iframe-wrapper iframe {    height: 100%;    width: 100%; }.rounded {  border-radius: 4px; }.light, a.light {  color: #fff"
    },
    "light-bg": {
        "backgroundColor": "#fff"
    },
    "light-border": {
        "borderColor": "#ddd"
    },
    "stable": {
        "color": "#f8f8f8"
    },
    "astable": {
        "color": "#f8f8f8"
    },
    "stable-bg": {
        "backgroundColor": "#f8f8f8"
    },
    "stable-border": {
        "borderColor": "#b2b2b2"
    },
    "positive": {
        "color": "#387ef5"
    },
    "apositive": {
        "color": "#387ef5"
    },
    "positive-bg": {
        "backgroundColor": "#387ef5"
    },
    "positive-border": {
        "borderColor": "#0c60ee"
    },
    "calm": {
        "color": "#11c1f3"
    },
    "acalm": {
        "color": "#11c1f3"
    },
    "calm-bg": {
        "backgroundColor": "#11c1f3"
    },
    "calm-border": {
        "borderColor": "#0a9dc7"
    },
    "assertive": {
        "color": "#ef473a"
    },
    "aassertive": {
        "color": "#ef473a"
    },
    "assertive-bg": {
        "backgroundColor": "#ef473a"
    },
    "assertive-border": {
        "borderColor": "#e42112"
    },
    "balanced": {
        "color": "#33cd5f"
    },
    "abalanced": {
        "color": "#33cd5f"
    },
    "balanced-bg": {
        "backgroundColor": "#33cd5f"
    },
    "balanced-border": {
        "borderColor": "#28a54c"
    },
    "energized": {
        "color": "#ffc900"
    },
    "aenergized": {
        "color": "#ffc900"
    },
    "energized-bg": {
        "backgroundColor": "#ffc900"
    },
    "energized-border": {
        "borderColor": "#e6b500"
    },
    "royal": {
        "color": "#886aea"
    },
    "aroyal": {
        "color": "#886aea"
    },
    "royal-bg": {
        "backgroundColor": "#886aea"
    },
    "royal-border": {
        "borderColor": "#6b46e5"
    },
    "dark": {
        "color": "#444"
    },
    "adark": {
        "color": "#444"
    },
    "dark-bg": {
        "backgroundColor": "#444"
    },
    "dark-border": {
        "borderColor": "#111"
    },
    "[collection-repeat]": {
        "left": "0 !important",
        "top": "0 !important",
        "position": "absolute !important",
        "zIndex": 1
    },
    "collection-repeat-container": {
        "position": "relative",
        "zIndex": 1
    },
    "collection-repeat-after-container": {
        "zIndex": 0,
        "display": "block"
    },
    "collection-repeat-after-containerhorizontal": {
        "display": "inline-block"
    },
    "[ng\\:cloak]": {
        "display": "none !important"
    },
    "[ng-cloak]": {
        "display": "none !important"
    },
    "[data-ng-cloak]": {
        "display": "none !important"
    },
    "[x-ng-cloak]": {
        "display": "none !important"
    },
    "ng-cloak": {
        "display": "none !important"
    },
    "x-ng-cloak": {
        "display": "none !important"
    },
    "ng-hide:not(ng-hide-animate)": {
        "display": "none !important"
    },
    "platform-iosplatform-cordova:not(fullscreen) bar-header:not(bar-subheader)": {
        "height": 64
    },
    "platform-iosplatform-cordova:not(fullscreen) bar-header:not(bar-subheader)item-input-inset item-input-wrapper": {
        "marginTop": "19px !important"
    },
    "platform-iosplatform-cordova:not(fullscreen) bar-header:not(bar-subheader) > *": {
        "marginTop": 20
    },
    "platform-iosplatform-cordova:not(fullscreen) tabs-top > tabs": {
        "top": 64
    },
    "platform-iosplatform-cordova:not(fullscreen) tabstabs-top": {
        "top": 64
    },
    "platform-iosplatform-cordova:not(fullscreen) has-header": {
        "top": 64
    },
    "platform-iosplatform-cordova:not(fullscreen) bar-subheader": {
        "top": 64
    },
    "platform-iosplatform-cordova:not(fullscreen) has-subheader": {
        "top": 108
    },
    "platform-iosplatform-cordova:not(fullscreen) has-headerhas-tabs-top": {
        "top": 113
    },
    "platform-iosplatform-cordova:not(fullscreen) has-headerhas-subheaderhas-tabs-top": {
        "top": 157
    },
    "platform-iosplatform-cordova popover bar-header:not(bar-subheader)": {
        "height": 44
    },
    "platform-iosplatform-cordova popover bar-header:not(bar-subheader)item-input-inset item-input-wrapper": {
        "marginTop": -1
    },
    "platform-iosplatform-cordova popover bar-header:not(bar-subheader) > *": {
        "marginTop": 0
    },
    "platform-iosplatform-cordova popover has-header": {
        "top": 44
    },
    "platform-iosplatform-cordova popover bar-subheader": {
        "top": 44
    },
    "platform-iosplatform-cordova popover has-subheader": {
        "top": 88
    },
    "platform-iosplatform-cordovastatus-bar-hide": {
        "marginBottom": 20
    },
    "platform-c:not(enable-transitions) *": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "slide-in-up": {
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "slide-in-upng-enter": {
        "WebkitTransition": "all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms",
        "transition": "all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms"
    },
    "slide-in-up > ng-enter": {
        "WebkitTransition": "all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms",
        "transition": "all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms"
    },
    "slide-in-upng-enter-active": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "slide-in-up > ng-enter-active": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "slide-in-upng-leave": {
        "WebkitTransition": "all ease-in-out 250ms",
        "transition": "all ease-in-out 250ms"
    },
    "slide-in-up > ng-leave": {
        "WebkitTransition": "all ease-in-out 250ms",
        "transition": "all ease-in-out 250ms"
    },
    "[nav-view-transition=\"ios\"] [nav-view=\"entering\"]": {
        "WebkitTransitionDuration": "500ms",
        "transitionDuration": "500ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "transitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "WebkitTransitionProperty": "opacity, -webkit-transform, box-shadow",
        "transitionProperty": "opacity, transform, box-shadow"
    },
    "[nav-view-transition=\"ios\"] [nav-view=\"leaving\"]": {
        "WebkitTransitionDuration": "500ms",
        "transitionDuration": "500ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "transitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "WebkitTransitionProperty": "opacity, -webkit-transform, box-shadow",
        "transitionProperty": "opacity, transform, box-shadow"
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"]": {
        "backgroundColor": "#000"
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"back\"]": {
        "backgroundColor": "#000"
    },
    "[nav-view-transition=\"ios\"] [nav-view=\"active\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"entering\"]": {
        "zIndex": 2
    },
    "[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"]": {
        "zIndex": 2
    },
    "[nav-bar-transition=\"ios\"] title": {
        "WebkitTransitionDuration": "500ms",
        "transitionDuration": "500ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "transitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "WebkitTransitionProperty": "opacity, -webkit-transform",
        "transitionProperty": "opacity, transform"
    },
    "[nav-bar-transition=\"ios\"] buttons": {
        "WebkitTransitionDuration": "500ms",
        "transitionDuration": "500ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "transitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "WebkitTransitionProperty": "opacity, -webkit-transform",
        "transitionProperty": "opacity, transform"
    },
    "[nav-bar-transition=\"ios\"] back-text": {
        "WebkitTransitionDuration": "500ms",
        "transitionDuration": "500ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "transitionTimingFunction": "cubic-bezier(0.36, 0.66, 0.04, 1)",
        "WebkitTransitionProperty": "opacity, -webkit-transform",
        "transitionProperty": "opacity, transform"
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"active\"]": {
        "zIndex": 10
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"entering\"]": {
        "zIndex": 10
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"active\"] bar": {
        "background": "transparent"
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"entering\"] bar": {
        "background": "transparent"
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"cached\"]": {
        "display": "block"
    },
    "[nav-bar-transition=\"ios\"] [nav-bar=\"cached\"] header-item": {
        "display": "none"
    },
    "[nav-view-transition=\"android\"] [nav-view=\"entering\"]": {
        "WebkitTransitionDuration": "200ms",
        "transitionDuration": "200ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "transitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "WebkitTransitionProperty": "-webkit-transform",
        "transitionProperty": "transform"
    },
    "[nav-view-transition=\"android\"] [nav-view=\"leaving\"]": {
        "WebkitTransitionDuration": "200ms",
        "transitionDuration": "200ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "transitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "WebkitTransitionProperty": "-webkit-transform",
        "transitionProperty": "transform"
    },
    "[nav-view-transition=\"android\"] [nav-view=\"active\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"]": {
        "zIndex": 3
    },
    "[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"entering\"]": {
        "zIndex": 2
    },
    "[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"]": {
        "zIndex": 2
    },
    "[nav-bar-transition=\"android\"] title": {
        "WebkitTransitionDuration": "200ms",
        "transitionDuration": "200ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "transitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity"
    },
    "[nav-bar-transition=\"android\"] buttons": {
        "WebkitTransitionDuration": "200ms",
        "transitionDuration": "200ms",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "transitionTimingFunction": "cubic-bezier(0.4, 0.6, 0.2, 1)",
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity"
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"active\"]": {
        "zIndex": 10
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"entering\"]": {
        "zIndex": 10
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"active\"] bar": {
        "background": "transparent"
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"entering\"] bar": {
        "background": "transparent"
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"cached\"]": {
        "display": "block"
    },
    "[nav-bar-transition=\"android\"] [nav-bar=\"cached\"] header-item": {
        "display": "none"
    },
    "[nav-swipe=\"fast\"] [nav-view]": {
        "WebkitTransitionDuration": "50ms",
        "transitionDuration": "50ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"fast\"] title": {
        "WebkitTransitionDuration": "50ms",
        "transitionDuration": "50ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"fast\"] buttons": {
        "WebkitTransitionDuration": "50ms",
        "transitionDuration": "50ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"fast\"] back-text": {
        "WebkitTransitionDuration": "50ms",
        "transitionDuration": "50ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"slow\"] [nav-view]": {
        "WebkitTransitionDuration": "160ms",
        "transitionDuration": "160ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"slow\"] title": {
        "WebkitTransitionDuration": "160ms",
        "transitionDuration": "160ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"slow\"] buttons": {
        "WebkitTransitionDuration": "160ms",
        "transitionDuration": "160ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-swipe=\"slow\"] back-text": {
        "WebkitTransitionDuration": "160ms",
        "transitionDuration": "160ms",
        "WebkitTransitionTimingFunction": "linear",
        "transitionTimingFunction": "linear"
    },
    "[nav-view=\"cached\"]": {
        "display": "none"
    },
    "[nav-bar=\"cached\"]": {
        "display": "none"
    },
    "[nav-view=\"stage\"]": {
        "opacity": 0,
        "WebkitTransitionDuration": 0,
        "transitionDuration": 0
    },
    "[nav-bar=\"stage\"] title": {
        "position": "absolute",
        "opacity": 0,
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s"
    },
    "[nav-bar=\"stage\"] buttons": {
        "position": "absolute",
        "opacity": 0,
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s"
    },
    "[nav-bar=\"stage\"] back-text": {
        "position": "absolute",
        "opacity": 0,
        "WebkitTransitionDuration": "0s",
        "transitionDuration": "0s"
    }
});