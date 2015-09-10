function init_map() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(37.320102,-121.99703899999997),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(37.320102, -121.99703899999997)});
    var infowindow = new google.maps.InfoWindow({content:"<b></b><br/>18594 loree ave<br/> cupertino" });
    google.maps.event.addListener(marker, "click", function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);

