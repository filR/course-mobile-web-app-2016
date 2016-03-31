$(':file').change(previewImage);

function previewImage() {
    var reader = new FileReader();
    
    reader.onload = function (e) {
        $('#preview').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(this.files[0]);
}