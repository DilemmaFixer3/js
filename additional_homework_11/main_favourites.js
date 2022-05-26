let jsonFav = localStorage.getItem(`favourites`);
let parseFav = JSON.parse(jsonFav);

for (const item of parseFav) {
    let divElement = document.createElement(`div`);
    document.body.append(divElement);
    divElement.innerText = `${item.name} ${item.age} ${item.status}`;
}