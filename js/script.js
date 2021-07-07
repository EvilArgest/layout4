$(document).ready(function(){
    $('.beg__u__to__work').slick({
        arrows:false,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows:false,
                    dots: true,
                    speed: 800,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    pauseOnHover: false,
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false,
                    swipe: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows:false,
                    dots: true,
                    speed: 800,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    pauseOnHover: false,
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false,
                    swipe: true,
                }
            }]
    });
});

$(document).ready(function(){
    $('.slider__two').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        fade: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });
});
$(document).ready(function(){
    $('.slider__three').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        fade: true,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });
});
$(document).ready(function (){
    $('.burger__menu').click(function(event){
        $('.burger__menu, .header__menu').toggleClass('active');
    });
});