$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Home', 'About','section3','Expericens','Blog','Contact'],
      showActiveTooltip: true,
      slidesNavigation: true,
        slidesNavPosition: 'bottom',
      controlArrows:false,
    });
    /* End of full page */

    var showHeaderAt = 150;
		var win = $(window),
				body = $('body');
		// Show the fixed header only on larger screen devices
	
			// When we scroll more than 150px down, we set the
			// "fixed" class on the body element.
			win.on('scroll', function(e){
        alert('on scroll...');
				if(win.scrollTop() > showHeaderAt) {
					body.addClass('fixed');
				}
				else {
					body.removeClass('fixed');
				}
			});
    
    /* End of fixed header menu */


});
