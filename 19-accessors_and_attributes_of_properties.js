var person = {
	name: "Bishop",
	_age: 20,
	get age() {
		return this._age;
	},
	set age(value) {
		this._age = value;
	}
}

console.log(person.age); // 20
console.log(person._age); // 20

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
	value: "male",
	writable: false, // сделать свойство недоступным для записи
	enumerable: false, // сделать свойство (не)перечисляемым в списке свойств объекта
	configurable: false // возможность в дальнейшем менять атрибуты свойства объекта
});

// получим ошибку, т.к., в строке 22 configurable: false
// Object.defineProperty(person, "gender", {
// 	writable: true
// });

console.log(person.gender);
person.gender = "female";
console.log(person.gender);
console.log("");

// Получить все свойства объекта
for (property in person) {
	console.log(property);
};
console.log(Object.keys(person));

// true только для неунаследованных свойств
console.log(person.propertyIsEnumerable("gender"));

var o = {};
Object.defineProperties(o, {
	x: {
		value: 10,
		writable: false
	},
	y: {
		value: 20,
		writable: false
	},
	r: {
		get: function() {
			return Math.sqrt(this.x * this.y + this.x * this.y);
		}
	}
});
o.x = 16; // не выполнится присваивание
console.log(o.r);

// проверить расширяемость объекта
var obj = {};
Object.preventExtensions(obj); // запретить расширение в самом объекте. если добавлять свойства к прототипу, то объект их унаследует
console.log(Object.isExtensible(obj));
// проверить действительно ли запрещено расширение
obj.x = 123;
console.log(obj.x);
// то же самое что и preventExtensions, но также ставит configurable в false. не сможем добавлять свойства, удалять и менять атрибуты свойств
Object.seal(obj);
console.log(Object.isSealed(obj)); // проверить был ли применен seal
// то же самое что и seal, но также делает все свойства доступными только для чтения writable - false
Object.freeze(obj);
console.log(Object.isFrozen(obj));