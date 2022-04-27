/*Все стірлочними!!!!!!!!!
    - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

let arr = [1, 3, 100, 5, 8, 0, 35, 87, 56.7, 58, 99, 15];

let arithmetic_mean = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(arithmetic_mean(arr));
console.log(`-------------------------------------------------`);

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
 а виводить найбільше (Math використовувати заборонено);*/

let min_max = (count, ...num) => {
    let min = 0, max = 0;

    for (let i = 0; i < count; i++) {
        if (min > num[i]) {
            min = num[i];
        }
        if (max < num[i]) {
            max = num[i];
        }
    }
    console.log(max);
    return min;
}

let minMax = min_max(4, 99, 75, 0, 45);
console.log(minMax);
console.log(`-------------------------------------------------`);

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

let arr_random = (arr) => {
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * 100);
        console.log(arrElement);
    }
}

let array = [];
array.length = 100;
arr_random(array);
console.log(`-------------------------------------------------`);

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.*/

let arr_random_limit = (arr, limit) => {
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * limit);
        console.log(arrElement);
    }
}

let array2 = [];
array2.length = 50;
arr_random_limit(array2, 10);
console.log(`-------------------------------------------------`);


/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

let reverse_arr = (arr_1, arr_reverse) => {
    for (let i = arr_1.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr_reverse.length; j++) {
            arr_reverse[j] = arr_1[i];
            console.log(arr_reverse[j]);
        }
    }
}

let array_1 = [4, 99, 75, 0, 45, 698, 66, 20, 12, 5, -2];
let array_reverse = [];
array_reverse.length = array_1.length;
reverse_arr(array_1, array_reverse);
console.log(`-------------------------------------------------`);


/*    Переробити на стрілочні функції з попереднього дз
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

let square = (a, b) => {
    return a * b;
}
console.log(square(5, 9));
console.log(`-------------------------------------------------`);


/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

let square_round = (r) => {
    return 3.14159265 * (r ** 2);
}
console.log(square_round(5));
console.log(`-------------------------------------------------`);

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

let square2 = (h, r) => {
    return 2 * 3.14159265 * r * (h + r);
}

console.log(square2(5, 8));
console.log(`-------------------------------------------------`);


/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let arr_out = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let array_0 = [1, 6, 5, 7, 9, 4, 466, 33, 98, 65, 78, 56];
arr_out(array_0);
console.log(`-------------------------------------------------`);

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

let create_p = (text) => {
    document.write(`<p> ${text} </p>`);
}
create_p(`hello`);
console.log(`-------------------------------------------------`);

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
let create_ul = (text1) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${text1} </li>`);
    }
    document.write(`</ul>`);
}
create_ul(`Hi!!!!!!`);
console.log(`-------------------------------------------------`);

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

let create_ul_2 = (text2, size) => {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li> ${text2} </li>`);
    }
    document.write(`</ul>`);
}
create_ul_2(`Hi!!!!!!`, 100);
console.log(`-------------------------------------------------`);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

let create_list = (count, ...num) => {
    document.write(`<ol>`);
    for (let j = 0; j < count; j++) {
        document.write(`<li> ${num[j]} </li>`);
    }
    document.write(`</ol>`);
}

create_list(7, 8, 56, 9999, 78.6666, true, false, `hello`);
console.log(`-------------------------------------------------`);

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.*/

let arr_object_out=(arr_objects)=> {
    for (let j=0; j<arr_objects.length; j++){
        document.write(`<div> ${arr_objects[j].id} ${arr_objects[j].name} ${arr_objects[j].age} </div>`);
    }
}

let array_00 =[
    {   id: 5689,
        name: `Vasya`,
        age: 15},
    {   id: 9568,
        name: `Olya`,
        age: 19},
    {   id: 3334,
        name: `Sam`,
        age: 22},
    {   id: 2635,
        name: `Juls`,
        age: 24},
    {   id: 5684,
        name: `Igor`,
        age: 32},
]

arr_object_out(array_00);
console.log(`-------------------------------------------------`);

/*- створити функцію яка повертає найменьше число з масиву*/

let array_min=(arr)=> {
    let min = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]<arr[i+1]){
            min=arr[i];
        }
    }
    return min;
}

let array_12 = [1,6,5,7,9,4,466,33,98,65,78,56,4,0,56,91,-5,-99,72];
console.log(array_min(array_12));
console.log(`-------------------------------------------------`);

/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

let arr_sum=(arr)=> {
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

let array_13 = [1,6,5,7,9,4,466,33,98,65,78,56,4,0,56,91,-5,-99,72];
let result = arr_sum(array_13);
console.log(result);
console.log(`-------------------------------------------------`);

/*-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.*/

let arr0=[5, 90];

let change_arr=(arr)=>{
    let p;
    p=arr[0];
    arr[0]=arr[1];
    arr[1]=p;
    console.log(arr);
}

change_arr(arr0);



