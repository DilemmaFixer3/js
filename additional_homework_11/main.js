//є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест
// в документ всіх обраних на попередньому етапі.


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {

    let divUser = document.createElement(`div`);
    let h3 = document.createElement(`h3`);
    let buttonUser = document.createElement(`button`);
    h3.setAttribute(`class`, `h3`);
    buttonUser.setAttribute(`class`, `butt`);
    buttonUser.innerText= `Додати до улюблених`;
    document.body.append(divUser);
    divUser.append( h3, buttonUser);

    h3.innerText= `${user.name} ${user.age}  ${user.status}`;

    divUser.style.display=`flex`;
    h3.style.marginRight = `20px`;
    buttonUser.style.marginBottom= `20px`;


    buttonUser.onclick= function () {

        const favourites = JSON.parse(localStorage.getItem(`favourites`)) || [];
        favourites.push(user);
        localStorage.setItem(`favourites`, JSON.stringify(favourites));

    }
}

let a = document.createElement(`a`);
a.setAttribute(`href`, `http://localhost:63342/js/additional_homework_11/favorites.html?_ijt=72lntt8vd1fd74rt0rd5mfd27v&_ij_reload=RELOAD_ON_SAVE`);
a.setAttribute(`target`, `_ blank`);
document.body.append(a);
a.innerText = `Переглянути улюблених`;


