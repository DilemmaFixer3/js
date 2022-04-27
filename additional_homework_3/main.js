/*1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.*/

let arr0 = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arr0[i] = i;
    }
}
console.log(arr0);
console.log(`----------------------------------------`);

/* b. заповнити його 50 непарними числами за допомоги циклу.*/

let arr1 = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arr1[i] = i;
    }
}
console.log(arr1);
console.log(`----------------------------------------`);

//Math.round(Math.random() * limit)
/*c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/

let arr2 = [];
for (let i = 0; i < 20; i++) {
    arr2[i] = Math.round(Math.random() * 100);
}
console.log(arr2);
console.log(`----------------------------------------`);

/*d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
(Google: Generate random number JS)*/

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.round((Math.random() * 724) + 8);
}
console.log(arr3);
console.log(`----------------------------------------`);


/*2. Вивести за допомогою console.log кожен третій елемен*/

let array =[2,5,9,6,4,7,3,1,5,6,8,4];
let i=2;
while (i<array.length){
    console.log(array[i]);
    i+=3;
}
console.log(`----------------------------------------`);


/*3. Вивести за допомогою console.log кожен третій елемен тільки
якщо цей елемент є парним.*/

let array_3 =[2,5,9,6,4,7,3,1,5,6,8,4];
let i_3=2;
while (i_3<array_3.length){
    if (array_3[i_3]%2===0) {
        console.log(array_3[i_3]);
    }
    i_3+=3;
}
console.log(`----------------------------------------`);


/*4. Вивести за допомогою console.log кожен третій елемен
тільки якщо цей елемент є парним та записати їх в новий масив*/

let array_4 =[2,5,9,6,4,7,3,1,5,6,8,4];
let i_4=2;
let mass=[];
while (i_4<array_4.length){
    if (array_4[i_4]%2===0) {
        console.log(array_4[i_4]);
        mass[i_4]=array_4[i_4];
    }
    i_4+=3;
}
console.log(mass);
console.log(`----------------------------------------`);


/*5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/

let array_5 = [2, 5, 9, 6, 4, 7, 3, 1, 5, 6, 8, 4];

for (let p = 0; p < array_5.length; p++) {
    if ((array_5[p + 1] % 2) === 0) {
        console.log(array_5[p]);
    }
}

console.log(`----------------------------------------`);

/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість
окремої покупки. Обрахувати середній чек.*/

let array_6 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const number of array_6) {
    sum += number;
}
let result_6 = 0;
result_6 = sum / array_6.length;
console.log(result_6);
console.log(`----------------------------------------`);


/*7. Створити масив з рандомними значеннями, помножити всі його елементи на 5
та перемістити їх в інший масив.*/

let array_7 = [2, 5, 9, 6, 4, 7, 3, 1, 5, 6, 8, 4];
let array_70 = [];
for (let t = 0; t < array_7.length; t++) {
    array_70[t] = array_7[t] * 5;
}
console.log(array_70);

console.log(`----------------------------------------`);

/*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
пройтись по ньому, і якщо елемент є числом -
додати його в інший масив.*/

let array_8 = [5, 9, 46, 100, 0, true, `hello`, 8, false, `world`, 18];
let array_80 = [];
for (let j = 0; j < array_8.length; j++) {
    if (typeof (array_8[j]) === `number`) {
        array_80[j] = array_8[j];
    }
}
console.log(array_80);

console.log(`----------------------------------------`);

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
{user_id: 3, country: 'USA', city: 'Portland'},
{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
{user_id: 2, country: 'Poland', city: 'Krakow'},
{user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]
*/


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [{}, {}, {}, {}];
//debugger;
for (let u = 0; u < usersWithId.length; u++) {
    for (let h = 0; h < citiesWithId.length; h++) {
        if (usersWithId[u].id === citiesWithId[h].user_id) {
            //usersWithCities[u].id=(usersWithId[u]+ citiesWithId[h]);
            usersWithCities[u].id = usersWithId[u].id;
            usersWithCities[u].name = usersWithId[u].name;
            usersWithCities[u].age = usersWithId[u].age;
            usersWithCities[u].status = usersWithId[u].status;
           // usersWithCities[u]={address:user_id};
            //let ads={val:0};
            // usersWithCities[u].address.user_id=citiesWithId[h].user_id;
            //usersWithCities[u].address.country=citiesWithId[h].country;
            //usersWithCities[u].address.city=citiesWithId[h].city;


            console.log(usersWithCities[u].id, usersWithCities[u].name,
                usersWithCities[u].age, usersWithCities[u].status);
            //console.log(usersWithCities[u].name);
            /*document.write(`${usersWithCities[u].id} ${usersWithCities[u].name}
            ${usersWithCities[u].age} ${usersWithCities[u].status} 
            ${usersWithCities[u].address}`);*/
            /*.user_id}
            ${usersWithCities[u].address[u].country}
            ${usersWithCities[u].address[u].city}`);*/
        }
    }
}
//console.log(usersWithCities);


console.log(`----------------------------------------`);


/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
значення яких є парними.*/

let array_10 = [2, 5, 9, 6, 4, 7, 3, 1, 5, 6, 8, 4];
for (const number of array_10) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log(`----------------------------------------`);


/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/

let array_11 = [2, 5, 9, 6, 4, 7, 3, 1, 5, 6, 8, 4];
let arr_101 = [];

for (let i = 0; i < array_11.length; i++) {
    arr_101[i] = array_11[i];
}
console.log(arr_101);

console.log(`----------------------------------------`);


/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати
всі букви в слово.*/

let arr_12 = ['a', 'b', 'c'];
let result_0=``;
for (let j=0; j<arr_12.length;j++) {
    result_0+=arr_12[j];
}
console.log(result_0);

console.log(`----------------------------------------`);

/*- Дано масив: [ 'a', 'b', 'c'] .
За допомогою циклу while зібрати всі букви в слово.*/

let arr_13 = ['a', 'b', 'c'];
let result_1=``;
let l=0;
while (l<arr_13.length){
    result_1+=arr_13[l];
    l++;
}
console.log(result_1);
console.log(`----------------------------------------`);

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of
зібрати всі букви в слово.*/

let arr_14 = ['a', 'b', 'c'];
let result_2=``;

for (const string of arr_14) {
    result_2+=string;
}

console.log(result_2);
console.log(`----------------------------------------`);
