// ==UserScript==
// @name         Google WebApps: Window Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://messages.google.com/web/*
// @include      https://voice.google.com/*
// @run-at       document-end

// ==/UserScript==

var css = [
    ".q2hAhb-RZ063d,", //conversation header for Google Voice
    "mws-header",// conversation header for Google Messages
    "{",
    "background: -moz-linear-gradient(top,  rgba(42,43,46,1) 0%,  rgba(32,33,36,0.96) 100%) !important;",
    "background: -webkit-linear-gradient(top,  rgba(42,43,46,1) 0%,  rgba(32,33,36,0.96) 100%) !important;",
    "background: linear-gradient(to bottom,  rgba(42,43,46,1) 0%,  rgba(32,33,36,0.96) 100%) !important;",
    "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a2b2e', endColorstr='#f5202124',GradientType=0 ) !important;",
    "}",


].join("\n");

setTimeout(() => { //delay block
    if (document.querySelector("meta[name='theme-color']") != null) { //if a meta tag already exists
        console.log("meta theme-color found.");

        let metaThemeColor = document.querySelector("meta[name='theme-color']");
        metaThemeColor.setAttribute("content", "#2A2B2E");
        console.log("changed theme-color to: "+metaThemeColor.getAttribute("content"));
    }
    else { //if there is no meta tag
        console.log("meta theme-color NOT found.");
        var meta = document.createElement('meta');
        meta.setAttribute("name", "theme-color");
        meta.setAttribute("content", "#2A2B2E");
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}, 3000); //delay block


if (typeof GM_addStyle != "undefined") {GM_addStyle(css);} else if (typeof PRO_addStyle != "undefined") {PRO_addStyle(css);} else if (typeof addStyle != "undefined") {addStyle(css);} else {var node = document.createElement("style");node.type = "text/css";node.appendChild(document.createTextNode(css));var heads = document.getElementsByTagName("head");if (heads.length > 0) {heads[0].appendChild(node);} else {document.documentElement.appendChild(node);}}