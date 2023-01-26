/**
 * Author: Desmondo,
 * LastModified: 25/01/2023
 * Company: HIC
 */

// Movie page js config
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=54c7b134e659f4cff3fae0d7f51e450e';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=54c7b134e659f4cff3fae0d7f51e450e";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");

            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");

            const div_column = document.createElement("div");
            div_column.setAttribute("class", "column");

            const image = document.createElement("img");
            image.setAttribute("class", "thumnail");
            image.setAttribute("id", "image");

            const title = document.createElement("h3");
            title.setAttribute("id", "title");

            const center = document.createElement("center");

            title.innerHTML = `$(element.title)`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
            
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";

    }

})

// game page js config
let xp = 0;
let health =0;
let gold = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick", "dagger", "sword"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

const locations = [
    {
        name: "town square",
        "button text" : ["Go to store", "Go to cave", "Fight dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You are in the town square You see a sign that says \"Store.\""
    },
    {
        name: "store",
        "button text" : ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to Town Square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You entered the store"
    }
];
function update(location){

}

function goTown(){

}
function goStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    text.innerText = "You entered the store";
}

function goCave(){
    console.log("Going to Cave");
}
function fightDragon(){

}
function buyHealth(){
   if(gold>= 10){
    gold = gold + 10
    health = health + 10
    goldText.innerText = gold;
    healthText.innerText = health;
   }
}
function buyWeapon(){
    
}
