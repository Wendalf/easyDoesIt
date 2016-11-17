$(document).ready(function(){

// search();




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
  // debugger;
   var searched_by = $("#criteria").attr('value')
    $("#patient_list ul").html('')
    for(var i=0; i<data.length; i++){
      $("#patient_list ul").append(`<li>${data[i]['name']}</li>`);
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
