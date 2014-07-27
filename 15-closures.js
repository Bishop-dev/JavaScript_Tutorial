var counter = (function() {
	var count = 0;
	return function(number) {
		count = number !== undefined ? number : count;
		return count++;
	};
}()); // self-invoking
// second variant
var c = function(number) {
	c.count = number !== undefined ? number : c.count;
	return c.count++;
};

c.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());