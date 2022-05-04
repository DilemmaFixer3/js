/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

let str1 = `hello world`;
let str2 = `lorem ipsum`;
let str3 = `javascript is cool`;

let lengthStr1 = str1.length;
let lengthStr2 = str2.length;
let lengthStr3 = str3.length;

console.log(lengthStr1, lengthStr2, lengthStr3);

/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

let toUpperCaseStr1 = str1.toUpperCase();
let toUpperCaseStr2 = str2.toUpperCase();
let toUpperCaseStr3 = str3.toUpperCase();
console.log(toUpperCaseStr1, toUpperCaseStr2, toUpperCaseStr3);

/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

let toLowerCaseStr1 = toUpperCaseStr1.toLowerCase();
let toLowerCaseStr2 = toUpperCaseStr2.toLowerCase();
let toLowerCaseStr3 = toUpperCaseStr3.toLowerCase();
console.log(toLowerCaseStr1, toLowerCaseStr2, toLowerCaseStr3);

/*- Є "брудна" стрінга let str = ' dirty string   ' .
Почистити її від зайвих пробілів.*/

let str = ' dirty string   ';
let trimStr = str.trim();
console.log(trimStr);

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

let strToArr = 'Ревуть воли як ясла повні';

let stringToarray=(str)=>{
    return str.split(` `);
}

let arr = stringToarray(strToArr);
 console.log(arr);

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
 за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*/

let array = [10,8,-7,55,987,-1011,0,1050,0];
let newArrayMap = array.map(item=>{
    return item+``;
})
console.log(newArrayMap);

//let newArrCallBack= array.forEach(function (value){

//})

//console.log(newArrCallBack);




/*- створити функцію sortNums(direction), яка прймає масив чисел,
та сортує його від більшого до меньшого, або навпаки в залежності від
значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/



/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//coursesAndDurationArray.filter((item, index)=>{

//})

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
let filter5 = coursesAndDurationArray.filter((item, index)=>{
    if (item.monthDuration>5){
        return item;
    }
});
console.log(filter5);


/*описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше


{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
 */

let deckOfСards =[
    {cardSuit: 'spade',
        value: '6',
        color:'black'},
    {cardSuit: 'spade',
        value: '7',
        color:'black'},
    {cardSuit: 'spade',
        value: '8',
        color:'black'},
    {cardSuit: 'spade',
        value: '9',
        color:'black'},
    {cardSuit: 'spade',
        value: '10',
        color:'black'},
    {cardSuit: 'spade',
        value: 'ace',
        color:'black'},
    {cardSuit: 'spade',
        value: 'jack',
        color:'black'},
    {cardSuit: 'spade',
        value: 'queen',
        color:'black'},
    {cardSuit: 'spade',
        value: 'king',
        color:'black'},
    {cardSuit: 'spade',
        value: 'joker',
        color:'black'},

    {cardSuit: 'clubs',
        value: '6',
        color:'black'},
    {cardSuit: 'clubs',
        value: '7',
        color:'black'},
    {cardSuit: 'clubs',
        value: '8',
        color:'black'},
    {cardSuit: 'clubs',
        value: '9',
        color:'black'},
    {cardSuit: 'clubs',
        value: '10',
        color:'black'},
    {cardSuit: 'clubs',
        value: 'ace',
        color:'black'},
    {cardSuit: 'clubs',
        value: 'jack',
        color:'black'},
    {cardSuit: 'clubs',
        value: 'queen',
        color:'black'},
    {cardSuit: 'clubs',
        value: 'king',
        color:'black'},
    {cardSuit: 'clubs',
        value: 'joker',
        color:'black'},

    {cardSuit: 'diamond',
        value: '6',
        color:'red'},
    {cardSuit: 'diamond',
        value: '7',
        color:'red'},
    {cardSuit: 'diamond',
        value: '8',
        color:'red'},
    {cardSuit: 'diamond',
        value: '9',
        color:'red'},
    {cardSuit: 'diamond',
        value: '10',
        color:'red'},
    {cardSuit: 'diamond',
        value: 'ace',
        color:'red'},
    {cardSuit: 'diamond',
        value: 'jack',
        color:'red'},
    {cardSuit: 'diamond',
        value: 'queen',
        color:'red'},
    {cardSuit: 'diamond',
        value: 'king',
        color:'red'},
    {cardSuit: 'diamond',
        value: 'joker',
        color:'red'},

    {cardSuit: 'heart',
        value: '6',
        color:'red'},
    {cardSuit: 'heart',
        value: '7',
        color:'red'},
    {cardSuit: 'heart',
        value: '8',
        color:'red'},
    {cardSuit: 'heart',
        value: '9',
        color:'red'},
    {cardSuit: 'heart',
        value: '10',
        color:'red'},
    {cardSuit: 'heart',
        value: 'ace',
        color:'red'},
    {cardSuit: 'heart',
        value: 'jack',
        color:'red'},
    {cardSuit: 'heart',
        value: 'queen',
        color:'red'},
    {cardSuit: 'heart',
        value: 'king',
        color:'red'},
    {cardSuit: 'heart',
        value: 'joker',
        color:'red'}

]

/*
  - знайти піковий туз
 */

let spadesAce= deckOfСards.filter((item, index)=>{
    if (item.cardSuit===`spade`&&item.value===`ace`){
        return item;
    }
})
console.log(spadesAce);

/*
- всі шістки
 */

let sixesFind = deckOfСards.filter((item, index)=>{
    if (item.value===`6`){
        return item;
    }
})
console.log(sixesFind);

/*
- всі червоні карти
 */

let colorRed = deckOfСards.filter((item, index)=>{
    if (item.color===`red`){
        return item;
    }
})
console.log(colorRed);

/*
- всі буби
 */

let cardSuitDiamonds = deckOfСards.filter((item, index)=>{
    if (item.cardSuit===`diamond`){
        return item;
    }
})
console.log(cardSuitDiamonds);

/*
- всі трефи від 9 та більше
 */
//debugger;



/*let cardSuitClubs9 = deckOfСards.filter((item, index)=>{
    if (item.color===`black`&&item.cardSuit===`clubs`){
        if ((item.value!=='6')||(item.value!==`7`)||(item.value!==`8`)){
        return item;
    }}
})
console.log(cardSuitClubs9);*/