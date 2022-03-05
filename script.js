var containerEl = document.querySelector(".container");
var dayNowEl = document.getElementById("currentDay");
var hourBlock = document.getElementsByClassName(timeBlock);
var textArea = document.getElementsByClassName(".description");
var inputValue = textArea.value;
var saveBtns = document.getElementsByTagName("button");
var time = (moment().hour());

// current time variable military time
var timeNow = moment().format("H: mm");

// creates text as subheader for current time
dayNowEl.textContent += timeNow + " (Military Time)";
dayNowEl.classList.add("subheader");

//sets up between 5 am - 12 am
for (var i = 5; i <= 24; i++) {

    // create html code for div container
    var divRows = document.createElement("div");
    var timeBlock = document.createElement("div");
    var taskName = document.createElement("textarea");
    var saveBtn = document.createElement("button");
    

    //add created elements to the code
    containerEl.appendChild(divRows);
    divRows.appendChild(timeBlock);
    divRows.appendChild(taskName);
    divRows.appendChild(saveBtn);
    
    

    // add styling classes
    divRows.classList.add("row", "time-block");
    timeBlock.classList.add("col-1", "hour");
    taskName.classList.add("col-10", "description");
    saveBtn.classList.add("col-1", "saveBtn");
    saveBtn.textContent = 'SAVE';

    // set each div container to a specific hour
    divRows.dataset.hour = i;
    timeBlock.textContent = i;
    
    // colorcoding the classes
    if (time > i) {
        taskName.classList.add("past");
    } else if (time < i) {
        taskName.classList.add("future");
    } else {
        taskName.classList.add("present");
    }

    // has to be in for loop or code will not save.
    taskName.value = JSON.parse(localStorage.getItem(i));
}
// save button to keep in local storage
// provided by instructors
containerEl.addEventListener("click", function (event) {
    if (event.target.matches(".saveBtn")) {
        localStorage.setItem(
            event.target.parentNode.dataset.hour,
            JSON.stringify(
                event.target.parentNode.querySelector(".description").value
            )
        );
    }
});

