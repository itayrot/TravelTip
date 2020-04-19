
import { mainService } from './tt-service.js'
import { axios } from '../lib/axios.js'



window.addEventListener('load', onInit)


function onInit() {
    renderMap()
    console.log('check')
    mainService.sayHello()
}

console.log(mainService)
mainService.sayHello



function renderMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });


}
getMap()
function getMap() {
    axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyBurNOtTpe3sJQQmeKq8VnUK_i7lo_ry_M&callback=initMap")
        .then(data => console.log('data', data))
        .catch(err => console.log('err', err))

}