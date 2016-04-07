// http://jsbin.com/wilufatipo/edit?html,js,output

var lastLat;
var lastLng;

navigator.geolocation.watchPosition(function(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  
  lat = Math.round(lat * 100) / 100;
  lng = Math.round(lng * 100) / 100;
  
  $('#lat').text(lat);
  $('#lng').text(lng);
  
  document.querySelector('#lat').innerText = lat;
  document.querySelector('#lng').innerText = lng;
  
  
//   var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ','  + lng + '&zoom=15&size=300x300';
  
//   $('img:first-of-type').attr('src', url);
  
  
  // centre map on current location
  map.setCenter({lat: lat, lng: lng});
  
  if (lastLat) {
    drawPath(lat, lng, lastLat, lastLng);
  }
  
  lastLat = lat;
  lastLng = lng;
}, function (error) { alert('error'); }, {
  enableHighAccuracy: true
});



// draws a line between point a and b
function drawPath(lat1, lng1, lat2, lng2) {
  var coords = [
    {lat: lat1, lng: lng1},
    {lat: lat2, lng: lng2}
  ];
  var path = new google.maps.Polyline({
    path: coords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  path.setMap(map);

}


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    zoom: 15
  });
}

initMap();
