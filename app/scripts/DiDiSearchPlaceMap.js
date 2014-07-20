/**
 * Create google map with place autocomplete
 * uses Costa Rica bounds to search places
 */
var settings;
var DiDiSearchPlaceMap = {
  settings: {
      mapCanvasId: "map-canvas",
      searchPlaceInput: "inputLocacion"
  },
  init: function () {
      settings = this.settings;
      var mapOptions = {
          center: new google.maps.LatLng(9.9271278, -84.08200999999997), // Costa Rica default lat and long
          zoom: 13,
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          scaleControl: false
      };
      // setting map height on init
      $('#' + settings.mapCanvasId).css("height", "180px").css("padding", "0px");

      var map = new google.maps.Map(document.getElementById(settings.mapCanvasId),
          mapOptions);

      var input = /** @type {HTMLInputElement} */(
          document.getElementById(settings.searchPlaceInput));

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

          if (place.geometry.viewport) {
              map.fitBounds(place.geometry.viewport);
          } else {
              map.setCenter(place.geometry.location);
              map.setZoom(17);
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
  }
};