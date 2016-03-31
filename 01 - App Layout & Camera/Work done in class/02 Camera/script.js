$(':file').change(previewImage);

function previewImage() {
    var reader = new FileReader();
    
    reader.onload = function (e) {
        $('#preview').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(this.files[0]);
}





$('input[type=range]').change(applyEffect);

function applyEffect() {
    var value = $(this).val();
    var cssValue = 'hue-rotate(' + value + 'deg)';
    
    $('#preview').css('-webkit-filter', cssValue);
}




























