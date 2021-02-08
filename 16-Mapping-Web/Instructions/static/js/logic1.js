
var myMap = L.map("mapid", {
    center: [45.52, -122.67],
    zoom: 4
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  
// Perform an API call to the endpoint
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(jsonData) {
//console.log(jsonData);
/*  */
 var color="";
  for (i=0; i<jsonData.features.length; i++) {
  //lat.push(jsonData.features[i].geometry.coordinates[0]);
  var long=jsonData.features[i].geometry.coordinates[0];
  var lat=jsonData.features[i].geometry.coordinates[1];
  var depth=jsonData.features[i].geometry.coordinates[2];
  var mag=jsonData.features[i].properties.mag
  if (depth<20) {color="green"}
  else if (depth<50) {color="orange"}
  else {color="red"}


  L.circle([lat, long], {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    radius: mag*15000
  }).bindPopup("<h1> Magnitute: "+ mag + "</h1> <hr><hr3> Depth was: " + depth + "</h3>").addTo(myMap);

  console.log(depth);

} 

//console.log(long);


}) 


  

  


 /*  // Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (countries[i].points > 200) {
      color = "yellow";
    }
    else if (countries[i].points > 100) {
      color = "blue";
    }
    else if (countries[i].points > 90) {
      color = "green";
    }
    else {
      color = "red";
    }
  
    // Add circles to map
    L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: countries[i].points * 1500
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
  }
   */