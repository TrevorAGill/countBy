var outputArray = [];
var currentNumber = 0;

$(document).ready(function(){
  $("#countform").submit(function(event){

    var countTo = parseInt($("input#count-to").val());

    var countBy = parseInt($("input#count-by").val());

    var iterationCount = Math.floor(countTo / countBy);


    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
      outputArray.push(currentNumber);
    }
    alert(outputArray);
    event.preventDefault();
  });
});
