/*-----------------------------------------------------------------VARIABLES*/
//Total number of levels:
const maxLevel = 3;
var level;

//Game's Move:
var mimicMove = []; 

// Player's Move:
var playerMove = [];  

// Buzzer IDs:
var id = [0, 1, 2, 3];

// Buzzer Classes:
var squareColor = [
  "squareGreen",  //Green Buzzer 
  "squareYellow", //Yellow Buzzer
  "squareRed",    //Red Buzzer
  "squareBlue"    //Blue Buzzer
  ];  
  
// Buzzer Sounds:
var buzzerSound= [
  "assets/sounds/noteE.wav", //Green Buzzer (squareGreen) sound
  "assets/sounds/noteD.wav", //Yellow Buzzer (squareYellow) sound
  "assets/sounds/noteF.wav", //Red Buzzer (squareRed) sound
  "assets/sounds/noteC.wav"  //Blue Buzzer (squareBlue) sound
  ]; 

var Green = new Audio();
  Green.src = "assets/sounds/noteE.wav";
  
var Yellow = new Audio();
  Yellow.src = "assets/sounds/noteD.wav";
  
var Red = new Audio();
  Red.src = "assets/sounds/noteF.wav";
    
var Blue = new Audio();
  Blue.src = "assets/sounds/noteC.wav";
  
  
//Notification Sounds - Theme Song:
var mimicStartThemeTune = new Audio();
  mimicStartThemeTune.src = "assets/sounds/mimicStartThemeTune.wav";

//Notification Sounds - Sound for correct move:
var correct = new Audio();
  correct.src = "assets/sounds/correct.wav";

//Notification Sounds - Sound for incorrect move:
var incorrect = new Audio();
  incorrect.src = "assets/sounds/incorrect.wav";

//Notification Sounds - Sound for game completed:
var gameWin = new Audio();
  gameWin.src = "assets/sounds/allGameLevelsCompleted.wav"; 


$(document).ready(function(){ 

  /*------------------------------------------------------------GREEN BUZZER*/
  //Green Buzzer Sound:
  $("#0").click(function(){
    Green.play();
  });
  
  //Green Buzzer Light On:
  $("#0").mousedown(function(){
    $("#0").addClass("squareGreenLight");
  });
  
  //Green Buzzer Light Off:
  $("#0").mouseup(function(){
    $("#0").removeClass("squareGreenLight");
  });
  

  /*-----------------------------------------------------------YELLOW BUZZER*/
  //Yellow Buzzer Sound:
  $("#1").click(function(){
    Yellow.play();
  });
  
  //Yellow Buzzer Light On:
  $("#1").mousedown(function(){
    $("#1").addClass("squareYellowLight");
  });
  
  //Yellow Buzzer Light Off:
  $("#1").mouseup(function(){
    $("#1").removeClass("squareYellowLight");
  });

  
  /*--------------------------------------------------------------RED BUZZER*/
  //Red Buzzer Sound:
  $("#2").click(function(){
    Red.play();
  });
  
  //Red Buzzer Light On:
  $("#2").mousedown(function(){
    $("#2").addClass("squareRedLight");
  });
  
  //Red Buzzer Light Off:
  $("#2").mouseup(function(){
    $("#2").removeClass("squareRedLight");
  });
  
   
  /*-------------------------------------------------------------BLUE BUZZER*/
  //Blue Buzzer Sound:
  $("#3").click(function(){
    Blue.play();
  });
  
  //Blue Buzzer Light On:
  $("#3").mousedown(function(){
    $("#3").addClass("squareBlueLight");
  });
  
  //Blue Buzzer Light Off:
  $("#3").mouseup(function(){
    $("#3").removeClass("squareBlueLight");
  });
  
  
  /*-------------------------------------------------------DEACTIVATE BUZZERS*/
  function deactivateBuzzers(){
    document.getElementById('0').style.pointerEvents = 'none';
    document.getElementById('1').style.pointerEvents = 'none';
    document.getElementById('2').style.pointerEvents = 'none';
    document.getElementById('3').style.pointerEvents = 'none';
  }
  
  /*-------------------------------------------------------REACTIVATE BUZZERS*/
  function reactivateBuzzers(){
    document.getElementById('0').style.pointerEvents = 'auto';
    document.getElementById('1').style.pointerEvents = 'auto';
    document.getElementById('2').style.pointerEvents = 'auto';
    document.getElementById('3').style.pointerEvents = 'auto';
  }
  

  /*------------------------------------------------------------START BUTTON*/
  $(".start").click(function(){
    $(".start").off("click");
    $(".count").text("00");
    mimicStartThemeTune.play();
    level = 0;
    level++;
    mimicMove = [];
    playerMove = [];
    console.log("Ready Steady Mimic!");
    setTimeout(mimicMovement, 4000);
    
    /*-----------------------------------------------------------HINT BUTTON*/
    $(".hint").mousedown(function(){
      //If player has already started attempting a level, deactivate hint button
      if (playerMove.length > 0){
        deactivateHintButton();
        console.log("You have started your attempt. Hint button is disabled for the rest of this level");
      }
      //If not, keep hint button activated
      else {
        console.log("Hint for level "+ level);
        console.log(id, squareColor);
        buzzerOn(id, squareColor);
        mimicMovement[mimicMovement.length - 1];
      }
    });
    
    /*--------------------------BUZZER SELECTION SETTINGS FOR PLAYER'S MOVES*/
    $(".buzzer").click(function(){
      id = $(this).attr("id");
      squareColor = $(this).attr("class").split(" ")[1];
      playerMovement();
    });
    
  });
  
  
  /*----------------------------------------------------------GAME INITIATOR*/
  function mimicMovement(){
    
    //Level display in console:
    console.log("Level "+level);
    
    //Shows game level:
    $(".count").text(level);
    
    var i = 0;
    
    //Selects a buzzer ID at random:
    selectRandomID();
    var mimicMoveInterval = setInterval(function() {
      
      //ID selected by game:
      id = mimicMove[i];
      
      //Second value in array of classes for each buzzer selected (buzzer, squareColor):
      squareColor = $("#"+id).attr("class").split(" ")[1];
      
      //Selected Buzzer Colors and IDs displayed in console:
      console.log(id, squareColor);
      
      //Selected Buzzer attributes activated:
      buzzerOn(id, squareColor);
      
      //Increases mimicMove by increments of 1:
      i++;
      
      //If the game has completed its move:
      if (i == mimicMove.length) {
        clearInterval(mimicMoveInterval);
      }
    }, 1000);
    
  }
  
  /*-----------------------------------------MIMIC'S RANDOM BUZZER SELECTION*/
  function selectRandomID(){
    var selectBuzzer = Math.floor(Math.random() * 4);
    mimicMove.push(selectBuzzer);
  }
  
  /*------------------------------------------------MIMIC'S BUZZER SELECTION*/
  function buzzerOn(id, squareColor){
    $("#"+id).addClass(squareColor+"Light");
    playBuzzerSound(id);
    //Buzzer Light turns off after 500ms:
    setTimeout(function(){
      $("#"+id).removeClass(squareColor+"Light");
    }, 500);
  }
  
  /*-----------------------------------------------------PLAY BUZZER'S SOUND*/
  function playBuzzerSound(id) {
    var sound = new Audio(buzzerSound[id]);
    sound.play();
  }
  
  
  /*----------------------------------------------MONITOR FOR PLAYER'S MOVES*/
  function playerMovement(){
    playerMove.push(id);
    console.log(id, squareColor);
    buzzerOn(id, squareColor);
    
    //If player makes an INCORRECT move:
    if (!validPlayerMove()){
      playerMove = [];
      console.log("Incorrect move. Game ended.");
      incorrect.play();
      setTimeout(showErrorMessage, 200);
    }
    
    //If player makes a CORRECT move:
    else if (playerMove.length == mimicMove.length && playerMove.length < maxLevel){
      level++;
      playerMove = [];
      console.log("Correct! Game continuing...");
      correct.play();
      deactivateBuzzers();
      setTimeout(mimicMovement, 1000);
      setTimeout(reactivateBuzzers, 1500);
    }
    
    //If player successfully completes the game:
    else if (playerMove.length == maxLevel) {
      gameCompleted();
      deactivateBuzzers();
      setTimeout(gameWinMessage, 4000);
      gameWin.play();
    }
    
    else {
      return true;
    }
  }
    
  
/*---------------------------------------------------PLAYER'S MOVE VALIDATION*/
  function validPlayerMove(){
    for (var i = 0; i < playerMove.length; i++){
      //If Player's Move is not equal to the game's move
      if(playerMove[i] != mimicMove[i]){
        return false;
      }
    }
    return true;
  }


/*-------------------------------------------------------------------MODALS*/
  //For disabled hint button:
  function deactivateHintButton(){
    notAllowed();
    setTimeout(hintButtonErrorMessage, 200);
    setTimeout(levelReturnsOnScreen, 300);
  }
  
  //Error message for disabled hint button is pressed:
  function hintButtonErrorMessage(){
    $("#hintButtonErrorModal").modal("show");
  }
  
  //Not allowed (game screen notification):
  function notAllowed(){
    $(".count").text("X");
  }
  
  //Returns level back to game screen after displaying the 'Not allowed' notification:
  function levelReturnsOnScreen(){
    $(".count").text(level);
  }
  
  //Error message for user's incorrect move:
  function showErrorMessage(){
    $("#showErrorModal").modal("show");
    $("#showErrorModal").modal({backdrop: 'static', keyboard: false});
  }
  
  //Win (game screen notification):
  function gameCompleted(){
    $(".count").text("WIN");
  }
  
  //Congratulations message for game win:
  function gameWinMessage(){
    $("#gameWinModal").modal("show");
    $("#gameWinModal").modal({backdrop: 'static', keyboard: false});
  }
  
  /*----------------------------------------------------RESET GAME FUNCTION*/
  function resetGame(){
    location.reload(true);
  }
  
  //Modal 'X' button resets game:  
  $(".closeModal").click(function(){
    resetGame();
  });
  
  //'RESET GAME' Tab - (yes selection):
  $("#resetGameNow").click(function(){
    resetGame();
  });
  
});
