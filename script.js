// prints current time
var currentTime = moment().format("H:mm:ss");

var containerEl = document.querySelector(".container");
var currentDay = document.getElementById("currentDay");
currentDay.textContent(currentTime);
