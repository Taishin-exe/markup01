$('.ham-btn').on('click', function() {
    $('.hamburger-menu').toggleClass('active');
    $('.black').toggleClass('active');
    $(this).toggleClass('active');
});