"use strict";

const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

document.addEventListener("DOMContentLoaded", () => {
    // add event handlers
    $("#add").addEventListener("click", addScore);
    $("#display_results").addEventListener("click", displayResults);
    $("#display_scores").addEventListener("click", displayScores);

    $("#name").focus();
});

const addScore = () => {
    const nameInput = $("#name");
    const scoreInput = $("#score");
    const name = nameInput.value.trim();
    const score = scoreInput.value.trim();
    const errorSpan = $("#name").nextElementSibling;

    if (name === "") {
        errorSpan.textContent = "Please enter a name.";
        nameInput.focus();
        return;
    }

    const scoreValue = parseFloat(score);
    if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
        errorSpan.textContent = "Please enter a valid score between 0 and 100.";
        scoreInput.focus();
        return;
    }

    errorSpan.textContent = "";

    names.push(name);
    scores.push(scoreValue);

    nameInput.value = "";
    scoreInput.value = "";

    nameInput.focus();
};

const displayResults = () => {
    const resultsDiv = $("#results");

    const totalScores = scores.reduce((total, score) => total + score, 0);
    const averageScore = totalScores / scores.length;
    const highestScore = Math.max(...scores);

    resultsDiv.innerHTML = `<h2>Results</h2>
                            <p>Average Score: ${averageScore.toFixed(2)}</p>
                            <p>Highest Score: ${highestScore}</p>`;
};

const displayScores = () => {
    const scoresDiv = $("#scores");

    scoresDiv.innerHTML = "";

    for (let i = 0; i < names.length; i++) {
        const nameLabel = document.createElement("label");
        const breakElement = document.createElement("br");

        nameLabel.textContent = `${names[i]}: ${scores[i]}`;
        scoresDiv.appendChild(nameLabel);
        scoresDiv.appendChild(breakElement);
    }
};
