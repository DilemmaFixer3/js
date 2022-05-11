//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) додає клас з назвою групи, елементу з ід main_header

let idMain_header = document.getElementById(`main_header`);
idMain_header.className = `mar-2022`;

//b) робить шириниу елементу ul 400px

let elementsByTagNameUl = document.getElementsByTagName(`ul`);
for (const elementsByTagNameUlElement of elementsByTagNameUl) {
    elementsByTagNameUlElement.style.width=`400px`;
   // elementsByTagNameUlElement.style.background=`silver`;
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%

let classLinkList = document.getElementsByClassName(`linkList`);
for (const classLinkListElement of classLinkList) {
    classLinkListElement.style.width=`50%`;
   // classLinkListElement.style.background=`blue`;
}

//d) отримує текст який зберігається в елементі з класом listElement2

let classNameListElement2 = document.getElementsByClassName(`listElement2`);
for (const classNameListElement2Element of classNameListElement2) {
    console.log(classNameListElement2Element.innerText);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий

let tagNameLi = document.getElementsByTagName(`li`);
for (const tagNameLiElement of tagNameLi) {
    tagNameLiElement.style.background=`silver`;
}

//f) отримує всі елементи 'a' та додає їм клас anchor

let tagA = document.getElementsByTagName(`a`);

for (const tagAElement of tagA) {
    tagAElement.className=`anchor`;
}

//g) отримує всі елементи 'a' та у випадку,
// якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

let tagNameA = document.getElementsByTagName(`a`);
console.log(tagNameA);
for (const tagNameAElement of tagNameA) {
    if (tagNameAElement.innerText===`link3`){
        tagNameAElement.style.fontSize=`40px`;
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a

let elemA = document.getElementsByTagName(`a`);
for (const elemAElement of elemA) {
    elemAElement.className=`element_${elemAElement.innerText}`;
}


//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let classNameSubHeader = document.getElementsByClassName('sub-header');
let color = prompt(`Enter a color:`);
for (const classNameSubHeaderElement of classNameSubHeader) {
    classNameSubHeaderElement.style.background = `${color}`;
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

let classNameSubHeader1 = document.getElementsByClassName('sub-header');
let colorText = prompt(`Enter a color:`);
for (const element of classNameSubHeader1) {
    if (element.innerText===`content 2 segment`){
        element.style.color=`${colorText}`;
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест
// на довільний. Текст отримати з prompt()

let classNameContent1 = document.getElementsByClassName(`content_1`);
let text = prompt(`Enter a text:`);
for (const elem of classNameContent1) {
    elem.innerText = `${text}`;
}

//l) отримати елементи p та змінити їм padding на 20px

let tagP = document.getElementsByTagName(`p`);
for (const tagPElement of tagP) {
    tagPElement.style.padding = `20px`;
}

//m) отримати елементи з класом text2 та змінити їм
// текст на назву групи (mon-year. Пример sep-2021)

let text2Elements = document.getElementsByClassName(`text2`);
for (const text2Element of text2Elements) {
    text2Element.innerText=`mar-2022`;
}