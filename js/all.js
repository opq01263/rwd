$(document).ready(function() {
	$('a , button').click(function(event) {
		event.preventDefault();
	});
	$('.showmenu').click(function(event) {
		/* Act on the event */
		$('body').toggleClass('showmenu');
	});
});