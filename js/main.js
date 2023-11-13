$(function () {
    $('.hamburger').on('click', function() {
        hamburger();
    });
    $('#navi a').on('click', function() {
        hamburger();
    });

/*-------------------------------------------
ハンバーガーメニュー
-------------------------------------------*/
function hamburger() {
    $('.hamburger').toggleClass('active');
    $('#navi').toggleClass('active');

    if($('.hamburger').hasClass('active')) {
        $('#navi').addClass('active');
    } else {
        $('#navi').removeClass('active');
    }
}
});