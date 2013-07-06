$(document).ready(function() {
	
	$("a.lightbox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'overlayShow'	:	false,
		'type'			: 	'image',
		'autoscale'		: 	'true'
	});
	
	$("a.imagezoom").fancybox({
		'transitionIn'			:	'elastic',
		'transitionOut'			:	'elastic',
		'type'					: 	'image',
		'autoscale'				: 	'true',
		'hideOnOverlayClick'	:	'true',
		'overlayOpacity'		:	0.8,
		'overlayColor'			:	'#000',
		'showCloseButton'		:	'true'
	});
	
	$(".video-wrapper").fitVids();
	
});