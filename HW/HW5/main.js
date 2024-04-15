// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!













//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const fun1 = (a, b) => a * b;
console.log(fun1(3,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const fun2 = r => 3.14 * (r * r);
console.log(fun2(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const  fun3 = (r,h) => 2 * 3.14 * r * (h + r);
console.log(fun3(4,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
let number = [1,2,3,4,5];
const fun4 = (mass) => {
    for (const item of mass) {
        console.log(item);
    }
}
fun4(number);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const fun5 = (text) => {
    document.write(`<p>${text}</p>`);
}
fun5('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const fun6 = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
fun6('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const fun7 = (text, index) => {
    document.write(`<ul>`);
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
fun7('hello',4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let random = ['hello', true,34,78,'bye', false,90,'hi']
const fun8 = (mass) => {
    document.write(`<ul>`);
    for (const item of mass) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
fun8(random);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'Pasha', age: 22},
    {id: 2, name: 'Taras', age: 28},
    {id: 3, name: 'Oksana', age: 23}
]
const fun9 = (mass) => {
    for (const user of mass) {
        document.write(`<div>`);
        document.write(`<ol>`);
        for (const key in user) {
            document.write(`<li>${key}: ${user[key]}</li>`)
        }
        document.write(`</ol>`);
        document.write(`</div>`);
    }
}
fun9(users);

// - створити функцію яка повертає найменьше число з масиву
let num2 = [2,4,-30,5,70]
const fun10 = (mass) => {
    let min = mass[0]
    for (const item of mass) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
console.log(fun10(num2));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (mass) => {
    let sum = 0
    for (const item of mass) {
        sum = sum + item;
    }
    return sum;
}
console.log(sum(num2));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (mass, index1, index2) => {
    let free = mass[index1];
    mass[index1] = mass[index2];
    mass[index2] = free;
    return mass
}
console.log(num2);
console.log(swap(num2,1,2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let courseValue = [{currency:'USD',value:40},{currency:'EUR',value:42}];
const convert = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            console.log(sumUAH/item.value);
        }

    }
}
convert(100,courseValue,'USD')
