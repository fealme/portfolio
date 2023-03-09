var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
var icon = menuIcon.firstChild;
var body = document.getElementById('body');

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

function frontEnd() {
    var front = document.getElementById("front");
    if (front.style.display === 'none') {
        front.style.display = 'block';
    } else {
        front.style.display = 'none';
    }
}

function backEnd() {
    var back = document.getElementById("back");
    if (back.style.display === 'none') {
        back.style.display = 'block';
    } else {
        back.style.display = 'none';
    }
}

// const el = document.getElementById("p1");
// const height = el.clientHeight;
// const width = el.clientWidth;

// el.addEventListener('mousemove', (evt)=>{
//     const{layerX, layerY} = evt;
//     const yRotation = (( layerX-width/2)/width)*20
//     const xRotation = ((layerY-height/2)/height)*20;
//     const string = `
//     perspective(500px)
//     scale(1.1)
//     rotateX(${xRotation}deg)
//     rotateY(${yRotation}deg)`;
//     el.style.transform = string;
// });



