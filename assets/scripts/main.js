/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
      
jQuery(window).load(function() {
jQuery('#container').masonry({
	columnWidth: '.grid-sizer',
	itemSelector: '.item',
isAnimated: true,
isFitWidth: true
});
});

// Start back to top script
// hide #back-top first
	jQuery("#back-top").hide();	
// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 200) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
});

jQuery("#RoutenPlan").click(function () {
	if ($(window).width() > 767) {
    	jQuery(".wrap.overlap.maps").animate({"margin-top": "-2px"}, "slow");
    	jQuery(".map-form-out").animate({"margin-top": "-110px"}, "slow");
	}
	if ($(window).width() < 767) {
    	jQuery(".wrap.overlap.maps").animate({"margin-top": "0px"}, "slow");
    	jQuery(".map-form-out").animate({"margin-top": "-155px"}, "slow");
	}
	if ($(window).width() < 480) {
    	jQuery(".wrap.overlap.maps").animate({"margin-top": "0px"}, "slow");
    	jQuery(".map-form-out").animate({"margin-top": "-200px"}, "slow");
	}
});


jQuery(document).ready(function() {
	jQuery(function() {
		var url = MyAutocomplete.url + "?action=my_search";
		jQuery( "#s" ).autocomplete({
			source: url,
			delay: 0,
			minLength: 2,
			select: function(event, ui) {window.location.href=ui.item.link;},
		});	
	});
});  


    
      },
      
      
      
      finalize: function() {}},// Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    'kontakt': {
      init: function() {

      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
