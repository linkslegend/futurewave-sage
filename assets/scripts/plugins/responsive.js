// var defaultURL = 'steuerberaterkoblenz.com'; //<---- CHANGE TO YOUR WEBSITE URL

//show loading graphic
function showLoader(id) {
  jQuery('#' + id + ' img').fadeIn('slow');
}

//hdie loading graphic
function hideLoader(id) {
  jQuery('#' + id + ' img').fadeOut('slow');
}

//function to check load state of each frame
function allLoaded(){
  var results = [];
  jQuery('iframe').each(function(){
    if(!jQuery(this).data('loaded')){results.push(false)}
  });
  var result = (results.length > 0) ? false : true;
  return result;
};

function loadPage(jQueryframe, url) {
  if ( url.substr(0,7) !== 'http://' && url.substr(0,8) !== 'https://' && url.substr(0, 7) !== 'file://' ) {
    url = 'http://'+url;
  }
  jQuery('iframe').not(jQueryframe).each(function(){showLoader(jQuery(this).parent().attr('id'));})
  jQuery('iframe').not(jQueryframe).data('loaded', false);
  jQuery('iframe').not(jQueryframe).attr('src', url);
}

jQuery('.frame').each(function(){showLoader(jQuery(this).attr('id'))});


//when document loads
jQuery(document).ready(function(){

//loadPage('', defaultURL);

  //query string
  var qsArray = window.location.href.split('?');
  var qs = qsArray[qsArray.length-1];

  if(qs != '' && qsArray.length > 1){
    jQuery('#url input[type=text]').val(qs);
    loadPage('', qs);
  }

  //set slidable div width
  jQuery('#frames #inner').css('width', function(){
    var width = 0;
    jQuery('.frame').each(function(){width += jQuery(this).outerWidth() + 20});
    return width;
  });

  //add event handlers for options radio buttons
  jQuery('input[type=radio]').change(function(){
    jQueryframes = jQuery('#frames');
    jQueryinputs = jQuery('input[type=radio]:checked').val();

    if(jQueryinputs == '1'){
      jQueryframes.addClass('widthOnly');
    } else {
      jQueryframes.removeClass('widthOnly');
    }
  });

  //add event handlers for scrollbars checkbox
  jQuery('input[type=checkbox]').change(function(){
    var scrollBarWidth = 15;
    jQueryframes = jQuery('#frames');
    jQueryinputs = jQuery('#scrollbar:checked');

    if( jQueryinputs.length == 0 ){
      scrollBarWidth = -15;
    }

    jQueryframes.find('iframe').each(function(i,el) {
      jQuery(el).attr('width', parseInt(jQuery(el).attr('width')) + scrollBarWidth);
    });
  });

  //when the url textbox is used
  jQuery('form').submit(function(){
    loadPage('' , jQuery('#url input[type=text]').val());
    return false;
  });

  //when frame loads
  jQuery('iframe').load(function(){

    var jQuerythis = jQuery(this);
    var url = '';
    var error = false;

    try{
      url = jQuerythis.contents().get(0).location.href;
    } catch(e) {
      error = true;
      if(jQuery('#url input[type=text]').val() != ''){
        url = jQuery('#url input[type=text]').val();
      } else {
        url = defaultURL;
      }
    }

    //load other pages with the same URL
    if(allLoaded()){
      if(error){
        alert('Browsers prevent navigation from inside iframes across domains.\nPlease use the textbox at the top for external sites.');
        loadPage('', defaultURL);
      }else{
        loadPage(jQuerythis, url);
      }
    }

    //when frame loads, hide loader graphic
    else{
      error = false;
      hideLoader(jQuery(this).parent().attr('id'));
      jQuery(this).data('loaded',true);
    }
  });

});
