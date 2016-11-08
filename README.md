- DOM: http://www.w3schools.com/js/js_htmldom.asp (multi-page tutorial)
	- Takeaway: Use `document.querySelectorAll()` to get a Node List
	- Takeaway: Use `document.querySelector()` to get one or the first Node that matches
	- Takeaway: These two methods can replace one of the popular usecases of jQuery

- Selectors: http://www.w3schools.com/cssreF/css_selectors.asp
	- Takeaway: Focus on the first 5 - 8. The rest don't matter now.
	- Takeaway: Those are the selectors you'll use as argument of `document.querySelectorAll()`.

- Requests in JavaScript: https://davidwalsh.name/fetch
	- Takeaway: `XMLHttpRequest` is the current way of doing requests. Is a bit clunky and most people use a library around it to make it easier (like jQuery AJAX)
	- Takeaway: `fetch()` is the upcoming API and is supported in recent versions of Chrome and Firefox. It's better to learn that now, and polyfill on non-supported browsers.
	- Example polyfill: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch"></script>`

- CORS - cross-origin resource sharing: http://enable-cors.org/
	- Takeaway: If a site doesn't explicitely tell the browser to allow cross-origin (cross-domain) requests, the browser will block the request. All you'll see is an error in the browser console when doing the request. To circumvent that we need a proxy server.

- SimpleHTTPServer: http://www.2ality.com/2014/06/simple-http-server.html

- Corsa: https://pypi.python.org/pypi/corsa/0.1.1
	- Python proxy to circumvent CORS limitations
	- For development and debugging only. Production code should respect CORS policy
	- `corsa --allow-proxy ALL --allow-origin ALL`

- JS Events: Execute code in response to user actions
	- Basic intro: http://www.w3schools.com/js/js_events.asp
	- Event handlers: http://www.w3schools.com/js/js_htmldom_eventlistener.asp
	- Event bubbling and capturing: https://javascript.info/tutorial/bubbling-and-capturing
	- Common events: `mouseenter, mouseleave, click, keyup, submit`

- Paid resources (affiliate links ahead):
	- [Sublime Text Power User]: Awesome tips and guide for web devs on this popular code editor
	- [ES6 for everyone]: Learn the latest and greatest features of JS
	- [React for Beginners]: Build a full web app in React

[Sublime Text Power User]: https://SublimeTextBook.com/friend/JERIVAS
[ES6 for everyone]: https://ES6.io/friend/JERIVAS
[React for Beginners]: https://ReactForBeginners.com/friend/JERIVAS