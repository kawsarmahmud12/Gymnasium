$(function(){
    //navbar link active
   $('.navbar .nav-item').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
   });

   // banner slider
   $('.banner-slider').slick({
       arrows:false,
       autoplay:false,
       rtl:true,
       dots:true
   });

  //about video vebobox
   new VenoBox({
    selector: '.venobox',
    spinColor: '#e23e38',
    overlayColor: 'rgba(255, 255, 255, 0.6)',
    maxWidth: '70%',
  });

  //  team slider
      $('#team .team-slider').slick({
           slidesToShow: 4,
           arrows:false,
           autoplay:true,

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
              breakpoint: 769,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });

    // testimonial slider
       $('#testimonial .testimonial-slider').slick({
           slidesToShow:2,
           arrows:false,
           dots:true,
           autoplay:true,
           responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
       });

    // counter js
    $('.counter').counterUp({
        time: 1500
    });
    // brand slider js
     $('.brand-slider').slick({
         arrows:true,
        slidesToShow: 5,
        autoplay:true,
        prevArrow: '<i class="slick-prev prev-arrow fa fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fa fa-chevron-right"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
     });

    //  window scroll
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        // back to top visible
        if(scrolling > 200){
          $('.back-to-top').fadeIn();
        }
        else{
          $('.back-to-top').fadeOut();
        }

        //ad a bg to navbar
        if(scrolling >= 500){
          $('.navbar').addClass('sticky');
        }
        else{
          $('.navbar').removeClass('sticky');
        }
    });


    //click to top
    $('.back-to-top').click(function(){
        $('html,body').animate({
             scrollTop: 0,

        },1500);
    });

    // animation scroll js
    var html_body = $('html,body');
    $('.navbar a').on('click',function(){
       if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if(target.length){
            html_body.animate({
              scrollTop: target.offset().top - 0
            },1500);
            return false;
          }
       }
    });

    // freeloader js
    $(window).on('load',function(){
        $('.preloader').delay(2000).fadeOut();
    });
     
});