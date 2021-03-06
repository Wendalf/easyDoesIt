jQuery(function($) {
  // geo_coder($("#hidden_address").val());
})

//note: ajax loaded html will not work with regular click events you have to use
// the below syntax to make it work.
$(document).on("click","button#thisPharm",function(e){
  $("div#pharmacies").html('')
  $("div#pharmacies").append('<h1 class="w3-light-blue">Choose a Pharmacy</h1>')
  $("div#pharmacies").append('<p>Selected Pharmacy:</p>')
  $("div#pharmacies").append($(this).parents().get(0));
  $("button#thisPharm").replaceWith('<button id="difPharm"  class="w3-btn-block w3-light-blue" type="button" name="button">Select a Different Pharmacy</button>');
  setHiddenPharmVals()
});

function setHiddenPharmVals(){
  var pharm_name = $("div#pharmecy").find("p:nth-of-type(1)").text()
  var pharm_address = $("div#pharmecy").find("p:nth-of-type(2)").text()
  $("#chosen_pharam_name").val(pharm_name)
  $("#chosen_pharam_address").val(pharm_address)
}

$(document).on("click","button#difPharm",function(e){
  clearHiddenPharmVals()
  $("div#pharmacies").html('')
  $("div#pharmacies").append('<h1 class="w3-light-blue">Choose a Pharmacy</h1>')
  $("div#pharmacies").append('<p>Pharmacies nearest to patient:</p>')
  geo_coder($("#hidden_address").val());
});

function clearHiddenPharmVals(){
  $("#chosen_pharam_name").val("")
  $("#chosen_pharam_address").val("")
}


function patient(){

  event.preventDefault();
  var criteria = $("#criteria").val()
  var input = $("#search_patient").val();
  var url = $("#search-form").attr('action')
  $.ajax({
    type: 'get',
    url: url,
    dataType: 'json',
    data: {
      "criteria": criteria,
      "input": input,
    }
  }).done(function(data){
    if(data.length !== 0){
        $("#patient_list ul").html('')
    for(var i=0; i<data.length; i++){

      $("#patient_list ul").append(`<br><a href="/users/${data[i].user_id}/patients/${data[i].id}">${data[i].name}</a></br>`);
    }
  }else{
      $("#patient_list ul").html('')
  }


  })
}


function download_patients(){
    event.preventDefault();
    var optionTexts = [];
    var userId = $("#user_id").attr('value');
  var patients = $("#patient_list a").each(function() { optionTexts.push($(this).text())});
  var patients = $("#patient_list a").each(function() { optionTexts.push($(this))});
  for(var i =0; i<patients.length;i++){
    optionTexts.push(patients[i].innerHTML)
  }
  var url =`/${userId}/download_csv`
      $.ajax({
        type: 'get',
        url: url,
        dataType: 'json',
        data: {
          "patients": `${optionTexts}`
        }
      }).done(function(data){
        alert("file downloaded");
      })

}

function buildFormField(){
    event.preventDefault();
    var target = '<tr><td><input type="text" name="prescription[drugs][name][]" size="20" id="prescription_drugs_name"></td><td><input type="text" name="prescription[drugs][refill][]" id="prescription_drugs_name"></td></tr>'
    $("#drugform").append(target)
}

function download_pdf(){
  var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');

}
function print_page() {
  event.preventDefault();
    window.print();
}

function sent_pharm(){
  alert("Prescription has been sent to pharmacy!")
}


function setAlert(){
  event.preventDefault();
  var drugId =$("input#drug_id").val();
  var patientId = $("input#patient_id").val();
  var timeOne = $("input#time1").val()
  var timeTwo = $("input#time2").val()
  var timeThree = $("input#time3").val()
      $.ajax({
        type: 'post',
        url: '/alerts/create',
        dataType: 'json',
        data: {
          "alert1": timeOne,
          "alert2": timeTwo,
          "alert3": timeThree,
          "patient_id":patientId,
          "drug_id":drugId
        }
      }).done(function(data){
        var alerts = []
        if (data){
        alerts.push(` ${data[0].time.slice(11,16)},`)
        alerts.push(` ${data[1].time.slice(11,16)},`)
        alerts.push(` ${data[2].time.slice(11,16)}`)
          $('td#set_alerts').append(alerts)
          $('span#closeClick').click();
          alert("Successfully set alert times.")
        }else{
          $('span#closeClick').click();
          alert("Error")
        }
      });
}


//
// def showAlerts(patientId, drugId){
//   var patient = patientId;
//   var drug = drugId;
//   $.ajax({
//     type: 'get',
//     url: ,
//     dataType: 'json',
//     data: {
//       "patient": patient,
//       "drug": drug
//     }
//   }).done(function(data){
//
//   })
//
// }
