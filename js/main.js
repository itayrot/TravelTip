
import { mainService } from './tt-service.js'

window.addEventListener('load', onInit)



function onInit() {
    initMap()
}



function initMap() {
    var shoham = { lat: 32.0004845, lng: 34.9465419 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 16, center: shoham });
    var marker = new google.maps.Marker({ position: shoham, map: map });
    var geocoder = new google.maps.Geocoder();


    map.addListener('click', function (event) {
        var locations = mainService.getLocations()
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


}

function renderTable() {
    const elTable = document.querySelector('.map-info')
    elTable.innerHTML = '';

    const locationPreview = new locationPreview(info, onDeleteRow, onUpdateRow)
    // const elRow = locationPreview.

    // elTable.appendChild()
}

