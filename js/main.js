$(document).ready(function(){
	$("#type-button").click(function(){
		if ($("#category").is(':visible')) {
			$("#category-chevron").toggleClass('rotate');
		} else {
			
		}
		if ($("#search").is(':visible')) {
			$("#search-chevron").toggleClass('rotate');
		} else {
			
		}
		$("#category").hide();
		$("#search").hide();
		$("#type").slideToggle();
		$("#type-chevron").toggleClass('rotate');
	});
	$("#category-button").click(function(){
		if ($("#type").is(':visible')) {
			$("#type-chevron").toggleClass('rotate');
		} else {
			
		}
		if ($("#search").is(':visible')) {
			$("#search-chevron").toggleClass('rotate');
		} else {
			
		}
		$("#type").hide();
		$("#search").hide();
		$("#category").slideToggle();
		$("#category-chevron").toggleClass('rotate');
		
	});
	$("#search-button").click(function(){
		if ($("#type").is(':visible')) {
			$("#type-chevron").toggleClass('rotate');
		} else {
			
		}
		if ($("#category").is(':visible')) {
			$("#category-chevron").toggleClass('rotate');
		} else {
			
		}
		$("#category").hide();
		$("#type").hide();
		$("#search").slideToggle();
		$("#search-chevron").toggleClass('rotate');
	});
	// Instantiate MixItUp:

	$('#Container').mixItUp({
		load: {
			sort: 'name:asc'
		}
	});


$(function() {

  $("#Container").mixItUp();

  var inputText;
  var $matching = $();

  // Delay function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $("#input").keyup(function(){
    // Delay function invoked to make sure user stopped typing
    delay(function(){
      inputText = $("#input").val().toLowerCase();
      
      // Check to see if input field is empty
      if ((inputText.length) > 0) {            
        $( '.mix').each(function() {
          $this = $("this");
          
          // add item to be filtered out if input text matches items inside the title   
          if($(this).children('.meta').text().toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          }
          else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $("#Container").mixItUp('filter', $matching);
      }

      else {
        // resets the filter to show all item if input is empty
        $("#Container").mixItUp('filter', 'all');
      }
    }, 200 );
  });
});
});