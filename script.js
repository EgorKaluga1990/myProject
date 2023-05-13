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

//Условия

if (4 == 4) {
  console.log('ok')
} else {
  console.log('error')
}

const pal = 50;

// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('many')
// } else {
//   console.log('ok')
// }

// (num === 50) ? console.log('ok') : console.log('error'); //Тернарный оператор

switch (pal) {
  case 49:
    console.log('neverno');
    break;
  case 100:
    console.log('neverno');
    break;
  case 50:
    console.log('pravda');
    break;
  default:
    console.log('ne v etot raz');
    break;
}


// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//   console.log('nice!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdffhs');

// if (hamburger === 3 && cola && fries) {
//   console.log('nice!');
// } else {
//   console.log('bad');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('nice!');
} else {
  console.log('bad');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let JonReport, alexReport, samReport, mariaReport = 'done';
console.log(JonReport || alexReport || samReport || mariaReport);

console.log(!0); //оператор НЕ

console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


//ЦИКЛЫ

let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while(num <= 55);

for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}


