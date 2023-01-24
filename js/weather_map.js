"use strict";
// MAPBOX //

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v12', // Map style to use
    center: [-122.25948, 37.87221], // Starting position [lng, lat]
    zoom: 12, // Starting zoom level
});


// MARKER //
let marker = new mapboxgl.Marker()

function drag(){
    let lnglat = marker.getLngLat();
    console.log(lnglat)

    map.flyTo({
        center: [lnglat.lng, lnglat.lat],
        essential: true
    })

    let html = "";

    $.get(`https://api.openweathermap.org/data/2.5/forecast`,{
        lat: lnglat.lat,
        lon: lnglat.lng,
        appid: keys.weatherKey,
        units: `imperial`
    }).done(pushData)
}

// PUSH DATA FUNCTION //
function pushData(data) {
    console.log(data)
    let html = '';
    // can be used to get forecast conditions at current time in increments of 24 hours
    for (let i = 0; i < data.list.length; i += 8) {
        console.log(data.list[i])
        html += `<div class="card ms-2" style="width: 18rem;">
                    <div class="card-header">
                        ${data.list[i].dt_txt}
                    </div>
                    <div class="description ms-3">
                    ${data.list[i].weather[0].description}
</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Temp: ${data.list[i].main.temp}</li>
                        <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                        <li class="list-group-item">Feels Like ${data.list[i].main.feels_like}</li>
                        <li class="list-group-item">Max Temp ${data.list[i].main.temp_max}</li>
                        <li class="list-group-item">Min Temp ${data.list[i].main.temp_min}</li>
                        <li class="list-group-item">Pressure ${data.list[i].main.pressure}</li>
                    </ul>
                </div>`;
    }
    console.log(html);
    $(`#cards`).html(html)
}

// SEARCH //
$("#btn-search").click(function (event) {
    event.preventDefault()

    let lon;
    let lat;

    geocode($(`#search-location`).val(), keys.mapbox).then(function (result) {
        console.log(result);
        let lon = result[0];
        let lat = result[1];
        console.log(lon, result[0])
        console.log(lat, result[1])
        // API CALL //
        $.get('https://api.openweathermap.org/data/2.5/forecast', {
            lat: lat,
            lon: lon,
            appid: keys.weatherKey,
            units: 'imperial'
        }).done((pushData)).fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });

        map.flyTo({
            center: [result[0], result[1]],
            essential: true
        })

        marker.setLngLat([result[0], result[1]]).addTo(map);
        marker.setDraggable(true);
    })

    // EVENT LISTENER //
    marker.on("dragend", drag);

})
