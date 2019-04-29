// слайдер Slick - .About-me

$('.sl-main').slick({
	dots: true,
	infinite: true,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// слайдер Slick - .sl-opinion

$('.sl-opinion').slick({
	dots: true,
	infinite: true,
	speed: 300,
	autoplay: true,
	autoplaySpeed: 5000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// замедление ссылки к якорям

jQuery(document).ready(function() {
  jQuery("a.smooth").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
});

// ---------------------------

jQuery(document).ready(function() {
  jQuery("a.menu").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });
});

// модальные окна ----------------------------------------

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('a#modal1').click( function(event){ // лoвим клик пo ссылки с id="modal1"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal-work1') // id модального окна
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal-work1')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal2').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work2')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work2')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal3').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work3')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work3')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal4').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work4')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work4')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal5').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work5')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work5')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal6').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work6')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work6')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal7').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work7')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work7')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});

// -----------------------

$(document).ready(function() { 
	$('a#modal8').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work8')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work8')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});


// -----------------------

$(document).ready(function() { 
	$('a#modal9').click( function(event){ 
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal-work9')
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	
	$('#modal_close, #overlay').click( function(){ 
		$('#modal-work9')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});