/**
 * Modal related functionality
 */

$(".add-btn").on("click", function(){
    console.log("click");

    $(".didi-modal").modal({
        backdrop: true,
        show: true,
        closable: true
    });
    $(".didi-modal").modal("show");

/**
 * Create google map with place autocomplete
 * uses Costa Rica bounds to search places  https://developers.google.com/maps/documentation/javascript/places
 */
//    function initializeMap (){
//        "use strict";
//        google.maps.visualRefresh = true;
//
//        var marker, map,
//            myLocation = {lat:9.9271278, lon:-84.08200999999997},// San Jose, Costa Rica lat and lon
//            mapOptions = {
//                zoom: 8,
//                center: new google.maps.LatLng(myLocation.lat, myLocation.lon),
//                mapTypeId: google.maps.MapTypeId.PLAN,
//                disableDefaultUI: true
//            };
//
//        $('#map-canvas').css("height", "110px").css("padding", "0px");
//        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//        /** MyPosition **/
//        marker = new google.maps.Marker({
//            map: map,
//            draggable: false,
//            animation: google.maps.Animation.DROP,
//            position: new google.maps.LatLng(myLocation.lat, myLocation.lon),
//        });
//        google.maps.event.trigger(map, "resize");
//    };

    function initializeSearchMap() {
        var mapOptions = {
            center: new google.maps.LatLng(9.9271278, -84.08200999999997),
            zoom: 13,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            scaleControl: false
        };
        $('#map-canvas').css("height", "180px").css("padding", "0px");

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var input = /** @type {HTMLInputElement} */(
            document.getElementById('inputLocacion'));

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }
            marker.setIcon(/** @type {google.maps.Icon} */({
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);
        });

    };

    // initialize map
    initializeSearchMap();
});

$(".didi-modal-close").click(function() {
    $(".didi-modal").modal("hide");
});

// date and time in modal

// initialize input widgets first
$('.datetimer-input-container-col .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia',
    'autocomplete': true
});

$('.datetimer-input-container-col .date').datepicker({
    'format': 'd/m/yyyy',
    'autoclose': true
});

// date controls for clickable icon
$('.didi-calendar-ico.start').click(function() {
    $('.datetimer-input-container-col .date.start').datepicker('show');
});

$('.didi-calendar-ico.end').click(function() {
    $('.datetimer-input-container-col .date.end').datepicker('show');
});

// initialize datepair
$('.datetimer-input-container-col').datepair();
