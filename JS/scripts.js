$(document).ready(function() {
  $("#firstForm").submit(function(event) {

    $("#returnSentence").show();

    //user interface logic:

    var inputNum = $("input#inputNum").val();

    function someNum(inputNum) {

    if (inputNum % 15 === 0){
      return 'pingpong';
    } else if (inputNum % 5 === 0) {
      return 'pong';
    } else if (inputNum % 3 === 0) {
      return 'ping';
    } else {
      return inputNum;
     }
    }


    for (var i = 1; i <= inputNum; i++){
    $("#sentenceTwo").append(someNum(i) + "<br />");
}
    event.preventDefault();

  });
});
