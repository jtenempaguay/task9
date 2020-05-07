jQuery(document).ready(function($) {
    $('.prepend').on('click', function () {
        var errors = 0;
        var words = document.getElementById("words").value;
        if (words.trim().length == 0){
            $('#errorMessage').addClass("alert").text("Text Input is Blank!");
            $('#errorMessage').show();
            errors = errors +1;
        } 
            if (errors==0) {
            $('#errorMessage').hide();
            jQuery( '#tasks' ).prepend(( '<p>'+words+'</p>'));
        }
    });
});
