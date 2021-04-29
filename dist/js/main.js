const menuBtn = document.querySelector('.menu-bar');
const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.side-bar')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        sideBar.classList.add('open');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        sideBar.classList.remove('open');
        showMenu = false;
    }
}