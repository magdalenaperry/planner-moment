var containerEl = document.querySelector(".container");
var dayNowEl = document.getElementById("currentDay");

// current time variable military time
var timeNow = moment().format("H: mm: ss");
// creates text as subheader for current time
dayNowEl.textContent += timeNow;
//sets up between 8 am - 8 pm

