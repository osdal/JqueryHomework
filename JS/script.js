$(document).ready(function () {
	$('.main_btna, .main_btn, nav li:nth-child(2)').on('click', function(){
		$('.overlay').animate({opacity: "toggle"}, 3000);
		$('.modal').css('display', 'block');
		$('.modal').offset({top:-500});
		$('.modal').animate({top: 150}, 3000);		
	});

	$('.close').on('click', function() {
		$('.overlay').animate({opacity: "toggle"}, 3000);
		$('.modal').animate({top: -600}, 3000);
	});



});


/*$(document).ready(function () {
	
$('.list-item:first').hover(function() {
	$(this).toggleClass('active');
});

$('.list-item:eq(2)').on('click', function() {
	$('.image:even').fadeToggle('slow');
});

$('.list-item:eq(4)').on('click', function() {
	$('.image:odd').animate(
	{
		opacity: 'toggle',
		height: 'toggle'


	}, 3000)
});




});*/