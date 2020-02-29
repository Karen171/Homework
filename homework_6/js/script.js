$(document).ready(function(){
	$('.slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 480,
			slidesToShow: 2
		},
		{
			breakpoint: 720,
			settings: "unslick"
		}
		]
	});
});

