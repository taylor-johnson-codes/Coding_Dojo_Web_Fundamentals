/////////////   VANILLA JAVASCRIPT   ///////////// (no jQuery)

console.log('Hello World')
// can print this to check to make sure JS is linked to HTML


// var container = document.getElementById(container)
// // grabs element from HTML and stores it into a variable
// console.log(container)
// // prints null even though h1 tag is in there because script tag is read before h1 tag
// // to keep script tag in head tag, an event listener needs to be added


// There are two arguments given to .addEventListener:
// ARG 1. Event being listened for
// ARG 2. Function that's going to run some code
document.addEventListener("DOMContentLoaded", function(){
    // STEP 1. Grabbing the Button as an object
    var button = document.getElementById("click-me")
    // STEP 2. Adding an eventListener on the button
    var count = 0;
    button.addEventListener("click", function(){
        // STEP 3. Once the button is clicked, do this
        count++
        console.log("THE BUTTON HAS BEEN CLICKED THIS MANY TIMES: ", count)
    })

    var container = document.getElementById("container")
    var hello = document.getElementById("hello")

    // note: mouseover is vanilla JS; hover is jQuery
    var hovering = document.getElementById("hovering")
    hovering.addEventListener("mouseover", function(){
        console.log("I'VE BEEN MOUSED-OVER/HOVERED!!")
    })
    hovering.addEventListener('click', function(){
        container.style.backgroundColor = "Yellow"
        container.innerHTML = "<h1>THIS IS REPLACING EVERYTHING</h1>"
    })
})


// // adding count into the code above:
// document.addEventListener('DOMContentLoaded', function(){
//     // grab the button object:
//     var button = document.getElementById('click')
//     // add listener on the button:
//     var count = 0
//     button.addEventListener('click', function(){
//         // once the button is clicked do this:
//         count++
//         console.log('The button has been clicked this many times: ', count)
//     })
// })