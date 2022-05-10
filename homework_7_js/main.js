/*- Створити функцію конструктор для об'єктів User з полями id, name,
 surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

let arr=[];
for (let i = 0; i < 10; i++) {
    arr[i]=new User(`123${i}`, `Mike${i}`, `Gold${i}`, `mike.gold${i}@gmail.com`, `38093566715${i}`);
}
console.log(arr);

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
залишивши тільки об'єкти з парними id (filter)*/

let evenId = arr.filter(value => {
    if ((+value.id)%2===0){
        return value;
    }
});
console.log(evenId);

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати
 його по id. по зростанню (sort)*/

let growthId = (arr)=>{
    arr.sort((a,b)=>(+a.id)-(+b.id));
    return arr;
}
console.log(growthId(arr));


/*- створити класс для об'єктів Client з полями id, name, surname ,
 email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname= surname;
        this.email= email;
        this.phone=phone;
        this.order=order;
    }
}

let arrayClients = [new Client(3456, `Alise`, `Coule`, `alise.coule@gmail.com`, `0325698741`, [5,7,21,19,7]),
    new Client(3786, `Mike`, `Coule`, `mike.coule@gmail.com`, `0325698741`, [5, 56, 7,21,19,34,7]),
    new Client(3423, `Sam`, `Coule`, `sam.coule@gmail.com`, `0325698741`, [5,7,21,78,20,45,34,19,34,7]),
    new Client(3434, `Sally`, `Coule`, `sally.coule@gmail.com`, `0325698741`, [5,7,2,1,19,34,7]),
    new Client(3457, `Kile`, `Coule`, `kile.coule@gmail.com`, `0325698741`, [5,7,21,7, 34, 89,19,34,7]),
    new Client(3490, `Bob`, `Coule`, `bob.coule@gmail.com`, `0325698741`, [5,7,21,19,34,7]),
    new Client(3412, `Billy`, `Coule`, `billy.coule@gmail.com`, `0325698741`, [5,7,21, 90,45,10,23,24,57,19,34,7]),
    new Client(3445, `Ann`, `Coule`, `ann.coule@gmail.com`, `0325698741`, [5,7,21,19,34,7,67,30,36,87,91]),
    new Client(3433, `Mia`, `Coule`, `mia.coule@gmail.com`, `0325698741`, [5, 7, 21,35,80,67,908, 19, 34, 7]),
    new Client(3413, `Sonya`, `Coule`, `sonya.coule@gmail.com`, `0325698741`, [5, 7,12,13,14,15,16, 21, 19, 34, 7])];

console.log(arrayClients);

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його
 по кількості товарів в полі order по зростанню. (sort)*/

let clientsSort = (array)=>{
    array.sort((a,b)=>a.order.length-b.order.length);
    return array;
}
console.log(clientsSort(arrayClients));


/*- Створити функцію конструктор яка дозволяє створювати об'єкти car,
з властивостями модель, виробник, рік випуску, максимальна швидкість,
об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі
швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль
в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення
максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій"
з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, manufacturer, year, maximumSpeed, engineCapacity){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maximumSpeed=maximumSpeed;
    this.engineCapacity=engineCapacity;
    this.drive=function () {
        console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`);
    }
    this.info=function () {
        console.log(`model - ${model}`);
        console.log(`manufacturer - ${manufacturer}`);
        console.log(`year - ${year}`);
        console.log(`maximumSpeed - ${maximumSpeed}`);
        console.log(`engineCapacity - ${engineCapacity}`);

    }
    this.increaseMaxSpeed=function (newSpeed) {
        return this.maximumSpeed+=newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year=newValue;
    }
    this.addDriver=function (driver) {
        this.driver=driver;
    }
}

let car1= new Car(`C`, `Mercedes`, 2001, 250, 1596);
car1.drive();
car1.info();
car1.increaseMaxSpeed(150);
console.log(car1.maximumSpeed);
car1.changeYear(2003);
console.log(car1.year);
car1.addDriver({name: `Mercedes Benz`, age: 12});
console.log(car1);



/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
 виробник, рік випуску, максимальна швидкість, об'єм двигуна.
  додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю
 ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль
в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення
максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним
набором полів, і додає його в поточний об'єкт car*/

class Carr {
    constructor(model, manufacturer, year, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {
            console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }
    info () {
        console.log(`model - ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`year - ${this.year}`);
        console.log(`maximumSpeed - ${this.maximumSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);

    }
    increaseMaxSpeed (newSpeed) {
        return this.maximumSpeed+=newSpeed;
    }
    changeYear (newValue) {
        return this.year=newValue;
    }
    addDriver (driver) {
        this.driver=driver;
    }
}

let car2= new Carr(`C`, `Mercedes`, 2001, 250, 1596);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(150);
console.log(car2.maximumSpeed);
car2.changeYear(2003);
console.log(car2.year);
car2.addDriver({name: `Mercedes Benz`, age: 12});
console.log(car2);

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік,
 розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має
поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції
    масиву find та відповідного колбеку*/

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrCinderellas = [new Cinderella(`Ann`, 18, 34),
    new Cinderella(`Ruby`, 19, 35),
    new Cinderella(`Alla`, 17, 32),
    new Cinderella(`Sally`, 20, 33),
    new Cinderella(`Olivia`, 21, 39),
    new Cinderella(`Amelia`, 23, 40),
    new Cinderella(`Jessica`, 13, 36),
    new Cinderella(`Ava`, 15, 38),
    new Cinderella(`Emily`, 18, 37),
    new Cinderella(`Mia`, 16, 39)];

class Prince extends Cinderella {
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince(`Nike`, 24, 32);

let cinderellaFind =(arr, princeX)=>{
    let resultCinderella=[];
    for (const arrElement of arr) {
        if (princeX.shoeSize===arrElement.footSize){
            resultCinderella=arrElement;
        }
    }
    return resultCinderella;
}

console.log(cinderellaFind(arrCinderellas, prince));

let functionFind = arrCinderellas.find(value => value.footSize===prince.shoeSize);

console.log(functionFind);