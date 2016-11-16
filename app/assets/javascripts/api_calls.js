
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

// var values = ["40.7589", "73.9851"]
//
//
//  function walgreenApi(){
//     //
//     // var answer = {
//     //   "apiKey": "UTU2i23OKXbo2DxkEBKq2qUqEPszPFbS",
//     //   "lat": values[0],
//     //   "lng": values[1],
//     //   "srchOpt": "t4hr",
//     //   "nxtPrev": "prev",
//     //   "requestType": "locator",
//     //   "act": "findStore",
//     //   "view": "findStoreJSON"
//     // }
//
//   // var posting = $.post('/https://services.walgreens.com/api/stores/search', answer);
//   // posting.done(function(data){
//   //   console.log(data)
//   // })
//
//     $.ajax({
//       url: "https://services.walgreens.com/api/stores/search",
//       type: 'POST',
//       dataType: 'json',
//       headers: {
//         "affId": "storesapi",
//         "apiKey": "UTU2i23OKXbo2DxkEBKq2qUqEPszPFbS",
//         "lat": values[0],
//         "lng": values[1],
//         "srchOpt": "fs"
//         "nxtPrev": "",
//         "requestType": "locator",
//         "act": "findStore",
//         "view": "findStoreJSON",
//       }
//     }).done(function(data){
//       console.log(data)
//     })
//
//
//
//   }
