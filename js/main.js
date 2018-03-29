$(document).ready(function(){
    var mn = $(".navbar");
    mns = "scrolled";
    hdr = 24;

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
    });
    
    new WOW().init();

    $(".topnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 200);
    });

    $(".aboutnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 200);
    });

    $(".highlightsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#highlights").offset().top
        }, 200);
    });

    $(".itinerarynav").click(function() {
        $('html, body').animate({
            scrollTop: $("#itinerary").offset().top
        }, 200);
    });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('show');
    });

    $('.nav-link').click(function(){
        $('.navbar-toggler').removeClass('show');
        $('.navbar-collapse').removeClass('show');
    });
});