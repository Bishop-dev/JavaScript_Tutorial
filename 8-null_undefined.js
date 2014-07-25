// null - пустое значение
// undefined - полное отсутствие значения
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// как получить undefined
var temp;
var obj = {};
var a = [1, 2, 3, 4];
function greet(name){
	return "Hello, " + name;
};
function func(){};
console.log(temp); // переменная только объявлена, но не ссылается ни на что
console.log(obj.x); // обращение к несуществующему свойству
console.log(a[4]); // обращение к несуществующему элементу массива
console.log(greet()); // ничего не передается как параметр функции
console.log(func()); // функция ничего не возвращает

console.log(null == undefined); // true
console.log(null === undefined); // false