function checkName() {

    const nameInput =
        document.getElementById("brotherName");

    const enteredName =
        nameInput.value.trim().toLowerCase();

    const errorMessage =
        document.getElementById("errorMessage");

    if (enteredName === "varad") {

        errorMessage.style.color = "green";

        errorMessage.innerHTML =
            "Correct! Opening your surprise... 💗";

        setTimeout(() => {

            window.location.href =
                "surprise.html";

        }, 1000);

    } else {

        errorMessage.style.color = "#e53935";

        errorMessage.innerHTML =
            "Hmm... that's not your best brother's name 😜";

        nameInput.value = "";
    }
}
function goToMemories() {

    window.location.href = "memories.html";

}
function goToFinal() {

    window.location.href = "final.html";

}
function openFlower() {

    const flowerButton =
        document.querySelector(".flower-button");

    const finalMessage =
        document.getElementById("finalMessage");

    const restartButton =
        document.getElementById("restartButton");


    // Prevent clicking multiple times

    if (flowerButton.classList.contains("opened")) {
        return;
    }


    // Start flower animation

    flowerButton.classList.add("opened");


    // Show final message

    setTimeout(() => {

        finalMessage.classList.add("show");

        restartButton.classList.add("show");

    }, 700);

}


function restartSurprise() {

    window.location.href = "index.html";

}