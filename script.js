$(document).ready( function() {
	$('#Hide').click( function() {
		$('#Pic1').fadeOut('slow');
		$('#Pic2').fadeOut('slow');
		$('#Pic3').fadeOut('slow');
	});


});
$(document).ready( function() {
	$('.Ingredient').click( function () {
	//	$('#Ingredient').fadeOut('slow');
		$(this).css("font-size","15px");
		$(this).css("color", "#7A3636")
	});
});