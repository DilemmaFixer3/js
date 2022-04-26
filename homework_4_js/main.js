/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a,b) {
    return a*b;
}
console.log(square(5,9));
*/

/*- створити функцію яка обчислює та повертає площу кола з радіусом r

function square_round(r) {
    const p = 3.14159265;
    return p*(r**2);
}
console.log(square_round(5));
*/

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function square2(h, r) {
    const p = 3.14159265;
    return 2*p*r*(h+r);
}

console.log(square2(5, 8));
*/

/*- створити функцію яка приймає масив та виводить кожен його елемент

function arr_out(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let array = [1,6,5,7,9,4,466,33,98,65,78,56];
arr_out(array);
*/

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function create_p(text) {
    document.write(`<p> ${text} </p>`);
}
create_p(`hello`);
*/

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function create_ul(text1) {
    document.write(`<ul>`);
    for (let i=0; i<3; i++){
        document.write(`<li> ${text1} </li>`);
    }
    document.write(`</ul>`);
}
create_ul(`Hi!!!!!!`);
*/

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function create_ul_2(text2, size) {
    document.write(`<ul>`);
    for (let i=0; i<size; i++){
        document.write(`<li> ${text2} </li>`);
    }
    document.write(`</ul>`);
}
create_ul_2(`Hi!!!!!!`, 100 );
*/

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function create_list() {
    document.write(`<ol>`);
    for (const argument of arguments) {
        document.write(`<li> ${argument} </li>`);
    }
    document.write(`</ol>`);
}

create_list(2,8,56,9999,78.6666,true,false,`hello`);
*/

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arr_object_out(arr_objects) {
    for (let j=0; j<arr_objects.length; j++){
        document.write(`<div> ${arr_objects[j].id} ${arr_objects[j].name} ${arr_objects[j].age} </div>`);
    }
}

let array =[
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

arr_object_out(array);
*/

/*- створити функцію яка повертає найменьше число з масиву

function array_min(arr) {
    let min = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]<arr[i+1]){
            min=arr[i];
        }
    }
    return min;
}

let array = [1,6,5,7,9,4,466,33,98,65,78,56,4,0,56,91,-5,-99,72];
console.log(array_min(array));

*/

/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arr_sum(arr) {
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

let array = [1,6,5,7,9,4,466,33,98,65,78,56,4,0,56,91,-5,-99,72];
let result = arr_sum(array);
console.log(result);

*/