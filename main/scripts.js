var phone_format;
$(document).ready(function() {
	timer();
	$("a.fancybox").fancybox();
	$(".map-btn").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	var prefix = $('.prefix').val();
	var url = prefix+"send.php", googleConversionAdded = false;
	phone_format = $('.phone_format').val();
	var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
	if(mobile != null) {
		$('html').css('width', window.innerWidth + 'px');
	} else {
		$(".scroll").each(function() {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - $(window).height();
				var scroll_top = $(this).scrollTop();
				var block_center = block.offset().top + (block.height() / 2);
				var screen_center = scroll_top + ($(window).height() / 2);
				if(block.height() < $(window).height()) {
					if ((scroll_top > (top-(block.height()/2))) && ((scroll_top < bottom+(block.height()/2))) && (scroll_top + $(window).height() > (bottom-(block.height()/2))) && (scroll_top < (block.offset().top+(block.height()/2)))) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
						}
					} else {
						if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
							block.removeClass("animated");
						}
					}
				} else {
					if ((scroll_top > top) && (scroll_top < bottom) && (Math.abs(screen_center - block_center) < (block.height() / 4))) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
						}
					} else {
						if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
							block.removeClass("animated");
						}
					}
				}
			});
		});
		$('head').append('<link rel="stylesheet" href="'+prefix+'css/animation.css" />');
		//movePage();
	}

//unslider begin ###############################################

	if(window.chrome) {
		$('.banner li').css('background-size', '100% 100%');
	}

	var subdomain = getSubdomain();
	if(visitorCountry == "russia") subdomain = "msk";
	if(subdomain != ""){
		$('#'+subdomain).each(function(){
			var b = $(this);
			$('.city_btn_active').removeClass('city_btn_active');
			b.addClass('city_btn_active');

			$('.banner').not('.city-hide-nosize').addClass('city-hide-nosize');
			$('.address-data').not('.city-hide-nosize').addClass('city-hide-nosize');

			$('#banner-'+b.attr("id")).removeClass('city-hide-nosize');
			$('#address-'+b.attr("id")).removeClass('city-hide-nosize');
			if(b.attr("id") == "msk"){
				$('#kiev').before(b);
			}
		});
	}

	$('.banner').each(function(){
        var $this = $(this);
        $this.unslider({
            keys : true,
            dots : true
        }).find('.unslider-arrow').click(function(event){
            //event.preventDefault();
            if ($(this).hasClass('next')) {
                $this.data('unslider').next();
            } else {
                $this.data('unslider').prev();
            }
        });
    });


	$('.city').click(function() {
		$('.city_btn_active').removeClass('city_btn_active');
		$(this).addClass('city_btn_active');

		$('.banner').not('.city-hide-nosize').addClass('city-hide-nosize');
		$('.address-data').not('.city-hide-nosize').addClass('city-hide-nosize');

		$('#banner-'+$(this).attr("id")).removeClass('city-hide-nosize');
		$('#address-'+$(this).attr("id")).removeClass('city-hide-nosize');

	});

//unslider end #################################################

	$('.button').click(function() {
		if($(this).hasClass("btn-disable")) return;
		$('body').find('form:not(this)').children('label').removeClass('red');
		var request_url = '<br>'+$('input[name="ref_url"]').val().toString().replace(/&/g, '<br>');
		var answer = checkForm($(this).parent().get(0));
		if(answer != false)
		{
			var $form = $(this).parent(), btn = $(this);
			var name = $('input[name="name"]', $form).val();
			if(phone_format == 'one') {
				var phone = $('input[name="phone"]', $form).val();
			} else if(phone_format == 'three') {
				var phone = $('input[name="phone1"]', $form).val()+' '+$('input[name="phone2"]', $form).val()+' '+$('input[name="phone3"]', $form).val();
			}
			var email = $('input[name="email"]', $form).val();
			var ques = $('textarea[name="ques"]', $form).val();
			var sbt = $('.button', $form).attr("data-name");
			var submit = $('.button', $form).text();
			var ref = $('input[name="referer"]').val();
			var formname = $('input[name="formname"]').val();
			var sitename = $('.sitename').val();
			var emailsarr = $('.emailsarr').val();
			btn.addClass("btn-disable");
			$.ajax({
				type: "POST",
				url: url,
				dataType: "json",
				data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr
			}).always(function() {
				btn.removeClass("btn-disable");
				thx();
				//метрики
				setTimeout(function(){ga('send', 'event', ''+sbt, ''+sbt);}, 30);
				setTimeout(function(){yaCounter28240661.reachGoal(''+sbt);}, 30); // меняем XXXXXXXXX на номер счетчика

				if(!googleConversionAdded){
					googleConversionAdded = true;
					$('body').append('<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/977473727/?label=v3XXCPqFsFkQv6GM0gM&guid=ON&script=0"/></div>');
					$('body').append('<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/977473727/?label=wRuvCI_3pVsQv6GM0gM&guid=ON&script=0"/></div>');
				}
			});
		}
	});

	/* Youtube fix */
	$("iframe").each(function() {
		var ifr_source=$(this).attr('src');
		var wmode="wmode=transparent";
		if(ifr_source.indexOf('?')!=-1) {
			var getQString=ifr_source.split('?');
			var oldString=getQString[1];
			var newString=getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString)
		} else $(this).attr('src',ifr_source+'?'+wmode)
	});

	if(phone_format == 'three') {
		$('input[name="phone2"]').focus(function() {
			$(this).keydown(function(event){
				if(event.keyCode != 8) {
					if($(this).val().length >= 3 && event.keyCode != 8)
						$(this).parent().siblings().find('input[name="phone3"]').focus();
				}
			});
		});
		$('input[name="phone3"]').focus(function() {
			$(this).keydown(function(event){
				if(event.keyCode == 8 && $(this).val().length == 0) {
					$(this).parent().siblings().find('input[name="phone2"]').focus();
				}
			});
		});
	}

	setTimeout(function(){
		$(document).scrollTop(0);
		$('.load').fadeOut(300);
	}, 500)
});

function getSubdomain() {
        var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
        var urlParts = regexParse.exec(window.location.hostname);
        if(urlParts == null) return '';
        return window.location.hostname.replace(urlParts[0],'').slice(0, -1);
}

function timer() {
	var now = new Date();
	var newDate = new Date((now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear()+" 23:59:59"); //var newDate = new Date("Feb,29,2014 23:59:00");
	var totalRemains = (newDate.getTime()-now.getTime());
	if (totalRemains>1) {
		var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
		var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
		var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
		var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
		if (Days<10){Days="0"+Days}
		if (Hours<10){Hours="0"+Hours}
		if (Min<10){Min="0"+Min}
		if (Sec<10){Sec="0"+Sec}
		$(".day").each(function() { $(this).text(Days); });
		$(".hour").each(function() { $(this).text(Hours); });
		$(".min").each(function() { $(this).text(Min); });
		$(".sec").each(function() { $(this).text(Sec); });
		setTimeout(timer, 1000);
	}
}

function popup(id, form, h1, h2, btn) { //onClick="popup('callback', '');"
	$('.popup_overlay').show();
	$('#'+id).addClass('activePopup');
	if(id == 'request') {
		var def_h1 = 'Оставить заявку';
		var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
		var def_btn = 'Оставить заявку';
	}
	if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.popup_h1').html(def_h1);}
	if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.popup_h2').html(def_h2);}
	if(btn != '') {$('#'+id).find('.button').html(btn);} else {$('#'+id).find('.button').html(def_btn);}
	$('.activePopup').show();
	$('.formname').attr("value", form);
}

function popup_out() {
	$('.popup_overlay').hide();
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	$('body').find('label').removeClass('red');
}

function formname(name) { //onClick="formname('text');"
	$('.formname').attr("value", name);
}

function thx() {
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	popup('thx', '');
	if(phone_format == 'one') {
		$('input[type="text"]').each(function(){
			$(this).val('');
		});
	} else if(phone_format == 'three') {
		$('input[type="text"]:not(input[name="phone1"])').each(function(){
			$(this).val('');
		});
	}
	$('textarea').val('');
}

function checkForm(form1) {

	var $form = $(form1);
	var checker = true;
	var name = $("input[name='name']", $form).val();
	if(phone_format == 'one') {
		var phone = $("input[name='phone']", $form).val();
	} else if(phone_format == 'three') {
		var phone1 = $("input[name='phone1']", $form).val();
		var phone2 = $("input[name='phone2']", $form).val();
		var phone3 = $("input[name='phone3']", $form).val();
	}
	var email = $("input[name='email']", $form).val();

	if($form.find(".name").hasClass("required")) {
		if(!name) {
			$form.find(".name").addClass("red");
			checker = false;
		} else {
			$form.find(".name").removeClass('red');
		}
	}

	if(phone_format == 'one') {
		if($form.find(".phone").hasClass("required")) {
			if(!phone) {
				$form.find(".phone").addClass("red");
				checker = false;
			} else if(/[^0-9\+ ()\-]/.test(phone)) {
				$form.find(".phone").addClass("red");
				checker = false;
			} else {
				$form.find(".phone").removeClass("red");
			}
		}
	} else if(phone_format == 'three') {
		if($form.find(".phone").hasClass("required")) {
			if(!phone1) {
				$form.find(".phone").children('input[name="phone1"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9+]/.test(phone1)) {
				$form.find(".phone").children('input[name="phone1"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone1"]').parent().removeClass("red");
			}

			if(!phone2) {
				$form.find(".phone").children('input[name="phone2"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9]/.test(phone2)) {
				$form.find(".phone").children('input[name="phone2"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone2"]').parent().removeClass("red");
			}

			if(!phone3) {
				$form.find(".phone").children('input[name="phone3"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9 -]/.test(phone3) || phone3.length < 4) {
				$form.find(".phone").children('input[name="phone3"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone3"]').parent().removeClass("red");
			}
		}
	}

	if($form.find(".email").hasClass("required")) {
		if(!email) {
			$form.find(".email").addClass("red");
			checker = false;
		} else if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
			$form.find(".email").addClass("red");
			checker = false;
		} else {
			$form.find(".email").removeClass("red");
		}
	}

	if(checker != true) { return false; }
}

openBox();
function openBox() {
	var data = $('.unlimited-full__data_js_init');



	data.on('click', '.unlimited-full__flow', function() {
		$(this).closest(data).children('.unlimited-full__flow').removeClass('unlimited-full__flow_state_open');
		$(this).addClass('unlimited-full__flow_state_open');



		var thisData = $(this).data('flow');
		$(this).closest('.unlimited-full__content').find('.unlimited-full__video-clip').removeClass('unlimited-full__video-clip_state_open');
		$(this).closest('.unlimited-full__content').find('.unlimited-full__video-clip[data-clip=' + thisData +']').addClass('unlimited-full__video-clip_state_open');
	});
}

openFull();
function openFull() {
	var openButton = $('.unlimited_js_open'),
		container = $('.unlimited-full__container');

	openButton.click(function() {
		var topScroll = $(document).scrollTop(),
			indent = ($(window).height() - container.height()) / 2;
		el = $(this).next('.unlimited-full').css({
			top: topScroll,
			paddingTop: indent
		}).fadeIn(200);

		jQuery(el).find('.youtube-video').each(
			function()
			{
				src = jQuery(this).attr('src');
				jQuery(this).parent().html(
					'<iframe class="youtube-video" width="563" height="374" src="' + src + '" frameborder="0" allowfullscreen></iframe>'
				);
			}
		);

		$(el).find('.unlimited-full__flow-content').each(
		function()
			{
				height = $(el).find('.unlimited-full__data ').height();

				$(this).css('top', height + 30);
			}
		);
	});
}

closeFull();
function closeFull() {
	$('.unlimited-full__close_js_close, .unlimited-full__overlay_js_close').click(function() {
		$(this).closest('.unlimited-full').css('paddingTop', 0).fadeOut(200);
	});
}

//iphone slider
$('.slider-img__list').slick({
	  infinite: false
});
$('.slider-text__list').slick({
	  arrows: false,
	  speed: 0,
	  infinite: false
});
$('.slider-img__list .slick-next').click(function() {
	$('.slider-text__list').slickNext();
});
$('.slider-img__list .slick-prev').click(function() {
	$('.slider-text__list').slickPrev();
});

// project sliders
$('.project__tabs-list').slick({
	slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project__tabs1',
    centerMode: true,
    focusOnSelect: true,
    infinity: true,
});
$('.project__content-list').slick({
	slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    arrows: false,
    fade: true
});
(function(){
	var projectSlider = $('.js-project-content-list');

	projectSlider.on('mouseenter', '.project__content-box', function() {
		$(this).closest('.project__content-item').children('.project__content-box').removeClass('project__content-box_active');
		$(this).addClass('project__content-box_active');
	});
})();

$('.project__tabs-list .slick-next').click(function() {
	$('.project__content-list').slickNext();
});
$('.project__tabs-list .slick-prev').click(function() {
	$('.project__content-list').slickPrev();
});

// case slider
(function(){
	$('.project__content-box').click(function() {
		var slider = $(this).find('.case__slider').attr('id');

		jQuery(this).find('.youtube-video').each(
			function()
			{
				src = jQuery(this).attr('src');
				jQuery(this).parent().html(
					'<iframe class="youtube-video" width="100%" height="640" src="' + src + '" frameborder="0" allowfullscreen></iframe>'
				);
			}
		);

		setTimeout(function(){
			$('#' + slider).slick({
				slidesToShow: 3,
			    slidesToScroll: 1,
			    infinity: true
			});
		}, 400)
	});
})();

// scroll page

function movePage() {
	var step = 0,
		page = $(document),
		live = $('.js-live'),
		liveBlock1 = $('.js-live-block-1'),
		liveBlock2 = $('.js-live-block-2'),
		liveBlock3 = $('.js-live-block-3'),
		livePosition = Math.round(live.offset().top),
		startScrollTop = livePosition,
		secondtScrollTop = livePosition + step * 4,
		thirdScrollTop = livePosition + step * 7,

		oneDay = $('.js-one-day'),
		oneDayBlock = $('.js-one-day-block'),
		oneDayPosition = livePosition + Math.round(oneDay.offset().top) + step * 10,
		oneDayStartScrollTop = oneDayPosition,
		oneDayLabel = 1,

		controls = $('.control'),
		controlsBlock = $('.control__scroll'),
		controlsPosition  = (livePosition *2) + Math.round(controls.offset().top) + step * 16,
		controlsStep = controlsPosition,
		controlsLabel = 1;

		// fInner = $('.function__inner'),
		// fInnerScroll = ((livePosition *2) + Math.round(fInner.offset().top) + step * 16)-400,
		// tempInner = 0;
		// // console.log(fInnerScroll);



	page.scrollTop(page.scrollTop() + 1);
	calcHeight();


	window.onscroll = function() {
		var currentScrollTop = Math.round(page.scrollTop());

		calcStepLive(currentScrollTop);
		fixLive(currentScrollTop);
		calcStepOneDay(currentScrollTop);
		fixOneDay(currentScrollTop);

		fixControl(currentScrollTop);
		stepControl(currentScrollTop);

		// scrollFunc(currentScrollTop);
	}

	function scrollFunc(currentScrollTop) {
		if (currentScrollTop >= fInnerScroll && tempInner === 0) {
			$('html, body').animate({
	        	scrollTop: $(fInner).offset().top-55
	   		}, 1000);
			tempInner = 1;
		}
		// console.log(tempInner);
	}

	function fixControl(currentScrollTop) {
		if (currentScrollTop >= controlsPosition) {
			controlsBlock.css({
				position: 'fixed', left: 0,	right: 0, top: 0, bottom: 0
			});

		} else if (currentScrollTop <= livePosition || currentScrollTop < controlsPosition) {
			controlsBlock.css({
				position: 'static'
			});

		};

		if (currentScrollTop > (controlsPosition + step * 5)) {
			controlsBlock.css({
				position: 'absolute', left: 0,	right: 0, top: 'auto', bottom: 0
			});

		};
	}

	function stepControl(currentScrollTop) {
		if (currentScrollTop > controlsPosition && currentScrollTop <= controlsPosition + step * 5) {
			var temp = currentScrollTop - controlsStep;
			if (temp > step ) {
				controlsStep += step;
				controlsLabel++;
				$('.slider-text__list').slickNext();
				$('.slider-img__list').slickNext();
			}else if (temp < 0 ) {
				controlsStep -= step;
				controlsLabel--;
				$('.slider-text__list').slickPrev();
				$('.slider-img__list').slickPrev();
			}
			// console.log(temp);
		}
	}


	function calcStepLive(currentScrollTop) {
		if (currentScrollTop >= livePosition && currentScrollTop <= livePosition + step * 4) {
			var difference = currentScrollTop - startScrollTop;

			if (difference > step) {
				$('.js-images_1.active, .js-info_1.active, .js-screen_1.active, .js-nav_1.active').removeClass('active').next('div').addClass('active');
				startScrollTop += step;
			} else if (difference < 0) {
				$('.js-images_1.active, .js-info_1.active, .js-screen_1.active, .js-nav_1.active').removeClass('active').prev('div').addClass('active');
				startScrollTop -= step;
			};
		};
		if (currentScrollTop >= livePosition + step * 4 && currentScrollTop <= livePosition + step * 7) {
			var difference = currentScrollTop - secondtScrollTop;

			if (difference > step) {
				$('.js-images_2.active, .js-info_2.active, .js-screen_2.active, .js-nav_2.active').removeClass('active').next('div').addClass('active');
				secondtScrollTop += step;
			} else if (difference < 0) {
				$('.js-images_2.active, .js-info_2.active, .js-screen_2.active, .js-nav_2.active').removeClass('active').prev('div').addClass('active');
				secondtScrollTop -= step;
			};
		};
		if (currentScrollTop >= livePosition + step * 7 && currentScrollTop <= livePosition + step * 10) {
			var difference = currentScrollTop - thirdScrollTop;

			if (difference > step) {
				$('.js-images_3.active, .js-info_3.active, .js-screen_3.active, .js-nav_3.active').removeClass('active').next('div').addClass('active');
				thirdScrollTop += step;
			} else if (difference < 0) {
				$('.js-images_3.active, .js-info_3.active, .js-screen_3.active, .js-nav_3.active').removeClass('active').prev('div').addClass('active');
				thirdScrollTop -= step;
			};
		};
	}

	function fixLive(currentScrollTop) {

		if (currentScrollTop >= livePosition) {
			liveBlock1.css({
				position: 'fixed', left: 0,	right: 0, top: 0, bottom: 0
			});
		} else if (currentScrollTop <= livePosition) {
			liveBlock1.css({
				position: 'static'
			});
		};

//		if (currentScrollTop >= 100) {
//			$('.js-menu').addClass('menu_open');
//		}
//		else
//		{
//			$('.js-menu').removeClass('menu_open');
//		}


/*
		if (currentScrollTop >= livePosition + step * 4) {
			liveBlock2.css({
				position: 'fixed', left: 0
			});
		} else if (currentScrollTop < livePosition + step * 4) {
			liveBlock2.css({
				position: 'fixed', left: 100 + '%'
			});
		};

		if (currentScrollTop >= livePosition + step * 7) {
			liveBlock3.css({
				position: 'fixed', left: 0
			});
		} else if (currentScrollTop < livePosition + step * 7) {
			liveBlock3.css({
				position: 'fixed', left: 100 + '%'
			});
		};
*/
		if (currentScrollTop >  livePosition + step * 9) {
			liveBlock1.css({
				position: 'static'
			});
/*
			liveBlock2.css({
				position: 'static'
			});
*/
		};
/*
		if ( currentScrollTop >  livePosition + step * 10) {
			liveBlock3.css({
				position: 'absolute', left: 0,	right: 0, top: 'auto', bottom: 0
			});
		};
*/
	}

	function calcStepOneDay(currentScrollTop) {
		if (currentScrollTop >= oneDayPosition && currentScrollTop <= oneDayPosition + step * 6) {
			var difference = currentScrollTop - oneDayStartScrollTop;
			if (difference > step) {
				oneDayLabel++;
				$('.one-day__cell_label.active').removeClass('active');
				$('.one-day__cell_label[data-label=' + oneDayLabel + ']').addClass('active');
				oneDayStartScrollTop += step;
			} else if (difference < 0) {
				oneDayLabel--;
				$('.one-day__cell_label.active').removeClass('active');
				$('.one-day__cell_label[data-label=' + oneDayLabel + ']').addClass('active');
				oneDayStartScrollTop -= step;
			};
		};
	}

	function fixOneDay(currentScrollTop) {

		if (currentScrollTop >= oneDayPosition) {
			oneDayBlock.css({
				position: 'fixed', left: 0,	right: 0, top: 0, bottom: 0
			});

		} else if (currentScrollTop <= oneDayPosition) {
			oneDayBlock.css({
				position: 'static'
			});

		};
		if (currentScrollTop > oneDayPosition + step * 6) {
			oneDayBlock.css({
				position: 'absolute', left: 0,	right: 0, top: 'auto', bottom: 0
			});

		};
	}

	function calcHeight() {
		var block = $('.js-height');
		block.css('height', $(window).height() + 100 + 'px');
		live.css('height', (livePosition + step * 10) + 'px');
		oneDay.css('height', livePosition + step * 6 + 'px');
		controls.css('height', livePosition + step * 5 + 'px');
		$(window).resize();

		$(window).resize(function() {
			block.css('height', $(window).height() + 100  + 'px');
			live.css('height', (livePosition + step * 10) + 'px');
			oneDay.css('height',  livePosition + step * 6 + 'px');
			controls.css('height', livePosition + step * 5 + 'px');
		});
	}
}

dropList();
function dropList() {
	$('.js-list-drop').on('click', '.contacts__list-item', function() {

		$('.js-list-drop').not($(this).closest('.js-list-drop')).removeClass('contacts__list_open');
		$(this).closest('.js-list-drop').toggleClass('contacts__list_open');
		$(this).closest('.js-list-drop').children('.contacts__list-item').removeClass('contacts__list-item_active');
		$(this).addClass('contacts__list-item_active');
		$(this).appendTo($(this).closest('.js-list-drop'));
	});
	$('.js-list-drop').click(function(event) {
		event.stopPropagation();
	});
	$(document).on('click', function() {
		$('.js-list-drop').removeClass('contacts__list_open');
	});
}

switchCountry();
function switchCountry() {
	$('.js-country-switch').on('click', '.contacts__list-item', function() {
		var countryName = $(this).data('country');

		$('.contacts__maps-country').removeClass('contacts__maps-country_active');
		$('#map-' + countryName).addClass('contacts__maps-country_active');

		$('.contacts__list_city').removeClass('contacts__list_active');
		$('#list-' + countryName).addClass('contacts__list_active');

		$('.locations__country').removeClass('locations__country_active');
		$('#loc-' + countryName).addClass('locations__country_active');
	});
}

switchCity();
function switchCity() {
	$('.js-city-switch').on('click', '.contacts__list-item', function() {
		var cityName = $(this).data('city'),
			countryName = ($(this).closest('.js-city-switch').attr('id')).slice(5);

		$('#loc-' + countryName).children('.locations__list').removeClass('locations__list_active');
		$('#' + cityName).addClass('locations__list_active');
	});
}

//callMenu();
//function callMenu() {
//	$('.js-menu-call').click(function() {
//		$('.js-menu').addClass('menu_open');
//	});
//	$('.js-menu').mouseenter(function() {
//		$(this).addClass('menu_open');
//	});
//	$('.js-menu').mouseleave(function() {
//		$(this).removeClass('menu_open');
//	});
//}

function scr(id) {
	// console.log(id)
	var to = $('#'+ id).offset().top - 85;
	$("html, body").animate({scrollTop: to}, 500);
}

/**
	Addons
**/
$(document).ready(
	function()
	{
		var liveScript1 = function()
		{
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			id = $(this).attr('data-value');

			$('.js-images_1').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-screen_1').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-info_1').removeClass('active');
			$('#live_info_' + id).addClass('active');

			$('.js-images_1').removeClass('active');
			$('#live_box_' + id).addClass('active');

		}

		var liveScript2 = function()
		{
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			id = $(this).attr('data-value');

			$('.js-images_2').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-screen_2').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-info_2').removeClass('active');
			$('#live_info_' + id).addClass('active');

			$('.js-images_2').removeClass('active');
			$('#live_box_' + id).addClass('active');

		}

		var liveScript3 = function()
		{
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			id = $(this).attr('data-value');

			$('.js-images_3').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-screen_3').removeClass('active');
			$('#live_img_' + id).addClass('active');

			$('.js-info_3').removeClass('active');
			$('#live_info_' + id).addClass('active');

			$('.js-images_3').removeClass('active');
			$('#live_box_' + id).addClass('active');

		}

		$('.js-nav_1').click(
			liveScript1
		);

		$('.js-nav_2').click(
			liveScript2
		);

		$('.js-nav_3').click(
			liveScript3
		);

		$('.live__nav-item').hover(
			function()
			{
				$(this).addClass('hover');
			},
			function()
			{
				$(this).removeClass('hover');
			}
		);

		$('#live-blue-next-1').click(
			function()
			{
				$('.js-live-block-1').fadeOut('slow');
				$('.js-live-block-2').fadeIn('fast');
			}
		);

		$('#live-blue-next-2').click(
			function()
			{
				$('.js-live-block-2').fadeOut('slow');
				$('.js-live-block-3').fadeIn('fast');
			}
		);

		$('#live-blue-next-3').click(
			function()
			{
				$('.js-live-block-3').fadeOut('slow');
				$('.js-live-block-1').fadeIn('fast');
			}
		);

		$('#live-blue-prev-1').click(
			function()
			{
				$('.js-live-block-1').fadeOut('slow');
				$('.js-live-block-3').fadeIn('fast');
			}
		);

		$('#live-blue-prev-2').click(
			function()
			{
				$('.js-live-block-2').fadeOut('slow');
				$('.js-live-block-1').fadeIn('fast');
			}
		);

		$('#live-blue-prev-3').click(
			function()
			{
				$('.js-live-block-3').fadeOut('slow');
				$('.js-live-block-2').fadeIn('fast');
			}
		);


		/**
		3
		**/
		var oneDay = function()
		{
			$('.one-day__cell_label').removeClass('active');
			$(this).addClass('active');
		}

		$('.one-day__cell_label').click(
			oneDay
		);

		$('.one-day__cell_label').hover(
			oneDay
		);

		/**
		4
		**/

		$('#header-video').html(
			'<video autoplay="" loop="" style="visibility: visible; margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 100%; height: auto;min-width: 1900px;"><source src="video/video.mp4" type="video/mp4"></video>'
		);

		setTimeout(
			function()
			{
				$('#header-video').animate(
					{
						opacity: 1
					},
					1000
				);
			},
			1000
		);


		$('.unlimited-link').click(
			function()
			{
				$('.unlimited-full .form_unlimited').remove();
				$('.unlimited-link').removeClass('active');
				$(this).addClass('active');
				value = $(this).attr('value');
				$('.unlimited-new-content').html(
					$('#unlimited-new-content-' + value).html()
				);
				var data = $('.unlimited-full__data_js_init');



				data.on('click', '.unlimited-full__flow', function() {
					$(this).closest(data).children('.unlimited-full__flow').removeClass('unlimited-full__flow_state_open');
					$(this).addClass('unlimited-full__flow_state_open');



					var thisData = $(this).data('flow');
					$(this).closest('.unlimited-full__content').find('.unlimited-full__video-clip').removeClass('unlimited-full__video-clip_state_open');
					$(this).closest('.unlimited-full__content').find('.unlimited-full__video-clip[data-clip=' + thisData +']').addClass('unlimited-full__video-clip_state_open');
				});


				jQuery('.unlimited-new-content').find('.youtube-video').each(
					function()
					{
						src = jQuery(this).attr('src');
						jQuery(this).parent().html(
							'<iframe class="youtube-video" width="503" height="318" src="' + src + '" frameborder="0" allowfullscreen></iframe>'
						);
					}
				);

				jQuery('.unlimited-new-content').find('.unlimited-full__flow-content').each(
					function()
						{
							height = jQuery('.unlimited-new-content').find('.unlimited-full__data ').height();

							$(this).css('top', height + 30);
						}
					);

			}
		);

		$('.unlimited-first-active').click();

	}
);
