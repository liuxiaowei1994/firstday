;
(function() {
    "use strict";

    var oApp = document.querySelector(".app");
    var oMask = document.querySelector(".mask");
    var twocode = document.querySelector(".twocode");
    var oTop1 = document.querySelector(".top1");
    console.log(oApp)
    oApp.onmouseover = function() {

        twocode.style.display = "block";
        oApp.onmouseout = function() { twocode.style.display = "none"; }
    }
    oMask.onmouseover = function() {
        oTop1.style.display = "block";

        oMask.onmouseout = function() { oTop1.style.display = "none"; }
    }

    $(".banner2").banner({
        aimg: $(".banner2").find("img"),
        left: $(".banner2").find("#left"),
        right: $(".banner2").find("#right"),
        isList: true,
        autoPlay: true,
        moveTime: 200,
        index: 0
    })








})();