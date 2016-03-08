$(document).ready(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp({
		controls: {
			toggleFilterButtons: true,
			toggleLogic: 'or',
		},
		load: {
			filter: '.data-collection, .posters'
		}
	});

});