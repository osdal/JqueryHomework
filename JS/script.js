$(document).ready(function () {
	$('.main_btna').on('click', function(){
		$('.overlay').animate({opacity: "toggle"}, 3000);
		$('.modal').css('display', 'block');

		
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