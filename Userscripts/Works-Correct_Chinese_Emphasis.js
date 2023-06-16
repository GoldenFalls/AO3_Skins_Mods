// ==UserScript==
// @name         Correct Chinese Emphasis
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adds language attribute to works posted in Chinese, as well as corrects the <em> sections from italics to dotted.
// @author       GoldenFalls, with help from Amy :)
// @match        https://archiveofourown.org/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    const lang=document.querySelector("dd.language").textContent;
    const work=document.getElementById("workskin");
    const em=work.getElementsByTagName("em");
    if (lang.includes("中文") == true) {
        work.setAttribute("lang","zh"); // the general "zh" is used instead of identifying individual languages because best practices says only get specific when there's a necessary distinction. I may change it to specify later, since they are identified separately on AO3
        for (const element of em) {
            element.setAttribute("style","font-style: normal; text-emphasis: dot");
        };
    };
})();
