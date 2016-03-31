'use strict';

// get all elements we are going to use
let menu = document.querySelector('.menu');
let openLink = document.querySelector('[action=open-menu]');
let closeLink = document.querySelector('[action=close-menu]');

// opens the menu by applying a css class
function openMenu() {
    menu.classList.add('show');
}

// removes the class
function closeMenu() {
    menu.classList.remove('show');
}

// open and close menu when clickng on the icons
openLink.onclick = openMenu;
closeLink.onclick = closeMenu;
