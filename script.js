// DONE
// adds a text box with the current date at the top of page
$('#currentDay').text(moment().format("DD MMMM YYYY, hh:mm a"))

// adds the time
var currTime = moment().add(0, 'hour').hour();
console.log(currTime);

// adds a time to each time-block
var hourBlock = document.getElementsByClassName('time-block');

console.log('hour block!!', hourBlock[0].name)
// pull in the data type once it is set up in local storage?
//console.log(hourBlock.data());


// for loop and have the if else inside!!
for (var i = 0; hourBlock.length; i++) {

    // javascript logic for adding classes and color coding
    if (currTime > hourBlock[i].name) {
        console.log('it is later than this block')
        hourBlock[i].classList.add('class', 'past');
    } else if (currTime < hourBlock[i].name) {
        hourBlock[i].classList.add('class', 'future');
        console.log('it is earlier than this block')
    } else {
        hourBlock[i].classList.add('class', 'present')
        console.log('it is the same time')
    };
}


// var save = document.getElementsByClassName('saveBtn');

// save.addEventListener('click', function(){
//     localStorage.setItem("time", time);
// }



// var saveTasks = function(event){
//     localStorage.setItem();
// };

// localStorage.setItem(key, value);

// localStorage.getItem(key);









localStorage.setItem(key, value);

localStorage.getItem(key);


// $('.time-block').each(function(){
//     var hour = $(this).data('hour');
//     $(this).addclass(hour < presentTime ? 'past' : hour = presentTime ? 'present' : 'future');
// });



// var colorCoded = function(){
//    if (presentTime > hour ){
//        console.log(presentTime);
//    }
// }

// for each time-block class, create a function that colors the space, past, present, future.
// var colorcode = $('.time-block').each(function(){

// }



// time block is < method hour, add class past
// time block is = method hour, add class present
// time block is > method hour, add class future

// save button event listene