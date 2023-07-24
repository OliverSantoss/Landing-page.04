$(function () {
    var menu = $('.mobile').find('i');
    menu.click(() => {
        $('.mobile ul').slideToggle();
    });

    $('nav a').click(function () {
        let href = $(this).attr('href');
        let offsetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsetTop});
        return false;
    });
});