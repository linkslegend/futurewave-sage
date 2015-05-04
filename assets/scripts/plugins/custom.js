

var resizeTimer;
jQuery(window).resize(function(){
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (jQuery('#cboxOverlay').is(':visible')) {
            jQuery.colorbox.load(true);
        }
    }, 300)
});

jQuery(function($){
    //  SEE-ALSO BANNERS
    //  on-hover changing
    jQuery('.see-also').hover( function() { // hover
            
        jQuery(this).find('img').stop().clearQueue().delay(0);
        jQuery(this).addClass('hover');
        jQuery(this).find('img').animate(
            { right:-$(this).innerWidth() }, 
            300,  // speed
            ''
        );
        
    }, function() { // hover-out
        
        jQuery(this).find('img').stop().clearQueue().delay(0);
        jQuery(this).find('img').animate(
            { right:0 }, 
            300, // speed
            '',
            function() {
                jQuery(this).parent().parent().removeClass('hover');
            }
        );
        
    }); // see-also hover end
});

// Scroll to
jQuery('.close').click(function () {
  jQuery('#myModal', '#myModal2', '#myModal3').hide();
  jQuery('#myModal iframe', '#myModal2 iframe', '#myModal3 iframe').attr("src", jQuery("#myModal iframe", "#myModal2 iframe", "#myModal3 iframe").attr("src"));
});    



// document ready
jQuery(document).ready(function(){


jQuery('.modal').each(function(){
            var src = jQuery(this).find('iframe').attr('src');

        jQuery(this).on('click', function(){

            jQuery(this).find('iframe').attr('src', '');
            jQuery(this).find('iframe').attr('src', src);

        });
});


jQuery('a[href^="#"]').on('click', function(event) {
    var target = jQuery( jQuery(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        jQuery('#back-top').animate({
            scrollTop: target.offset().top
        }, 2000);
    }
});
jQuery(".youtube").colorbox({
	iframe:true, 
	innerWidth:640, 
	innerHeight:390
});
jQuery(".inline").colorbox({inline:true, maxWidth:"600px"});
jQuery(".inline").colorbox({inline:true, width:"100%"});

jQuery('.postform').addClass('form-control category');

jQuery('.accordion').on('hide.bs.collapse show.bs.collapse', function (n) {
    jQuery(n.target).siblings('.panel-heading').find('i.glyphicon').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
});

jQuery('.amr_widget > .widget-inner > ul').addClass('postlist');
jQuery('.amr_widget > .widget-inner > ul > li').addClass('postslist-item');
jQuery('.amr_widget > .widget-inner > ul > li > a').addClass('hvr-underline-from-left');

//Alert & Cookies
if (jQuery.cookie('alert')) jQuery('#myAlert').hide();
else {
	jQuery("#myAlert").removeClass('hidden')
    jQuery("#myAlert").click(function() {
        jQuery( "#myAlert" ).slideUp( "slow", function() { });
        // set the cookie for 24 hours
        var date = new Date();
        date.setTime(date.getTime() + 10*60*1000); 
        jQuery.cookie('alert', true, { expires: date });
    });
}

jQuery('.js-lazyYT').lazyYT();

transformicons.add('.tcon') // add default behavior for all elements with the class .tcon
              .remove('.tcon-menu--xcross') // remove default behavior for the first icon
              .add('.tcon-menu--xcross', {
                  transform: "click",
                  revert: "click"
}); // add new behavior for the first icon

//end document ready


jQuery(".home header").delay(150).animate({'opacity' : 1, 'marginTop': 0}, 1500, 'easeOutExpo');
jQuery('#main').delay(100).animate({'opacity' : 1}, 1000, 'easeOutExpo');
jQuery('footer').animate({'opacity' : 1}, 500, 'easeOutExpo');

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if (isIE () == 8) {
 // IE8 code
} else {
 var wow = new WOW(
  {
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();

}
	

jQuery('panel panel-default').on('click', function () {
    if( jQuery(this).hasClass('collapsed') !== true ){
       jQuery(this).removeClass('active');
    }else{
       jQuery(this).addClass('active');
    }
});

jQuery("#owl-blog-posts").owlCarousel({
      autoPlay: 15000, //Set AutoPlay to 3 seconds
      items : 2,
      navigation: false,
      pagination: true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
 	  itemsTablet: [756,1],
 	  itemsMobile: [631,1]
  });

jQuery("#owl-youtube").owlCarousel({
      autoPlay: 15000, //Set AutoPlay to 3 seconds
      items : 3,
      navigation: false,
      pagination: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
 	  itemsTablet: [756,2],
 	  itemsMobile: [631,1]
  });
  
jQuery("#owl-product-posts").owlCarousel({
      autoPlay: 7000, //Set AutoPlay to 3 seconds
      items : 3,
      navigation: false,
      pagination: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
 	  itemsTablet: [756,2],
 	  itemsMobile: [599,1]
  });



// clear cf7 error msg on mouseover
jQuery(".wpcf7-form-control-wrap").mouseover(function(){
	$obj = jQuery("span.wpcf7-not-valid-tip",this);
    	   $obj.css('display','none');
	});


jQuery("body").tooltip({ selector: '[data-toggle=tooltip]' });
jQuery('#myModal').appendTo("body");
jQuery('#myModal2').appendTo("body");
jQuery('#myModal3').appendTo("body");
jQuery('#myModal4').appendTo("body");
jQuery('#myModal4').appendTo("body");

//end document ready
});
//end document ready


jQuery(document).ready(function(){
  var owl = jQuery("#owl-product-posts");
  owl.owlCarousel();
 
  // Custom Navigation Events
  jQuery(".next").click(function(){
    owl.trigger('owl.next');
  })
  jQuery(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});

// window load

// detect mobile browser
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) jQuery('html').addClass('animation-off mobile-browser');

(function() { 
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) { 
        var msViewportStyle = document.createElement("style"); 
        msViewportStyle.appendChild( 
            document.createTextNode("@-ms-viewport{width:auto!important}") 
        ); 
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle); 
    } 
})(); 



/*
******
*
	Effeckt.css base file
*
******
*/


;(function(window){

  var
    // Is Modernizr defined on the global scope
    Modernizr = typeof Modernizr !== "undefined" ? Modernizr : false,

    // whether or not is a touch device
    isTouchDevice = Modernizr ? Modernizr.touch : !!('ontouchstart' in window || 'onmsgesturechange' in window),

    // Are we expecting a touch or a click?
    buttonPressedEvent = ( isTouchDevice ) ? 'touchstart' : 'click',

    // List of all animation/transition properties
    // with its animationEnd/transitionEnd event
    animationEndEventNames = {
      'WebkitAnimation' : 'webkitAnimationEnd',
      'OAnimation' : 'oAnimationEnd',
      'msAnimation' : 'MSAnimationEnd',
      'animation' : 'animationend'
    },

    transitionEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'OTransition' : 'oTransitionEnd',
      'msTransition' : 'MSTransitionEnd',
      'transition' : 'transitionend'
    },

    Effeckt = function() {
      this.init();
    };

  // Current version.
  Effeckt.version = '0.0.1';

  // Initialization method
  Effeckt.prototype.init = function() {
    this.buttonPressedEvent = buttonPressedEvent;

    //event trigger after animation/transition end.
    this.transitionEndEventName = Modernizr ? transitionEndEventNames[Modernizr.prefixed('transition')] : getTransitionEndEventNames();
    this.animationEndEventName  = Modernizr ? animationEndEventNames[Modernizr.prefixed('animation')] : getAnimationEndEventNames();
    this.transitionAnimationEndEvent = this.animationEndEventName + ' ' + this.transitionEndEventName;
  };

  Effeckt.prototype.getViewportHeight = function() {

    var docElement = document.documentElement,
      client = docElement['clientHeight'],
      inner = window['innerHeight'];

    if( client < inner )
      return inner;
    else
      return client;
  };

  // Get all the properties for transition/animation end
  function getTransitionEndEventNames() {
    return _getEndEventNames( transitionEndEventNames );
  }

  function getAnimationEndEventNames() {
    return _getEndEventNames( animationEndEventNames );
  }

  function _getEndEventNames(obj) {
    var events = [];

    for ( var eventName in obj ) {
      events.push( obj[ eventName ] );
    }

    return events.join(' ');
  }

  // Creates a Effeckt object.
  window.Effeckt = new Effeckt();

})(this);
/* 
 *
 * 
End Effeckt.css
 * 
 * 
*/


/*!
 * captions.js
 *
 * author: Effeckt.css
 *
 * Licensed under the MIT license
*/

var effecktCaptions = {

  init: function() {
    this.bindUIActions();
  },

  bindUIActions: function() {
    var self = this; //keep a reference to this (Captions) object.

    jQuery('[data-effeckt-type]').on(Effeckt.buttonPressedEvent, function(event) {
      self.activateCaptions(this);
      event.preventDefault();
    });
  },

  activateCaptions: function(el) {
    var activeClass = 'active';

    if (document.documentElement.classList) {
      el.classList.toggle(activeClass);
    } else {
      var $caption = $(el);
      $caption.toggleClass(activeClass);
    }
  }
};

effecktCaptions.init();

/*!
 * END captions.js
*/



// ie10 class
if (Function('/*@cc_on return document.documentMode===10@*/')()){
    document.documentElement.className+=' ie10';
}


/*!
* lazyYT (lazy load YouTube videos)
* v1.0.1 - 2014-12-30
* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
* http://creativecommons.org/licenses/by-sa/4.0/
* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
* 
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
*/


;(function ($) {
    'use strict';

    function setUp($el, settings) {
        var width = $el.data('width'),
            height = $el.data('height'),
            ratio = ($el.data('ratio')) ? $el.data('ratio') : settings.default_ratio,
            id = $el.data('youtube-id'),
            padding_bottom,
            innerHtml = [],
            $thumb,
            thumb_img,
            loading_text = $el.text() ? $el.text() : settings.loading_text,
            youtube_parameters = $el.data('parameters') || '';
        
        ratio = ratio.split(":");
        
        // width and height might override default_ratio value
        if (typeof width === 'number' && typeof height === 'number') {
          $el.width(width);
          padding_bottom = height + 'px';
        } else if (typeof width === 'number') {
          $el.width(width);
          padding_bottom = (width * ratio[1] / ratio[0]) + 'px';
        } else {
          width = $el.width();
		      
          // no width means that container is fluid and will be the size of its parent
          if (width == 0) {
            width = $el.parent().width();
          }
		      
          padding_bottom = (ratio[1] / ratio[0] * 100) + '%';
        }
        
        //
        // This HTML will be placed inside 'lazyYT' container
        
        innerHtml.push('<div class="ytp-thumbnail">');
        
          // Play button from YouTube (exactly as it is in YouTube)
          innerHtml.push('<div class="ytp-large-play-button"');
          if (width <= 640) innerHtml.push(' style="transform: scale(0.563888888888889);"');
          innerHtml.push('>');
          innerHtml.push('<svg>');
            innerHtml.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>');
            innerHtml.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>');
          innerHtml.push('</svg>');
          innerHtml.push('</div>'); // end of .ytp-large-play-button
        
        innerHtml.push('</div>'); // end of .ytp-thumbnail
        
        // Video title (info bar)
        innerHtml.push('<div class="html5-info-bar">');
        innerHtml.push('<div class="html5-title">');
        innerHtml.push('<div class="html5-title-text-wrapper">');
        innerHtml.push('<a id="lazyYT-title-', id, '" class="html5-title-text" target="_blank" tabindex="3100" href="https://www.youtube.com/watch?v=', id, '">');
        innerHtml.push(loading_text);
        innerHtml.push('</a>');
        innerHtml.push('</div>'); // .html5-title
        innerHtml.push('</div>'); // .html5-title-text-wrapper
        innerHtml.push('</div>'); // end of Video title .html5-info-bar

        $el.css({
            'padding-bottom': padding_bottom
        })
          .html(innerHtml.join(''));
        
        if (width > 640) {
          thumb_img = 'maxresdefault.jpg';
        } else if (width > 480) {
          thumb_img = 'sddefault.jpg';
        } else if (width > 320) {
          thumb_img = 'hqdefault.jpg';
        } else if (width > 120) {
          thumb_img = 'mqdefault.jpg';
        } else if (width == 0) { // sometimes it fails on fluid layout
          thumb_img = 'hqdefault.jpg';
        } else {
          thumb_img = 'default.jpg';
        }
        
        $thumb = $el.find('.ytp-thumbnail').css({
            'background-image': ['url(http://img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')
        })
          .addClass('lazyYT-image-loaded')
          .on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {
              $el.html('<iframe src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtube_parameters + '" frameborder="0" allowfullscreen></iframe>')
                .addClass('lazyYT-video-loaded');
            }
          });

        $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $el.find('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

    }

    $.fn.lazyYT = function (newSettings) {
      var defaultSettings = {
        loading_text: 'Loading...',
        default_ratio: '16:9',
        callback: null, // ToDO execute callback if given
        container_class: 'lazyYT-container'
      };
      var settings = $.extend(defaultSettings, newSettings);
      
      return this.each(function () {
          var $el = $(this).addClass(settings.container_class);
          setUp($el, settings);
      });
    };

}(jQuery));




//////////////////////*														*/////////////////////
//////////////////////*														*/////////////////////
//////////////////////*			Icon http://www.transformicons.com/ 		*/////////////////////
//////////////////////*														*/////////////////////
//////////////////////*														*/////////////////////
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD module
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS-like environment (i.e. Node)
    module.exports = factory();
  } else {
    // Browser global
    root.transformicons = factory();
  }
}(this || window, function () {

  // ####################
  // MODULE TRANSFORMICON
  // ####################
  'use strict';

  var
    tcon = {}, // static class
    _transformClass = 'tcon-transform',

    // const
    DEFAULT_EVENTS = {
      transform : ['click'],
      revert : ['click']
    };

  // ##############
  // private methods
  // ##############

  /**
  * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
  * @private
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
  * @returns {array} Array of DOM elements
  */
  var getElementList = function (elements) {
    if (typeof elements === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(elements));
    } else if (typeof elements === 'undefined' || elements instanceof Array) {
      return elements;
    } else {
      return [elements];
    }
  };

  /**
  * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
  * @private
  *
  * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
  * @returns {array} Array of eventnames
  */
  var getEventList = function (events) {
    if (typeof events === 'string') {
      return events.toLowerCase().split(' ');
    } else {
      return events;
    }
  };

  /**
  * Attach or remove transformicon events to one or more elements.
  * @private
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
  */
  var setListeners = function (elements, events, remove) {
    var
      method = (remove ? 'remove' : 'add') + 'EventListener',
      elementList = getElementList(elements),
      currentElement = elementList.length,
      eventLists = {};

    // get events or use defaults
    for (var prop in DEFAULT_EVENTS) {
      eventLists[prop] = (events && events[prop]) ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
    }
    
    // add or remove all events for all occasions to all elements
    while(currentElement--) {
      for (var occasion in eventLists) {
        var currentEvent = eventLists[occasion].length;
        while(currentEvent--) {
          elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
        }
      }
    }
  };

  /**
  * Event handler for transform events.
  * @private
  *
  * @param {object} event - event object
  */
  var handleEvent = function (event) {
    tcon.toggle(event.currentTarget);
  };

  // ##############
  // public methods
  // ##############

  /**
  * Add transformicon behavior to one or more elements.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
  * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.add = function (elements, events) {
    setListeners(elements, events);
    return tcon;
  };

  /**
  * Remove transformicon behavior from one or more elements.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @param {object} [events] - An Object containing one or more special event definitions
  * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
  * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.remove = function (elements, events) {
    setListeners(elements, events, true);
    return tcon;
  };

  /**
  * Put one or more elements in the transformed state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.transform = function (elements) {
    getElementList(elements).forEach(function(element) {
      element.classList.add(_transformClass);
    });
    return tcon;
  };

  /**
  * Revert one or more elements to the original state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.revert = function (elements) {
    getElementList(elements).forEach(function(element) {
      element.classList.remove(_transformClass);
    });
    return tcon;
  };
  
  /**
  * Toggles one or more elements between transformed and original state.
  * @public
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
  * @returns {transformicon} transformicon instance for chaining
  */
  tcon.toggle = function (elements) {
    getElementList(elements).forEach(function(element) {
      tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
    });
    return tcon;
  };

  return tcon;
}));




