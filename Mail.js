function checkHints() {
    var hint1 = document.getElementById("hint1").value.trim().toLowerCase();
    var hint2 = document.getElementById("hint2").value.trim().toLowerCase();

    // Correct answers
    var correctHint1 = "leela";
    var correctHint2 = "croatia";

    if (hint1 !== correctHint1 && hint2 !== correctHint2) {
        // Redirect to MailFail1 page with both entered hints as parameters
        window.location.href = "MailFail1.html?hint1=" + encodeURIComponent(hint1) + "&hint2=" + encodeURIComponent(hint2);
    } else if (hint1 !== correctHint1) {
        // Redirect to MailFail1 page with the entered hint as a parameter
        window.location.href = "MailFail1.html?hint2=" + encodeURIComponent(hint2);
    } else if (hint2 !== correctHint2) {
        // Redirect to MailFail2 page with the entered hint as a parameter
        window.location.href = "MailFail2.html?hint1=" + encodeURIComponent(hint1);
    } else {
        window.location.href = "MailSuccess.html"; // Redirect to success page
    }
    return false; // Prevent default form submission
}
