//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в
// прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(value => {

        const wrap1 = document.createElement(`div`);
        wrap1.classList.add(`wrap1`);
        for (const item of value) {
            const comment = document.createElement(`div`);
            comment.classList.add(`comment`);
            for (const itemKey in item) {
                    if (itemKey === `email` || itemKey === `body`) {
                        const liComment = document.createElement(`li`);
                        liComment.classList.add(`liComment`);
                        liComment.innerText = `${itemKey}: ${item[itemKey]}`;
                        comment.append(liComment);
                    }
            }
            wrap1.append(comment);
        }
        document.body.append(wrap1);

    })
