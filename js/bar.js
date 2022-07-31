menu = document.querySelector("#menu");
links = document.querySelector(".links");

links.addEventListener('click', function() {
    if (menu.className === "menu"){
        menu.className += " disapear";
    } else {
        menu.className = "menu";
    }
});
