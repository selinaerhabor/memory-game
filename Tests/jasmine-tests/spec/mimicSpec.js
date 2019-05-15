
    // HINT FUNCTION
    describe("Test to replay the last selected buzzer", function() {
      
      //Variables
      var examplePlay = [2, 0, 0, 3, 3, 1];
      var exampleHint = examplePlay[examplePlay.length - 1];
      
      it("returned the ID of the buzzer selected last in a sequence", function() {
          expect(exampleHint).toEqual(1);
      });
      
    })
    
    
    
    //HOW THE MEMORY GAME SELECTS BUZZERS AND CLASSES IN ARRAY:
    describe("Test for buzzer and class selections", function() {
    
      //Variables
      var mimicMove = [];
      var selectBuzzer = Math.floor(Math.random() * 4);
        mimicMove.push(selectBuzzer);
      var buzzerClasses = ["buzzer", "squareColor"];
      var buzzerLastClass = buzzerClasses[buzzerClasses.length - 1];
    
      it("buzzer ID values selected at random are greater than or equal to 0 and less than or equal to 3", function() {
          expect(selectBuzzer).not.toBeLessThan(0);
          expect(selectBuzzer).not.toBeGreaterThan(3);
      });
      it("selected the last item in an array of classes for a game buzzer", function() {
          expect(buzzerLastClass).toEqual("squareColor");
      });
    })