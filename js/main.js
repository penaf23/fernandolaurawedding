(function ($) {
    "use strict";

    // Navbar on scrolling
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

    // Video play functionality
    function playVideo() {
        const videoContainer = document.getElementById('fullscreenVideoContainer');
        const video = document.getElementById('fullscreenVideo');
        
        // Detect if hosted on GitHub Pages
        const baseUrl = window.location.hostname.includes('github.io')
            ? "https://penaf23.github.io/fernandolaurawedding/"
            : "/";

        // Show the video container and play the video
        videoContainer.style.display = 'block';
        video.play();

        // Request fullscreen mode
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen();
        }

        // Handle video end
        video.onended = function () {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            videoContainer.style.display = 'none';
            window.location.href = baseUrl; // Redirect to the homepage or repository URL
        };
    }

    // Modal Video
    $(document).ready(function () {
        $('.btn-play').click(function (e) {
            e.preventDefault();
            playVideo();
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

    // Animation reset
    function resetTimeAnimation() {
        const runningTime = document.querySelector('.carousel .timeRunning');
        if (runningTime) {
            runningTime.style.animation = 'none';
            runningTime.offsetHeight; /* trigger reflow */
            runningTime.style.animation = null;
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        }
    }

    // Carousel navigation
    function showSlider(type) {
        const list = document.querySelector('.carousel .list');
        const carousel = document.querySelector('.carousel');
        const sliderItemsDom = list.querySelectorAll('.item');

        if (type === 'next') {
            list.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, 3000);

        resetTimeAnimation();
    }

    // Start the initial animation
    resetTimeAnimation();

    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });
    
})(jQuery);
