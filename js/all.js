$(document).ready(function() {
	$('button').click(function(event) {
		event.preventDefault();
	});
	$('.showmenu').click(function(event) {
		/* Act on the event */
		$('body').toggleClass('showmenu');
	});
	$('.favorite').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('fas , favoritelove');
	});
});