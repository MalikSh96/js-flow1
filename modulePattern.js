//modularpattern --> used to emulate class concept
//including private/public methods/variables in one single object 
//protects against global scope -- also minimizes chance of variable/function name conflicts
var modularpattern = (function() {
	// your module code goes here
	var sum = 0;

	return {
		add: function() {
			sum = sum + 1;
			return sum;
		},
		reset: function() {
			return (sum = 0);
		}
	};
})();
console.log(modularpattern.add());
console.log(modularpattern.add());
console.log(modularpattern.reset());
/*
Output:
1
2
0
*/
