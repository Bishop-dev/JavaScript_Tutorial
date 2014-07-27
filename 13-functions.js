function ololo(x) {
	console.log(arguments); // [12, "Hi", 45]
};

ololo(12, "Hi", 45);
//==================================================
var func = function(callback) {
	var name = "Bishop";
	callback(name);
};

func(function(n) {
	console.log("Hello, " + n); // Hello, Bishop
});
//==================================================
var f = function() {
	return function() {
		console.log("Hi");
	}
};

f()(); // Hi
//==================================================
// Анонимная самовызывающаяся функция
var f1 = (function(name) {
	console.log(name);
}("Bishop"));