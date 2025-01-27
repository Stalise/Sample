"use strict";

// document.getElementById("box").addEventListener(
//     "click",
//     (event) => {
//         event.stopPropagation();
//         console.log("box");
//     },
//     { capture: true }
// );

// document.getElementById("btn").addEventListener(
//     "click",
//     (event) => {
//         console.log("btn");
//     },
//     { capture: true }
// );

Array.prototype.myMap = function (callbackFn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        arr.push(callbackFn(this[i], i, this));
    }
    return arr;
};
