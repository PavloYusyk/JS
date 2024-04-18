
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 ='javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1Upper = str1.toUpperCase();
console.log(str1Upper);
let str2Upper = str2.toUpperCase();
console.log(str2Upper);
let str3Upper = str3.toUpperCase();
console.log(str3Upper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1Lower = str1Upper.toLowerCase();
console.log(str1Lower);
let str2Lower = str2Upper.toLowerCase();
console.log(str2Lower);
let str3Lower = str3Upper.toLowerCase();
console.log(str3Lower);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
console.log(str4.replaceAll(' ',''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const  stringToarray = (str) => str.split(' ');
let str5 = 'Ревуть воли як ясла повні';
console.log(stringToarray(str5));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0];
let strNums = nums.map(String);
console.log(strNums)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numbers = [11,21,3];
let sort = (arr, direction) => {
    console.log(arr.sort((a,b) =>{
        if (direction === 'ascending'){
            return a - b;
        }
        if (direction === 'descending'){
            return b - a;
        }
    }))
}
sort(numbers,'ascending')

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort1 =
    coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration - a.monthDuration;
});
console.log(sort1);

let filter = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(filter);

let map = coursesAndDurationArray.map((course, index) => ({id:index+1,...course}));
console.log(map);

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cards = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]
let aceSpades = cards.filter((item) => item.value === 'ace' && item.cardSuit === 'spades');
console.log(aceSpades);
let six = cards.filter((item) => item.value === '6');
console.log(six);
let red = cards.filter((item) => item.color === 'red')
console.log(red);
let diamonds = cards.filter((item) => item.cardSuit === 'diamonds')
console.log(diamonds);
let clubs = cards.filter((item) => item.cardSuit === 'clubs').splice(3)
console.log(clubs);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((acum, card) => {
    if (card.color === 'red'){
        if (card.cardSuit === 'diamonds'){
            acum[0][0].push(card)
        }else {
            acum[0][1].push(card)
        }
    }else {
        if (card.cardSuit === 'spades'){
            acum[1][0].push(card)
        }else {
            acum[1][1].push(card)
        }
    }
    return acum;
},[[[],[]],[[],[]]]);
console.log(reduce);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sass = coursesArray.filter((item) => item.modules.find((elem) => elem === 'sass'));
console.log(sass);
let docker = coursesArray.filter((item) => item.modules.find((elem) => elem === 'docker'));
console.log(docker)

