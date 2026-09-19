const landing = document.getElementById("landing");
const home = document.getElementById("home");
const button = document.getElementById("openButton");


/* ========================================= */
/* OPEN DASHBOARD */
/* ========================================= */

if (button) {

    button.addEventListener("click", function () {

        landing.classList.add("hidden");

        home.classList.remove("hidden");

        history.replaceState(
            null,
            "",
            "index.html?dashboard=true"
        );

    });

}


/* ========================================= */
/* OPEN DASHBOARD DIRECTLY */
/* ========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );

if (
    params.get("dashboard") === "true" &&
    landing &&
    home
) {

    landing.classList.add("hidden");

    home.classList.remove("hidden");

}


/* ========================================= */
/* GREETING */
/* ========================================= */

const greeting =
    document.getElementById("greeting");

const quote =
    document.getElementById("quote");


function updateGreeting() {

    if (!greeting || !quote) return;

    const hour =
        new Date().getHours();


    if (hour < 12) {

        greeting.textContent =
            "Good Morning Meghana ☀️";

        quote.textContent =
            "Hope today brings you something to smile about.";

    }

    else if (hour < 18) {

        greeting.textContent =
            "Good Afternoon Meghana 🌤️";

        quote.textContent =
            "Don't forget to take a little break today.";

    }

    else {

        greeting.textContent =
            "Good Evening Meghana 🌙";

        quote.textContent =
            "Take a deep breath, you made it through another day.";

    }

}

updateGreeting();


/* ========================================= */
/* FALLING PINK CHERRY BLOSSOMS */
/* ========================================= */

const petals =
    document.getElementById("petals");


if (petals) {

    for (let i = 0; i < 30; i++) {

        const petal =
            document.createElement("div");

        petal.className =
            "petal";

        petal.textContent =
            "🌸";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (13 + Math.random() * 10) + "px";

        petal.style.animationDuration =
            (8 + Math.random() * 7) + "s";

        petal.style.animationDelay =
            -(Math.random() * 12) + "s";

        petals.appendChild(petal);
    }
}