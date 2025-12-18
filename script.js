let noCount = 0;

function yes() {
    document.getElementById("question").innerText =
        "Aminado ka na 😎";
    document.getElementById("result").innerText =
        "Salamat sa katotohanan boss 😂";
}

function no() {
    noCount++; // LOOP COUNTER

    if (noCount === 1) {
        document.getElementById("question").innerText =
            "Sure ka ba boss?";
    } else if (noCount === 2) {
        document.getElementById("question").innerText =
            "Pag-isipan mong mabuti 😏";
    } else if (noCount === 3) {
        document.getElementById("question").innerText =
            "Wala ka nang kawala boss 😈";
    } else {
        // LOOP FOREVER
        document.getElementById("question").innerText =
            "KUPAL KA PA RIN BA BOSS!!";
    }

    document.getElementById("result").innerText =
        "Hindi button clicked: " + noCount + " times";
}
