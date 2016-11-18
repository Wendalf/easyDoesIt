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
    for(var i=0; i<data.length; i++){
      $("#patient_list ul").html('')
      $("#patient_list ul").append(`<li>${data[i].name}</li>`);
    }


  })
}

function buildFormField(){
  $("#drug").click(function(event){
    event.preventDefault();
    var target = '<p>Specify Drug Name: <input type="text" name="prescription[drugs][name][]" id="prescription_drugs_name"></p>'
    $("#drugform").append(target)

  })

}


// function setTimeButton(){
//   $("#drugform").on('click', '.set_time', function(event){
//     document.getElementById('id01').style.display='block';
//   })
// }
