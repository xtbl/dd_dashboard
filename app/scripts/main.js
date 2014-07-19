
$(".add-btn").click(function(){
    console.log("click");

    $(".didi-modal").modal({
        backdrop: true,
        show: true,
        closable: true
    });
    $(".didi-modal").modal("show");

// display map
    (function (){
        "use strict";
        google.maps.visualRefresh = true;

        var marker, map,
            myLocation = {lat:9.9271278, lon:-84.08200999999997},
            mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(myLocation.lat, myLocation.lon),
                mapTypeId: google.maps.MapTypeId.PLAN,
                disableDefaultUI: true
            };

        $('#map-canvas').css("height", "110px").css("padding", "0px");
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        /** MyPosition **/
        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(myLocation.lat, myLocation.lon),
        });
        console.log("map resize");
        google.maps.event.trigger(map, "resize");
    })();
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