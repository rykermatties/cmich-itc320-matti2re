"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    $("#arrival_date").focus();

    $("#reservation_form").submit((event) => {
        // Validate user entries
        const arrivalDate = $("#arrival_date").val().trim();
        const nights = $("#nights").val().trim();
        const email = $("#email").val().trim();

        resetValidation();

        if (arrivalDate === "") {
            displayValidationError("arrival_date", "Please enter the arrival date.");
            event.preventDefault(); 
        }

        if (isNaN(nights) || nights === "") {
            displayValidationError("nights", "Please enter a numeric value for nights.");
            event.preventDefault(); 
        }

        if (!emailPattern.test(email)) {
            displayValidationError("email", "Please enter a valid email address.");
            event.preventDefault(); 
        }
    });

    function displayValidationError(fieldId, message) {
        const field = $(`#${fieldId}`);
        const errorMessage = $(`<span class="error-message">${message}</span>`);
        field.parent().append(errorMessage);
        field.addClass("error");
    }

    function resetValidation() {
        $(".error-message").remove();
        $(".error").removeClass("error");
    }
});
