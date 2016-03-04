$(document).ready(function() {
	
 	var view = {
		/** Helper function to set the first carousel image as "active" */
		activeIfFirst: function() {
			return function(text, render) {
        		return render(text) === '0' ? 'active' : '';
        	}
     	},
	};

   	$.getJSON('../data/carousel.json', function(data) {
     	// Add carousel to the "view"
        view.images = data;

        // Render view
        var template = $('#carousel').html();
        var rendered = Mustache.render(template, view);
        $('#actualContent').prepend(rendered);
	});

    $.get('../data/homepage.html', function(data) {
    	$('#appendIntroHere').html(data);
    });
	
});