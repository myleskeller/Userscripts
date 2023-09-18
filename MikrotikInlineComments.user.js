// ==UserScript==
// @name         Convert Mikrotik Table Row Comments into Inline Comments
// @namespace    github.com/myleskeller
// @version      1.0
// @author       Myles Keller
// @description  Converts Mikrotik webfig's full-row table comments into inline comments similar to WinBox
// @match        http://192.168.88.1/webfig/
// @grant        none
// ==/UserScript==

//@match (above) should include your Mikrotik router's IP address if you have it configured from default
//loadDelay (below) changes the delay giving the page time to load before running the script the first time


let table = document.querySelector('table.table');
let loadDelay = 5;

(function() {
    'use strict';

    // Function to add 'Comment' column header to the table
    function addCommentHeader(table) {
        if (!table.classList.contains('inline_comment') && hasComments(table)) {
            // console.log("comment header not already found. adding new one.")
            let thead = table.querySelector('thead tr');
            let commentHeader = document.createElement('th');
            commentHeader.title = 'Comment';
            commentHeader.style.width = autofitLastTableColumn(table) + 'ch';
            commentHeader.innerHTML = "<span>Comment</span>";
            table.classList.add("inline_comment");
            thead.appendChild(commentHeader);
        }
    }

    // Function to process each tbody element
    function processTbody(tbody) {
        let commentRow = tbody.querySelector('tr.comment');
        if (commentRow) {
            let commentText = removePrepend(commentRow.querySelector('td').textContent.trim());
            let dataRow = tbody.querySelector('tr:not(.comment)');

            if (dataRow) {
                let commentCell = document.createElement('td');
                commentCell.textContent = commentText;
                dataRow.appendChild(commentCell);
            }
            commentRow.style.display = 'none';
        } else {
            let dataRow = tbody.querySelector('tr:not(.comment)');
            let commentCell = document.createElement('td');
            dataRow.appendChild(commentCell);
        }
    }

    function removePrepend(inputString) {
        // Remove ";;; " by taking a substring starting from the fourth character`
        if (inputString.startsWith(";;; ")) {
            return inputString.substring(4);
        }
    }

    function autofitLastTableColumn(table) {
        // Get the table headers (th elements)
        const headers = table.querySelectorAll('th');
        // Calculate the maximum width for the last column
        let maxColumnWidth = 0;
        // Loop through each row in the table to find the maximum width for the last column
        table.querySelectorAll('tr').forEach((row) => {
            const lastCell = row.lastElementChild;

            if (lastCell && lastCell.tagName === 'TD') {
                const cellText = lastCell.textContent;
                maxColumnWidth = Math.max(maxColumnWidth, cellText.length);
            }
        });
        // Apply the calculated maximum width to the last column header
        return maxColumnWidth;
    }

    function hasComments(table) {
        return table.querySelectorAll('tr.comment').length != 0;
    }

    // Function to reset the MutationObserver
    function resetMutationObserver() {
        if (observer) {
            observer.disconnect(); // Disconnect the existing observer
        }
        observer = setupMutationObserver(); // Set up a new observer
    }

    // Create a MutationObserver to watch for changes to the table
    function setupMutationObserver() {
        let newObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.target instanceof HTMLElement) {
                    // Check if the table or its children were modified
                    let modifiedTable = mutation.target.querySelector('table.table');

                    if (modifiedTable) {
                        // Re-run the script on table modification
                        addCommentHeader(modifiedTable);
                        let modifiedTbodies = modifiedTable.querySelectorAll('tbody');
                        modifiedTbodies.forEach(processTbody);
                    }
                }
            });
        });
        const config = {
            childList: true,
            subtree: true
        };
        newObserver.observe(document.body, config);
        pageLoaded()
        return newObserver;
    }

    // perform initial scan for table and add comment header if necessary
    function pageLoaded() {
        setTimeout(function() {
            // Find the table with the class "table"
            table = document.querySelector('table.table');

            if (table) {
                // Add 'Comment' column header
                addCommentHeader(table);
                // Process each tbody element
                let tbodies = table.querySelectorAll('tbody');
                tbodies.forEach(processTbody);
            }
        }, loadDelay * 1000); // convert milliseconds to seconds
    }


    let observer = setupMutationObserver();
    window.addEventListener('hashchange', resetMutationObserver);
})();
