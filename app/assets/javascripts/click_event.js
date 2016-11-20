jQuery(function($) {
  // geo_coder($("#hidden_address").val());
})

//note: ajax loaded html will not work with regular click events you have to use
// the below syntax to make it work.
$(document).on("click","button#thisPharm",function(e){
  $("div#pharmacies").html('')
  $("div#pharmacies").append('<h1 class="w3-teal">Choose a Pharmacy</h1>')
  $("div#pharmacies").append('<p>Selected Pharmacy:</p>')
  $("div#pharmacies").append($(this).parents().get(0));
  $("button#thisPharm").replaceWith('<button id="difPharm"  class="w3-btn-block w3-teal" type="button" name="button">Select a Different Pharmacy</button>');
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
  $("div#pharmacies").append('<h1 class="w3-teal">Choose a Pharmacy</h1>')
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
    for(var i=0; i<data.length; i++){
      $("#patient_list ul").html('')
      $("#patient_list ul").append(`<li><a href="/users/${data[i].user_id}/patients/${data[i].id}">${data[i].name}</a></li>`);
    }
  }else{
      $("#patient_list ul").html('')
  }


  })
}


function download_patients(){
    event.preventDefault();
    var optionTexts = [];
    var userId = $("#user_id").attr('value')
  var patients = $("li").each(function() { optionTexts.push($(this).text()) });
  for(var i =0; i<patients.length;i++){
    optionTexts.push(patients[i].innerHTML)
  }
  var url =`http://localhost:3000/${userId}/download_csv`
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
