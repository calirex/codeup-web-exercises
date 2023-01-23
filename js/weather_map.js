"use strict";
// MAPBOX //

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v12', // Map style to use
    center: [-122.25948, 37.87221], // Starting position [lng, lat]
    zoom: 12, // Starting zoom level
});

// WEATHER DATA //

const test = $('.map-col')
$.get('https://api.openweathermap.org/data/2.5/forecast', {
    lat: 29.4252,
    lon: -98.4916,
    appid: keys.weatherKey,
    units: 'imperial'
}).done(function (data) {
    // can be used to get forecast conditions at current time in increments of 24 hours
    for (let i = 0; i < data.list.length; i += 8) {
        console.log(data.list[i])
        test.append(`${data.list[i].clouds.all}`)
    }
}).fail(function (jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
});



// SEARCH //

$("#btn-search").click(function(event){
    event.preventDefault()

    geocode($(`#search-location`).val(),keys.mapbox).then(function(result){
        console.log(result);
        map.flyTo({
            center: [result[0], result[1]],
            essential: true
        })
    })
})