var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
var icon = menuIcon.firstChild;
var body = document.getElementById('body');

function menuToggle() {
    if ( icon.classList.contains("bx-menu")) {
        menu.style.transform = 'translateX(100%)';
        menu.style.transition = 'transform 2s';
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-window-close");
    } else {
        menu.style.transform = 'translateX(-100%)';
        menu.style.transition = 'transform 2s';
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