var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
var icon = menuIcon.firstChild;
var body = document.getElementById('body');

//Funció per desplegar el menú.
function menuToggle() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-window-close");
    } else {
        menu.style.display = 'none';
        icon.classList.remove("bx-window-close");
        icon.classList.add("bx-menu");
    }
}

//Funció per anar al apartat FrontEnd.
function frontEnd() {
    var front = document.getElementById("front");
    if (front.style.display === 'none') {
        front.style.display = 'block';
    } else {
        front.style.display = 'none';
    }
}

//Funció per anar al apartat BackEnd.
function backEnd() {
    var back = document.getElementById("back");
    if (back.style.display === 'none') {
        back.style.display = 'block';
    } else {
        back.style.display = 'none';
    }
}