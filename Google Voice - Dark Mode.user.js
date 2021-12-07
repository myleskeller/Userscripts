// ==UserScript==
// @name          Google Voice: Dark Mode
// @namespace     http://userstyles.org
// @description	  Material dark theme for Google Voice heavily influenced by Google Messages. Currently functioning as of 2022.
// @author        Myles Keller
// @homepage
// @include       http://voice.google.com/*
// @include       https://voice.google.com/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==


var css = [
    // VARS //////////////////////////////////////////////////////////////////////////////////////////////////////////
    ":root {",
    //incoming sms bubble
    "--incoming-sms-bg: #31343a;", //rename at some point
    //outgoing sms bubble; maybe also badge and selected nav icon
    "--outgoing-sms-bg: #004d40;", //should be the same apparent lightness/saturation as the blue color in messages
    //too light to contrast with text color? "--outgoing-sms-bg: #006B5F;", //should be the same apparent lightness/saturation as the blue color in messages
    //primary background
    "--main-bg: #202124;",
    //nav & convo background
    "--nav-bg: #2a2b2e;",
    // menu bg
    "--menu-bg: #404243;",
    // selected item bg
    "--selected-bg: #37373a;",
    // hover item bg
    "--hover-bg: #3c3d41;",
    // input textarea
    "--input-bg-color: #3c4043;",
    // header/subtitle text color
    "--input-color: #e8eaed;",
    // body text color
    "--conv-snippet-color: #9aa0a6;",
    //icon color
    "--icon-button-color: #dadce0;",
    //nav border color
    "--main-nav-host-border-color: #202124;",
    //settings border color
    "--setting-border-color: #3c4043;",
    // input shadow
    "--input-shadow: 0 1px 5px 0 rgba(0,0,0,0.15),0 4px 4px 0 rgba(0,0,0,0.1),0 -0.1px 3px 0 rgba(0,0,0,0.08);",
    // header shadow
    "--header-back-box-shadow: 0 2px 6px 0 rgba(0,0,0,0.45);",
    "}",



    // TEXT //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //input placeholder text
    "::placeholder, ::-webkit-input-placeholder {",
    "color: #ffffff !important;",
    "opacity: 0.26 !important;", //let's base all off of the chat input from messages for now.
    "}",
    //chat; same thing for disabled icons; x == element to affect
    "textarea[aria-label='Type a message']::placeholder,",
    "textarea[aria-label='Type a message']::-webkit-input-placeholder",
    "{",
    "  opacity: 0.28 !important;",
    "}",
    //header text
    ".gvPageRoot md-content, .gvPageRoot,", //root text
    ".gvPageRoot .gv-inbox-summary .greeting, .gvPageRoot .gv-inbox-summary .numberless-subhead,", //welcome
    ".gmat-subtitle-2,",
    ".grey-900,",
    ".grey-700,",
    ".gvPageRoot .call-as-label,", //call as label
    ".gvPageRoot .name,", //contact names in calls
    ".thread-info,", ////contact name font in recent calls
    ".Bqxti-VCkuzd, .Bqxti-VCkuzd a,", //message bubbles
    //settings
    "div[gv-test-id='linked-device-label'],",
    ".gvPageRoot .header,",//headers
    ".gvPageRoot .internalHeader,",//internal headers
    ".gvPageRoot .notificationText,",//notification text
    "gv-settings-section mat-icon.mat-icon.notranslate.mat-icon-no-color,",//right arrow
    ".gb_Uc.gb_Vc,",//settings page header
    ".mat-option-text,",//dropdown menu items
    ".mat-select-value",//values selected in input boxes
    "{",
    "color: var(--input-color) !important;",
    "}",
    //body text
    "div[gv-test-id*='-time-stamp'],",//timestamp
    ".gvPageRoot .gv-inbox-summary .numberless-status, .gvPageRoot .gv-inbox-summary .status,",//welcome subtitle
    ".latest-item-details,", //call timestamps
    ".gvPageRoot .details,", //call details
    ".gvPageRoot .caption,", //call number letter translations
    ".gvPageRoot .internalSubheader,",
    ".gvPageRoot .subheader,",
    ".gvPageRoot .device-details,",
    ".gvPageRoot .no-devices,",
    ".gvPageRoot .metadata,",
    ".gmat-body-2",
    "{",
    "color: var(--conv-snippet-color) !important;",
    "}",
    //icons
    ".gmat-nav-list .gmat-nav-list-item .mat-icon,", //most icons
    ".gmat-nav-list .gmat-nav-list-item,",//nav list items
    ".mat-icon.mat-accent, .mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent,", //"accent" icons
    ".gb_pa svg, .gb_Ac svg, .gb_Wc .gb_Zd, .gb_Mc .gb_Zd", //header nav icons & text
    "{",
    "color: var(--icon-button-color) !important;",
    "}",
    //disabled icons
    ".mat-button.mat-primary.mat-button-disabled, .mat-button.mat-accent.mat-button-disabled, .mat-button.mat-warn.mat-button-disabled, .mat-button.mat-button-disabled.mat-button-disabled, .mat-icon-button.mat-primary.mat-button-disabled, .mat-icon-button.mat-accent.mat-button-disabled, .mat-icon-button.mat-warn.mat-button-disabled, .mat-icon-button.mat-button-disabled.mat-button-disabled, .mat-stroked-button.mat-primary.mat-button-disabled, .mat-stroked-button.mat-accent.mat-button-disabled, .mat-stroked-button.mat-warn.mat-button-disabled, .mat-stroked-button.mat-button-disabled.mat-button-disabled",
    "{",
    "color: #ffffff !important;",
    "opacity: 0.26 !important;",
    "}",
    //white text
    ".gvPageRoot .phone-number-details,",
    "div[aria-label*='Unread.'] > gv-call-thread > div > .latest-item-details,", //unread call time
    "div[gv-a11y-grid-cell]",
    "{",
    "color: #ffffff !important;",
    "}",
    //hyperlinks
    ".gvPageRoot .standalone-link,",
    ".gvPageRoot .learn-more-link,",
    ".gvPageRoot .group-title,", //"all contacts" in calls
    ".gvPageRoot h3.sectionTitle",//section titles
    "{",
    "color: #00796b !important;", //color of badges
    "}",



    // BACKGROUND ////////////////////////////////////////////////////////////////////////////////////////////////////

    //body, html
    "body { background-color: var(--main-bg) !important; }",//prevents white boxes on page initial load
    "body.md-default-theme, html.md-default-theme, html,",
    ".aKQtkf-tJHJj,",//settings billing history
    ".GYQtq-JjL0qc", //to override explicit style for md-content
    "{",
    "background-color: var(--main-bg);",
    "}",
    //most backgrounds that should at lest start as dark
    "md-content",
    "{",
    "background-color: var(--main-bg) !important;",
    "}",
    //header
    "#gb",
    "{",
    "background-color: var(--main-bg) !important;",
    "}",
    //banners (rarely occur)
    "gvAppBannerContainer",
    "{",
    "background-color: var(--main-bg) !important;",
    "}",
    //message thread details
    "gv-thread-details",
    "{",
    "background-color: var(--main-bg) !important;",
    "}",
    //conversation list
    "div[ng-class='::ctrl.Css.CONVERSATION_LIST']",
    "{",
    "background-color: var(--nav-bg) !important;",
    "}",
    //side nav
    "gv-side-nav",
    "{",
    "background-color: var(--nav-bg) !important;",
    "}",
    //outgoing message
    ".Bqxti-VCkuzd, .Bqxti-VCkuzd a",
    "{",
    "background-color: var(--outgoing-sms-bg);",
    "}",
    //incoming message
    ".Bqxti-MJZihc.Bqxti-VCkuzd, .Bqxti-MJZihc.Bqxti-VCkuzd a",
    "{",
    "background-color: var(--incoming-sms-bg);",
    "}",
    //image message
    ".d8IJmb-HiaYvf",
    "{",
    "background-color: transparent !important;",
    "}",
    //selected bodies
    "div[aria-selected='true'],",
    "li > gv-thread > .container:focus, li > gv-thread > .container.active",
    //"li .container:focus",
    "{",
    "background-color: var(--selected-bg) !important;",
    "}",
    //hovered items
    "gv-thread-item > div:hover,",
    "li > gv-thread > .container:hover, li > gv-thread > .container.hovering",
    "{",
    "background-color: var(--hover-bg) !important;",
    "}",
    //call column
    "gv-call-sidebar > div[aria-label='Call panel'],",//call sidebar parent
    "gv-call-sidebar > div > gv-in-call-ng2 > section,", //actual in-call screen
    "gv-dialpad-toggle > button", //"hide keypad" footer
    "{",
    "background-color: var(--main-bg) !important;",
    "border-width: 0 !important;",
    "}",
    //*active* call column
    ".gvPageRoot [_nghost-opw-c260] .root[_ngcontent-opw-c260]",
    "{",
    "background-color: var(--main-bg) !important;",
    "}",
    //menu
    "md-menu-content.md-default-theme, md-menu-content,", //hamburger menu
    ".gb_Ne, .gb_9e", //search dropdown
    "{",
    "background-color: var(--menu-bg) !important;",
    "}",
    //audio panel
    ".full-panel",
    "{",
    "background-color: var(--menu-bg) !important;",
    "}",
    //lists
    "div[role='listbox']",
    "{",
    "background-color: var(--menu-bg) !important;",
    "}",
    //volume ripple
    ".gvPageRoot [_nghost-opw-c44] .inner-circle[_ngcontent-opw-c44],",
    ".gvPageRoot [_nghost-arq-c44] .inner-circle[_ngcontent-arq-c44],", //actual volume
    "{",
    "background-color: var(--outgoing-sms-bg) !important;",
    "}",
    ".gvPageRoot [_nghost-opw-c44] .outer-circle[_ngcontent-opw-c44],",
    ".gvPageRoot [_nghost-arq-c44] .outer-circle[_ngcontent-arq-c44]", //periodic radar ping thing
    "{",
    "border: 2px solid var(--outgoing-sms-bg) !important;",
    "}",
    //conversation header
    "div[ng-class='::ctrl.Css.MESSAGE_HEADER']",
    "{",
    "border-bottom: 0px !important;",
    "box-shadow: var(--header-back-box-shadow) !important;",
    "z-index: 1;",
    "}",
    ".mat-slide-toggle-bar",//slider background color
    "{",
    "background-color: #b9b9b9;",
    "}",




    // FONT //////////////////////////////////////////////////////////////////////////////////////////////////////////

    //subtitle font
    "gv-annotation[gv-test-id='item-contact'],", //contact name font
    ".gvPageRoot .name,", //contact name font in calls
    ".thread-info,", ////contact name font in recent calls
    ".gmat-subtitle-2",
    "{",
    "font: 15px/20px var(--headline-8-font-family,'Google Sans',Roboto,arial,sans-serif,'NotoColorEmoji','apple color emoji','windows emoji','windows symbol') !important;",
    "}",
    //body font
    ".latest-item-details,",
    ".gmat-body-2",
    "{",
    "font: 14px/20px Roboto,Helvetica Neue,sans-serif,NotoColorEmoji,apple color emoji,windows emoji,windows symbol !important;",
    "}",
    //font of UNREAD conversation contact name
    "div[aria-label*='Unread.'] > gv-call-thread > div,",
    //"div[aria-label*='Unread.'] > gv-call-thread > div > .latest-item-details,",
    "gv-thread-item div[aria-label*='Unread.'], div[aria-label*='Unread.'] gv-annotation[gv-test-id='item-contact']",
    "{",
    "font-weight: 700 !important;",
    "}",
    //font of UNREAD conversation snippet
    "gv-thread-item div[aria-label*='Unread.'] gv-annotation[gv-test-id='text-message-content']",
    "{",
    "font: 14px/20px Roboto,Helvetica Neue,sans-serif,NotoColorEmoji,apple color emoji,windows emoji,windows symbol !important;",
    "font-weight: 700 !important;",
    "}",
    //font of avatar letter text
    "div.monogram.ng-star-inserted",
    "{",
    "font-family: var(--headline-8-font-family,'Google Sans',Roboto,arial,sans-serif,'NotoColorEmoji','apple color emoji','windows emoji','windows symbol') !important;",
    "font-weight: 700 !important;",
    "}",
    //conversation title
    "p[gv-test-id='conversation-title']",
    "{",
    "font: 400 18px/24px var(--headline-6-font-family,'Google Sans',Roboto,arial,sans-serif,'NotoColorEmoji','apple color emoji','windows emoji','windows symbol') !important;",
    "}",



    // SPECIAL ///////////////////////////////////////////////////////////////////////////////////////////////////////

    //invert base color of call button in call menu
    "button.call-button",
    "{",
    "background-color: rgba(255,255,255,.12) !important;",
    "color: rgba(255,255,255,.38) !important;",
    "}",
    //make form dropdowns solid color
    ".mat-form-field-appearance-outline .mat-form-field-wrapper",
    "{",
    "background-color: var(--menu-bg) !important;",
    "}",
    ".mat-form-field-appearance-outline .mat-form-field-outline, .mat-form-field-appearance-outline .mat-form-field-outline-thick",
    "{",
    "color: transparent !important;",
    "}",
    //remove non-horizontal lines from block-containers
    ".block-container",
    "{",
    "border-color: transparent !important;",
    "}",
    //make dividers go away
    "mat-divider:not(gv-settings-view mat-divider)", //but keep them on the settings page
    "{",
    "display: none !important;",
    "}",
    //active nav list item
    ".gmat-nav-list .gmat-nav-list-item.gmat-list-item-active, .gmat-nav-list .gmat-static-nav-list-item.gmat-list-item-active",
    "{",
    "background-color: var(--outgoing-sms-bg) !important;",
    "}",
    ".gmat-nav-list-item.gmat-list-item-active .mat-icon svg,", //active navlist icon
    ".gvPageRoot .unread .navItemLabel", //unread navlist item
    "{",
    "color: #ffffff !important;",
    "}",
    //hide conversation subtitle (like google messages)
    ".uM2Vn-VdSJob",
    "{",
    "display: none !important;",
    "}",
    //bring conversation list above header shadow
    "div[ng-class='::ctrl.Css.CONVERSATION_LIST']",
    "{",
    "z-index: 2;",
    "}",
    //hiding shadows and borders
    ".q2hAhb-RZ063d",
    "{",
    "border-bottom: 0px !important;",
    "border-left: 1px solid rgba(0,0,0,0.03125);",
    "}",
    //call sidebar parent
    "gv-call-sidebar > div[aria-label='Call panel']",
    "{",
    // "box-shadow: 0 3px 6px 2px rgba(0,0,0,0.15) !important;",
    "box-shadow: none !important;",
    "border-right: 0px !important;",
    "}",
    ".dialpad-container",
    "{",
    "box-shadow: none !important;",
    "}",
    //adding faint border to conversation to add depth
    "div[ng-class='::ctrl.Css.LIST_CONTAINER'],",
    "div[ng-if='ctrl.shouldShowMessageEntry()']",
    "{",
    "border-left: 1px solid rgba(0,0,0,0.125);",
    "border-right: 1px solid rgba(0,0,0,0.125);",
    "}",
    ".GYQtq-CLHpQd",
    "{",
    "border-right: none !important;",
    "}",
    ".mat-divider",
    "{",
    "border-top-color: var(--setting-border-color); !important;",
    "}",
    "gv-settings-view .mat-icon-button", //right align icons to flush edge alignment
    "{",
    "text-align: right !important;",
    "}",
    "gv-settings-section .fullRow,", //remove right padding to flush edge alignment
    ".root [settings-item]", //remove right padding to flush edge alignment
    "{",
    "padding-left: 0px !important;",
    "padding-right: 0px !important;",
    "}",
    ".root .mat-divider.mat-divider-inset", //remove right padding to flush edge alignment
    "{",
    "margin-left: 0px !important;",
    "}",
    ".Xkk8O-PoqZMb", //center entire settings column
    "{",
    "margin: auto !important;",
    "}",
    "@media (min-width: 960px) { .Xkk8O-j19Rqc",
    "{",
    "padding-left: 0px !important;",
    "} }",


    //chat input textarea
    "textarea[aria-label='Type a message']",
    "{",
    "height: auto !important;",//overrides height of 56px
    "min-height: 0 !important;",//overrides min height
    "unicode-bidi: plaintext !important;",
    "font: 400 14px/20px Roboto,Helvetica Neue,sans-serif,NotoColorEmoji,apple color emoji,windows emoji,windows symbol !important;",
    "letter-spacing: .2px !important;",
    "background-color: var(--input-bg-color) !important;",
    "border: 0 !important;",
    "box-sizing: border-box !important;",
    "color: var(--input-color) !important;",
    "line-height: var(--line-height,20px) !important;",
    "outline: 0 !important;",
    "overflow-x: hidden !important;",
    "overflow-y: auto !important;",
    "padding: 10px 0 !important;",
    "position: relative !important;",
    "resize: none !important;",
    "white-space: pre-wrap !important;",
    "width: 100% !important;",
    "word-break: break-word !important;",
    "word-wrap: break-word !important;",
    "}",

    //chat input parent container
    ".md-body-1.layout-align-start-stretch.layout-row.B3EWm-eb2yS",
    "{",
    "box-sizing: border-box !important;",
    "background-color: var(--input-bg-color) !important;",
    "border: var(--message-compose-input-border-override) !important;",
    "border-radius: 26px !important;",
    "box-shadow: var(--input-shadow) !important;",
    "padding: 6px 20px !important;",
    "display: flex !important;",
    "padding-right: 0 !important;",
    "align-items: flex-end !important;",
    "contain: layout !important;",
    "margin: 0 auto !important;",
    "max-width: 975px !important;",
    "margin-bottom: 30px !important;", //converted from padding to margin
    "width: calc(100% - 60px) !important;",
    "}",
    ".B3EWm-ipGt7", //row parent of textarea
    "{",
    "padding-left: 0 !important;",
    "}",
    ".md-body-1.layout-align-start-stretch.layout-row.B3EWm-eb2yS gv-icon-button-ng2[icon-name='image']", //modify margins from "add image" icon
    "{",
    "margin-left: 0 !important;",
    "margin-right: 1rem !important;",
    "}",
    ".md-body-1.layout-align-start-stretch.layout-row.B3EWm-eb2yS gv-icon-button-ng2[icon-name='image'] button", //remove excess width from "add image" icon
    "{",
    "width: auto !important;",
    "padding-right: 25% !important;",
    "}",

    //overflow menu overhaul (google messages)
    "#menu_container_2 > md-menu-content > md-menu-item > button > mat-icon",// hide icons
    "{",
    "display: none !important;",
    "}",
    "md-menu-content.md-default-theme, md-menu-content",//menu border radius and spacing
    "{",
    "border-radius: 8px !important;",
    "line-height: 48px !important;",
    "}",
    "md-menu-item p.gmat-body-2",//menu text color and spacing
    "{",
    "color: var(--input-color) !important;",
    "}",
    "md-menu-item button",//menu item spacing
    "{",
    "padding: 0px 24px !important;",
    "}",
    "md-menu-item",//menu item spacing
    "{",
    "height: 48px !important;",
    "}",


].join("\n");


if (typeof GM_addStyle != "undefined") {GM_addStyle(css);} else if (typeof PRO_addStyle != "undefined") {PRO_addStyle(css);} else if (typeof addStyle != "undefined") {addStyle(css);} else {var node = document.createElement("style");node.type = "text/css";node.appendChild(document.createTextNode(css));var heads = document.getElementsByTagName("head");if (heads.length > 0) {heads[0].appendChild(node);} else {document.documentElement.appendChild(node);}}
