// створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. Відсортувати його за допомоги sort
/*let a = [1, 99, 5, 37,2];
a.sort();
console.log(a)*//*все ок*/

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
//*let al = [1, 99, 5, 37,2];

/*let al = [1, 99, 5, 37,2];

let alla = al.filter(function(massive){
    return massive % 2 == 0 ;})

console.log(alla);*/ /*все ок*/

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//let a = {name: 'Dima', age: 13, model: 'Camry'};

// const arr = [
//     {name: 'Dima', age: 13},
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
//
// function keysdf(arr) {
//     const b = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(Object.keys(arr[i]));
//     }
//     return b;
// }
//
//
// const arrKeys = keysdf(arr);
// console.log(arrKeys);

// сделано
// пример * /
// * /
// * /


// / Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
/*let a = {name: 'Dima', age: 13, model: 'Camry'};

const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keysdf (arr){
    const b = [];
    for (let i=0; i<arr.length; i++){
        for (let key in arr[i]){
            b.push(key);}}return b;}


const arrKeys = keysdf(arr);
console.log(arrKeys);*/ /* не знаю как*/
/*console.log(m);*/ /* все ок*/

// створити функцію яка заповнює масив рандомними числами та виводить його.
// x = a + (b – a)

// let array = [1, 2, 3, 4, 5, 6, 7];
//
// function anna(arr) {
//     let array1 = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         array1.push(arr[i] + arr[i + 1] || 0 - arr[i + 2] || 0 ** 2);
//     }
//
//     return array1;
// }
//
// console.log(anna(array));


// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
// [3, 5, 7, 9]
// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5];
//
// function sum(a, b) {
//     let c = [];
//
//     for (let i = 0; i< a.length; i++) {
//         for (let j = 0; j< b.length; j++) {
//             if (i === j) {
//                 c.push(a[i] + b[j])
//             }
//         }
//     }
//
//     return c;
// }
//
// let c = sum(a,b)
// console.log(c);

//за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let num = [12,45,89,61];
// let m = num.map (function (it){
//     return it + '';});
// console.log(m);

// let num = [12,45,89,61];
// let m = num.map (function (it){
//     return it.toString()});
// console.log(m);

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//
// function sap(num) {
//     let arr = [];
//
//     for (let i = 0; i < num; i++) {
//         let random = Math.round(Math.random() * 100);
//         arr.push(random)
//     }
//     return arr;
// }
//
// let m = sap(20);
// console.log(m);


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//не знаю
// function sap(min, max) {
//     let arr = [];
//
//     for (let i = 0; i < 20; i++) {
//         let random = Math.round(Math.random() * (max-min) + min);
//         arr.push(random)
//     }
//     return arr;
// }
//
// let m = sap(20, 180);
// console.log(m);
/*не вышло*/


//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// та Відсортувати його по id. по зростанню (sort)

/*function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(2, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(3, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(4, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(5, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(6, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(7, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(8, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(9, 'anna', 'pupko', 'la@gmail.com', 5552211),
    new User(10, 'anna', 'pupko', 'la@gmail.com', 5552211)
]*/
// console.log(users)

// let fil = users.filter(function (it) {
//     return it.id % 2 == 0
// });
// console.log(fil);

// let fil = users.filter(user => user.id % 2 === 0);
// console.log(fil);
//
// let sor = users.sort(function (a, b) {
//     return a - b;
// });
// console.log(sor);

