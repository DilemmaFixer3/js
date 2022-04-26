/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

function min_3number(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

min_3number(2, 6, 98);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

function max_3number(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

max_3number(2, 6, 98);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);


/*- створити функцію яка повертає найбільше число з масиву*/

function max_number_array(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}

let arr = [1, 3, 100, 5, 8, 0, 35, 87, 56.7, 58, 99, 15];
max_number_array(arr);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

function arithmetic_mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(arithmetic_mean(arr));

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
а виводить найбільше (Math використовувати заборонено);*/

function min_max() {
    let min = 0, max = 0;

    for (const argument of arguments) {
        if (min > argument) {
            min = argument;
        }
        if (max < argument) {
            max = argument;
        }
    }
    console.log(max);
    return min;
}

let minMax = min_max(4, 99, 75, 0, 45, 698, 66, 20, 12, 5, -2);
console.log(minMax);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);


/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 -
Math.round(Math.random()*100)) та виводить його.*/

function arr_random(arr) {
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * 100);
        console.log(arrElement);
    }
}

let array = [];
array.length = 100;
arr_random(array);


//let f=Math.round(Math.random()*100);
//console.log(f);
console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
 limit - аргумент, який характеризує кінцеве значення діапазону.*/

function arr_random_limit(arr, limit) {
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * limit);
        console.log(arrElement);
    }
}

let array2 = [];
array2.length = 50;
arr_random_limit(array2, 10);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку.
 [1,2,3] -> [3, 2, 1].*/

function reverse_arr(arr_1, arr_reverse) {
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

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію, яка якщо приймає один аргумент, просто вивoдить його,
 якщо два аргументи - складає або конкатенує їх між собою.*/

function f() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        console.log(`${arguments[0]}${arguments[1]}`);
    }
}

f(`hello`, 5);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- створити функцію  яка приймає два масиви та скаладає значення елементів
з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/

function sum_arr(arr0, arr1, arr01) {
    for (let i = 0; i < arr0.length; i++) {
        arr01[i] = arr0[i] + arr1[i];
        console.log(arr01[i]);
    }
    return arr01;
}

let arr_100 = [2, 9, 89, 56, 12, 74, 56, 32, 53, 81];
let arr_200 = [5, 9, 6, 4, 33, 21, 30, 94, 56, 84];
let arr_sum = [];
arr_sum.length = arr_100.length;
sum_arr(arr_100, arr_200, arr_sum);

console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);


/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив
ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/

let arr_obj = [
    {name: 'Dima', age: 13},
    {model: 'Camry', year: 2019, color: `silver`}];
let res_arr = [];
res_arr.length = 10;

function obj_out(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        for (const arrKey in arr[i]) {
            // console.log(arrKey);
            let j = 0;
            res[j] = arrKey;
            console.log(res[j]);
            j++;
        }
    }
    return res;
}

obj_out(arr_obj, res_arr);
console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

/*- Створити функцію яка приймає масив будь яких объектів, та повертає
масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
*/

let res_arr_00=[];
res_arr_00.length=10;

function obj_name_out(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        for (const arrKey in arr[i]) {
            // console.log(arrKey);
            let j = 0;
            res[j] = arr[i][arrKey];
            console.log(res[j]);
            j++;
        }
    }
    return res;
}

obj_name_out(arr_obj, res_arr_00);
console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
