## References

### DOM
- http://www.w3schools.com/js/js_htmldom.asp (multi-page tutorial)
- Takeaway: Use `document.querySelectorAll()` to get a Node List
- Takeaway: Use `document.querySelector()` to get one or the first Node that matches
- Takeaway: These two methods can replace one of the popular usecases of jQuery

### Selectors
- http://www.w3schools.com/cssreF/css_selectors.asp
- Takeaway: Focus on the first 5 - 8. The rest don't matter now.
- Takeaway: Those are the selectors you'll use as argument of `document.querySelectorAll()`.

### Requests in JavaScript
- https://davidwalsh.name/fetch
- Takeaway: `XMLHttpRequest` is the current way of doing requests. Is a bit clunky and most people use a library around it to make it easier (like jQuery AJAX)
- Takeaway: `fetch()` is the upcoming API and is supported in recent versions of Chrome and Firefox. It's better to learn that now, and polyfill on non-supported browsers.
- Example polyfill: `<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch"></script>`

### SimpleHTTPServer
- http://www.2ality.com/2014/06/simple-http-server.html
- Drop the HTML file you want to serve in a folder and run `python -m SimpleHTTPServer` on that folder. If your file is called `my-page.html` it will be available at `localhost:8000/my-page.html`.

### CORS (cross-origin resource sharing)
- http://enable-cors.org/
- Takeaway: If a site doesn't explicitely tell the browser to allow cross-origin (cross-domain) requests, the browser will block the request. All you'll see is an error in the browser console when doing the request. To circumvent that we need a proxy server. We'll use `corsa`.

### Corsa:
- https://pypi.python.org/pypi/corsa/0.1.1
- Python proxy to circumvent CORS limitations
- For development and debugging only. Production code should respect CORS policy
- `pip install corsa`
- `corsa --allow-proxy ALL --allow-origin ALL` (this will start in port 8888)
- Then we can request `http://localhost:8888/proxy/<the url>` and that will fix our CORS problems (include the protocol in the URL!)
- To request the Django homepage: `http://localhost:8888/proxy/https://www.djangoproject.com`
- Note that this won't work if the requested URL includes redirects

### JS Events
- Execute code in response to user actions
- Basic intro: http://www.w3schools.com/js/js_events.asp
- Event handlers: http://www.w3schools.com/js/js_htmldom_eventlistener.asp
- Event bubbling and capturing: https://javascript.info/tutorial/bubbling-and-capturing
- Common events: `mouseenter, mouseleave, click, keyup, submit`

## Further reading

### Free resources
- [Practical Javascript](https://watchandcode.com/p/practical-javascript): Excellent intro to JS. Should give you a solid foundation on ES5 or "classic" JS.
- ES6, or ECMAScript6, or ES2015: Brings in a bunch of new features to JS. Browser support is increasing rapidly and now is a perfect time to learn it. Instead of just trying to learn all of ES6, I recommend you search for:
	- Using `let` and `const` over `var`
	- Arrow functions
	- Template literals / strings
	- Classes in ES6 (as in object-oriented programming)
	- Promises
	- Destructuring and spreading
- [Practical ES6](https://ponyfoo.com/books/practical-es6/): Book in progress, an alternative to the previous points
- React: [Official tutorial](https://facebook.github.io/react/tutorial/tutorial.html)

### Paid resources (affiliate links ahead):
- [Sublime Text Power User]: Awesome tips and guide for web devs on this popular code editor
- [ES6 for everyone]: Learn the latest and greatest features of JS
- [React for Beginners]: Build a full web app in React

## People to follow:

### Wes Bos: Javascript, ES6, React
- Twitter: https://twitter.com/wesbos
- GitHub: https://github.com/wesbos
- Blog: http://wesbos.com/

### Sara Soueidan: CSS, SVG, accessibility
- Twitter: https://twitter.com/SaraSoueidan
- Blog: https://sarasoueidan.com/

### Nicolás Bevacqua: Javascript, ES6
- Twitter: https://twitter.com/nzgb
- GitHub: https://github.com/bevacqua
- Blog: http://ponyfoo.com

[Sublime Text Power User]: https://SublimeTextBook.com/friend/JERIVAS
[ES6 for everyone]: https://ES6.io/friend/JERIVAS
[React for Beginners]: https://ReactForBeginners.com/friend/JERIVAS