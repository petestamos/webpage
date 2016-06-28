$(document).ready(function(){

	// Landing page content
	$('.central-text').hide();
	$('.central-text').fadeIn(1000);

	// About page content
	$('.about-container').hide();
	$('.about-container').fadeIn(1000);

	// Contact page content
	$('.contact-container').hide();
	$('.contact-container').fadeIn(1000);

	// Toggle menu animation
	$(".hamburger").click(function(){
		$(this).toggleClass("open");
	});
});
