//  time remining in countdown, once it hits 0, end the quiz
var timeRemaining = 10;

// variable to store a correct answer
var correctAnswers = 0;

// function to get rid of questions and end the game
function endGame() {
   // var questions =  $("#questions");

   for (let i = 1; i < 3; i++) {
   var radios = document.getElementsByName("choices" + i);
  // console.log(radios);

 //for loop to go through each array 
 //checking the "user input" with the correct value
 // radio.checked it acts like a boolen statement
 //updating the correct answer and displaying it after
  for (let j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value === "correct" && radio.checked) {
          correctAnswers++;
      }
     
      
  }
 }



   
    $("#questions").empty();
    $("#questions").append("Correct Answers :"+ correctAnswers);
    $("#questions").append("<br>");
    //incorrect answers = total questions -correct answers.
    $("#questions").append("InCorrect Answers :"+ (2- correctAnswers));
    
}
var Intervalid= setInterval(decrement, 1000);

// timer for game 
//indow.setTimeout(endGame, 15000);

// everysecond we gonna call decrement and decrement will take of the time remaiming
function decrement() {
    timeRemaining--;
    $("#timeRemaining-text").html("Time Remaining:" + timeRemaining);
    if (timeRemaining == 0){
        clearInterval(Intervalid);
        endGame();
    }

}
