// ==UserScript==
// @name         Shortlink Bypass - Just2Earn + GPLinks
// @namespace    http://tampermonkey.net/
// @version      2025-04-10
// @description  Bypass shortlink wait timers like Just2Earn and GPLinks
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function bypassEverything() {
        // 🔧 GPLinks-style bypass
        const targetBtn = document.querySelector("#btn, .verify, .timerBtn");
        if (targetBtn) {
            console.log("✅ Found target button, clicking...");
            targetBtn.removeAttribute("disabled");
            targetBtn.click();
        }

        // ⏳ Remove countdown-like values
        if (typeof window.setInterval === "function") {
            const overrideTimer = () => {
                console.log("⏱️ Overriding countdown...");
                window.count = 0;
                window.timer = 0;
                document.querySelectorAll(".timer, .countdown").forEach(el => {
                    el.innerText = "0";
                });
            };
            overrideTimer();
        }

        // 🧼 Kill annoying overlays or ads
        ["#gads", "#overlay", ".wait-msg", ".adbox"].forEach(id => {
            const el = document.querySelector(id);
            if (el) el.style.display = "none";
        });

        // ✨ Log status
        console.log("✨ Shortlink bypass attempted.");
    }

    window.addEventListener('load', () => {
        setTimeout(bypassEverything, 500); // Give time for elements to load
    });
})();
