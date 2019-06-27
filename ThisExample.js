//When it is called outside a function, this refers to the Window object in the browser.
console.log(this); // Window

//When this is called in a function, this is set to the global object.
function hello() {
	console.log(this);
}
hello(); // Window

//When this is called in an object method, this would be the object itself.
let o = {
	sayThis: function() {
		console.log(this);
	}
};

o.sayThis(); // o