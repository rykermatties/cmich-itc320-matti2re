"use strict";

$(document).ready(() => {
    $("#email").text(sessionStorage.getItem("email") || "");
    $("#phone").text(sessionStorage.getItem("phone") || "");
    $("#zip").text(sessionStorage.getItem("zip") || "");
    $("#dob").text(sessionStorage.getItem("dob") || "");

    $("#back").click(() => {
        window.history.back();
    });
});
