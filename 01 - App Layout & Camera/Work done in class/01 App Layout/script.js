
// when user clicks on menu icon
// remove class "hide" from nav

document.querySelector('.fa-times').onclick = hideMenu;

function hideMenu() {
    document.querySelector('nav').classList.add('hide');
}


// when user clicks on close icon
// add class "hide" to nav

