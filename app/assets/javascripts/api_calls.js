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
