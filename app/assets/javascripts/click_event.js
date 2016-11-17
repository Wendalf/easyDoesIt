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
    for(var i=0; i<data.length; i++){
      $("#patient_list ul").html('')
      $("#patient_list ul").append(`<li>${data[i].name}</li>`);
    }


  })
}
