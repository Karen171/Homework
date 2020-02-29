var config720 = {
  arrows: false,
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1
}

var config480 = {
  arrows: false,
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1
}

$(document).ready(function() {
        onresize();
  $(window).resize(function () {
        onresize();
    });
});

function onresize() {
	var $slick = $('.slick');
	var width = window.screen.width;
    if (width <= 720 && width >= 480) {
		slick($slick, config720)
    } else if (width < 480) {
		slick($slick, config480);
	} else {
      if($slick.hasClass('slick-initialized')) {
        $slick.slick("unslick");
      }
    }
}

function slick($slick, config) {
	if($slick.hasClass('slick-initialized')) {
        $slick.slick("unslick");
      }
      $slick.slick(config);
}


