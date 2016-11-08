var title = document.querySelector("h1");
var input = document.querySelector("#dog-name");
var form = document.querySelector("#my-form");

// // Put the title content inside the input
// input.value = title.innerHTML;

// // Log the input value to the browser console
// console.log("Input value is", input.value, "yay!");

function handleSubmit(event) {
	event.preventDefault();  // Don't submit the form

	// Function body, all logic goes here
	title.innerHTML = input.value;
}

form.addEventListener("submit", handleSubmit, false);
