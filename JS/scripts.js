$(document).ready(function() {
  $("#firstForm").submit(function(event) {

    $("#returnSentence").show();

    //user interface logic:

    var inputNum = $("input#inputNum").val();

    function someNum() {

    if (inputNum % 3 === 0){
      return 'ping';
    } else if (inputNum % 5 === 0) {
      return 'pong';
    } else if (inputNum % 15 === 0) {
      return 'pingpong';
    } else {
      return inputNum;
     }
    }

    //business logic:

    $("#sentenceTwo").text(someNum);

    event.preventDefault();

  });
});
