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

    $(".instagramnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#instagram").offset().top
        }, 200);
    });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('show');
    });

    $('.nav-link').click(function(){
        $('.navbar-toggler').removeClass('show');
        $('.navbar-collapse').removeClass('show');
    });

    document.getElementById("defaultOpen").click();

    var feed = new Instafeed({
        get: 'user',
        userId: '7230957905',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7230957905.1677ed0.785b16903cdd41d0a1d9e5897119134b',
        sortBy: 'most-recent',
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}"></a>'
    });
    feed.run();
});