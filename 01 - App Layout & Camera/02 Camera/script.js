'use strict';

// take image from file input and show in <img> element
function readURL(input) {
    var reader = new FileReader();

    reader.onload = function (e) {
        $('#preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
}

// call `readURL` function whenever user chooses image
$(':file').change(function(){
    readURL(this);
});


// effect button
$('[action=toggle-effect]').click(toggleEffect);

function toggleEffect() {
    $('#preview').toggleClass('effect');
    return false;
}


// effect range slider
$('[action=adjust-effect]').on('input change', adjustEffect);

function adjustEffect() {
    let val = $(this).val();
    let filter = 'hue-rotate(' + val + 'deg)';
    $('#preview').css('-webkit-filter', filter);
}
