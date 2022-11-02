const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownElbtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//  Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown
function updateDOM() {
  const now = new Date().getTime();
  const diffrence = countdownValue - now;
  console.log("Diffrence:", diffrence);

  const days = Math.floor(diffrence / day);
  const hours = Math.floor((diffrence % day) / hour);
  const minutes = Math.floor((diffrence % hour) / minute);
  const seconds = Math.floor((diffrence % minute) / second);
  console.log(
    "Days: ",
    days,
    "Hours: ",
    hours,
    "Minutes: ",
    minutes,
    "Seconds: ",
    seconds
  );

  //   Populating Countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  //  Hide input
  inputContainer.hidden = true;

  // Show Countdown
  countdownEl.hidden = false;
}

// Take Values from Form inputs
function updateCoundown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);

  //   Get the number version of current date
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
  updateDOM();
}

// Event Listeners
countdownForm.addEventListener("submit", updateCoundown);
