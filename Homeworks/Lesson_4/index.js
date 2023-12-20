// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

console.log([1, 2, 3] + ' is the answer.'); // ? 1,2,3 is the answer.
// конкатенация строк массив преобразуется в строку
console.log(false || true * 2); // ? 2
// логическое или возвращает первое true, знак умножения конвертирует true в 1
console.log({ valueOf: () => 42 } * 2); // ? 84
// Метод valueOf объекта возвращает примитивное значение. В данном случае возвращает число 42.
console.log(parseInt('7.5') + parseFloat('2.5')); // ? 9.5
// Функция parseInt преобразует строку в целое число.Она прекращает чтение строки, как только
//  встречает символ, который не является цифрой.Поэтому parseInt('7.5') вернет число 7.

// Функция parseFloat преобразует строку в число с плавающей точкой.Она считывает все символы, 
// пока они представляют собой часть числа.Поэтому parseFloat('2.5') вернет число 2.5.
console.log(!!'Hello' - 1); // ? 0
// Оператор !! преобразует значение в булево значение. Вернет true.
// true при преобразовании в число становится 1.
console.log(new String('hello') instanceof Object); // ? true
// new String('hello') создает объект строки, а не примитивное значение строки.
console.log((true ^ false) === (false ^ true)); // ? true
// исключающее ИЛИ (XOR). Он возвращает true, если ровно один из операндов (но не оба) является true.
console.log(true && '5' + 5); // ? 55
// логическое и вернет последний true - строку 5 дальше конкатенация
console.log({ valueOf: () => '10', toString: () => '20' } + 5); // ? 105
// toString преминилось бы еслиб не было valueOf поэтому строка 10 дальше конкатенация
console.log((5).toString() === '5'); // ? true
// toString вернет строку из 5
console.log(null || false || undefined); // ? undefined
// последний ложный или первый true
console.log(0 || 2 || NaN); // ? 2
// последний ложный или первый true
console.log(1 && null && 2); // ? null
// последний true или первый false

//

function xy() { }

console.log(typeof xy); //? function
console.log(xy instanceof Object); //? true
// в js функция это объект но для удобства typeof выдает function

var str1 = String(123);
// примитив строка
var str2 = new String(123);
// объект строка

console.log(typeof str1 === typeof str2); //? false
// разные типы
console.log(str1 === str2); //? false
// Оператор === проверяет равенство без приведения типов.
console.log(str1 === String(123)); //? true
// оба примитивы
console.log(str2 === new String(123)); //? false
// оба объекты - разные ссылки 
console.log(str1 === 123); //? false
// разные типы
console.log(str1 === '123'); //? true
// оба строки одинаковые
console.log(str1 == str2); //? true
// сдесь приводятся к одному типу - числа одинаковые
console.log(str1 == 123); //? true
// сдесь приводятся к одному типу - числа одинаковые
console.log(str1 == '123'); //? true
// сдесь приводятся к одному типу - числа одинаковые

var arr = [];
console.log(typeof arr); //? object
// массив тоже объект

var str3 = '123';
str3[0] = '2';
console.log(str3); //? '123'

// нельзя изменить отдельные символы в строке напрямую. Попытка изменить будет проигнорирована без выброса ошибки.

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); // ? '6' string
// сначала вычисляет сумму чисел, что дает 6, а затем конкатенирует результат с пустой строкой
console.log(z, typeof z); // ? '123' string
// начинает с конкатенации пустой строки и числа, что приводит к преобразованию всех чисел в строки и их конкатенации

var o = '123x';
console.log(Number(o)); // ? NaN
// Если строка не может быть преобразована в допустимое число, она возвращает NaN.
console.log(parseInt(o, 10)); // 123
// прекращает чтение строки, как только встречает символ, который не является допустимым числом.
console.log(+o); // NaN
// Если строка не может быть преобразована в допустимое число, она возвращает NaN.
console.log(typeof +o); // ? number
// NaN тоже  number
console.log(Boolean(String(false))); //? true
// String в строку - не пустая строка тру

var h = [];
console.log(h ? 1 : 2); // ? 1
// пустой массив это true

// Переменные

let a = a + 1;
console.log(a); // ? ReferenceError: a is not defined
// попытка использования до объявления

//

var b = b + 1;
console.log(b); // ? NaN
//  var проинициализирована заранее и ей присвоено undefined, при сложении с undefined будет NaN

//

function foo(c) {
    if (c > 0) {
        var c = c + 10;
        return c;
    }
    return c;
}
console.log(foo(15)); // ? 25
// из-за области видимости var, переменная c внутри блока if на самом деле является той же переменной c, 
// что и в аргументах функции.

//

function foo() {
    console.log(d2);
    let d1 = '1';
    return function () {
        console.log(d1);
        console.log(d2);
    };
}

const d2 = '2';
const x = foo();

x();

// 2
// 1
// 2
// При вызове foo(), первый console.log(d2); выведет '2'. Переменная d2 доступна внутри foo(), 
// потому что она объявлена в глобальной области видимости.
// Затем foo() возвращает внутреннюю функцию, которая сохраняется в x.
// При вызове x(), console.log(d1); выведет '1'. Переменная d1 доступна внутри внутренней функции,
// потому что она была объявлена в той же области видимости, где была создана внутренняя функция.
// Затем console.log(d2); внутри x() выведет '2'. Переменная d2 доступна внутри x(), 
// потому что она объявлена в глобальной области видимости.

function giveMeX(showX) {
    if (showX) {
        let x = 5;
    }
    return x;
}

console.log(giveMeX(false)); // ? ReferenceError: x is not defined
console.log(giveMeX(true)); // ? ReferenceError: x is not defined

// let и const имеют блочную область видимости. Это означает, что переменная x, 
// объявленная внутри блока if, не доступна за пределами этого блока.



console.log(x); // ? ReferenceError: x is not defined


var y = 1;

console.log(y); // ? 1

function car() {
    if (false) {
        var y = 2;
    }
    console.log(y);
}

car(); // undefined
console.log(y); // 1

// Переменная y внутри функции car объявлена с помощью var, что означает, что она "поднимается" 
// и объявляется в начале функции, но инициализируется только внутри блока if. 
// Поскольку условие if равно false, блок if не выполняется, и y остается undefined.
// console.log(y); после вызова car(); все равно выведет 1, потому что глобальная переменная y не была изменена вызовом car().

var i = 1;
var j = {};

(function () {
    i++;
    j.j = 1;
})();
console.log(i, j); // ? 2 {j:1}

(function (i, j) {
    i++;
    j.k = 1;
})(i, j);
console.log(i, j); // ? 2 {j:1, k:1}

// Во второй функции, i и j передаются как аргументы, 
//поэтому любые изменения i внутри функции не влияют на глобальную переменную i.
// С другой стороны, j является объектом, и объекты в JavaScript передаются по ссылке,
// поэтому изменения j внутри функции влияют на глобальный объект j.

// Бонус

// Создать объект всеми возможными способами

const obj1 = {};
const obj2 = new Object();
const obj3 = Object.create(null);

function Car(make, model) {
    this.make = make;
    this.model = model;
}
const obj4 = new Car('Toyota', 'Camry');

const obj5 = Object.assign({}, obj4);

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
const obj6 = new Car2('Honda', 'Civic');





// const obj2 =  ваш код
// и тд

//

// Написать функцию глубокого сравнения двух объектов:
// объекты могут быть любыми, и иметь любой уровень вложенности

const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
    //  ваш код
    if (firstObj === secondObj) {
        return true;
    }
    // равны ли объекты по ссылке

    if (typeof firstObj !== 'object' || firstObj === null ||
        typeof secondObj !== 'object' || secondObj === null) {
        return false;
    }
    // являются ли они не объектами (или null)

    let keysFirstObj = Object.keys(firstObj);
    let keysSecondObj = Object.keys(secondObj);

    if (keysFirstObj.length !== keysSecondObj.length) {
        return false;
    }
    // сравниваем количество ключей в обоих объектах.

    for (let key of keysFirstObj) {
        if (!keysSecondObj.includes(key) || !deepEqual(firstObj[key], secondObj[key])) {
            return false;
        }
    }
    // рекурсивно сравниваем все значения в обоих объектах. Если все значения равны, объекты равны.

    return true;
};

//

console.log(deepEqual(firstObj, secondObj)); // false;