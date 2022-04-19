/* - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = +prompt('Enter the number: ');
if (x !== 0) {
    console.log("True");
    document.write("True");
} else {
    console.log("False");
    document.write("False");
}


/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
    який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = prompt('Enter the number from 0 to 59: ');
if (time <= 14) {
    document.write('The number belongs to the first quarter');
} else if (14 < time && time <= 29) {
    document.write('The number belongs to the second quarter');
} else if (29 < time && time <= 44) {
    document.write('The number belongs to the third quarter');
} else if (44 < time && time <= 59) {
    document.write('The number belongs to the fourth quarter');
} else{
    document.write('Your answer is impossible. Please refresh the page and try again.');
}



/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити,
    у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = prompt('Enter the number from 1 to 31: ');
if (day<=10){
    document.write('The number belongs to the first decade.');
}else if (10<day && day<=20){
    document.write('The number belongs to the second decade.');
}else if (20<day && day<=31){
    document.write('The number belongs to the third decade.');
}else{
    document.write('Your answer is impossible. Please refresh the page and try again.');
}



/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
    і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let dayNumber = prompt('Enter the day of the week (number):');
switch (dayNumber) {
    case '1':
    document.write('Monday');
    break;
    case '2':
    document.write('Tuesday');
    break;
    case '3':
    document.write('Wednesday');
    break;
    case '4':
    document.write('Thursday');
    break;
    case '5':
    document.write('Friday');
    break;
    case '6':
    document.write('Saturday');
    break;
    case '7':
    document.write('Sunday');
    break;
    default:
        document.write('Your answer is impossible. Please refresh the page and try again.');
}



/*    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/

let a = +prompt('Enter the number A: ');
let b = +prompt('Enter the number B: ');

if (a>b){
    document.write('The bigger the number A: ', a);
}else if (b>a){
    document.write('The bigger the number B: ', b);
}else if (b===a){
    document.write('The numbers are equal.');
}
