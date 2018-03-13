$(document).ready(function(){
    var mn = $(".navbar");
    mns = "scrolled";
    hdr = $('.navbar').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
    });
    
    new WOW().init();

    $(".aboutnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 300);
    });

    $(".topnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 500);
    });

    var s = skrollr.init();
    if (s.isMobile()) {
        s.destroy();
    }
});