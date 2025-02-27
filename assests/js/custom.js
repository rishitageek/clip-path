function toggleMenu() {
    const menu = document.querySelector('.cl__menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; 
    } else {
        menu.style.display = 'block'; 
    }
}

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
            breakpoint: 991,
            settings: {
                rows: 2,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                rows: 1,
                slidesToShow: 2, 
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 575,
            settings: {
                rows: 1,
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
            }
        }
    ]
});
