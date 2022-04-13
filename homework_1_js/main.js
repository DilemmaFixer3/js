/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/

let variable1;
variable1 = 'hello';
console.log(variable1);
alert(variable1);
document.write(variable1);

let variable2;
variable2 = 'own';
console.log(variable2);
alert(variable2);
document.write(variable2);

let variable3;
variable3 = 'com';
console.log(variable3);
alert(variable3);
document.write(variable3);

let variable4;
variable4 = 'ua';
console.log(variable4);
alert(variable4);
document.write(variable4);

let num1;
num1 = 1;
console.log(num1);
alert(num1);
document.write(num1);

let num2;
num2 = 10;
console.log(num2);
alert(num2);
document.write(num2);

let num3;
num3 = -999;
console.log(num3);
alert(num3);
document.write(num3);

let num4;
num4 = 123;
console.log(num4);
alert(num4);
document.write(num4);

const num5 = 3.14;
console.log(num5);
alert(num5);
document.write(num5);

let num6;
num6 = 2.7;
console.log(num6);
alert(num6);
document.write(num6);

let num7;
num7 = 16;
console.log(num7);
alert(num7);
document.write(num7);

let value1;
value1 = true;
console.log(value1);
alert(value1);
document.write(value1);

let value0;
value0 = false;
console.log(value0);
alert(value0);
document.write(value0);


/*- Створити об'єкт book з наступними полями :
назва, (тип string)
кількість сторінок (числовий тип),
жанр (string)*/

let book = {
    name: '1984',
    pages: 316,
    genre: 'novel-anti-utopia'
}


/*- Створити об'єкт book з наступними полями :
назва, (тип string)
кількість сторінок (числовий тип),
жанр (string)
автори (тип - масив, кожен елемент масиву - це стрінга)*/

let book_1 = {
    name: 'Head First Java',
    pages: 717,
    genre: 'science fiction novel',
    authors: [ 'Kathy Sierra', 'Bert Bates']
}


/*- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

let firstName = 'Myroslava';
let lastName = 'Babiichuk';
let middleName = 'Alexandrovna';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);


/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let nameMy = prompt('Enter a name: ');
console.log(nameMy);

let middleNameMy = prompt('Enter a middle name: ');
console.log(middleNameMy);

let yearMy = prompt('Enter the age: ');
console.log(yearMy);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/

let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));


/*- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт*/

let books = [
    {   name: 'Ulysses',
        pages: 1216,
        genre: 'novel',
        authors: 'James Joyce'
    },
    {   name: 'Les Miserables',
        pages: 1696,
        genre: 'novel',
        authors: 'Victor Hugo'
    },
    {   name: 'The Great Gatsby',
        pages: 684,
        genre: 'novel',
        authors: 'Francis Scott Fitzgerald'
    },
    {   name: 'Sense and Sensibility',
        pages: 416,
        genre: 'novel',
        authors: 'Jane Austen'
    },
    {   name: 'The Dandelion Wine',
        pages: 352,
        genre: 'novel',
        authors: 'Ray Bradbury'
    }
]
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
console.log(books[4]);
