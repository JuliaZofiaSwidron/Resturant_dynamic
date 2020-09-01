const burger = document.querySelector(".burger");
const navig = document.querySelector("#navig");
const logo = document.querySelector(".logo")
let menu_open = false;

//burger menu

burger.addEventListener("click", open_menu);

function open_menu() {
    if (menu_open == false) {
        navig.classList.add("open");
        logo.classList.add("move");
        menu_open = true;
    } else {
        navig.classList.remove("open");
        logo.classList.remove("move");
        menu_open = false;
    }
}

// document.querySelector("article").addEventListener("click", expandMeal);
// function expandMeal(){

// }

//opening and closing the meal detailed description
// document.querySelectorAll('article').forEach(article=>{
//     console.log("open this shit")
//     article.addEventListener('click', e=>{
//         article.classList.toggle('span'); 
//     })
// })


//fetch data
fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        console.log("data was fetched");
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        dataRecived(data)
    })

//loop through products
function dataRecived(meals) {
    meals.forEach(addMeal)
}

//show and hide filters
document.querySelector("#showfilt").addEventListener("click", e=>{
    document.querySelector("#filters").classList.toggle("showft");
})

function addMeal(meal) {
    //link and clone the template
    const template = document.querySelector("#meal").content;
    const clone = template.cloneNode(true);

    //populate the copy
    clone.querySelector("article").addEventListener("click", expandMeal);
    clone.querySelector("h1").textContent = meal.name;
    clone.querySelector(".description").textContent = meal.shortdescription;

    if (meal.vegetarian) {
        clone.querySelector("article").classList.add("vegeterian")
        clone.querySelector(".vegan").textContent = "Vegan";
    } else {
        clone.querySelector(".vegan").textContent = " ";
    }

    if (meal.soldout) {
        clone.querySelector("article").classList.add("notaviailable")
        clone.querySelector(".sold").classList.add("visible");
    }

    if (meal.alcohol != 0) {
        clone.querySelector(".alcohol").classList.add("visible");
        clone.querySelector("article").classList.add("alcoholic")
    }

    if (meal.discount == 0) {
        clone.querySelector(".price").textContent = meal.price + ",-";
    } else {
        clone.querySelector("article").classList.add("deal")
        let discount = meal.price - (meal.price * meal.discount * 0.01);
        clone.querySelector(".regular_price").textContent = meal.price + ",-";
        clone.querySelector(".price").textContent = discount + ",-";
    }

    //setting filters

    const veganfilter = document.querySelector("#vegeterian");
    const dealfilter = document.querySelector("#deals");
    const alcoholfilter = document.querySelector("#alcoholic");
    const availablefilter = document.querySelector("#available");

    veganfilter.addEventListener("click", e=>{
        const articles = document.querySelectorAll("article:not(.vegeterian)")
        veganfilter.classList.toggle("disabled");
        articles.forEach(elem =>{
            elem.classList.toggle("hidden");
        })
    })

    dealfilter.addEventListener("click", e=>{
        const articles = document.querySelectorAll("article:not(.deal)")
        dealfilter.classList.toggle("disabled");
        articles.forEach(elem =>{
            elem.classList.toggle("hidden")
        } )
    })

    alcoholfilter.addEventListener("click", e=>{
        const articles = document.querySelectorAll("article.alcoholic")
        alcoholfilter.classList.toggle("disabled");
        articles.forEach(elem =>{
            elem.classList.toggle("hidden")
        } )
    })

    availablefilter.addEventListener("click", e=>{
        const articles = document.querySelectorAll("article.notaviailable")
        availablefilter.classList.toggle("disabled");
        articles.forEach(elem =>{
            elem.classList.toggle("hidden")
        } )
    })

    //append the copy
    if (meal.category == "starter"){
        document.querySelector("section.starter").appendChild(clone);
    }else if( meal.category == "main"){
        document.querySelector("section.main").appendChild(clone);
    }else if ( meal.category == "dessert"){
        document.querySelector("section.dessert").appendChild(clone);
    }else if ( meal.category == "drinks"){
        document.querySelector("section.drink").appendChild(clone);
    }else {
        document.querySelector("section.side").appendChild(clone);
    }
    // document.querySelector("section").appendChild(clone);
}



// this works
function expandMeal() {
    // document.querySelector('article').classList.add("span");
    document.querySelectorAll('article').forEach(article => {
        console.log("open this shit")
        article.addEventListener('click', e => {
            article.classList.toggle('span');
        })
    })
}