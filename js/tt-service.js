// import { axios } from "../lib/axios";

export const mainService = {
    getLocations,
    getLocationByInput
}

import {mainJS} from './main.js'


var gLocation = [];

function getLocations() {
    return gLocation
}  



function getLocationByInput(inputSearch){

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputSearch}&key=AIzaSyB68XJBWvVMgP9vJL9BhMs-Lmi8pQ8wshM`)
    .then(res => res.data)
    .then(city => city.results[0].geometry)
    .then(geometry => mainJS.renderMap(geometry.location))
    .catch(err => console.log('err' , err))
}
