const burger = document.querySelector(".burger");
const navig = document.querySelector("#navig");
const logo = document.querySelector(".logo")
let menu_open = false;

//burger menu

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

//opening and closing the menu
document.querySelectorAll('article').forEach(article=>{
    article.addEventListener('click', e=>{
        article.classList.toggle('span'); 
    })
})


//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response) {
    console.log("data was fetched");
    return response.json();
})
.then(function(data){
    console.log(data)
})

//loop through products
