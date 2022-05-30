// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(value => {

        const element = document.createElement(`div`);
        element.classList.add(`element`);
        for (const item of value) {
            const wrap = document.createElement(`div`);
            wrap.classList.add(`post`);
            for (const itemKey in item) {
                const li = document.createElement(`li`);
                li.classList.add(`elem`);
                li.innerText= `${itemKey}: ${item[itemKey]}`;
                wrap.append(li);
            }
            element.append(wrap);
        }
        document.body.append(element);
    })
