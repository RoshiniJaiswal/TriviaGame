//  time remining in countdown, once it hits 0, end the quiz
var timeRemaining = 15;

// variable to store a correct answer
var correctAnswers = 0;

// function to get rid of questions and end the game
function endGame() {
   // var questions =  $("#questions");
    $("#questions").empty();
    $("#questions").append("Correct Answers :"+ correctAnswers);
    $("#questions").append("<br>");
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
