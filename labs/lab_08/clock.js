"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    $("#hours").textContent = padSingleDigit(hours);
    $("#minutes").textContent = padSingleDigit(minutes);
    $("#seconds").textContent = padSingleDigit(seconds);
    $("#ampm").textContent = ampm;
};

let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    elapsedMilliseconds += 10;

    if (elapsedMilliseconds === 1000) {
        elapsedMilliseconds = 0;
        elapsedSeconds++;

        if (elapsedSeconds === 60) {
            elapsedSeconds = 0;
            elapsedMinutes++;
        }
    }

    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
};

const startStopwatch = evt => {
    evt.preventDefault();

    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
};

const stopStopwatch = evt => {
    evt.preventDefault();

    clearInterval(stopwatchTimer);
};

const resetStopwatch = evt => {
    evt.preventDefault();

    clearInterval(stopwatchTimer);

    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;

    $("#s_minutes").textContent = "00";
    $("#s_seconds").textContent = "00";
    $("#s_ms").textContent = "000";
};

document.addEventListener("DOMContentLoaded", () => {

    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});
