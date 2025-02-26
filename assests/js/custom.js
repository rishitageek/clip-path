function toggleMenu() {
    const menu = document.querySelector('.cl__menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; 
    } else {
        menu.style.display = 'block'; 
    }
}

        // slider js
        $('.cl__gallery_imgwrap').slick({
            dots: true,
            infinite: false,
            speed: 300,
            rows: 3,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });