function doHomework(subject, callback) {
	console.log(`Starting my ${subject} homework.`);
	callback();
}

doHomework('math', function() {
	console.log('Finished my homework.');
});

//callback is a function passed to another function as argument