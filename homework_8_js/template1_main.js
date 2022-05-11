//- Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"

let elementByIdContent = document.getElementById(`content`);
//console.log(elementByIdContent);
console.log(elementByIdContent.innerText);

//-- отримує текст з блоку з id "rules"

let elementByIdRules = document.getElementById(`rules`);
//console.log(elementByIdRules);
console.log(elementByIdRules.innerText);

//-- замініть текст параграфа з id 'content' на будь-який інший

let helloWorld = elementByIdContent.innerText=`Hello world!!!`;
console.log(helloWorld);

//-- замініть текст параграфа з id 'rules' на будь-який інший

let innerText = elementByIdRules.innerText=`Hi!!!`;
console.log(innerText);

//-- змініть кожному елементу колір фону на червоний

elementByIdContent.style.background=`green`;
elementByIdRules.style.background=`red`;

//-- змініть кожному елементу колір тексту на синій

elementByIdContent.style.color=`blue`;
elementByIdRules.style.color=`blue`;

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

//let idRulesList = document.querySelectorAll(`#rules`);
//console.log(idRulesList);

let idRules = document.getElementById(`rules`);
let classList = idRules.classList;
console.log(classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний

let elementsByClassNameFc_rules = document.getElementsByClassName(`fc_rules`);
for (const elementsByClassNameFcRule of elementsByClassNameFc_rules) {
    elementsByClassNameFcRule.style.color=`red`;
}
console.log(elementsByClassNameFc_rules);