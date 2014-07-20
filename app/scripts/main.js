


//$('#map-canvas').on('pageshow', function(){
//    google.maps.event.trigger(canvas-map, "resize");
//});

//$(document).ready(function(){
//    "use strict";
//    google.maps.visualRefresh = true;
//
//    var marker, map,
//        myLocation = {lat:50, lon:-80},
//        mapOptions = {
//            zoom: 5,
//            center: new google.maps.LatLng(myLocation.lat, myLocation.lon),
//            mapTypeId: google.maps.MapTypeId.PLAN,
//            disableDefaultUI: true
//        };
//
//    $('#map-canvas').css("height", "200px").css("padding", "0px");
//    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//    /** MyPosition **/
//    marker = new google.maps.Marker({
//        map: map,
//        draggable: false,
//        animation: google.maps.Animation.DROP,
//        position: new google.maps.LatLng(myLocation.lat, myLocation.lon),
//    });
//    console.log("map resize");
//    google.maps.event.trigger(map, "resize");
//});