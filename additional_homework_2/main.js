/*
- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length>=3){
    console.log(`Big array(>=3 elements)`);
}else{
    console.log(`Small array(<3 elements)`);
}


/*- Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
    Знайти, яке з них є середнім (більше одного, але менше за інше).
    Перевірити, чи знаходиться перше число між двома іншими.*/

let a= 5, b=7, c=1;
if (c<a<b||b<a<c){
    console.log(`a =`, a);
}else if (a<b<c||c<b<a){
    console.log(`b =`, b);
}else if (a<c<b||b<c<a){
    console.log(`c =`, c);
}

/*- Перепишіть конструкцію if з використанням умовного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
*/

let result= (8+1<4?`Мало`:`Багато`);             //  (a+b<4?`Мало`:`Багато`)
console.log(result);

/*- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число:
позитивним, негативним або нулем
напишіть це тернарним оператором*/

let number = 3;
let result1=number>=0?(number===0?`Null`:`positive`):`negative`;
console.log(result1);


/*- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false.
    Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/

let test = false;
if (test===true){
    console.log(`Правильно`);
}else {
    console.log(`Неправильно`);
}

console.log(test===true?`Правильно`:`Неправильно`);


/*- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна»
назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
інакше – відобразити: «Не знаєте? ECMAScript!*/

if (prompt(`Яка «офіційна» назва JavaScript?“`)===`ECMAScript`){
    console.log(`Правильно!`);
}else {
    console.log(`Не знаєте? ECMAScript!`);
}



/*    - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/

let num = +prompt(`Введіть номер квартири (від 1 до 90):`);
if (1<=num&&num<=20){
    console.log(`Перший під'їзд`);
}else if(21<=num&&num<=48){
    console.log(`Другий під'їзд`);
}else if (49<=num&&num<=90){
console.log(`Третій під'їзд`);
}


/*- Ми маємо змінну number в яку користувач задає числове значення,
 якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО*/

let number2 = +prompt(`Enter number: `);
console.log(number2===10?`Правильно`:`Неправильно`);

/*- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення
    що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН*/

let temp = +prompt(`Enter the air temperature: `);
console.log((10<=temp&&temp<=22)?`Ми йдемо ВЧИТИСЯ`:`Сидимо вдома і вчимося ОНЛАЙН`);

/*- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
 І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д )
    і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .*/

let prizeNumber = +prompt(`Enter a number from 1 to 5:`);
switch (prizeNumber){
    case 1:console.log(`You won a cash prize of UAH 1,000`);
    break;

    case 2:console.log(`You won a cash prize of UAH 5,000`);
    break;

    case 3: console.log(`You won $ 100,000 in cash`);
    break;

    case 4: console.log(`You won the car!`);
    break;

    case 5: console.log(`You won a smartphone!`);
    break;

    default: console.log(`Your number is incorrect(((`);
}