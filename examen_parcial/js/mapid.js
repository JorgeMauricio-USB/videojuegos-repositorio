// *---------------------------
// Script del mapa de leaflet
// *---------------------------


var mymap = L.map('mapid').setView([19.371647489719916, -99.18535975985547], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

.addTo(mymap);

var marker = L.marker([20.583068881406927, -87.12038791032411]).addTo(mymap);

var circle = L.circle([20.583068881406927, -87.12038791032411], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500
}).addTo(mymap);

marker.bindPopup("<b>¡Xcaret!</b><br>¡Disfruta del festival aquí!").openPopup();
circle.bindPopup("I am a circle.");



