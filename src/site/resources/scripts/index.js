$(document).ready(function(){
    $('#main-carousel').carousel({
        interval:3500
    });

    $('#main-carousel-prev').on("click", function () {
        $('#main-carousel').carousel('prev');
    });

    $('#main-carousel-next').on("click", function () {
        $('#main-carousel').carousel('next');
    });
});