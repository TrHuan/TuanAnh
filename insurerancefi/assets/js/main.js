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
    $(document).on('click', '.banner-style-09 .banner-content .label', function () {
        var hsac = $(this).hasClass('active');
        if (!hsac) {
            $('.banner-style-09 .banner-content .content').slideUp();
            $(this).next().slideDown();

            $('.banner-style-09 .banner-content .label').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).next().slideUp();
            $(this).removeClass('active');
        }
    });

    setTimeout(function(){
        $('.banner-style-animate > .container').css({'opacity': '1'});
    }, 800);  

    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });      
});

jQuery(document).ready(function($) {
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
    // document.getElementById('moar').onclick = function() {
    //     var section = document.createElement('section');
    //     section.className = 'section--purple wow fadeInDown';
    //     this.parentNode.insertBefore(section, this);
    // };
});