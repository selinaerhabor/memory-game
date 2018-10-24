

/*------------------------------------------------------GREEN BUTTON*/

    var Green = new Audio();
      Green.src = "assets/sounds/noteE.wav";
      
    function greenLight(div){
      div.style.backgroundColor = "#13ff7c";
  }
  
    function greenInactive(div){
      div.style.backgroundColor = "#00a74a";
  }
      
/*------------------------------------------------------YELLOW BUTTON*/
     
    var Yellow = new Audio();
      Yellow.src = "assets/sounds/noteD.wav";
  
    function yellowLight(div){
      div.style.backgroundColor = "#ffe54c";
  }
  
    function yellowInactive(div){
      div.style.backgroundColor = "#cca707";
  }
  
/*------------------------------------------------------RED BUTTON*/
  
    var Red = new Audio();
      Red.src = "assets/sounds/noteF.wav";
   
    function redLight(div){
      div.style.backgroundColor = "#ff6666";
  }
  
    function redInactive(div){
      div.style.backgroundColor = "#9f0f17";
  }
      
/*------------------------------------------------------BLUE BUTTON*/
  
    var Blue = new Audio();
      Blue.src = "assets/sounds/noteC.wav";
      
    function blueLight(div){
      div.style.backgroundColor = "#3288ff";
  }
  
    function blueInactive(div){
      div.style.backgroundColor = "#094a8f";
  }
      
/*------------------------------------------------------THEME TUNE*/

    var mimicStartThemeTune = new Audio();
    mimicStartThemeTune.src = "assets/sounds/mimicStartThemeTune.wav";


/*------------------------------------------------------START BUTTON*/
    $(document).ready(function(){
      $("#start-btn").click(function(){
        $(".count").text("00");
        level = 0;
        level++;
        mimicMove = [];
        playerMove = [];
        error = false;
        console.log("Ready Steady Mimic!");
        setTimeout(mimicMovement, 4000);
      });
    });
    
    function mimicMovement() {
      console.log("level "+level);
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
    
    var buzzerSound= [
      "assets/sounds/noteE.wav", //squareGreen
      "assets/sounds/noteD.wav", //squareYellow
      "assets/sounds/noteF.wav", //squareRed
      "assets/sounds/noteC.wav"  //squareBlue
      ];
    
  /*------------------------------------------------MONITOR FOR PLAYER'S MOVES*/
  
    $(".buzzer").click(function(){
      id=$(this).attr("id")
      squareColor=$(this).attr("class").split(" ")[1];
      playerMovement();
    });
    
    function playerMovement(){
      playerMove.push(id);
      console.log(id+" "+squareColor);
      buzzerOn(id, squareColor);
    }