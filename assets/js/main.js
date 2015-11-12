var mapOptions = { //must have these
	center: new google.maps.LatLng(52.6642, -0.1603),
	zoom: 12,
	mapTypeId:google.maps.MapTypeId.TERRAIN,
}

var map = new google.maps.Map(document.getElementById('map'), mapOptions); //calling the map into the div

//marker
var image = 'assets/images/icon.png'

var marker = new google.maps.Marker({
	position: new google.maps.LatLng(52.6642, -0.1603), //can choose what this is
	animation: google.maps.Animation.BOUNCE,
	icon:image
});
marker.setMap(map);

var markertwo = new google.maps.Marker({
	position: new google.maps.LatLng(52.2050, -0.1190), //can choose what this is
	animation: google.maps.Animation.BOUNCE,
	icon:image
});
markertwo.setMap(map);

//info window

var infoWindowOptions = {
	content: 'I am HERE!'
};
var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

//add a listener for click event
google.maps.event.addListener(marker, 'click', function() {

	infoWindow.open(map, marker);
});