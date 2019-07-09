;
(function() {
    "use strict";
    // top
    var oApp = document.querySelector(".app");
    var oMask = document.querySelector(".mask");
    var twocode = document.querySelector(".twocode");
    var oTop1 = document.querySelector(".top1");

    oApp.onmouseover = function() {

        twocode.style.display = "block";
        oApp.onmouseout = function() { twocode.style.display = "none"; }
    }
    oMask.onmouseover = function() {
            oTop1.style.display = "block";

            oMask.onmouseout = function() { oTop1.style.display = "none"; }
        }
        // banner


})()