$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate(
				{'left': '1020px'},
				500,
				// 500 here means milliseconds //
				function() {
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		})
		$(document).keydown(function(event) {
			if (event.keyCode == 88) {}
			playInthefade();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		})
		.keyup(function(event) {
   	 		if (event.keyCode == 88) {
   		   	$('#cool-inthefade')[0].pause();
      		$('#cool-inthefade')[0].load();
      		$('.ryu-cool').hide();
      		$('.ryu-still').show();
      	};
    });
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playInthefade () {
	$('#cool-inthefade')[0].volume = 0.5;
	$('#cool-inthefade')[0].load();
	$('#cool-inthefade')[0].play();
}