$(function() {
	
	function heightses() {
		$(".demos-item p").height('auto').equalHeights();
		$(".grid__item h2").height('auto').equalHeights();
	}

	$(window).resize(function() {
		heightses();
	});

	heightses();

	$(".grid__item").each(function(e) {

		var th = $(this);

		th.attr("href", "#carousel-img-" + e)
		.find(".item-popup")
		.attr("id", "carousel-img-" + e);

	});

	$(".grid__item").magnificPopup({
		mainClass: 'my-mfp-slide-bottom',
		removalDelay: 300,
		type: 'inline',
	});

	$(".mfp-gallery").each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});

	$("#mygallery").justifiedGallery( {
		rowHeight : 180,
    lastRow : 'justify',
    margins : 0
	});

  $(".owl-carousel").owlCarousel( {
  	loop: true,
  	items: 1,
  	margin: 150,
  	autoplay: true,
  	smartSpeed: 1000,
  	nav: true,
  	dots: true,
  	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });

	var header = new Headhesive('.top-line');

	//navigation

	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-about").offset().top
		}, 800);
	});

	$(".home-sc").click(function() {
		$("html, body").animate({
			scrollTop : $(".main-head").offset().top
		}, 1000);
	});

	$(".about-sc").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-about").offset().top
		}, 1200);
	});

	$(".gallery-sc").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-gallery").offset().top
		}, 1400);
	});

	$(".histor-sc").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-history").offset().top
		}, 1400);
	});

	$(".contact-sc").click(function() {
		$("html, body").animate({
			scrollTop : $(".s-contact").offset().top
		}, 1400);
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

});
