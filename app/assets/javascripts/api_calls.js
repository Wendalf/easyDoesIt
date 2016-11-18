//
// function geo_coder(location){
//     $.ajax({
//     type: 'get',
//     url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
//     dataType: 'json'
//   }).done(function(data) {
//       var location = data["results"][0]["geometry"]["location"]
//       find_pharmacy(location.lat,location.lng)
//   });
// }
//
// function find_pharmacy(lat, lng){
//   $.ajax({
//     type: 'get',
//     url:`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=pharmacy&keyword=walgreens%20pharmacy&key=AIzaSyCrFym4iM3Lnh6TGX4QNB_jZcpCIDE33Fk`
//   }).done(function(data){
//     console.log(data.results);
//   });
// }


function search(){
  var criteria = $
  $.ajax({
  type: 'get',
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
  dataType: 'json'
}).done(function(data) {
    var location = data["results"][0]["geometry"]["location"]
    find_pharmacy(location.lat,location.lng)
});
}
