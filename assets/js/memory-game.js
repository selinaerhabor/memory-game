
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
      