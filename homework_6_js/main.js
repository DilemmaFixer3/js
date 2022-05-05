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
        color:'black',
        image: `https://vse-o-tattoo.ru/wp-content/uploads/2021/11/6-pik-2.png`},
    {cardSuit: 'spade',
        value: '7',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Atlas_deck_7_of_spades.svg/360px-Atlas_deck_7_of_spades.svg.png`},
    {cardSuit: 'spade',
        value: '8',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atlas_deck_8_of_spades.svg/1200px-Atlas_deck_8_of_spades.svg.png`},
    {cardSuit: 'spade',
        value: '9',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Atlas_deck_9_of_spades.svg/1200px-Atlas_deck_9_of_spades.svg.png`},
    {cardSuit: 'spade',
        value: '10',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Atlas_deck_10_of_spades.svg/1200px-Atlas_deck_10_of_spades.svg.png`},
    {cardSuit: 'spade',
        value: 'ace',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Aceofspades.svg/800px-Aceofspades.svg.png`},
    {cardSuit: 'spade',
        value: 'jack',
        color:'black',
        image: `https://img1.freepng.ru/20180323/jeq/kisspng-jack-playing-card-spades-valet-de-pique-card-game-cards-5ab597d740f607.7776315015218503272661.jpg`},
    {cardSuit: 'spade',
        value: 'queen',
        color:'black',
        image: `https://w7.pngwing.com/pngs/603/519/png-transparent-queen-of-spades-playing-card-king-queen-game-king-queen-thumbnail.png`},
    {cardSuit: 'spade',
        value: 'king',
        color:'black',
        image: `https://img1.freepng.ru/20180528/qyy/kisspng-king-of-clubs-playing-card-king-of-spades-clip-art-king-of-spades-5b0ccc1be58701.7425313615275653399402.jpg`},
    {cardSuit: 'spade',
        value: 'joker',
        color:'black',
        image: `https://www.gipsyteam.ru/upload/Pageimage/default/1/112-1625768751.png`},

    {cardSuit: 'clubs',
        value: '6',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlas_deck_6_of_clubs.svg/1200px-Atlas_deck_6_of_clubs.svg.png`},
    {cardSuit: 'clubs',
        value: '7',
        color:'black',
        image: `https://predel.net/userfiles/kartulubvi/1311071408187t.png`},
    {cardSuit: 'clubs',
        value: '8',
        color:'black',
        image:`https://w7.pngwing.com/pngs/646/664/png-transparent-contract-bridge-playing-card-suit-game-ace-playing-card-white-leaf-heart-thumbnail.png`},
    {cardSuit: 'clubs',
        value: '9',
        color:'black',
        image: `https://thumbs.dreamstime.com/b/%D0%B8%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%B8%D0%B7%D0%BD%D0%B5-132849995.jpg`},
    {cardSuit: 'clubs',
        value: '10',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/1200px-Playing_card_club_10.svg.png`},
    {cardSuit: 'clubs',
        value: 'ace',
        color:'black',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Atlas_deck_ace_of_clubs.svg/1200px-Atlas_deck_ace_of_clubs.svg.png`},
    {cardSuit: 'clubs',
        value: 'jack',
        color:'black',
        image: `https://predel.net/userfiles/kartulubvi/131107161443jt.png`},
    {cardSuit: 'clubs',
        value: 'queen',
        color:'black',
        image: `https://st.depositphotos.com/2127699/2238/i/600/depositphotos_22389065-stock-photo-playing-card-queen-of-clubs.jpg`},
    {cardSuit: 'clubs',
        value: 'king',
        color:'black',
        image: `https://w7.pngwing.com/pngs/167/868/png-transparent-card-game-playing-card-video-game-king-ace-card-miscellaneous-game-king-thumbnail.png`},
    {cardSuit: 'clubs',
        value: 'joker',
        color:'black',
        image: `https://www.gipsyteam.ru/upload/Pageimage/default/1/112-1625768751.png`},

    {cardSuit: 'diamond',
        value: '6',
        color:'red',
        image: `https://astrohelper.ru/images/gadaniya/karty3/6buben.png`},
    {cardSuit: 'diamond',
        value: '7',
        color:'red',
        image: `https://w7.pngwing.com/pngs/100/345/png-transparent-contract-bridge-playing-card-tarot-spreads-layouts-a-user-s-manual-for-beginning-and-intermediate-readers-suit-diamond-cards-white-symmetry-hearts-thumbnail.png`},
    {cardSuit: 'diamond',
        value: '8',
        color:'red',
        image: `https://thumbs.dreamstime.com/b/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D0%B4%D0%B8%D0%B0%D0%BC%D0%B0%D0%BD%D1%82%D0%BE%D0%B2-bubi-%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC%D0%B0-%D0%B8%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%BA%D0%B0%D1%80%D1%82-142608633.jpg`},
    {cardSuit: 'diamond',
        value: '9',
        color:'red',
        image: `https://w7.pngwing.com/pngs/856/467/png-transparent-playing-card-curse-of-scotland-suit-ace-king-card-diamond-s-white-king-text-thumbnail.png`},
    {cardSuit: 'diamond',
        value: '10',
        color:'red',
        image: `https://w7.pngwing.com/pngs/589/612/png-transparent-playing-card-suit-diamond-curse-of-scotland-cards-game-angle-text-thumbnail.png`},
    {cardSuit: 'diamond',
        value: 'ace',
        color:'red',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Atlas_deck_ace_of_diamonds.svg/800px-Atlas_deck_ace_of_diamonds.svg.png`},
    {cardSuit: 'diamond',
        value: 'jack',
        color:'red',
        image: `https://i2.wp.com/fb.ru/misc/i/gallery/46164/2473324.jpg`},
    {cardSuit: 'diamond',
        value: 'queen',
        color:'red',
        image: `https://w7.pngwing.com/pngs/398/290/png-transparent-preferans-playing-card-joker-game-suit-playing-cards-game-heroes-hearts-thumbnail.png`},
    {cardSuit: 'diamond',
        value: 'king',
        color:'red',
        image: `https://vse-o-tattoo.ru/wp-content/uploads/2021/11/bubnovyj-korol.jpg`},
    {cardSuit: 'diamond',
        value: 'joker',
        color:'red',
        image: `https://cs.pikabu.ru/post_img/2013/05/31/6/1369985287_460366729.jpg`},

    {cardSuit: 'heart',
        value: '6',
        color:'red',
        image: `https://upload.wikimedia.org/wikipedia/commons/a/a6/Atlas_deck_6_of_hearts.svg`},
    {cardSuit: 'heart',
        value: '7',
        color:'red',
        image: `https://preview.ibb.co/f95qoT/7_of_hearts_svg.png`},
    {cardSuit: 'heart',
        value: '8',
        color:'red',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Atlas_deck_8_of_hearts.svg/1200px-Atlas_deck_8_of_hearts.svg.png`},
    {cardSuit: 'heart',
        value: '9',
        color:'red',
        image: `https://w7.pngwing.com/pngs/230/690/png-transparent-playing-card-ace-of-hearts-suit-deck-s-love-king-heart-thumbnail.png`},
    {cardSuit: 'heart',
        value: '10',
        color:'red',
        image: `https://w7.pngwing.com/pngs/244/504/png-transparent-playing-card-hearts-euchre-jack-card-game-heart-playing-cards-love-king-spades-thumbnail.png`},
    {cardSuit: 'heart',
        value: 'ace',
        color:'red',
        image: `https://w7.pngwing.com/pngs/742/114/png-transparent-playing-card-suit-ace-of-hearts-heart-playing-cards-love-king-text-thumbnail.png`},
    {cardSuit: 'heart',
        value: 'jack',
        color:'red',
        image: `https://w7.pngwing.com/pngs/747/964/png-transparent-jack-the-queen-of-hearts-playing-card-t-shirt-heart-playing-cards-king-heart-hearts-thumbnail.png`},
    {cardSuit: 'heart',
        value: 'queen',
        color:'red',
        image: `https://w7.pngwing.com/pngs/154/214/png-transparent-queen-of-hearts-playing-card-graphy-playing-cards-white-candle-natural.png`},
    {cardSuit: 'heart',
        value: 'king',
        color:'red',
        image: `https://w7.pngwing.com/pngs/612/716/png-transparent-contract-bridge-poker-playing-card-card-game-suit-king-miscellaneous-game-king-thumbnail.png`},
    {cardSuit: 'heart',
        value: 'joker',
        color:'red',
        image: `https://cs.pikabu.ru/post_img/2013/05/31/6/1369985287_460366729.jpg`}

]

/*
  - знайти піковий туз
 */
document.write(`<div class = "spadesAceClass">`);
let spadesAce= deckOfСards.filter((item, index)=>{
    if (item.cardSuit===`spade`&&item.value===`ace`){
        document.write(`<img src="${item.image}" alt="IMAGE" class ="cards-image">`);
        return item;
    }
})
console.log(spadesAce);
document.write(`</div>`);

/*
- всі шістки
 */

document.write(`<div class = "sixesFindClass">`);
let sixesFind = deckOfСards.filter((item, index)=>{
    if (item.value===`6`){
        document.write(`<img src="${item.image}" alt="IMAGE" class ="cards-image">`);
        return item;
    }
})
console.log(sixesFind);
document.write(`</div>`);
/*
- всі червоні карти
 */
document.write(`<div class = "colorRedClass">`);
let colorRed = deckOfСards.filter((item, index)=>{
    if (item.color===`red`){
        document.write(`<img src="${item.image}" alt="IMAGE" class ="cards-image">`);
        return item;
    }
})
console.log(colorRed);
document.write(`</div>`);

/*
- всі буби
 */
document.write(`<div class = "cardSuitDiamondsClass">`);
let cardSuitDiamonds = deckOfСards.filter((item, index)=>{
    if (item.cardSuit===`diamond`){
        document.write(`<img src="${item.image}" alt="IMAGE" class ="cards-image">`);
        return item;
    }
})
console.log(cardSuitDiamonds);
document.write(`</div>`);

/*
- всі трефи від 9 та більше
 */
//debugger;


document.write(`<div class = "cardSuitClubs9Class">`);
let cardSuitClubs9 = deckOfСards.filter((item, index)=>{
    if (item.color===`black`&&item.cardSuit===`clubs`){
        if ((item.value!=='6')&&(item.value!==`7`)&&(item.value!==`8`)){
            document.write(`<img src="${item.image}" alt="IMAGE" class ="cards-image">`);
            return item;
    }}
})
console.log(cardSuitClubs9);
document.write(`</div>`);
