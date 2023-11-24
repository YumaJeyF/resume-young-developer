import * as flsFunctions from './modules/webp_support.js';
flsFunctions.isWebp();

const btnBurgerOpen = document.querySelector('.open-burger-menu');
const mobileTopLine = document.querySelector('.mobile-top-line');
const nav = document.querySelector('.nav');

btnBurgerOpen.addEventListener('click', menuBurger);

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') menuBurger();
});

window.addEventListener('scroll', event => {
    let scrollY = window.scrollY;
    let heightFirstSection = document.querySelector('.head-inf').clientHeight;
    
    if (scrollY >= heightFirstSection / 2) nav.classList.add('fixed');
    else nav.classList.remove('fixed');
});

nav.addEventListener('click', event => {
    event._isNav = true;
});

window.addEventListener('click', event => {
    if (event._isNav) return;
    mobileTopLine.style.maxHeight = null;
    mobileTopLine.classList.remove('active');
});

function menuBurger() {
    if (!mobileTopLine.style.maxHeight) {
        mobileTopLine.style.maxHeight = mobileTopLine.scrollHeight + 'px';
        mobileTopLine.classList.add('active');
        btnBurgerOpen.firstElementChild.nextElementSibling.classList.add('active');
        btnBurgerOpen.firstElementChild.classList.add('active');
        btnBurgerOpen.lastElementChild.classList.add('active');
    } else {
        mobileTopLine.style.maxHeight = null;
        mobileTopLine.classList.remove('active');
        btnBurgerOpen.firstElementChild.nextElementSibling.classList.remove('active');
        btnBurgerOpen.firstElementChild.classList.remove('active');
        btnBurgerOpen.lastElementChild.classList.remove('active');
    }
}

