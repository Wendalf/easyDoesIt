$(document).ready(function(){
  buildFormField();

})




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
  $("#drug").click(function(event){
    event.preventDefault();
    var target = '<p>Specify Drug Name: <input type="text" name="prescription[drugs][name][]" id="prescription_drugs_name"></p>'
    $("#drugform").append(target)

  })

}
