$(function(){
	$('body#portfolio.permalink.text').scrollspy({ target: '.resume-nav' })

	$('#portfolio.permalink.text .resume-nav .nav').affix({
		offset: {
			top: function(){
				return $('#portfolio.permalink.text .resume-nav').offset().top - 20
			}
		}
	});

	$('.resume-nav a').on('click', function(){
		var selector = $(this).attr('href');
		var top = $(selector).offset().top;
		$('html,body').animate({
		    scrollTop: top
		}, 1000);
	})
});

