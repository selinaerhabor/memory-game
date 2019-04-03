# Interactive Frontend Development Project: Mimic – The Memory Game
This is a simple, single-player memory game inspired by Hasbro’s [Simon Game]. The aim of this game is for the user to replay (mimic) the sequence of buzzers that the game selects in order to move on to the next level. Mimic the Memory game is currently set to 30 levels. For each new level, one extra buzzer is selected and added to the sequence. It could be the same buzzer as the previous selection or a different buzzer. The user has to replay all of the buzzers that have been selected so far in their exact order, including the newly selected buzzer for that level. 
Mimic the memory game can be accessed [here].

## 1. User Experience Design (UX)
This game application is open to all ages and may be of particular interest to people who are interested in playing memory games or have previously played Hasbro’s Simon game or similar.
Main Requirements for the Memory Game: 
* Must be single-player. 
* Should be inspired by Hasbro’s Simon game, which involves the device lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons.
* Should be responsive as possible to allow the user to play the game on different devices (desktops, mobiles etc.).
* Provide links or buttons to allow users to navigate the site and reset/control the site functionality.

## 1.1 User Stories
Firstly, I collected opinions from potential users on what they like in a memory game. From clear instructions for the game to a stylish and interactive game interface, I collected several user stories discussing potential features and qualities taken into consideration when building the memory game:
> "You can include the option for hints to provide help during the game"

> "There should be a start button, so I can begin the game when I'm ready to play"

> "Game screen would be nice, to monitor the level you are on"

> "Clear instructions of the game"

> "Should be interactive and stylish"

> "Good sized buttons and features"

> "Nice and calm background for the game"

I created sketches of different design ideas that would be suitable for the game interface (see Initial Ideas - Wireframes folder). These sketches were based on meeting the project requirements and the needs of users. The sketches were developed further to produce wireframes focusing on the main aspects of the game to give an idea of the key features that will be included.


## 2. Features
My project focused on meeting the needs of users’ for the memory game, so the user stories were taken into account when building the features and components of the website.

## 2.1 Existing Features
* **Notification Features** - When a sequence has been correctly repeated by the user, a high-pitched notification sound will be played before the next level begins. If a wrong buzzer has been pressed, then the game will release a low-pitched notification sound and the game will end.


### 2.1.1 Game Body:
*	**Navigation Bar** - allows users to navigate through the website. This navigation bar is available on all the pages of the website and also on all forms of screen sizes. On smaller screen sizes the navigation bar is collapsed/minimised to save space on smaller screen sizes. When clicked, the burger icon on the right top end of the screen will then expand the list of the different pages of the website vertically downwards. Login link to display form for the user to enter their account credentials for login. Instructions link which allows users to view the game instructions for the user
*  **Start Button** - allows players to begin a new game, the game’s start theme tune is played
*	* **Hint Button** - allows users to make the game replay the last buzzer added to the sequence. If the hint button is pressed before the user begins their move, the last buzzer selected by the game will be played. Users are allowed to press the hint button as many times as needed before they begin attempting that level. Once the user has begun their attempt (i.e. pressed a buzzer), the hint button is disabled. This is to ensure that the code to replay the last selected buzzer in the sequence does not interfere which the last selected buzzer by the user (For more details see 4.5 Interesting bugs or problems discovered during testing). When the user hovers the cursor over the "Hint" button, the button changes gradually from light silver background to a light orange background and returns back to the original state when cursor is removed from button. Orange colour was used as it was suitable for its function of reminding users of the  

* **Game Screen** – displays the level that the game is on
* **Green Buzzer** – plays Piano (Gospel Shuffle sound) Note E
* **Yellow Buzzer** - plays Piano (Gospel Shuffle sound) Note D
* **Red Buzzer** - plays Piano (Gospel Shuffle sound) Note F
* **Blue Buzzer** - plays Piano (Gospel Shuffle sound) Note C

*   **Website Icon** - the chosen website icon is the interface of the memory game, which includes the game’s features and the black background. The features of this memory game make the game unique from other memory games and the uniqueness of the interface makes it a suitable choice as the website icon.
*   **Font** - The Google font style [Fjalla One], makes letters appear tall and thin especially when in uppercase. This font style works well for the memory game and has been used as the chosen font to add to the user experience across the single page game application.


## 2.2 Potential Features to implement in the future:
* Currently, the login modal is just a mock for user account login and registration. In the future, the interface of the memory game application when the user creates an account via the Login link will be explored to create differences in the interface for users who have not made an account (playing the game as a guest) and users who have created an account. With the main difference being that users with an account will have the functionality to save their scores in their user account. 



## 3. Technologies Used
*   [Cloud 9] - The Integrated Development Environment (IDE) for building the website.
*	[HTML] - Used for the structure and format of the entire website.
*	[CSS] - For styling the website and maintaining its responsiveness across various screen sizes.
*	[Bootstrap (3.3.7)] - Used for grid form and assistance in styling.
*	[JQuery] - Used for the logic behind the game and to ensure the modal windows for Instructions and Login tabs appear on the screen when the buttons are clicked.
*	[Tube2mp3] - Used for converting YouTube videos into MP3 audio files which were easily imported into the website.
*	[Font Awesome] - Used for displaying the social logos and vector icons present on the website.
*	[Browsershots.org] - For checking browser compatibility and cross platform browser testing.
*   [Jasmine CDNJS] – For testing key sections of jQuery code for the game.
*   [Yamaha PSR-175 Keyboard] – Used for creating and recording the sounds for each buzzer and the game’s start theme tune.
* 	[Audacity] – Used for editing the sounds for the game (Start theme tune, buzzer sounds, correct sounds, incorrect sounds and game completion sound.)
*	[W3C HTML Validator] - Used to check that no errors were present in the HTML code before final deployment.
*	[W3C CSS Validator] - Used to check that no errors were present in the CSS code before final deployment.



## 4. Testing
This section discusses the results from testing the features of Mimic – the memory game. Tests were carried out on the different components of the memory game and on various device screen sizes and browsers to ensure the application is responsive.

## 4.1 Process of Testing Features:
**Navigation Bar**
> "Clear instructions of the game"

* Game page - [index.html]
* Hovered the mouse over the "Instructions" tab and it changed from a dark grey colour to a white text
* Clicked the Instructions tab
* Modal appeared explaining the instructions of the game which you can exit out of by clicking the x at the top corner of the form or clicking outside the modal window.
* This process was also tested for login modal.

**Hint Button**
> "You can include the option for hints to be provide help during the game"


**Start Button**
> "There should be a start button, so I can begin the game when I'm ready to play"

*Clicked the “Start” Button. 
*When the Start button was pressed, the game’s theme song played and the game count screen was activated.


**Game Count Screen**
> "Game screen would be nice, to monitor the level you are on"

* Game screen’s default state shows two dashes “- -“, signalling that the game’s start button has not yet been pressed.
* Pressed the "Start" button.
* Game screen changes from its default state to two zeros “00”, whilst the game’s theme tune is being played. Signalling that the start button has been pressed and the game is about to begin. 
* After the tune has finished playing the game screen changes to level “1” and the first buzzer is selected.
* From then on the game screen continued to display the level of the game. This was tested up to the last level (level 30).


**Buzzers and Buttons**
> "Good sized buttons and features"

*Game application loaded on mobile screen size.
*Start button pressed, easily and successfully.
*Hint button pressed, easily and successfully.
*Coloured buzzers pressed, easily and successfully.
*Navigation tabs pressed, easily and successfully.
*This process was repeated and checked for all screen sizes.


**Game Background**
> "Nice and calm background for the game"

Users tried playing the memory game and none reported issues with the game background disturbing their focus.




## 4.2 HTML and CSS Validation Results:
Below are the links to the result pages for HTML and CSS Validator for the code. 

* HTML code for the website has passed with no errors returned. (See screenshot in Browser Tests folder)
* CSS code for the website has passed with no errors returned. (See screenshot in Browser Tests folder)

## 4.3 Jasmine Tests Results: 




The Jasmine test results show that the correct classes are being called at each stage of the game. 


## 4.4 Device Screen Size and Browser Compatibility Test Results:
The website has been tested on various browsers including Internet Explorer, Safari, Firefox and Google Chrome at the various screen sizes using [Browsershots.org]. This allowed me to test the memory game application on Linux, Windows and Mac operating systems.
* The below screen size tests were carried out assessing performance of all pages of the website using Google Chrome 72.0 (Windows):

Device | Screen Size (Width x Height) | Mimic Game
---- | ---- | ---- | 
Galaxy S5 | 360 x 640 | ✓ | 
Pixel 2 | 411 x 731 | ✓ |
Pixel 2 XL | 411 x 823 | ✓ |  
iPhone 5 SE | 320 x 568 | ✓ | 
iPhone 6/7/8 | 375 x 667 | ✓ | 
iPhone 6/7/8 Plus | 414 x 736 | ✓ | 
iPhone X | 375 x 812 | ✓ | 
iPad | 768 x 1024 | ✓ | 
iPad Pro | 1024 x 1366 | ✓ | 
Sony Bravia Television 4K |5280 width (55")|✓ | 


* Below are the test results of the website deployed on GitHub pages when tested on Browsershots.org on various browsers. Key screenshots of the Browser Test results can be found in a folder called `Browser Tests` under the `assets` folder.
* Key: ✓ - Website loads successfully

Operating System | Browser | Mimic Game 
---- | ---- | ---- | 
Linux | Chrome 71.0 | ✓ |
Linux | Firefox 3.0 |  ✓ |
Linux | Firefox 61.0 | ✓ | 
Windows | Firefox 64.0 | ✓  | 
Windows | Internet Explorer 11 |  ✓|
Mac | Chrome 48.0 | ✓ | 
Mac | Safari 9.1 |  ✓ |

Overall, the results of the tests documented in this chapter and feedback from users suggests that the memory game works very well across key operating system browsers and various screen sizes with column arrangement adjusting correctly. Mimic the memory game should therefore be reliable and easy for users to load the game and play. 


## 4.5 Responses from users who tried out the memory game:
I asked a group of people to play mimic memory game during the development process and again after the application had been built. 
In order for users to get an idea of the logic of the game, I reduced the maximum level of the game from level 30 to level 3 so that users also experienced what happened when they win the game. The initial responses from users was that the game should be challenging and should start from the beginning when the user makes a wrong move rather than the sequence for that level just be repeated until the user gets it right. So the game logic was adjusted to ensure this was the case. 
After the application had been built, users were pleased with the application’s visual appearance and the game’s logic. The responses show success in meeting the user requirements initially set out in the design brief and discussed in the user stories (see 1.1 User Stories). Below are a few of the feedback received from the users:

> "Works well on my mobile as well"

> "The game has a good level of challenge"

> "Interesting and interactive"

> "Looks stylish"
 
> "I actually enjoy playing this!"


## 4.5 Interesting bugs or problems discovered during testing:
* The start button could be pressed more than once after a game has already started. Although, the count screen displays the two zeros “00” to indicate a new game is beginning, the game started skipping levels. In order to fix this issue, I used the `$(".start").off("click");` which turns off the start button functionality inside of the start click function when a new game is in session and only brings back that functionality when the user makes an incorrect move or the user completed the game.

```sh
$(".start").click(function(){
    $(".start").off("click");
```
This issue was still occurring even when the start button was pressed after the game ended due to incorrect play. I noticed that it was only when I had refreshed the page and then clicked the start button that the game worked well so I created a function that reloads the page after an incorrect play and added it using setTimeout under the if statement for incorrect moves.

```sh
//Reloads Game
function reloadGame(){
        location.reload(true);
    }

//If player makes an INCORRECT move:
      if(!validatePlayerMove()) {
        playerMove = [];
        console.log("Incorrect move. Game ended.");
        incorrect.play();
        setTimeout(showErrorMessage, 200);
        setTimeout(reloadGame, 300);
      } 
```

* The hint button could be pressed whilst the user had already started their attempt for a level. As the hint button replays the last selected sequence in the game, when the user has begun attempting a level and then presses the hint button it replays the buzzer the user selected last. In order to fix this, I created a function that disables the hint button when the user has already started attempting a level.

```sh
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
//To bring back the current level of the game on the screen after alert
function levelReturnsOnScreen(){
      $(".count").text(level);
    }
```
*When the buzzers were pressed, the class for the buzzers’ active background colours would remain on even when user is pressing other buttons. In order to fix this issue, I used mousedown and mouseup methods to toggle between the active and inactive background colours for the buzzers and I used the click method for the sound for the buzzers.

```sh
// Green Buzzer
$("#0").click(function(){
    Green.play();
  });
  
  $("#0").mousedown(function(){
    $("this").addClass("squareGreenLight");
  });
  
  $("#0").mouseup(function(){
    $("this").removeClass("squareGreenLight");
  });
```

* Placeholders for the input forms and required input error messages were not appearing when viewing the website using Internet Explorer 11, so I had to state the color of the placeholder on the main browser types in the style.css file.
```sh
:-webkit-input-placeholder {color: #4a4a4a; }
:-moz-placeholder {color: #4a4a4a; }
:-o-placeholder {color: #4a4a4a;}
:-ms-input-placeholder {color: #4a4a4a; }
```

## 5. Deployment

## 5.1 Deployment Process:
The hosting platform for The Kinks’ website is GitHub Pages, which publishes the master branch containing the most updated version of code for the website.
To deploy the website to GitHub pages, I created a Repository where the code will be stored via the GitHub website.
I connected the GitHub repository to my Cloud9 workspace via terminal by clicking on the `Clone or Download` button which appears on the GitHub repository `Code` tab and copied the HTTPS link of the repository to paste it in my Cloud9 workspace terminal by typing the below:
```sh
$ git init
$ git remote add origin https://github.com/selinaerhabor/memory-game.git
```

I adjusted my GitHub Repository settings for this website by changing the source under GitHub pages from `None` to `master branch`. I then copied my GitHub Pages link `https://selinaerhabor.github.io/memory-game/` into my README.md file to allow easy access to the live website. In order to push the latest code from Cloud 9 IDE to display on GitHub pages, I used the below code:
```sh
$ git status
$ git add (placed file name here) OR $ git add .
$ git commit -m "(placed comment on why version was updated here)"
$ git push
```
This project has two branches which were merged as the Wireframes were initially uploaded to the GitHub repository directly via GitHub website, but a folder called `Initial Ideas - Wireframes` has now been created and is stored under the assets folder.

## 5.2  Running the code locally:
The repository for this website can be cloned using the command below in Cloud 9 workspace terminal:
```sh
$ git clone https://selinaerhabor.github.io/memory-game.git
```

## 5.3 Discussion on the differences between the development code and the deployed Code Version:

*  Addition of browser alerts to keep users informed of why a feature is inactive or why their game ended. These alerts occur for incorrect play, when the hint button is pressed when level is being attempted and when game is completed.

* Made redundant the use of ` div.style.backgroundColor` for the buzzers in order to remove the need for using `!important` to ensure the background color changes to its active state when pressed.
`function greenLight(div){
      div.style.backgroundColor = "#13ff7c";
    }
  
    function greenInactive(div){
      div.style.backgroundColor = "#00a74a";
    }`


## 6. Credits

#### Software Developer: Selina Erhabor

## 6.1 Content:

## 6.2 Media:
### Game Background
**Sources**:
* The background photo used in this site was obtained from ...

### Game Main Control Face
**Sources**: 
* Google Fonts , Fjalla One – used as game screen display font and for game brand name
* The notification sound for incorrect and correct moves was obtained from https://www.dropbox.com/sh/z49xw5kvydjaem3/AABvWeLA1JTnCTqTNKjpEJZPa?dl=0

### Buzzers
**Sources**:
* The sound of all the buzzers and the game theme tune were recorded using Yamaha PSR-175 Keyboard.
* The notes of the buzzer sounds are the same as the Simon game, but a Gospel Shuffle music style has been used instead to modify the sound effects for the notes. (Buzzer sounds: squareGreen - Note E, squareYellow - Note F, squareRed – Note G and squareBlue – Note C).


[//]: # (Below are the reference links used in the body of the README file)
[here]: <https://selinaerhabor.github.io/memory-game/>
[HTML]: <https://html.com/> 
[CSS]: <https://https://en.wikipedia.org/wiki/Cascading_Style_Sheets> 
[Bootstrap (3.3.7)]: <https://getbootstrap.com/docs/3.3/components/> 
[Cloud 9]: <https://docs.c9.io/docs>
[Browsershots.org]: <http://browsershots.org/>
[Home]: <https://selinaerhabor.github.io/ucfd-milestone-project/index.html>
[Tube2mp3]: <https://www.tube2mp3.com/>
[Audacity]: <https://www.audacityteam.org/>
[Font Awesome]: <https://fontawesome.com/>
[Jasmine CDNJS]: <https://cdnjs.com/libraries/jasmine>
[Fjalla One]: <https://fonts.google.com/specimen/Fjalla+One?selection.family=Fjalla+One>
[JQuery]: <https://jquery.com/download/>
[Simon Game]: < https://en.wikipedia.org/wiki/Simon_(game)>
[Yamaha PSR-175 Keyboard]: < https://www.yamaha-keyboard-guide.com/yamaha-psr-175.html>
[W3C HTML Validator]: <https://validator.w3.org/>
[W3C CSS Validator]: <http://jigsaw.w3.org/css-validator/>

