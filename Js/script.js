
//For Toggle Button
// Select all nav links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('nav').classList.remove('show');
        });
    });
});






//For Counter1
let upto = 0;
let counts1 = setInterval(updated1, 10);

function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML = ++upto + " " + "+";
    if (upto === 320) {
        clearInterval(counts1);
    }
}





//For Counter2
let Upto = 0;
let counts2 = setInterval(updated2, 10);

function updated2() {
    let count = document.getElementById('counter2');
    count.innerHTML = ++Upto + " " + "+";
    if (Upto === 230) {
        clearInterval(counts2);
    }
}



$(document).ready(
    function slider_carouselInit() {
        $('.owl-carousel.testimonials-active').owlCarousel({
            dots: false,
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            nav: true,
            navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ],
            smartSpeed: 1000,
        });
    }

)


$(document).ready(
    function () {
        const scrollBtn = document.getElementById("scrollTopBox");
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "block";
            }
        };

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
)





function togglePortfolioCarousel() {
    const $carousel = $('.owl-carousel-portfolio');

    if (window.innerWidth <= 1024) {
        if (!$carousel.hasClass('owl-loaded')) {
            $carousel.addClass('owl-carousel').owlCarousel({
                items: 1,
                margin: 30,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true
            });
            smartSpeed: 1000
        }
    } else {
        if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $carousel.find('.owl-stage-outer').children().unwrap();
        }
    }
}

$(document).ready(function () {
    togglePortfolioCarousel();
    $(window).resize(function () {
        togglePortfolioCarousel();
    });
});



$(document).ready(function () {
    AOS.init();
})

