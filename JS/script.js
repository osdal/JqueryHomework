$(document).ready(function () {
	$('.main_btna, .main_btn, nav li:nth-child(2)').on('click', function(){
		$('.overlay').animate({opacity: "toggle"}, 3000);
		$('.modal').css('display', 'block');
		$('.modal').offset({top:-500});
		$('.modal').animate({top: 100}, 3000);		
	});

	$('.close').on('click', function() {
		$('.overlay').animate({opacity: "toggle"}, 3000);
		$('.modal').animate({top: -600}, 3000);
	});



});






