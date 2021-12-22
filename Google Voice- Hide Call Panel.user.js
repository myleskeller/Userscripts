// ==UserScript==
// @name         Google Voice: Hide Call Panel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ensures that the call panel appears only when the user is on the "calls" page or when a call is received.
// @author       Myles Keller
// @homepage
// @include      http://voice.google.com/*
// @include      https://voice.google.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    setTimeout(() => { //3s delay block
    'use strict';

    // functions that hide or show the call panel
    function hideCallPanel(){ document.querySelector("gv-call-sidebar").style.display = "none"; } //add a style to hide the call panel
    function showCallPanel(){ document.querySelector("gv-call-sidebar").style.display = "block"; } //add a style to show the call panel


    // Select the nodes that will be observed for mutations
    const callSideBar = document.querySelector('gv-call-sidebar > div > gv-in-call-ng2');
    const callIcon = document.querySelector(".gmat-nav-list a[aria-label='Calls']")


    // Callback functions to execute when mutations are observed
    const callPanelChanged = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                let collection = callSideBar.children;
                for (let i = 0; i < collection.length; i++) {
                    if (collection[i].tagName.toLowerCase() == "section") { //if call sidebar has child that is a "section" element
                        showCallPanel(); //show the call panel
                        return;
                    }
                }
                hideCallPanel(); //hide the call panel
            }
        }
    };
    const callIconChanged = function(mutationsList, observer) {
        if(callIcon.classList.contains("gmat-list-item-active")){ //if call icon is classed "active"
            showCallPanel(); //show the call panel
        }
        else {
            hideCallPanel(); //hide the call panel
        }
    };


    // Create an observer instance linked to the callback function
    const callPanelObserver = new MutationObserver(callPanelChanged);
    const callIconObserver = new MutationObserver(callIconChanged);


    // Start observing the target node for configured mutations
    callPanelObserver.observe(callSideBar, { attributes: false, childList: true, subtree: true });
    callIconObserver.observe(callIcon, { attributes: true, childList: false, subtree: true });


    // function that checks if anything has changed after page load is complete
    function checkCallPanelStatus(){
        if(callIcon.classList.contains("gmat-list-item-active")){ //if call icon is classed "active"
            showCallPanel(); //show the call panel
        }
        else {
            hideCallPanel(); //hide the call panel
        }
    }

    checkCallPanelStatus();
    }, 3000); //3s delay block
})();