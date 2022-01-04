$(function(){
    $('.presentation__item').slick({
        dots: true,
        prevArrow: "<img src='images/arrow.svg' class='prev' alt='prevarrow'>",
        nextArrow: "<img src='images/arrow.svg' class='next' alt='prevarrow'>",
        responsive: [
            {
                breakpoint: 550,
                settings: "unslick"
            }
        ]
    }),
    $('.news__item').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 550,
                settings: "unslick"
            }
        ]
    })
});