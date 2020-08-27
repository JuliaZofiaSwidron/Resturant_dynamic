let burger = document.querySelector(".burger");
let navig = document.querySelector("#navig");
let logo = document.querySelector(".logo")
let menu_open = false;

burger.addEventListener("click", open_menu);

function open_menu(){
    if (menu_open == false){
        navig.classList.add("open");
        logo.classList.add("move");
        menu_open = true;
    }else{
        navig.classList.remove("open");
        logo.classList.remove("move");
        menu_open = false;
    }
}

document.querySelector('article').addEventListener('click',e=>{
    const article = e.target.parentElement
    article.classList.toggle('span');
    article.querySelector("description").textContent = "Longer text about the food i don't remember how it goes i just know it needs to be longer but also don't remember how long so i'm just writing very boring and meaningless stuff lalala tututut hahah lorem ipsum something something"
}) 