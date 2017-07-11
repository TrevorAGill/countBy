$(document).ready(function(event(){
  event.preventDefault();
  ("#countform").submit(function(){
    var countTo = $("#count-to").val();
    var countBy = $("#count-by").val();
    Alert(countBy);
    var iterationCount = Math.floor(countTo / countBy);
    Alert(iterationCount);

  });
});
