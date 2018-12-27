$('.btn-bars').click(function() {
    $('.navbar ul').slideToggle();
});

$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.navbar ul').removeAttr('style');
    }
});


