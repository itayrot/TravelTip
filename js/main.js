
import { mainService } from './tt-service.js'

window.addEventListener('load', onInit)


function onInit() {
    initMap()
    console.log('check')
}



function initMap() {
    var shoham = {lat: 32.0004845, lng: 34.9465419};
    var map = new google.maps.Map(
     document.getElementById('map'), {zoom: 16, center: shoham});
    var marker = new google.maps.Marker({position: shoham, map: map});



    map.addListener('center_changed', function() {

        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
      });


      map.addListener('click' , function(mapsMouseEvent) {
        var infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
        console.log(infoWindow)
        

        map = document.getElementById('map'), {zoom: 16, center: infoWindow.content};
        infoWindow.setContent(mapsMouseEvent.latLng.toString());
        // infoWindow.open(map);
      })

      





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