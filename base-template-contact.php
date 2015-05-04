<?php

use Roots\Sage\Config;
use Roots\Sage\Wrapper;

?>


<?php get_template_part('templates/head'); ?>

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

<script type="text/javascript">
//////////// Google Maps  ////////////
//////////// Google maps ////////////
var directionDisplay, map;
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();

function initialize() {
  // set the default center of the map
  var latlng = new google.maps.LatLng(48.939900,9.132730);
  // set route options (draggable means you can alter/drag the route in the map)
  var rendererOptions = { draggable: true };
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  // set the display options for the map
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };
  // add the map to the map placeholder
  map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
  // add a marker to the map
  marker = new google.maps.Marker({
            position: latlng,
            map: map
  });
  // bind the map to the directions
  directionsDisplay.setMap(map);
  // point the directions to the container for the direction details
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  // start the geolocation API
  if (navigator.geolocation) {
    // when geolocation is available on your device, run this function
    navigator.geolocation.getCurrentPosition(foundYou, notFound);
  } else {
    // when no geolocation is available, alert this message
    alert('Geolocation not supported or not enabled.');
  }
}
function notFound(msg) {  
  alert('Could not find your location :(')
}
function foundYou(position) {
  // convert the position returned by the geolocation API to a google coordinate object
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  // then try to reverse geocode the location to return a human-readable address
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      // if the geolocation was recognized and an address was found
      if (results[0]) {
        // add a marker to the map on the geolocated point
        
        //marker = new google.maps.Marker({
        //    position: latlng,
        //    map: map
        //});
        
        // compose a string with the address parts
        var address = results[0].address_components[1].long_name+' '+results[0].address_components[0].long_name+', '+results[0].address_components[3].long_name
        // set the located address to the link, show the link and add a click event handler
        $('.autoLink span').html(address).parent().show().click(function(){
          // onclick, set the geocoded address to the start-point formfield
          $('#routeStart').val(address);
          // call the calcRoute function to start calculating the route
          calcRoute();
        });
      }
    } else {
      // if the address couldn't be determined, alert and error with the status message
      alert("Geocoder failed due to: " + status);
    }
  });
}
function calcRoute() {
  // get the travelmode, startpoint and via point from the form   
  var travelMode = $('input[name="travelMode"]:checked').val();
  var start = $("#routeStart").val();
  var end = $("#routeEnd").val();
  // compose a array with options for the directions/route request
  var request = {
    origin: start,
    destination: end,
    unitSystem: google.maps.UnitSystem.METRIC,
    travelMode: google.maps.DirectionsTravelMode[travelMode]
  };
  // call the directions API
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // directions returned by the API, clear the directions panel before adding new directions
      $('#directionsPanel').empty();
      // display the direction details in the container
      directionsDisplay.setDirections(response);
    } else {
      // alert an error message when the route could nog be calculated.
      if (status == 'ZERO_RESULTS') {
        alert('No route could be found between the origin and destination.');
      } else if (status == 'UNKNOWN_ERROR') {
        alert('A directions request could not be processed due to a server error. The request may succeed if you try again.');
      } else if (status == 'REQUEST_DENIED') {
        alert('This webpage is not allowed to use the directions service.');
      } else if (status == 'OVER_QUERY_LIMIT') {
        alert('The webpage has gone over the requests limit in too short a period of time.');
      } else if (status == 'NOT_FOUND') {
        alert('At least one of the origin, destination, or waypoints could not be geocoded.');
      } else if (status == 'INVALID_REQUEST') {
        alert('The DirectionsRequest provided was invalid.');         
      } else {
        alert("There was an unknown error in your request. Requeststatus: nn"+status);
      }
    }
  });
}

</script>


  <body <?php body_class(); ?> onLoad="initialize()">
    <!--[if lt IE 9]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>
    
<div id="main" class="animation-enabled">

<!-- Google Maps -->
<section id="maps-header" class="maps">
<div id="map_canvas"></div>

<div class="map-form-out">

<div class="map-form-inner">
<div class="map-input">

<form action="#" onSubmit="calcRoute();return false;" id="routeForm">

<div class="col-md-8 maps">  
<div class="float-box-top">
<ul class="radio-icons">
  <li><div class="icon-thread-d"><input type="radio" name="travelMode" id="DRIVING" value="DRIVING" checked /><label class="radio"></label></div></li>
  <li><div class="icon-thread-b"><input type="radio" name="travelMode" id="BICYCLING" value="BICYCLING" /><label class="radio"></label></div></li>
  <li><div class="icon-thread-t"><input type="radio" name="travelMode" id="TRANSIT" value="TRANSIT" /><label class="radio"></label></div></li>
  <li><div class="icon-thread-w"><input type="radio" name="travelMode" id="WALKING" value="WALKING" /><label class="radio"></label></div></li>
</ul>
<div class="location-text"><a href="#" class="autoLink" style="display: none;">Verwenden Sie: <span>not found</span></a></div>
</div>
<div class="float-box-bottom">
<div class="from"><div class="from-text">From:</div><input type="text" class="startpoint" id="routeStart" value=""></div>
<div class="to"><div class="to-text">To:</div><input type="text" class="startpoint" id="routeEnd" value="Robert-Bosch-Straße 11, 74321 Bietigheim-Bissingen"></div>
</div>
</div>  

<div class="col-md-4 maps">  
<div class="form-buttons">
<button type="submit" id="RoutenPlan" class="button-right btn btn-primary btn-lg" value="Route berechnen">Route berechnen</button>
<button id="RoutenPlan" data-role="button" type="button" class="button-right btn btn-primary btn-lg" data-toggle="collapse" data-parent="#accordion" href="#directionsPanel">Routen Plan Anzeigen</button>
</div>
</div>

</form>


</div>
</div>
</div>
<!-- end Google maps -->

<!-- main content -->    
 <div class="wrap overlap maps container" role="document">
  
 
 
        <div class="main col-sm-8 page" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
<!-- Google Maps Directions-->
      <div id="directionsPanel" id="collapseOne" class="collapse"></div>
        
          <?php include Wrapper\template_path(); ?>
        </div><!-- /.main -->
        <?php if (Config\display_sidebar()) : ?>
      <aside class="sidebar col-sm-4" role="complementary" role="complementary" itemscope itemtype="http://schema.org/WPSideBar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
    </div><!-- /.wrap -->
</div>    
    <?php get_template_part('templates/footer'); wp_footer(); ?>
  </body>
</html>
