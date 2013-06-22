// actions
function initialize(lat, lon) {
				//Posición del mapa
				var latlng = new google.maps.LatLng(lat, lon);
				var myOptions = {
					zoom: 8,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"Mi posición"
				});
			}
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
	navigator.geolocation.getCurrentPosition(function(position){
		initialize(position.coords.latitude, position.coords.longitude);
	}, function(err){
		navigator.notification.alert("Error: "+err.code, null, "Geolocalización", "Aceptar");	
	});	
	}, false);
});