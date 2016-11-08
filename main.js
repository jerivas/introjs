var title = document.querySelector("h1");
var input = document.querySelector("#dog-name");

// Put the title content inside the input
input.value = title.innerHTML;

// Log the input value to the browser console
console.log("Input value is", input.value, "yay!");
