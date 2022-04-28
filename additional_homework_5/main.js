/*Всі функції повинні бути описані стрілочним типом!!!!
    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

let min_number = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        console.log(`ERROR`);
    }
}

min_number(3, 8, 66);


/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

let max_number = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    } else {
        console.log(`ERROR`);
    }
}

max_number(3, 8, 66);


/*- створити функцію яка повертає найбільше число з масиву*/

let max_number_arr = (arr) => {
    let max=0;
    for (const arrElement of arr) {
        if (max<arrElement){
            max=arrElement;
        }
    }
    return max;
}

let array = [1, 2, 3, 9, 5, 4, 7, 8, 23, 5689, 41, 0.4];
console.log(max_number_arr(array));

/*- створити функцію яка повертає найменьше число з масиву*/

let min_number_arr = (arr) => {
    let min=arr[0];                  //щоб врахувати варіант коли в масиві немає нуля і найменше число більше за нуль.
    for (const arrElement of arr) {
        if (min>arrElement){
            min=arrElement;
        }
    }
    return min;
}

let array_2 = [1, 2, 3, 9, 5, 4, 7, 8, 23, 5689, 41, 0.4];
console.log(min_number_arr(array_2));


/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву
та повертає його. Приклад [1,2,10]->13*/

let sum_arr=(arr)=> {
    let sum=0;
    for (const arrElement of arr) {
        sum+=arrElement;
    }
    return sum;
}

let array_3 = [1, 2, 3, 9, 5, 4, 7, 8, 23, 5689, 41, 0.4];
console.log(sum_arr(array_3));

/*- Дано натуральное число n. Выведите все числа от 1 до n.*/

let number_out_limit=(n)=>{
    for (let i=0; i<n; i++){
        console.log(i);
    }
}
number_out_limit(8);


/*- Даны два целых числа A и В . Выведите все числа от A до B включительно,
 в порядке возрастания, если A < B, или в порядке убывания в противном случае.*/

let number_out=(a,b)=>{
   // debugger;
    if (a<b) {
        for (let i = a; i <=b; i++) {
            console.log(i);
        }
    }else if(a>b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }else if(a===b) {
        console.log(`The numbers are equal!`);
    }
}

number_out(12,3);

/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який
знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/


let change_mass=(arr, i)=>{
    let p=0;
    for (let j = 0; j < arr.length; j++) {
        if (j===i){
            p=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=p;
        }
    }
    return arr;
}

let array_4 = [1, 2, 3, 9, 5, 4, 7, 8, 23, 5689, 41, 0.4];
console.log(change_mass(array_4,5));

/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/

/*let zeros_end=(arr)=>{
    for (let arrElement of arr) {
        if (arrElement===0){
            let tmp=arr.length-1;
            arr[tmp].push(arrElement);
        }
    }
    return arr;
}

let array_5 = [1, 2, 3, 9, 5,0, 4, 7, 8, 23,0, 5689, 41, 0.4,0];
console.log(zeros_end(array_5));*/