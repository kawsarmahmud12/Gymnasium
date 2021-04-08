$(function () {
    $('.navbar .nav-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    //banner slider
    $('.banner-slider').slick({
        arrows: false,
       autoplay: true,
         dots: true,
         speed: 2000
    });

    //about venobox;
    $('.venobox').venobox({
        spinColor: ' #e23e38',
        overlayColor: 'rgba(226, 62, 56, 0.6)',
    });

    //team slider
    $('#team .team-slider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
        ]
    });

    //counter js;
    $('.counter').counterUp({

        time: 1500
    });

    // brand slider js;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fa fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fa fa-chevron-right"></i>',
        autoplay: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
      ]
    });


});
