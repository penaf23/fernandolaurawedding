(function ($) {
    "use strict";

    // Navbar on scrolling
    // Definir a navbar como visível inicialmente
    $('.navbar').css('display', 'flex');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
// Video handling
$(document).ready(function () {
    $('.btn-play').click(function () {
        $('#fullscreenVideoContainer').css('display', 'flex');
        let video = $('#fullscreenVideo')[0];
        video.currentTime = 0; // Reset video to start
        video.play();
    });

    $('#fullscreenVideo').on('ended', function() {
        $('#fullscreenVideoContainer').hide();
        // Remove window.location change - just scroll to home
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 1500, 'easeInOutExpo');
    });
});


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    let runTimeOut 

    let runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)
    
    
    function resetTimeAnimation() {
        runningTime.style.animation = 'none'
        runningTime.offsetHeight /* trigger reflow */
        runningTime.style.animation = null 
        runningTime.style.animation = 'runningTime 7s linear 1 forwards'
    }
    
    
    function showSlider(type) {
        let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
        if(type === 'next'){
            list.appendChild(sliderItemsDom[0])
            carousel.classList.add('next')
        } else{
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
            carousel.classList.add('prev')
        }
    
        clearTimeout(runTimeOut)
    
        runTimeOut = setTimeout( () => {
            carousel.classList.remove('next')
            carousel.classList.remove('prev')
        }, timeRunning)
    
    
        clearTimeout(runNextAuto)
        runNextAuto = setTimeout(() => {
            nextBtn.click()
        }, timeAutoNext)
    
        resetTimeAnimation() // Reset the running time animation
    }
    
    // Start the initial animation 
    resetTimeAnimation()

    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

