// var lat= "40.7297023"
//  var lng= "-73.9919628"
//  url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +lat+","+lng+"=500&type=pharmacy&keyword=walgreens%20pharmacy&key=AIzaSyCrFym4iM3Lnh6TGX4QNB_jZcpCIDE33Fk"
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
// var h = {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Referer":"http://www.google.com",
//         'Content-Type': 'application/json; charset=utf-8',
//         "apiKey":"PRTAEgfOqBERwhGobDGBFwgUhnqXE8Aj"
//         }

// function api(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://services-qa.walgreens.com/api/stores/search');
//   xhr.setRequestHeader("Access-Control-Allow-Origin","*");
//   xhr.setRequestHeader('Content-Type','application/json');
//   xhr.send(`${dis}`);
//     console.log(xhr.responseType);
// }


// function api(){
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState == XMLHttpRequest.DONE) {
//           console.log(xhr.responseText);
//       }
//   }
//   xhr.open('POST', 'https://services-qa.walgreens.com/api/stores/search');
//   // xhr.setRequestHeader("Access-Control-Allow-Origin","*");
//   xhr.setRequestHeader('Content-Type','application/json');
//   xhr.send({"apiKey":"PRTAEgfOqBERwhGobDGBFwgUhnqXE8Aj"});
//   // xhr.send(`${dis}`);
//
// }
