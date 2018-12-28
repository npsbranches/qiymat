$('.btn-bars').click(function() {
    $('.navbar ul').slideToggle();
});

$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.navbar ul').removeAttr('style');
    }
});

$('.slider').owlCarousel({
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: true,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dotClass: ["slider-indicator"],
    dotsClass: ["slider-indicators"]
})



