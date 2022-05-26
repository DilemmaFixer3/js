// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

//------------------------------------------------------------
const form01 = document.getElementById(`form1`);

form01.onsubmit=function (){

    const name = form01.inputName.value;
    localStorage.setItem(`name`, `${name}`);
    const age = form01.inputAge.value;
    localStorage.setItem(`age`, `${age}`);
}
//-------------------------------------------------------------

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному
// сховищі.

//---------------------------------------------------------------
const form02 = document.getElementById(`form2`);
const buttClick = document.getElementById(`buttClick`);
let arr0000=[];
localStorage.setItem(`cars`,JSON.stringify(arr0000));

    buttClick.onclick = function () {
        let jsonArr0000 = localStorage.getItem(`cars`);
        let parseArr0000 = JSON.parse(jsonArr0000);

        parseArr0000.push({model: `${form02.model.value}`,
                        type: `${form02.type.value}`,
                        volume: `${form02.volume.value}`});

        localStorage.setItem(`cars`, JSON.stringify(parseArr0000));

    }
//---------------------------------------------------------------



