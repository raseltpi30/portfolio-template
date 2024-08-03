$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.menu').slideToggle(1000);
    });

    $(window).on('scroll',function(){
        if($(this).scrollTop()){
            $('.header-top').addClass('sticky')
        }
        else{
            $('.header-top').removeClass('sticky')
        }
    });
    $('.nav').onePageNav({
        
    });

        $('#myCarousel').owlCarousel({
            items:3,
            autoplay:true,
            autoplayTimeout:3000,
            loop:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });


        $('.counter h2').counterUp({
          delay: 10,
          time: 2000,
        });


        var typed5 = new Typed('.change', {
            strings: ['Love To Design','Also Love To Develop'],
            typeSpeed: 100,
            backSpeed: 100,
            cursorChar: "",
            shuffle: false,
            loop: true
        });
});
AOS.init();
