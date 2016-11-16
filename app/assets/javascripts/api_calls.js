// function geo_coder(location){
//     $.ajax({
//     type: 'get',
//     url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
//     dataType: 'json'
//   }).done(function(data) {
//       var location = data["results"][0]["geometry"]["location"]
//       // walgreenApi(location.lat,location.lng)
//   });
// }
//
//
// function walgreenApi(){
//     $.ajax({
//       type: 'POST',
//       xhrFields: {cors: false},
//       url: `https://services-qa.walgreens.com/api/stores/search`,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Referer":"http://www.google.com",
//         'Content-Type': 'application/json; charset=utf-8',
//         "apiKey":"PRTAEgfOqBERwhGobDGBFwgUhnqXE8Aj"
//         },
//         dataType: 'jsonp',
//         cache: false,
//         jsonp: 'callback',
//       data: {
//         "affId":"storesapi",
//         "apiKey":"PRTAEgfOqBERwhGobDGBFwgUhnqXE8Aj",
//         "lat":"40.7297023",
//         "lng":"-73.9919628",
//         "srchOpt":"",
//         "nxtPrev":"",
//         "requestType":"locator",
//         "act":"fndStore",
//         "view":"fndStoreJSON",
//         "devinf":"Chrome"
//       }
//     }).done(function(data){
//         console.log(data)
//     });
// }
//
// var dis = {
//   "affId":"storesapi",
//   "apiKey":"PRTAEgfOqBERwhGobDGBFwgUhnqXE8Aj",
//   "lat":"40.7297023",
//   "lng":"-73.9919628",
//   "srchOpt":"",
//   "nxtPrev":"",
//   "requestType":"locator",
//   "act":"fndStore",
//   "view":"fndStoreJSON",
//   "devinf":"Chrome"
// }
//
// function api(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://services-qa.walgreens.com/api/stores/search');
//   xhr.withCredentials = true;
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(`${dis}`);
// }
