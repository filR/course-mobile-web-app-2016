
var navElement = document.querySelector('nav');
var closeIcon = document.querySelector('.fa-times');
var openIcon = document.querySelector('.fa-bars');

// when user clicks on menu icon
// remove class "hide" from nav
closeIcon.onclick = hideMenu;

function hideMenu() {
    navElement.classList.add('hide');
}


// when user clicks on close icon
// add class "hide" to nav
openIcon.onclick = showMenu;

function showMenu() {
    navElement.classList.remove('hide');
}
