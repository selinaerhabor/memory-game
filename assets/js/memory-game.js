/*-----------------------------------------------------------------VARIABLES*/
//Total number of levels:
const maxLevel = 30;
var level;

//Game's Move:
var mimicMove = []; 

//Player's Move:
var playerMove = [];  

//Buzzer IDs:
var id = [0, 1, 2, 3];

//Buzzer Classes:
var squareColor = [squareGreen, squareYellow, squareRed, squareBlue];

//Game Sounds:
var squareGreen = new Audio('assets/sounds/noteE.mp3'); //Green Buzzer (squareGreen) sound
var squareYellow = new Audio('assets/sounds/noteD.mp3'); //Yellow Buzzer (squareYellow) sound
var squareRed = new Audio('assets/sounds/noteF.mp3'); //Red Buzzer (squareRed) sound
var squareBlue = new Audio('assets/sounds/noteC.mp3'); //Blue Buzzer (squareBlue) sound
var mimicStartThemeTune = new Audio('assets/sounds/mimicStartThemeTune.mp3'); //Game Starting Theme sound
var correct = new Audio('assets/sounds/correct.mp3'); //Sound for correct move
var incorrect = new Audio('assets/sounds/incorrect.mp3'); //Sound for incorrect move
var gameWin = new Audio('assets/sounds/allGameLevelsCompleted.mp3'); //Sound for game completion

//Application page:
var location;


$(document).ready(function(){ 
  
  //Auto Game Select Buzzer Sounds:
  var buzzerSound = [
    'assets/sounds/noteE.mp3', //Green Buzzer (squareGreen) sound
    'assets/sounds/noteD.mp3', //Yellow Buzzer (squareYellow) sound
    'assets/sounds/noteF.mp3', //Red Buzzer (squareRed) sound
    'assets/sounds/noteC.mp3'  //Blue Buzzer (squareBlue) sound
    ]; 


  /*------------------------------------------------------------GREEN BUZZER*/
  //Green Buzzer Sound:
  $('#0').click(function(){
    squareGreen.play();
  });
  
  //Green Buzzer Light On:
  $('#0').mousedown(function(){
    $('#0').addClass('squareGreenLight');
  });
  
  //Green Buzzer Light Off:
  $('#0').mouseup(function(){
    $('#0').removeClass('squareGreenLight');
  });
  

  /*-----------------------------------------------------------YELLOW BUZZER*/
  //Yellow Buzzer Sound:
  $('#1').click(function(){
    squareYellow.play();
  });
  
  //Yellow Buzzer Light On:
  $('#1').mousedown(function(){
    $('#1').addClass('squareYellowLight');
  });
  
  //Yellow Buzzer Light Off:
  $('#1').mouseup(function(){
    $('#1').removeClass('squareYellowLight');
  });

  
  /*--------------------------------------------------------------RED BUZZER*/
  //Red Buzzer Sound:
  $('#2').click(function(){
    squareRed.play();
  });
  
  //Red Buzzer Light On:
  $('#2').mousedown(function(){
    $('#2').addClass('squareRedLight');
  });
  
  //Red Buzzer Light Off:
  $('#2').mouseup(function(){
    $('#2').removeClass('squareRedLight');
  });
  
   
  /*-------------------------------------------------------------BLUE BUZZER*/
  //Blue Buzzer Sound:
  $('#3').click(function(){
    squareBlue.play();
  });
  
  //Blue Buzzer Light On:
  $('#3').mousedown(function(){
    $('#3').addClass('squareBlueLight');
  });
  
  //Blue Buzzer Light Off:
  $('#3').mouseup(function(){
    $('#3').removeClass('squareBlueLight');
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
  $('.start').click(function(){
    
    $('.count').text('00');
    deactivateBuzzers();
    mimicStartThemeTune.play();
    level = 0;
    level++;
    console.log('Ready Steady Mimic!');
    
    //Deactivate Start Button after one click:
    $('.start').off('click');
    
    //Game makes first move 4 seconds (4000ms) after start button clicked:
    setTimeout(mimicMovement, 4000);
    
    
    /*-----------------------------------------------------------HINT BUTTON*/
    $('.hint').mousedown(function(){
      
      //If player has already started attempting a level, deactivate hint button:
      if (playerMove.length > 0){
        deactivateHintButton();
        console.log('You have started your attempt. Hint button is disabled for the rest of this level');
      }
      
      //If not, keep hint button activated:
      else {
        console.log('Hint for level '+ level);
        console.log(id, squareColor);
        buzzerOn();
        mimicMovement[mimicMovement.length - 1];
      }
      
    });
    
    
    /*--------------------------BUZZER SELECTION SETTINGS FOR PLAYER'S MOVES*/
    $('.buzzer').click(function(){
      
      //Buzzer ID and corresponding squareColor selected when buzzer is clicked:
      id = $(this).attr('id'); 
      squareColor = $(this).attr('class').split(' ')[1];
      
      checkPlayerMovement();

    });
    
  });
  
  /*-----------------------------------------MIMIC'S RANDOM BUZZER SELECTION*/
  function selectRandomID(){
    
    //Random number generated between 0 and 3 [0, 1, 2, 3]:
    var selectBuzzer = Math.floor(Math.random() * 4);
    
    //Game pushes the corresponding buzzer for the randomly selected ID:
    mimicMove.push(selectBuzzer);
    
  }
  
  
  /*----------------------------------------------------------GAME INITIATOR*/
  function mimicMovement(){
    
    $('.count').text(level);
    console.log('Level '+level);
    var i = 0;
    selectRandomID();
    
    //Game selects the buzzers in the sequence (so far) one after the other:
    var mimicMoveInterval = setInterval(function() {
      id = mimicMove[i];
      squareColor = $('#' + id).attr('class').split(' ')[1];
      console.log(id, squareColor);
      buzzerOn();
      i++;
      
      //If game has finished playing its turn, waits for player's moves:
      if (i == mimicMove.length) {
        clearInterval(mimicMoveInterval);
        setTimeout(reactivateBuzzers, 200);
      }
    }, 1000);
    
  }
  
  
  /*--------------------------GAME'S BUZZER SELECTION (MIMIC'S AUTO SETTINGS)*/
  function buzzerOn(){
    
    //Buzzer Sound:
    playBuzzerSound(id);
    
    //Buzzer Light turns on, when pressed:
    $('#' + id).mousedown();
    
    //Buzzer Light turns off after 0.5 seconds (500ms):
    setTimeout(function(){
      $('#' + id).mouseup();
    }, 500);
    
  }
  
  /*---------------------------------------------PLAY BUZZER'S SOUND USING ID*/
  function playBuzzerSound(id) {
    
    var sound = new Audio(buzzerSound[id]);
    sound.play();
    
  }
  
  
  /*-----------------------------------------------MONITOR FOR PLAYER'S MOVES*/
  function checkPlayerMovement(){
    
    playerMove.push(id);
    console.log(id, squareColor);
    buzzerOn();
    
    //If player makes an INCORRECT move:
    if (!validPlayerMove(id, squareColor)){
      playerMove = [];
      console.log('Incorrect move. Game ended.');
      incorrect.play();
      setTimeout(showErrorMessage, 200);
    }
    
    //If player makes a CORRECT move:
    else if (playerMove.length == mimicMove.length && playerMove.length < maxLevel){
      level++;
      playerMove = [];
      console.log('Correct! Game continuing...');
      correct.play();
      deactivateBuzzers();
      setTimeout(mimicMovement, 1000);
    }
    
    //If player successfully completes the game:
    else if (playerMove.length == maxLevel) {
      gameCompleted();
      deactivateBuzzers();
      gameWin.play();
      setTimeout(gameWinMessage, 4000);
    }
    
    else {
      return true;
    }
    
  }
    
  
  /*--------------------------------------------------PLAYER'S MOVE VALIDATION*/
  function validPlayerMove(id, squareColor){
    
    for (var i = 0; i < playerMove.length; i++){
      
      //If Player's Move is not equal to the game's move:
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
    $('#hintButtonErrorModal').modal('show');
  }
  
  //Not allowed (game screen notification):
  function notAllowed(){
    $('.count').text('X');
  }
  
  //Returns level back to game screen after displaying the 'Not allowed' notification:
  function levelReturnsOnScreen(){
    $('.count').text(level);
  }
  
  //Error message for user's incorrect move:
  function showErrorMessage(){
    $('#showErrorModal').modal('show');
    $('#showErrorModal').modal({backdrop: 'static', keyboard: false});
  }
  
  //Win (game screen notification):
  function gameCompleted(){
    $('.count').text('WIN');
  }
  
  //Congratulations message for game win:
  function gameWinMessage(){
    $('#gameWinModal').modal('show');
    $('#gameWinModal').modal({backdrop: 'static', keyboard: false});
  }
  
  /*----------------------------------------------------RESET GAME FUNCTION*/
  function resetGame(){
    location.reload(true);
  }
  
  //Modal 'X' button resets game:  
  $('.closeModal').click(function(){
    resetGame();
  });
  
  //'RESET GAME' Tab - (yes selection):
  $('#resetGameNow').click(function(){
    resetGame();
  });
  
});
