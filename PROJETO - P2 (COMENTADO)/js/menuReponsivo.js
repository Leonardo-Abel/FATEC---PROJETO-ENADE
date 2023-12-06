const botao = document.getElementById("botao-menu-responsivo");
const navMenu = document.getElementById("nav-menu-responsivo");
const body = document.getElementById("body");

botao.onclick = function(){
    navMenu.classList.toggle("activated");
    body.classList.toggle("activated");
    window.scrollTo({"top": 0, "behavior": "smooth"})
}

