


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Book1',
    pageCount: 100,
    gener: 'gener1'
}
console.log(book1);
let book2 = {
    title: 'Book2',
    pageCount: 200,
    gener: 'gener2'
}
console.log(book2);
let book3 = {
    title: 'Book3',
    pageCount: 300,
    gener: 'gener3'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
book1.authors = [
    {
        name: 'authors1',
        age: 1
    },
    {
        name: 'authors2',
        age: 2
    }
]
console.log(book1);
book2.authors = [
    {
        name: 'authors1',
        age: 1
    },
    {
        name: 'authors2',
        age: 2
    }
]
console.log(book2);
book3.authors = [
    {
        name: 'authors1',
        age: 1
    },
    {
        name: 'authors2',
        age: 2
    }
]
console.log(book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'name1',
        username: 'username1',
        password: 'pass1'
    },
    {
        name: 'name2',
        username: 'username2',
        password: 'pass2'
    },
    {
        name: 'name3',
        username: 'username3',
        password: 'pass3'
    },
    {
        name: 'name4',
        username: 'username4',
        password: 'pass4'
    },
    {
        name: 'name5',
        username: 'username5',
        password: 'pass5'
    },
    {
        name: 'name6',
        username: 'username6',
        password: 'pass6'
    }
    , {
        name: 'name7',
        username: 'username7',
        password: 'pass7'
    },
    {
        name: 'name8',
        username: 'username8',
        password: 'pass8'
    },
    {
        name: 'name9',
        username: 'username9',
        password: 'pass9'
    },
    {
        name: 'name10',
        username: 'username10',
        password: 'pass10'
    }
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !==0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 41;

if (time >= 0 &&  time <= 14){
    console.log('Перша чверть');
}else if (time >= 15 && time <=29){
    console.log('Друга чверть');
}else if (time >= 30 && time <= 44){
    console.log('Третя чверть');
}else if (time >= 45 && time <= 59){
    console.log('Четверта чверть');
}else {
    console.log('Годинни тимчасово не працює');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;

if (day >= 1 && day <= 10){
    console.log('First');
}else if (day >= 11 && day <= 20){
    console.log('Second');
}else if (day >= 21 && day <= 31){
    console.log('Third');
}else {
    console.log("ERROR");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numberDay = 3;

switch (numberDay){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let  one = 21;
let two = 21;

if (one > two){
    console.log('число ' + one + ' більше');
}else if (one < two){
    console.log('число ' + two + ' більше');
}else {
    console.log('числа рівні');
}
