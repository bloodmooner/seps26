
$(document).ready(function(){

    $('.js-open-modal-order').on('click', function(){
        $('.overlays').addClass('overlays_active');
        $('.modal_order').addClass('modal_order-active');
    });

    $('.modal__close').on('click', function(){
        $('.overlays').removeClass('overlays_active');
        $('.modal_order').removeClass('modal_order-active');
    });
  

    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

});

