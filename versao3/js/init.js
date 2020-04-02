(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
  //   $('.slider').slider({ 
  //     // height : 250,
  //     width : 580 
  // });
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.collapsible').collapsible();
  }); // end of document ready
})(jQuery); // end of jQuery name space
