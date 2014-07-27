i = 5; // глобальные (только вне функций) можно объявлять без var
console.log(i); // 5
var func = function() {
	var i =10;
	console.log(i); // 10
	var innerFunc = function() {
		var i = 15;
		console.log(i); // 15
	};
	innerFunc();
	console.log(i); // 10
};

func();
// ================================
//hoisting
var f = function() {
	var i = 10; // 10
	console.log(i);
	var innerF = function() {
		console.log(i); // undefined - поднимает объявление переменных в самый верх
		var i = 15;
	};
	innerF();
	console.log(i); // 10
};

f();