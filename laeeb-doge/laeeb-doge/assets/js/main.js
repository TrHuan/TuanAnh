jQuery(document).ready(function($) {
    setTimeout(function(){
        var hb = $('.header-stick').outerHeight();
        $('header').outerHeight(hb);
    }, 2000);

    $(window).resize(function(){
        setTimeout(function() {
            var hb = $('.header-stick').outerHeight();
            $('header').outerHeight(hb);
        }, 1000);
    });

    // $(window).on("scroll",function() {
    //     var hb = $('header').outerHeight();
    //     if ($(this).scrollTop() > hb ) {
    //         $('.header-stick').addClass('active');
    //     }

    //     if ($(this).scrollTop() <= 0 ) {
    //         $('.header-stick').removeClass('active');
    //     }

    //     if ($(this).scrollTop() > 0 ) {
    //         $('.back-to-top').addClass('active');
    //     } else {
    //         $('.back-to-top').removeClass('active');
    //     }
    // });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    }); 
});

jQuery(document).ready(function($) {
    var swiper = new Swiper( '.swiper-slider-3d', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
           delay: 2000,
        },
        speed: 2000,
        coverflow: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows : false,
        }
    } );

});

// js popups
jQuery(document).ready(function($) {
    // popups
    $('.btn-popup').click(function(e){
        e.preventDefault();

        var adat = $(this).attr('data_popup');

        var hg_pop = $('.' + adat + ' .content-box').outerHeight();
        var hg_win = $(window).height();
        if (hg_pop >= hg_win) {    
            $('.popups .popups-content').height(hg_win - 30);
            $('.popups .popups-content').css({'top': '15px'});
        } else {    
            $('.popups .popups-content').height('auto');
            $('.popups .popups-content').css({'top': 'auto'});
        } 
        
        $('.popups.' + adat).addClass('active');
    });
    ////////////////////
    setTimeout(function(){
        var hg_pop = $('.popups.active .content-box').outerHeight();
        var hg_win = $(window).height();
        if (hg_pop >= hg_win) {    
            $('.popups .popups-content').height(hg_win - 30);
            $('.popups .popups-content').css({'top': '15px'});
        } else {    
            $('.popups .popups-content').height('auto');
            $('.popups .popups-content').css({'top': 'auto'});
        } 

        // $('.popups').addClass('active');
    }, 2000);  
    ////////////////////
    $('.popups, .popups-box .btn-back').click(function(e){
        e.preventDefault();

        $('.popups').removeClass('active');
    });
    ////////////////////
    $('.popups .content-box').click(function(e){
        e.stopPropagation();
    });
    ////////////////////
    $(window).resize(function(){
        var hg_pop = $('.popups.active .content-box').outerHeight();
        var hg_win = $(window).height();
        if (hg_pop >= hg_win) {    
            $('.popups .popups-content').height(hg_win - 30);
            $('.popups .popups-content').css({'top': '15px'});
        } else {    
            $('.popups .popups-content').height('auto');
            $('.popups .popups-content').css({'top': 'auto'});
        } 
    });

    $('.popup-content form.wpcf7-form .form-group-button .form-button .wpcf7-submit').click(function(){
        setTimeout(function(){
            var hg_pop = $('.popups.active .content-box').outerHeight();
            var hg_win = $(window).height();
            if (hg_pop >= hg_win) {    
                $('.popups .popups-content').height(hg_win - 30);
                $('.popups .popups-content').css({'top': '15px'});
            } else {    
                $('.popups .popups-content').height('auto');
                $('.popups .popups-content').css({'top': 'auto'});
            } 
        }, 2000);        
    });
});
// end js popups

// js tab
// jQuery(document).ready(function($) {
//     $('.title-tab .title').click(function(e){
//         e.preventDefault();

//         var ac = $(this).hasClass('active');

//         if (!ac) {
//             var tp = $(this).attr('data_tab');
//             $('.title-tab .title').removeClass('active');
//             $(this).addClass('active');
//             $('.tab-panel').removeClass('active');
//             $('.tab-panel.'+tp).addClass('active');
//         }
//     });
// });
// end js tab

// menu mobile
jQuery(document).ready(function($) {
    $('.megamenu-mobile .menu-close').click(function(e){
        e.preventDefault();
        $('.megamenu-mobile .mobile-content').removeClass('active');
    });

    $(document).on('click', '.megamenu-mobile .menu-open', function (e) {
        e.preventDefault();
        var whg = $(window).height();
        
        $('.megamenu-mobile .mobile-content').height(whg).delay(300).queue(function(next){
            $(this).addClass('active');
            next();
        });
    });

    $(window).resize(function(){
        var whg = $(window).height();

        $('.megamenu-mobile .mobile-content').height(whg);
    });
});
// end menu mobile

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var n = 55;
        $('.main-container > section').each(function(i) {
            if ($(this).position().top - n <= scrollDistance) {
                var data_id = $(this).attr('id');
                $('.scroll-active li a').removeClass('active');
                $('.scroll-active li a[data_href^="#'+ data_id +'"]').addClass('active');
            }
        });

    }).scroll();

    $('.scroll-active li a').click(function(e){
        e.preventDefault();
        $('.scroll-active li a').removeClass('active');
        $(this).addClass('active');

        var target = $(this).attr('data_href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 100);
    });
});