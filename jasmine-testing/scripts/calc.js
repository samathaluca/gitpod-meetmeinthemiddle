
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': addressA}, function(results, status) {
    if (status === 'OK') {
      // console.log(results[0].geometry.location.lat() + ' - ' +
      // results[0].geometry.location.lng());

      /////
      var selLocLatA = results[0].geometry.location.lat();
      var selLocLngA = results[0].geometry.location.lng();

      geocoder.geocode({'address': addressB}, function(results, status) {
        if (status === 'OK') {
          console.log(
              results[0].geometry.location.lat() + ' - ' +
              results[0].geometry.location.lng());

          /////
          var selLocLatB = results[0].geometry.location.lat();
          var selLocLngB = results[0].geometry.location.lng();

          var MidLat = (selLocLatA + selLocLatB) / 2;
          console.log('MidLat: ' + MidLat);
          var MidLng = (selLocLngA + selLocLngB) / 2;

          // var halfway = new google.maps.LatLng(53.3360, -2.2081);
          var halfway = new google.maps.LatLng(MidLat, MidLng);
          map = new google.maps.Map(
              document.getElementById('map'), {center: halfway, zoom: 9});

          var request = {
            location: halfway,
            radius: radius,
            types: selectedTypes
          };

          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(
              request,
              function(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  for (var i = 0; i < results.length; i++) {
                    createMarker(results[i], results[i].icon);
                  }
                }
              }

          );
        }
        /////
        else {
          alert(
              'Geocode was not successful for the following reason: ' + status);
        }
        /////
      });
    }
    /////
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
    /////
  })
  ///// end of geocoder function for Address A


  ///// end of geocoder function for Address B
}