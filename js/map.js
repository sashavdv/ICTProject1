  var mymap = L.map('mapid').setView([54.8, -3], 6);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

          /*Birmingham*/
    L.marker([52.48,-1.9]).addTo(mymap).on('click', function(e){ window.location.href = 'Birmingham.html';});
          /*Edinburgh*/
    L.marker([55.94, -3.19]).addTo(mymap).on('click', function(e){ window.location.href = 'Edinburgh.html';});
          /* Liverpool */
    L.marker([53.41,-2.98]).addTo(mymap).on('click', function(e){ window.location.href = 'Liverpool.html';});
          /*Londen*/
    L.marker([51.5, -0.09]).addTo(mymap).on('click', function(e){ window.location.href = 'Londen.html';});
          /*Manchester*/
    L.marker([53.47,-2.29]).addTo(mymap).on('click', function(e){ window.location.href = 'Manchester.html';});
          /*Oxford*/
    L.marker([51.75,-1.28]).addTo(mymap).on('click', function(e){ window.location.href = 'Oxford.html';});


  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
  }

  mymap.on('click', onMapClick);
