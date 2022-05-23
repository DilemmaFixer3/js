//- Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let divElement = document.createElement(`div`);
divElement.setAttribute(`id`,`text` );
document.body.appendChild(divElement);

divElement.style.background=`red`;
divElement.style.width=`200px`;
divElement.style.height=`200px`;
divElement.style.position=`fixed`;
divElement.style.top=`0px`;
divElement.style.left=`400px`;

const buttonText = document.getElementById(`button_text`);

buttonText.onclick=()=>{
    divElement.style.display=`none`;
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

const buttonYearSave = document.getElementById(`confirmButton`);
const inputYear = document.getElementById(`yearInput`);


buttonYearSave.onclick=()=>{
    console.log(inputYear.value);
    if (inputYear.value >= `18`){
        console.log('Your age >= 18');
    }else{
        console.log(`Your age <= 18`);
    }
}


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на
// яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні
// атрибути.

const buttonSaveData = document.getElementById(`buttonTest2`);

buttonSaveData.onclick=()=>{
    console.log(document.forms.formUser1.name1.value);
    console.log(document.forms.formUser1.email1.value);
    console.log(document.forms.formUser2.name2.value);
    console.log(document.forms.formUser2.email2.value);
}


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)

const countLines = document.getElementById(`countLines`);
const countCells = document.getElementById(`countCells`);
const contents = document.getElementById(`contents`);
const button = document.getElementById(`butt`);


button.onclick=()=> {
    for (let i = 0; i < countLines.value; i++) {
        let divWrap = document.createElement("div");
        document.body.append(divWrap);
        divWrap.style.display=`flex`;

        for (let j = 0; j < countCells.value; j++) {
            let cell = document.createElement(`div`);
            cell.classList.add(`cell`);
            cell.innerText = `${contents.value}`;
            divWrap.appendChild(cell);

            cell.style.border=`1px solid black`;
            cell.style.width=`calc(100%/${countCells.value})`;
        }
    }
}