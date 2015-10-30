
var myCenter = new google.maps.LatLng(37.320102, -121.997039);
var marker;

function initialize()
{
    var mapProp = {
        center: myCenter,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({content:"<b></b><br/>18594 Loree Ave, Cupertino, CA" });

    google.maps.event.addListener(marker, "click", function(){
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

