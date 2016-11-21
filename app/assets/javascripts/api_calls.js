
function geo_coder(location){
    $.ajax({
    type: 'get',
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
    dataType: 'json'
  }).done(function(data) {
      var location = data["results"][0]["geometry"]["location"]
      find_pharmacy(location.lat,location.lng)

  });
}


function find_pharmacy(lat, lng){
  $.ajax({
    type: "POST",
    url:'http://localhost:3000/prescriptions/google_pharmacies',
    dataType: 'json',
    data:{
      "lat" : lat,
      "lng" : lng,
    }
  }).done(function(data){
       add_pharmacies(data);
  });
}

// add pharm list to prescription new page
function add_pharmacies(array){
  var pharmacies = array;

  for(var i=0; i < 3; i++){
    $('div#pharmacies').append(
      `<br>
      <div id="pharmecy" class="w3-striped w3-bordered w3-border">
        <iframe
         width="400"
         height="200"
         frameborder="1" style="border:1"
         src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCrFym4iM3Lnh6TGX4QNB_jZcpCIDE33Fk
           &q=${pharmacies[i]["vicinity"]}" allowfullscreen>
        </iframe>
        <p>${pharmacies[i]["name"]}  </p>
        <p>${pharmacies[i]["vicinity"]}</p>
        <button id="thisPharm"  type="button" class="w3-btn-block w3-light-blue" name="button">Choose</button>
      </div>
      <br>`
    )
  }

}
