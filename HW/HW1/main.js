// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let h = 'hello';
console.log(h);
let o = 'owu';
console.log(o);
let c = 'com';
console.log(c);
let u = 'ua';
console.log(u);

let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
console.log(n3);
let n4 = 123;
console.log(n4);
let n5 = 3.14;
console.log(n5);
let n6 = 2.7;
console.log(n6)
let n7 = 16;
console.log(n7)

let t = true;
console.log(t);
let f = false;
console.log(f)

let firstName = 'Юсик';
let middleName = 'Павло';
let lastName = 'Миронович';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person)

let a1 = 100;
console.log(typeof a1);
let b1 = '100';
console.log(typeof b1);
let c1 = true;
console.log(typeof c1);

let fName = prompt('enter your first name');
let sName = prompt('enter your second name');
let age = prompt('enter your age');
console.log(fName);
console.log(sName);
console.log(age);