
$(document).ready(function(){

    $('.js-open-modal-order').on('click', function(){
        $('.overlays').addClass('overlays_active');
        $('.modal_order').addClass('modal_order-active');
    });

    $('.modal__close').on('click', function(){
        $('.overlays').removeClass('overlays_active');
        $('.modal_order').removeClass('modal_order-active');
    });
  

    /* $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active"); */

    

    /* $(".slick-slide").click(function() {
        alert('test');
        
    }); */


    $('body').on('click', '.slick-slide', function () {
        alert('click working');
        $(this).find(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $('.tabs').slick({
        slidesToShow: 3,
        arrows: true,
        infinite: false,
        nextArrow: $(document).find('.related__arrow_left'),
        prevArrow: $(document).find('.related__arrow_right'),
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                  slidesToShow: 3,
                  dots: false,
                  arrows: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                  slidesToShow: 2,
                  dots: false,
                  arrows: true
                }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                variableWidth: true,
                dots: false,
                arrows: false
              }
          },
          
        ]
      });

});

