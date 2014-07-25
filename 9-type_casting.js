console.log(5 + "5"); // 55
console.log(typeof(5 * "5")); // string
console.log("5" * "4"); // 20
console.log(typeof("5" * "4")); // number
console.log("5" * "hi"); // NaN - not a number
console.log(typeof("5" * "hi")); // number
console.log("5" == 5); // true
console.log("5" === 5); // false
console.log("0" == false); // true неизвестное поведение, даже несмотря на результат следующей строки
console.log(Boolean("0")); // true
console.log(0 == false); // true
console.log("5" == true); // false
console.log("" == false); // true
console.log(null == false); // false
console.log(null == true); // false
console.log(undefined == false); // false
console.log(undefined == true); // false
console.log(undefined == null); // true
console.log(undefined == undefined); // true
console.log(null == null); // true
console.log("");

// Явные преобразования
console.log(Number("555")); // 555
console.log(typeof Number("555")); // number
console.log(String(4433)); // 4433
console.log(typeof String(4433)); // string
console.log(Boolean(1)); // true
console.log(typeof Boolean(1)); // boolean

console.log(!!5); // true - привести к логическому типу два раза проинвертировав
console.log(!!0); // false 

// преобразование в строку или в число
console.log(typeof(345 + "")); // string
console.log(typeof +"454"); // number

var number = 22;
console.log(typeof number.toString()); // string
number = 45;
console.log(number.toString(3)); // 1200
number = 5;
console.log(number.toString(2)); // 101

console.log(typeof false.toString()); // string

console.log(parseInt("45 sd")); // игнорирует посторонние символы
console.log(parseInt("45 s", 10)); // 45 второй параметр - основание системы исчисления
console.log(parseFloat("12.45 sd")); // аналогично

console.log(+""); // 0

// все остальные значения кроме этих пяти вернут true
console.log(!!""); // false
console.log(!!NaN); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false

console.log(!!"Hi"); // true

console.log(+"      4"); // 4 игнорирует пробелы
console.log(+"   d  4"); // NaN недопустимы любые символы, исп parseInt

// преобразовать булевую переменную в число
console.log(+true); // 1
console.log(+false); // 0

var n = 5;
console.log(n.value); // undefined
n = "hello"; 
console.log(n.value); // undefined
n = null; // или undefined
console.log(n.value); // TypeError