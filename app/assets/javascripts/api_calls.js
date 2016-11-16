function geo_coder(location){
    $.ajax({
    type: 'get',
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
    dataType: 'json'
  }).done(function(data) {
      var location = data["results"][0]["geometry"]["location"]
      console.log(location.lat,location.lng)
      // walgreenApi(location.lat,location.lng)
  });
}
