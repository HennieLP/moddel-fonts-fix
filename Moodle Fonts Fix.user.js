// ==UserScript==
// @name         Moodle Fonts Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to fix the Moodle Site
// @author       Hendrik Hassa
// @match        https://moodle.hs-coburg.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Create link elements
    var link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';

    var link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = ''; // Setting crossorigin attribute

    var link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';

    // Append links to the head of the document
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
})();