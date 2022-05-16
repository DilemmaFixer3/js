//Все робити за допомоги js.
//- створити блок,

let htmlDivElement = document.createElement(`div`);

//- додати йому класи wrap, collapse, alpha, beta

htmlDivElement.className = (`wrap collapse alpha beta`);

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

htmlDivElement.style.background = `red`;
htmlDivElement.style.color = `white`;
htmlDivElement.style.fontSize = `18px`;

//- додати цей блок в body.

document.body.appendChild(htmlDivElement);

//- клонувати його повністю, та додати клон в body.

let cloneDiv = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneDiv);

/*- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного
елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let elementClassMenu = document.getElementsByClassName(`menu`);
for (const menuElement of elementClassMenu) {
for (const element of arr) {
    const arrDiv = document.createElement(`li`);
    arrDiv.innerText=element;
    menuElement.appendChild(arrDiv);
    }
}


/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію
про title та monthDuration
Завдання робити через цикли.*/
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    const generalDiv = document.createElement(`div`);
    document.body.appendChild(generalDiv);
    for (const element of coursesAndDurationArray) {
        let htmlDivElement1 = document.createElement(`div`);
        htmlDivElement1.innerHTML = `<h3>${element.title}</h3>
    <h5>monthDuration: ${element.monthDuration}</h5>`;
        generalDiv.appendChild(htmlDivElement1);
    }
}

/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву
зробити <div class='item'> ,  в якому буде <h1 class='heading'>
з title  елементу, та <p class='description'> з monthDuration
елементу.
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const arrayElement of coursesAndDurationArray) {
    let divCount = document.createElement(`div`);
    divCount.className=`item`;
    document.body.appendChild(divCount);
    let h1 = document.createElement(`h1`);
    h1.className = `heading`;
    h1.innerText=arrayElement.title;
    divCount.appendChild(h1);
    let p = document.createElement(`p`);
    p.className =`description`;
    p.innerText = arrayElement.monthDuration;
    divCount.appendChild(p);
}