"use strict";

let number = 4.6;

console.log(4/0);
console.log('string' * 9);

const persone = "Alex";

const bool = true/false;

// console.log(something);

let und;
console.log(und);

const obj = {
  name: "John",
  age: 25,
  isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]);


//МАССИВ ЯВЛЯЕТСЯ ЧАСТНЫМ СЛУЧАЕМ ОБЬЕКТА

let arr = ['plump.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

//отличие массива от объекта

const arry = [1, 2, 3];

arry[10] = '32424';

console.log(arry[10]);
const arroObj = {
  0: 1,
  1: 2,
  2: 3,
  adc: {
    df: [{}, {}],
    def: {

    }
  }

}
const b = 'b';

arroObj.b = '1234',
// arroObj['b'] = '1234',
console.log(arroObj[b]);
console.log(arroObj['b']);
console.log(arroObj[1]);

//ключ особ порядок элементов

const objct = {a: 2, b: 5};
//ключ особ клюс-значение
const obJ = {
  Anna: 500,
  'Alice': 800
};

//Взаимодействие с пользователем

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

const answer = prompt("Вам есть 18 лет?", "");
console.log(typeof(answer));

//typeof для получения значения
//от пользователя обычнои возвращаеться значение string
//но можно и изменять значениея например + в начале значения
// const answer = +prompt("Вам есть 18 лет?", "");
// console.log(answer + 5);

const answers = [];

answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('как ваша фамилия?', '');
answers[2] = prompt('ваш емайл?', '');

document.write(answers);


//ИНТЕРПОЛЯЦИЯ

const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4');
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);

//Операторы JS

console.log('arr' + " - obj");
console.log(4 + '5');

let incr = 10,
    decr = 10;

    //перфикстная
incr++;//оператор инкремента
decr--;//оператор декремента

    //постфиксная
++incr; 
--decr;

// console.log(++incr);
// console.log(--decr);

console.log(incr);
console.log(decr);

console.log(5%2); //возвращает остаток (1)

console.log(2*4 == 8); //сравнение, правдаЛИ


console.log(2 * 4 === '8');//строгое сравнение

// &&  и
// || или

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

//! отрицание правду в лож лож в правду

console.log(isChecked || !isClose);

console.log(2 + 2 * 4 !== '6');//true

