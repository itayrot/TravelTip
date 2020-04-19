
import { mainService } from './tt-service.js'
import { locationPreview } from './cmps/locationPreview.js'

export const mainJS = {
    renderMap
}


window.addEventListener('load', onInit)



function onInit() {
    initMap()
    handleWithSearch()
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
                    renderTable(locations[locations.length - 1])
                }
            }
        });
        new google.maps.Marker({ position: { lat: event.latLng.lat(), lng: event.latLng.lng() }, map: map });
    });


}

function renderMap(latlngObj){
    new google.maps.Map(document.getElementById('map'), { zoom: 16, center: latlngObj });
}




function renderTable(address) {
    const elTable = document.querySelector('.map-info')

    const location = new locationPreview("text", onDeleteRow, onUpdateRow)
    // var dataLocation = mainService.getLocations()

    var elCrtRow = location.renderRow(address)
    elTable.appendChild(elCrtRow);
}

function onDeleteRow() {

}

function onUpdateRow() {

}




function handleWithSearch() {
    console.log('check')
    var inputSearch = document.querySelector('.inputSearch').value
    var button = document.querySelector('.search-button')
    button.addEventListener('click', mainService.getLocationByInput(inputSearch))
}
