$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

$(document).ready(function () {
    $(".menu-item").click(function (event) {
        $(".header__burger, .header__menu").removeClass("active");
        $("body").removeClass("lock");
    });
});

$(document).ready(function () {
    $(".slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img  src="src/img/galery/arrow-prev.png" alt="slide"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img  src="src/img/galery/arrow-next.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });

    const setSlideTextActive = (slide) => {
        return slide.find(".slide-text").toggleClass("active");
    };

    let prevElement = setSlideTextActive($(".slick-current"));

    $(".slider").on("afterChange", () => {
        prevElement.removeClass("active");
        let currentSlide = $(".slick-current");
        prevElement = setSlideTextActive(currentSlide);
    });
});

$(document).ready(function () {
    $(".cities__wrapper").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img  src="src/img/galery/arrow-prev.png" alt="slide"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img  src="src/img/galery/arrow-next.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".reviews__wrapper").slick({
        centerPadding: "40px",
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img  src="src/img/galery/arrow-prev.png" alt="slide"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img  src="src/img/galery/arrow-next.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });
});
