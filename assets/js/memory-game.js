/*------------------------------------------------------------Global Variables*/
var $;
var level = []; //Game Level
var mimicMove = []; //Game's Move
var playerMove = [];  // Player's Move
var id = [0, 1, 2, 3];  // Buzzer IDs
var error;
var squareColor;
var buzzerSound= [
      "assets/sounds/noteE.wav", //Green Buzzer (squareGreen) sound
      "assets/sounds/noteD.wav", //Yellow Buzzer (squareYellow) sound
      "assets/sounds/noteF.wav", //Red Buzzer (squareRed) sound
      "assets/sounds/noteC.wav"  //Blue Buzzer (squareBlue) sound
      ]; 




$(document).ready(function(){ 
  
  /*---------------------------------------------------TOTAL NUMBER OF LEVELS*/
    const maxLevel = 40;

  /*-------------------------------------------------------------GREEN BUTTON*/
    $("#0").click(function(){
      Green.play();
    });
    
    $("#0").mousedown(function(){
      greenLight(this);
    });
    
    $("#0").mouseup(function(){
      greenInactive(this);
    });
    
    var Green = new Audio();
    Green.src = "assets/sounds/noteE.wav";
      
    function greenLight(div){
      div.style.backgroundColor = "#13ff7c";
    }
  
    function greenInactive(div){
      div.style.backgroundColor = "#00a74a";
    }
    
      
  /*------------------------------------------------------------YELLOW BUTTON*/
    
    $("#1").click(function(){
      Yellow.play();
    });
    
    $("#1").mousedown(function(){
      yellowLight(this);
    });
    
    $("#1").mouseup(function(){
      yellowInactive(this);
    });
    
    var Yellow = new Audio();
    Yellow.src = "assets/sounds/noteD.wav";
  
    function yellowLight(div){
      div.style.backgroundColor = "#ffe54c";
    }
  
    function yellowInactive(div){
      div.style.backgroundColor = "#cca707";
    }
  
  
  
  /*---------------------------------------------------------------RED BUTTON*/
    $("#2").click(function(){
      Red.play();
    });
    
    $("#2").mousedown(function(){
      redLight(this);
    });
    
    $("#2").mouseup(function(){
      redInactive(this);
    });
    
    var Red = new Audio();
      Red.src = "assets/sounds/noteF.wav";
   
    function redLight(div){
      div.style.backgroundColor = "#ff6666";
    }
  
    function redInactive(div){
      div.style.backgroundColor = "#9f0f17";
    }
      
      
      
  /*--------------------------------------------------------------BLUE BUTTON*/
      
    $("#3").click(function(){
      Blue.play();
    });
    
    $("#3").mousedown(function(){
      blueLight(this);
    });
    
    $("#3").mouseup(function(){
      blueInactive(this);
    });
    
    var Blue = new Audio();
    Blue.src = "assets/sounds/noteC.wav";
      
    function blueLight(div){
      div.style.backgroundColor = "#3288ff";
    }
  
    function blueInactive(div){
      div.style.backgroundColor = "#094a8f";
    }
  
  
      
  /*------------------------------------------------------NOTIFICATION SOUNDS*/
    //THEME TUNE:
    var mimicStartThemeTune = new Audio();
    mimicStartThemeTune.src = "assets/sounds/mimicStartThemeTune.wav";
    
    //SOUND FOR CORRECT MOVE:
    var correct = new Audio();
    correct.src = "assets/sounds/correct.wav";
    
    //SOUND FOR INCORRECT MOVE:
    var incorrect = new Audio();
    incorrect.src = "assets/sounds/incorrect.wav";

    //SOUND FOR GAME COMPLETION:
    var gameWin = new Audio();
    gameWin.src = "assets/sounds/allGameLevelsCompleted.wav"; 



  /*--------------------------------------------START BUTTON & GAME INITIATOR*/
  $(".start").click(function(){
    $(".count").text("00");
      mimicStartThemeTune.play();
      level = 0;
      level++;
      error = false;
      mimicMove = [];
      playerMove = [];
      console.log("Ready Steady Mimic!");
      setTimeout(mimicMovement, 4000);
  });
    
      function mimicMovement() {
        console.log("Level "+level);
        $(".count").text(level);
        randomID();
        var i = 0;
        var myInterval= setInterval(function() {
          id = mimicMove[i];
          squareColor = $("#"+id).attr("class").split(" ")[1];
          console.log(id+" "+squareColor);
          buzzerOn(id, squareColor);
          i++;
          if(i == mimicMove.length) {
            clearInterval(myInterval);
          }
        }, 1000);
      }
      
    /*------------------------------------------------------------HINT BUTTON*/
    $(".hint").mousedown(function(){
      if(playerMove.length > 0){
        error=true;
        hintButtonDisabled();
        console.log("You have started your attempt. Hint button is disabled for the rest of this level");
        hintButtonDisabled.empty();
      }
      else {
        console.log("Hint for level "+ level);
        console.log(id+" "+squareColor);
        buzzerOn(id, squareColor);
        mimicMovement[mimicMovement.length - 1];
      }
    });
    
    
    
  /*---------------------------------------------------------BUZZER SELECTION*/
    function randomID() {
      var random = Math.floor(Math.random() * 4);
      mimicMove.push(random);
    }
    
    function buzzerOn(id, squareColor){
      $("#"+id).addClass(squareColor+"Active");
      playBuzzerSound(id);
      setTimeout(function(){
        $("#"+id).removeClass(squareColor+"Active");
      }, 500);
    }
    
    function playBuzzerSound(id) {
      var sound = new Audio(buzzerSound[id]);
      sound.play();
    }
    
    
    
    
    
  /*-----------------------------------------------MONITOR FOR PLAYER'S MOVES*/
    $(".buzzer").click(function(){
      id=$(this).attr("id");
      squareColor=$(this).attr("class").split(" ")[1];
      playerMovement();
    });
    
    function playerMovement(){
      playerMove.push(id);
      console.log(id+" "+squareColor);
      buzzerOn(id, squareColor);
      
    //If player makes an INCORRECT move:
      if(!validatePlayerMove()) {
        playerMove = [];
        error = true;
        console.log("Incorrect move. Game ended.");
        incorrect.play();
        setTimeout(showErrorMessage, 200);
        mimicMove = [];
      }
      
    //If player makes a CORRECT move:
      else if(playerMove.length == mimicMove.length && playerMove.length < maxLevel){
        level++;
        playerMove = [];
        error = false;
        console.log("Correct! Game continuing...");
        correct.play();
        setTimeout(mimicMovement,1500);
      }
      
      //Game Completion:
        if(playerMove.length == maxLevel){
          gameCompleted();
        }
      
    }
    
  /*---------------------------------------------------------------VALIDATION*/
    function validatePlayerMove(){
      for(var i=0; i<playerMove.length; i++){
        if(playerMove[i] !=mimicMove[i]){
          return false;
        }
      }
      return true;
    }
    
    
    
  /*-------------------------------------------------------------------ALERTS*/
    //For disabled hint button:
    function hintButtonDisabled(){
      alert("You have started your attempt. Hint button is disabled for the rest of this level. Press OK to continue the game.");
    }
    
    //For an incorrect move:
    function showErrorMessage(){
      alert("Unfortunately, that was a wrong move! \nYour game has ended.\nTo begin a new game please click ok and then press the start button");
    }
    
    //For completion of the game:
    function gameCompleted(){
      $(".count").text("WIN");
      gameWin.play();
      setTimeout(mimicWinner, 6000);
    }
    
    function mimicWinner(){
      alert("Congratulations! You have completed MiMiC®! \nTo begin a new game please click ok and then press the start button.");
    }
    
});    
    