$(function(){
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