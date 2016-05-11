$(function() {

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$(".skills-s").waypoint(function() {
		$('#circle').circleProgress({
			value: 0.60,
			size: 140,
			startAngle: -Math.PI / 4 * 2,
			lineCap: 'round',
			animation: {
				duration: 2000
			},
			fill: {
				gradient: ["blue", "#03D7E2"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
		});

		$('#circle2').circleProgress({
			value: 0.90,
			size: 140,
			lineCap: 'round',
			startAngle: -Math.PI / 4 * 2,
			animation: {
				duration: 2000
			},
			fill: {
				gradient: ["#FF3B71", "orange"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
		});

		$('#circle3').circleProgress({
			value: 0.65,
			size: 140,
			lineCap: 'round',
			startAngle: -Math.PI / 4 * 2,
			animation: {
				duration: 2000
			},
			fill: {
				gradient: ["#03D7E2", "#03D812"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(parseInt(65 * progress) + '<i>%</i>');
		});

		$('#circle4').circleProgress({
			value: 0.80,
			size: 140,
			lineCap: 'round',
			startAngle: -Math.PI / 4 * 2,
			animation: {
				duration: 2000
			},
			fill: {
				gradient: ["#E64CED", "#D044FC"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
		});
		this.destroy();
	}, {
		offset: '50%'
	});

	//Animation 
	//$(".section-head p, .section-head h2").animated("fadeInUp");
	//$(".section-descr p").animated("slideInRight");
	
	//$(".adv-wrap").animated("fadeInUp");

	//$(".task-wrap").animated("slideInLeft");
	//$(".task-img").animated("slideInRight");

	//$(".team-item").animated("fadeInUp");

	//mnu controls

	$(".portfolio-m").click(function() {
		$("html, body").animate({
			scrollTop : $(".portfolio-s").offset().top
		}, 1000);
	});

	$(".team-m").click(function() {
		$("html, body").animate({
			scrollTop : $(".team-s").offset().top
		}, 1000);
	});

	$(".home-m").click(function() {
		$("html, body").animate({
			scrollTop : $(".main-head").offset().top
		}, 1000);
	});


	$("#porfolio_grid").mixItUp();

	$(".porfolio-mnu li ").click(function() {
		$(".porfolio-mnu li ").removeClass("active");
		$(this).addClass("active");
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$(".preloader").fadeOut();

});
