
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc1 (a,b){
    return a * b;
}
let res1 = calc1(3,8);
console.log(res1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calc2 (r) {
    return 3.14 * (r * r);
}
let res2 = calc2(7);
console.log(res2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calc3(h,r) {
    return 2 * 3.14 * r * (h + r);
}

let res3 = calc3(4,2);
console.log(res3)


// - створити функцію яка приймає масив та виводить кожен його елемент

function iterator (arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

let mass = [345,1212,33353123,52,45757,3324,56546,23,3536,234]
iterator(mass);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text (enterText) {
    document.write(`<p>${enterText}</p>`)
}
 text("holla kykykyyyk dsgsdghkkb dhdfhfh")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foo (arg) {
    document.write(`<ul>
        <li>${arg}</li>
        <li>${arg}</li>
        <li>${arg}</li>
    </ul>`)
}
foo("hello");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function foo1 (arg, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++){
        document.write(`<li>${arg}</li>`)
    }
    document.write(`</ul>`)
}

foo1("sdgsf;kgldgsdfs", 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function foo2 (arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

let arr = [1,"redgdg",false,525,45757,"fsdjfhsgsr",56546]
foo2(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function foo3 (arr){
    for (const arrElement of arr) {
        document.write(`<div>`)
        for (const key in arrElement) {
            document.write(`<h2>${key} ${arrElement[key]}</h2>`)
        }
        document.write(`<br>`)
        document.write(`</div>`)
    }
}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
foo3(coursesAndDurationArray)

// - створити функцію яка повертає найменьше число з масиву

function foo4 (arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min){
            min = arrElement
        }
    }
    return min
}
let res4 = foo4(mass);
console.log(res4)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10])

function sumArr (arr){
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum
}
let sumArr1 = sumArr(mass);
console.log(sumArr1)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function test (arr, index1, index2){
    let num = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = num
    console.log(arr)
}
console.log(mass)
test(mass,0,1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function convert (sumUAH,currencyValues,exchangeCurrency){
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency){
            return sumUAH / currencyValue.value
        }

    }
}

let valute = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
console.log( convert(23213,valute, 'USD'))