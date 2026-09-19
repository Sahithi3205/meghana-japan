const messages = [

"Welcome to Japan! 🌸 Today begins a new adventure, and I couldn't be prouder of you.",

"I hope you smiled today.",

"Remember to eat something delicious today.",

"Take lots of photos, you'll love looking back at them.",

"You're doing better than you think.",

"Whenever you miss home, remember we're thinking of you.",

"Don't forget to rest too. Adventures are tiring.",

"You've got this ❤️"

];

// CHANGE THIS DATE
const departureDate = new Date("2026-09-23");

const today = new Date();

departureDate.setHours(0,0,0,0);
today.setHours(0,0,0,0);

const difference =
Math.floor((today - departureDate)/(1000*60*60*24));

const messageBox =
document.getElementById("dailyMessage");

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

envelope.addEventListener("click",()=>{

    envelope.style.display="none";

    letter.classList.remove("hidden");

    if(difference < 0){

        messageBox.innerHTML =
        "Your adventure is about to begin, and before you go, I wanted to leave you with a little piece of home. ❤️";

    }

    else if(difference === 0){

        messageBox.innerHTML =
        "Today's the day! ✈️ Wishing you safe travels and the most amazing adventure in Japan. We'll all be cheering you on from home. 🌸❤️";

    }

    else if((difference - 1) < messages.length){

        messageBox.innerHTML =
        messages[difference - 1];

    }

    else{

        messageBox.innerHTML =
        "No matter how many days pass, home will always be waiting for you. 🌸";

    }

});