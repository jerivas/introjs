var title = document.querySelector("h1");
var input = document.querySelector("#url-input");
var form = document.querySelector("#my-form");
var linkList = document.querySelector("#link-list");

function handleSubmit(event) {
	event.preventDefault();  // Don't submit the form

	// Construct the URL with the proxy + the user-submitted value
	var url = `http://localhost:8888/proxy/${input.value}`;

	// Cleanup the linkList and form before we fetch new links
	form.reset();
	linkList.innerHTML = "";

	// Fetch boilerplate
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			// Parse data from fetch
			var temp = document.createElement("div");
			temp.innerHTML = data;

			// Get all links from temp
			var links = temp.querySelectorAll("a");

			// Append each link to the link list
			for (var link of links) {
				// <li></li>
				var li = document.createElement("li");
				// <li><a></a></li>
				// Extract textContent to drop any child nodes in the <a></a>
				li.innerHTML = `<a href="${link.href}">${link.textContent}</a>`;
				// <ul><li><a>
				linkList.appendChild(li);
			}
		})
		.catch(function (error) {
			// Log the error
			console.log(error.message);
		});
}

form.addEventListener("submit", handleSubmit, false);
