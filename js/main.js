$(document).ready(function(){
	$("#type-button").click(function(){
		$("#type").slideToggle();
		$("#type-chevron").toggleClass('rotate');
	});
	$("#category-button").click(function(){
		$("#category").slideToggle();
		$("#category-chevron").toggleClass('rotate');
	});
	// Instantiate MixItUp:

	$('#Container').mixItUp();

});