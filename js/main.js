
import { mainService } from './tt-service.js'

window.addEventListener('load', onInit)



function onInit() {
    initMap()
    console.log('check')
}



function initMap() {
    var shoham = { lat: 32.0004845, lng: 34.9465419 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 16, center: shoham });
    var marker = new google.maps.Marker({ position: shoham, map: map });
    var geocoder = new google.maps.Geocoder();


    map.addListener('click', function (event) {
        var locations = mainService.getLocatoins()
        geocoder.geocode({
            'latLng': event.latLng
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    locations.push(results[0].formatted_address);
                    console.log(locations)
                }
            }
        });
        new google.maps.Marker({ position: { lat: event.latLng.lat(), lng: event.latLng.lng() }, map: map });
    });







    // To add the marker to the map, call setMap();
    marker.setMap(map);
}



        // // Configure the click listener.
        // map.addListener('click', function(mapsMouseEvent) {
        //     // Close the current InfoWindow.
        //     infoWindow.close();

        //     // Create a new InfoWindow.
        //     infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
        //     infoWindow.setContent(mapsMouseEvent.latLng.toString());
        //     infoWindow.open(map);
        //   });
        // }