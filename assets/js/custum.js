$(document).ready(function () {
  $('.service-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,   // 🔁 5 seconds per image
    smartSpeed: 1200,       // 🚀 Transition speed
    autoplayHoverPause: true,
    items: 1
    
  });
});
