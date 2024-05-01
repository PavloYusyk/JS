// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(2,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(4,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(9,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(1,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(3,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(10,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(9,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(6,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(7,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
    new User(8,'Pavlo','Yusyk','pav.yus@gmail.com','+380 93 303 19 28'),
]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter = () => {
    return  users.filter(user => user.id % 2 === 0);
}
console.log(filter());

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort = () => {
    return users.sort((a, b) => a.id - b.id);
}
console.log(sort());

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15', 'Case','Charger']),
    new Client(2,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 14', 'Case - 1','Case - 2','Charger']),
    new Client(3,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Charger']),
    new Client(4,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['MacBook', 'Case']),
    new Client(5,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Case - 1','Case - 2']),
    new Client(6,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15','MacBook','Case - 1','Case - 2','Charger']),
    new Client(7,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15', 'Watch']),
    new Client(8,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15','Charger']),
    new Client(9,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15','Glass','Case','Charger']),
    new Client(10,'kokos','banana','banakos@shok.net','+380 99 656 41 46',['Iphone 15', 'Case','Charger']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const filter2 = () => {
    return clients.sort((a,b) => a.order.length - b.order.length)
}
console.log(filter2());

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:\
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model,producer,year,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = [];

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }


    this.info = () => {
        console.log(`model: ${this.model}`);
        console.log(`producer: ${this.producer}`);
        console.log(`year: ${this.year}`);
        console.log(`maxSpeed: ${this.maxSpeed}`);
        console.log(`engineCapacity: ${this.engineCapacity}`);
    }

    this.increaseMaxSpeed = (newSpeed) => {
        console.log(this.maxSpeed = newSpeed);
    }

    this.changeYear = (newValue) => {
        console.log(this.year = newValue);
    }

    this.addDriver = (name, surname) => {
        this.driver.push(new Driver(name,surname));
    }
}

function Driver(name,surname){
    this.name = name;
    this.surname =surname;
}

let car1 = new Car('M3','BMW','2020',300,2.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(400);
car1.changeYear(2021);
car1.addDriver('Pavlo','Yusyk');
console.log(car1);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Carr {
    constructor(model,producer,year,maxSpeed,engineCapacity){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = [];
    }
    drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }


    info = () => {
        console.log(`model: ${this.model}`);
        console.log(`producer: ${this.producer}`);
        console.log(`year: ${this.year}`);
        console.log(`maxSpeed: ${this.maxSpeed}`);
        console.log(`engineCapacity: ${this.engineCapacity}`);
    }

    increaseMaxSpeed = (newSpeed) => {
        console.log(this.maxSpeed = newSpeed);
    }

    changeYear = (newValue) => {
        console.log(this.year = newValue);
    }

    addDriver = (name, surname) => {
        this.driver.push(new Driver(name,surname));
    }

}

let car2 = new Carr('AMG','Mercedes','2022',321,2.4);

car2.drive();
car2.info();
car2.increaseMaxSpeed(450);
car2.changeYear(2023);
car2.addDriver('Pavlo','Yusyk');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name,age,sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let mass = [
    new Popelushka('Popel18',18,39),
    new Popelushka('Popel28',28,38),
    new Popelushka('Popel22',22,41),
    new Popelushka('Popel19',19,39),
    new Popelushka('Popel47',47,38),
    new Popelushka('Popel92',92,43),
    new Popelushka('Popel20',20,37),
    new Popelushka('Popel69',69,40),
    new Popelushka('Popel23',23,38),
]

class Prince {
    constructor(name,age,shoesSize ) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}
let prince = new Prince('Artemon',16,38);
console.log(mass.filter(item => item.sizeFoot === prince.shoesSize));
console.log(mass.find(item => item.sizeFoot === prince.shoesSize && item.age < 25));