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

    // var hbadm = $('#wpadminbar').outerHeight();

    $(window).on("scroll",function() {
        var hb = $('header').outerHeight();
        // var hb2= hbadm + hb;
        if ($(this).scrollTop() > hb ) {
            $('.header-stick').addClass('active');
            // $('.header-stick').css({"top": hbadm+"px"});
        }

        if ($(this).scrollTop() <= 0 ) {
            $('.header-stick').removeClass('active');
            // $('.header-stick').css({"top": "0px"});
        }

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    }); 
});

jQuery(document).ready(function($) {

    if ( jQuery().slick ) {
        var slick = jQuery(".swiper-slider");
        slick.each(function(){
            var item        = jQuery(this).data('item'),
                item_lg     = jQuery(this).data('item_lg'),
                item_md     = jQuery(this).data('item_md'),
                item_sm     = jQuery(this).data('item_sm'),
                item_mb     = jQuery(this).data('item_mb'),
                dots        = jQuery(this).data('dots'),
                arrows      = jQuery(this).data('arrows'),
                autoplay    = jQuery(this).data('autoplay');
            jQuery(this).slick({
                loop: true,
                autoplay: autoplay,
                infinite: true,
                autoplaySpeed: 2000,
                slidesToScroll: 1,
                slidesToShow: item,
                lazyLoad: 'ondemand',
                dots: dots,
                arrows: arrows,
                prevArrow: '<a class="slick-arrow slick-prev" href="javascript:0"><i class="icofont-thin-left icon"></i></a>',
                nextArrow: '<a class="slick-arrow slick-next" href="javascript:0"><i class="icofont-thin-right icon"></i></a>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: item_lg,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: item_md,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: item_sm,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: item_mb,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }

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
    $('.sidebar-box .title').click(function(){
        $(this).next().slideToggle('slow');
    });

    $('.inventory-list .title-box li a').click(function(e){
        e.preventDefault();
        var adat = $(this).attr('data_tab');

        $('.inventory-list .title-box li a').removeClass('active');
        $(this).addClass('active');
        $('.inventory-list .content-tab .tab-pane').removeClass('active');
        $('.inventory-list .content-tab .tab-pane.' + adat).addClass('active');
    });

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
    };
});