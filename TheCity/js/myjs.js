var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
$( document ).ready(function() {
   	$('.box-carousel').slick({
		dots: false,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: "<button type='button' class='mission-prev-arrow'></button>",
		nextArrow: "<button type='button' class='mission-next-arrow'></button>"
	});

});

$('.brand-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
}) 
