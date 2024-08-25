"use strict";

document.getElementById("btn").onclick = () => {
    console.time();
    let n = 0;

    while (n < 1e8) {
        n++;

        let c = 0;

        while (c < 1e2) {
            c++;
        }
    }
    console.timeEnd();
};

document.getElementById("ttl").onclick = () => {
    console.log("title");
};
