
$(document).ready(function() {
    $(".btn_show").click(function () {
        $(".popup_wrapper").fadeIn(500);
    });

    $(".closepop").click(function () {
        $(".popup_wrapper").fadeOut(500);
    });

});


$(document).ready(function() {
    $(".color").click(function () {
        $(".popup_color").fadeIn(500);
    });

    $(".closepop").click(function () {
        $(".popup_color").fadeOut(500);
    });

});