// Google Maps 
function initialize() {
var navigationMapInitialized = false;    
var latlngFuturewave = new google.maps.LatLng(48.947161, 9.130504);
var latlngOwn;
var navigationGoogleMap;
var navigationMapBounds;jQuery(document).ready(function() {initializeNavigationMap()
jQuery('#myRoute').click(function()
{var startPoint = jQuery('#startpoint').val();
if(startPoint == '') {alert('Bitte geben Sie einen Startpunkt ein!');return;}
calculateRoute(startPoint);});});function initializeNavigationMap()


{if(navigationMapInitialized) return;navigationMapInitialized = true;
var myOptions = {zoom: 14,center: latlngFuturewave,mapTypeId: google.maps.MapTypeId.ROADMAP
};navigationGoogleMap = new google.maps.Map(document.getElementById("map"), myOptions);navigationMapBounds = new google.maps.LatLngBounds();navigationMapBounds.extend(latlngFuturewave);
if(latlngOwn) {navigationMapBounds.extend(latlngOwn);navigationGoogleMap.fitBounds(navigationMapBounds);calculateRoute();}


else if(navigator.geolocation)
{navigator.geolocation.getCurrentPosition(function(position)
{latlngOwn = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);navigationMapBounds.extend(latlngOwn);navigationGoogleMap.fitBounds(navigationMapBounds);calculateRoute();},
function(error) {addONMMarker();});}
}


var directionsDisplay;
var directionsService;
var ownStartPoint = false;
function calculateRoute(startPoint) {jQuery('#directionsPanel').html('');
if(!directionsDisplay) {directionsDisplay = new google.maps.DirectionsRenderer();directionsDisplay.setMap(navigationGoogleMap);directionsDisplay.setPanel(document.getElementById("directionsPanel"));}


var selectedMode = document.getElementById("travelmode").value;
var request = {origin: latlngOwn,destination: latlngFuturewave,travelMode: google.maps.DirectionsTravelMode[selectedMode]
};
if(startPoint && startPoint != '') {request.origin = startPoint;ownStartPoint = startPoint;}
else if(ownStartPoint) {console.log(ownStartPoint);request.origin = ownStartPoint;}
else{ownStartPoint = false;
var geocoder = new google.maps.Geocoder();geocoder.geocode({'latLng': latlngOwn}, function(results, status) {if (status == google.maps.GeocoderStatus.OK) {if (results[1]) {jQuery('#startpoint').val(results[1].formatted_address);}
}
});}


directionsService = new google.maps.DirectionsService();directionsService.route(request,
function(response, status) {if (status == google.maps.DirectionsStatus.OK) {directionsDisplay.setDirections(response);setTimeout(replaceAddress, 1000);}
else if(status == google.maps.DirectionsStatus.NOT_FOUND) {alert('Der Startpunkt wurde nicht gefunden!');return;calculateRoute();jQuery('#startpoint').val(jQuery('#origstartvalue').val())}
else if(status == google.maps.DirectionsStatus.ZERO_RESULTS) {alert('Es wurde keine Route gefunden. Versuchen Sie einen anderen Startort!');return;
}else{alert('Es ist ein Fehler aufgetreten. Versuchen Sie es später noch einmal!');return;
}
jQuery('#mobile_anfahrt_map_loader').hide();});}
function replaceAddress() {if(!jQuery('#directionsPanel')) return;jQuery('#directionsPanel').html(jQuery('#directionsPanel').html().replace('Sendnicherstraße 58a, 56072 Koblenz, Deutschland', 'Futurewave, Sendnicherstraße 58a, 56072 Koblenz, Deutschland'));}
}