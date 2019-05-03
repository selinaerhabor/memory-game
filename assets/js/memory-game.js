/*-------------------------------------------------------------------VARIABLES*/
//Total number of levels
const maxLevel = 30;
var level;

//Game's Move
var mimicMove = []; 

// Player's Move
var playerMove = [];  

// Buzzer IDs
var id = [0, 1, 2, 3];

// Buzzer Classes
var squareColor = [
  "squareGreen",  //Green Buzzer 
  "squareYellow", //Yellow Buzzer
  "squareRed",    //Red Buzzer
  "squareBlue"    //Blue Buzzer
  ];  
  
// Buzzer Sounds
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
  $("#0").click(function(){
    Green.play();
  });
  
  $("#0").mousedown(function(){
    $("this").addClass("squareGreenLight");
  });
  
  $("#0").mouseup(function(){
    $("this").removeClass("squareGreenLight");
  });
  

  /*------------------------------------------------------------YELLOW BUZZER*/
  $("#1").click(function(){
    Yellow.play();
  });
  
  $("#1").mousedown(function(){
    $("this").addClass("squareYellowLight");
  });
  
  $("#1").mouseup(function(){
    $("this").removeClass("squareYellowLight");
  });

  
  /*---------------------------------------------------------------RED BUZZER*/
  $("#2").click(function(){
    Red.play();
  });
  
  $("#2").mousedown(function(){
    $("this").addClass("squareRedLight");
  });
  
  $("#2").mouseup(function(){
    $("this").removeClass("squareRedLight");
  });
  
   
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
  
  
  /*---------------------------------------------DEACTIVATE/REACTIVATE BUZZERS*/
  function deactivateBuzzers(){
    document.getElementById('0').style.pointerEvents = 'none';
    document.getElementById('1').style.pointerEvents = 'none';
    document.getElementById('2').style.pointerEvents = 'none';
    document.getElementById('3').style.pointerEvents = 'none';
  }
  
  function reactivateBuzzers(){
    document.getElementById('0').style.pointerEvents = 'auto';
    document.getElementById('1').style.pointerEvents = 'auto';
    document.getElementById('2').style.pointerEvents = 'auto';
    document.getElementById('3').style.pointerEvents = 'auto';
  }
  

  /*--------------------------------------------------------------START BUTTON*/
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
      if (playerMove.length > 0){
        deactivateHintButton();
        console.log("You have started your attempt. Hint button is disabled for the rest of this level");
      }
      else {
        console.log("Hint for level "+ level);
        console.log(id, squareColor);
        buzzerOn(id, squareColor);
        mimicMovement[mimicMovement.length - 1];
      }
    });
    
    /*-----------------------------------------------PLAYER'S CLICK SETTINGS*/
    $(".buzzer").click(function(){
      id = $(this).attr("id");
      squareColor = $(this).attr("class").split(" ")[1];
      playerMovement();
    });
    
  });
  
  
  /*----------------------------------------------------------GAME INITIATOR*/
  function mimicMovement(){
    console.log("Level "+level);
    $(".count").text(level);
    $(".buzzer").on();
    selectRandomID();
    var i = 0;
    var mimicMoveInterval = setInterval(function() {
      id = mimicMove[i];
      squareColor = $("#"+id).attr("class").split(" ")[1];
      console.log(id, squareColor);
      buzzerOn(id, squareColor);
      i++;
      if (i == mimicMove.length) {
        clearInterval(mimicMoveInterval);
      }
    }, 1000);
  }
  
  /*---------------------------------------------MIMIC'S RANDOM BUZZER SELECTION*/
  function selectRandomID(){
    var selectBuzzer = Math.floor(Math.random() * 4);
    mimicMove.push(selectBuzzer);
  }
  
  /*-----------------------------------------------MIMIC'S BUZZER SELECTION*/
  function buzzerOn(id, squareColor){
    $("#"+id).addClass(squareColor+"Light");
    playBuzzerSound(id);
    setTimeout(function(){
      $("#"+id).removeClass(squareColor+"Light");
    }, 500);
  }
  
  /*---------------------------------------------------PLAY BUZZER'S SOUND*/
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
    
    //Game Completion:
    else if (playerMove.length == maxLevel) {
      gameCompleted();
      deactivateBuzzers();
      setTimeout(gameWinMessage, 4000);
    }
    
    else {
      return true;
    }
  }
    
  
/*---------------------------------------------------------------VALIDATION*/
  function validPlayerMove(){
    for (var i = 0; i < playerMove.length; i++){
      //If Player's Move is not equal to the game's move
      if(playerMove[i] != mimicMove[i]){
        return false;
      }
    }
    return true;
  }


/*--------------------------------------------------------------------MODALS*/
  //For disabled hint button:
  function deactivateHintButton(){
    notAllowed();
    setTimeout(hintButtonErrorMessage, 200);
    setTimeout(levelReturnsOnScreen, 300);
  }
  
  function hintButtonErrorMessage(){
    $("#hintButtonErrorModal").modal("show");
  }
    
  function notAllowed(){
    $(".count").text("X");
  }
  
  function levelReturnsOnScreen(){
    $(".count").text(level);
  }
  
  //For an incorrect move:
  function showErrorMessage(){
    $("#showErrorModal").modal("show");
    $("#showErrorModal").modal({backdrop: 'static', keyboard: false});
  }
  
  //For completion of the game:
  function gameCompleted(){
    $(".count").text("WIN");
    gameWin.play();
    deactivateBuzzers();
  }
  
  function gameWinMessage(){
    $("#gameWinModal").modal("show");
    $("#gameWinModal").modal({backdrop: 'static', keyboard: false});
  }
  
  $(".closeModal").click(function(){
    resetGame();
  });
  
  $("#resetGameNow").click(function(){
    resetGame();
  });
      
/*-------------------------------------------------------------RESETS GAME*/
  function resetGame(){
      location.reload(true);
  }
  
});
