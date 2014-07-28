// this вне функции указывает на window, внутри функции на объект
// (или функцию, поскольку в javascript нет различий между объектом и функцией)
var greet = function(greeting) {
	return greeting + "! My name is " + this.name;
};

var person = {
	name: "Bob",
	greet: greet
};

var anotherPerson = {
	name: "John",
	greet: greet
};

console.log(person.greet("Hi")); // Hi! My name is Bob
// изменение контекста, передача параметров по очереди
console.log(anotherPerson.greet.call(person, "Bonjour")); // Bonjour! My name is Bob
// изменение контекста, параметры передаются массивом
console.log(anotherPerson.greet.apply(person, ["Bonjour"])); // Bonjour! My name is Bob
// bound не изменяет функцию
var bound = greet.bind(anotherPerson);
console.log(bound("Hello there")); //Hello there! My name is John