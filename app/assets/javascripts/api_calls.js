
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
      //  console.log(data.results);
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
        <p>Name: ${pharmacies[i]["name"]}-  </p>
        <p>Address: ${pharmacies[i]["vicinity"]}</p>
        <button id="thisPharm"  type="button" class="w3-btn-block w3-teal" name="button">Choose</button>
      </div>
      <br>`
    )
  }

}


// function find_pharmacy(lat, lng){
//   $.ajax({
//     type: "GET",
//     dataType: 'json',
//     jsonp: false,
//     jsonpCallback: "myJsonMethod",
//     headers:{
//       "Access-Control-Allow-Origin":"*"
//     },
//     cache: false,
//     url:`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=pharmacy&keyword=walgreens%20pharmacy&key=AIzaSyCrFym4iM3Lnh6TGX4QNB_jZcpCIDE33Fk`
//   }).done(function(data){
//        add_pharmacies(data.results);
//       //  console.log(data.results);
//   });
// }
