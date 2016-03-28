'use strict';

let menu = document.querySelector('.menu');
let openLink = document.querySelector('[action=open-menu]');
let closeLink = document.querySelector('[action=close-menu]');

function openMenu() {
    menu.classList.add('show');
}

function closeMenu() {
    menu.classList.remove('show');
}

openLink.onclick = openMenu;
closeLink.onclick = closeMenu;
