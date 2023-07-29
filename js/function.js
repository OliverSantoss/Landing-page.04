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

    $('.mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: false
                }
            },

            {
                breakpoint: 580,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    arrows: false
                }
            },

            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});