/*------------------------------------------------------------Global Variables*/

//Game Level
var level = []; 

//Game's Move
var mimicMove = []; 

// Player's Move
var playerMove = [];  

// Buzzer IDs
var id = [0, 1, 2, 3];

var squareColor = [
  "squareGreen",  //Green Buzzer 
  "squareYellow", //Yellow Buzzer
  "squareRed",    //Red Buzzer
  "squareBlue"    //Blue Buzzer
  ];  
  
var buzzerSound= [
  "assets/sounds/noteE.wav", //Green Buzzer (squareGreen) sound
  "assets/sounds/noteD.wav", //Yellow Buzzer (squareYellow) sound
  "assets/sounds/noteF.wav", //Red Buzzer (squareRed) sound
  "assets/sounds/noteC.wav"  //Blue Buzzer (squareBlue) sound
  ]; 


/*---------------------------------------------------------MIMIC GAME SETTINGS*/
$(document).ready(function(){ 
  
  /*--------------------------------------------------TOTAL NUMBER OF LEVELS*/
  const maxLevel = 2;

  /*------------------------------------------------------------GREEN BUZZER*/
  $("#0").click(function(){
    Green.play();
  });
  
  $("#0").on("mousedown", function(){
    $("this").addClass("squareGreenLight");
  });
  
  $("#0").mouseup(function(){
    $("this").removeClass("squareGreenLight");
  });
  
  var Green = new Audio();
  Green.src = "assets/sounds/noteE.wav";
      

  /*------------------------------------------------------------YELLOW BUZZER*/
    
  $("#1").click(function(){
    Yellow.play();
  });
  
  $("#1").on("mousedown", function(){
    $("this").addClass("squareYellowLight");
  });
  
  $("#1").mouseup(function(){
    $("this").removeClass("squareYellowLight");
  });

  var Yellow = new Audio();
  Yellow.src = "assets/sounds/noteD.wav";
  

  /*---------------------------------------------------------------RED BUZZER*/
  $("#2").click(function(){
    Red.play();
  });
  
  $("#2").on("mousedown", function(){
    $("this").addClass("squareRedLight");
  });
  
  $("#2").mouseup(function(){
    $("this").removeClass("squareRedLight");
  });
  
  var Red = new Audio();
    Red.src = "assets/sounds/noteF.wav";
   
      
  /*--------------------------------------------------------------BLUE BUZZER*/
      
  $("#3").click(function(){
    Blue.play();
  });
  
  $("#3").mousedown(function(){
    $("this").addClass("squareBlueLight");
  });
  
  $("#3").mouseup(function(){
    $("this").removeClass("squareBlueLight");
  });
  
  var Blue = new Audio();
  Blue.src = "assets/sounds/noteC.wav";
      
      
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
      mimicMove = [];
      playerMove = [];
      console.log("Ready Steady Mimic!");
      setTimeout(mimicMovement, 4000);
  
    function mimicMovement() {
      console.log("Level "+level);
      $(".count").text(level);
      selectRandomID();
      var i = 0;
      var mimicMoveInterval = setInterval(function() {
        id = mimicMove[i];
        squareColor = $("#"+id).attr("class").split(" ")[1];
        console.log(id, squareColor);
        buzzerOn(id, squareColor);
        i++;
        if(i == mimicMove.length) {
          clearInterval(mimicMoveInterval);
        }
      }, 1000);
    }
    
    /*-----------------------------------------------------------HINT BUTTON*/
    $(".hint").mousedown(function(){
      if(playerMove.length > 0){
        hintButtonDisabled();
        console.log("You have started your attempt. Hint button is disabled for the rest of this level");
      }
      else {
        console.log("Hint for level "+ level);
        console.log(id, squareColor);
        buzzerOn(id, squareColor);
        mimicMovement[mimicMovement.length - 1];
      }
    });
      
    /*------------------------------------------------------BUZZER SELECTION*/
    function selectRandomID() {
      var selectBuzzer = Math.floor(Math.random() * 4);
      mimicMove.push(selectBuzzer);
    }
    
    function buzzerOn(id, squareColor){
      $("#"+id).addClass(squareColor+"Light");
      playBuzzerSound(id);
      setTimeout(function(){
        $("#"+id).removeClass(squareColor+"Light");
      }, 500);
    }
    
    function playBuzzerSound(id) {
      var sound = new Audio(buzzerSound[id]);
      sound.play();
    }
    
    $(".buzzer").click(function(){
      id = $(this).attr("id");
      squareColor = $(this).attr("class").split(" ")[1];
      playerMovement();
    });
    
    /*----------------------------------------------MONITOR FOR PLAYER'S MOVES*/
    function playerMovement(){
      playerMove.push(id);
      console.log(id, squareColor);
      buzzerOn(id, squareColor);
      
      //If player makes an INCORRECT move:
      if(!validatePlayerMove()) {
        playerMove = [];
        console.log("Incorrect move. Game ended.");
        incorrect.play();
        setTimeout(showErrorMessage, 200);
        mimicMove = [];
      }
      
      //If player makes a CORRECT move:
      else if(playerMove.length == mimicMove.length && playerMove.length < maxLevel){
        level++;
        playerMove = [];
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
      for(var i=0; i < playerMove.length; i++){
        //If Player's Move is not equal to the game's move
        if(playerMove[i] != mimicMove[i]){
          return false;
        }
      }
      return true;
    }
    
  /*-------------------------------------------------------------------ALERTS*/

    //For disabled hint button:
    function hintButtonDisabled(){
      notAllowed();
      setTimeout(hintButtonErrorAlert, 200);
      setTimeout(levelReturnsOnScreen, 300);
    }
    
    function hintButtonErrorAlert(){
      alert(
        `You have started your attempt. (o_o) \nHint button is disabled for the rest of this level. Press OK to continue the game.`);
    }
      
    function notAllowed(){
      $(".count").text("X");
    }
    
    function levelReturnsOnScreen(){
      $(".count").text(level);
    }
      
    //For an incorrect move:
    function showErrorMessage(){
      alert(
        `Unfortunately, that was a wrong move! (~_~) \nYour game has ended. To begin a new game please click ok and then press the start button.`);
    }
    
    //For completion of the game:
    function gameCompleted(){
      $(".count").text("WIN");
      gameWin.play();
      setTimeout(mimicWinner, 6000);
    }
    
    function mimicWinner(){
      alert(
        `Congratulations! (^o^)/ \nYou have completed MiMiC®! To begin a new game please click ok and then press the start button.`);
      }
      
  });
});   
  
    