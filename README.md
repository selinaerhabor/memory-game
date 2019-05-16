# Interactive Frontend Development Project: Mimic – The Memory Game
This is a simple, single-player memory game inspired by Hasbro’s [Simon Game]. The aim of this game is for the user to replay (mimic) the 
sequence of buzzers that the game selects in order to move on to the next level. Mimic the Memory game is currently set to 30 levels. 
For each new level, one extra buzzer is selected and added to the sequence. It could be the same buzzer as the previous selection or a 
different buzzer. The user has to replay all of the buzzers that have been selected so far in their exact order, including the newly 
selected buzzer for that level. I chose to number the IDs for the four buzzers from 0 to 3 and this was advantageous in successfully 
mapping them with audio sounds using JavaScript arrays and used this concept for mapping the game notification sounds. Mimic the memory 
game can be accessed [here].

## Contents
1. [**User Experience Design (UX)**](#ux)
      
      1.1 [User Stories]()

2. [**Features**](#features)
      
      2.1 [Existing Features]

         2.1.1 [Game Body]

      2.2 [Potential Features to Implement]

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)
      
      4.1 [Process of Testing Features]
      4.2 [HTML and CSS Validation]
      4.3 [Jasmine Test Results]
      4.4 [Device Screen Size and Browser Compatibility Test Results]
      4.5 [Responses from users who tried out the memory game]
      4.6 [Interesting bugs or problems discovered during testing]

5. [**Deployment**](#deployment)
      
      5.1 [Deployment Process]
      5.2 [Running the code locally]
      5.3 [Discussion on the differences between the development code and the deployed Code Version]

6. [**Credits**](#credits)
      
      6.1 [Content/Media](#content-media)
      6.2 [Code](#code)
      6.3 [Acknowledgements](#acknowledgements)


## 1. User Experience Design (UX)

The aim of Mimic the Memory Game is to provide users with a creative and reasonably, challenging memory game to captivate and inspire players 
through it's unique interface and well responsive application. The suggested age range for this application is 8 years and up which 
has also been inspired from the target audience of Simon game. This memory game is likely to be of particular interest to people who 
are interested in playing memory games or have previously played Hasbro’s Simon game or similar.

Main Requirements for the Memory Game: 
* Must be single-player. 
* Should be inspired by Hasbro’s Simon game, which involves the device lighting up one or more buttons in a random order and the player 
must reproduce that order by pressing the buttons.
* Should be as responsive as possible to allow the user to play the game on different devices (desktops, mobiles etc.).
* Provide links or buttons to allow users to navigate the site and reset/control the site functionality.

## 1.1 User Stories
Firstly, I collected opinions from potential users on what they like in a memory game. From clear instructions for the game to a stylish and 
interactive game interface, I collected several user stories discussing potential features and qualities taken into consideration when 
building the memory game:
> "You can include the option for hints to provide help during the game"

> "There should be a start button, so I can begin the game when I'm ready to play"

> "Game screen would be nice, to monitor the level you are on"

> "Clear instructions of the game"

> "Should be interactive and stylish"

> "Good sized buttons and features"

> "Nice and calm background for the game"

I created sketches of different design ideas that would be suitable for the game interface of the memory game. 
The sketches of my initial ideas were based on meeting the project's requirements and the needs of users. The most favoured idea was then 
developed further to produce wireframes, focusing on the main aspects of the game to give an idea of the key features that will be included 
(taking into account the user stories). My initial ideas and wireframes are available in this folder: [Initial Ideas - Wireframes].


## 2. Features
My project focused on meeting the needs of users’ for the memory game, so the user stories were taken into account when building the 
features and components of the website. I have chosen a contrasting colour effect for this application to guide the users focus to the 
text and images displayed on the application. 

## 2.1 Existing Features
* **Notification Features** - When a sequence has been correctly repeated by the user, a high-pitched notification sound will be played before 
the next level begins. If a wrong buzzer has been pressed, then the game will release a low-pitched notification sound and the game will end.
* **Navigation Bar** - allows users to navigate through the application. On smaller screen sizes the navigation bar is collapsed/minimised to 
save space. When clicked, the burger icon on the right top end of the screen will then expand the list of the different information links 
for the application vertically downwards (Reset Game, Instructions and Login/Register). 
* **MiMiC Tab** - When the Mimic tab has been clicked, a modal will display brief information about the game's background.
* **Reset Game Tab** - When the Reset Game tab has been clicked, a black modal window with white border and text will display a prompt 
(Yes and No buttons) to confirm the user wants to reset the game.
* **Instructions Tab** - When the Instructions tab has been clicked, a black modal window with white border and text will display the game's 
instructions including an image (that can be enlarged when clicked on) explaining the key features in the application.
* **Login/Register Tab** - When the Login/Register tab has been clicked, a black modal window with white border and text will display mock 
login and register forms for the user to fill in.
* **Website Icon** - the chosen website icon is the interface of the memory game, which includes the game’s features and the black background. 
The features of this memory game make the game unique from other memory games and the uniqueness of the interface makes it a suitable choice 
as the website icon.
* **Font** - The Google font style [Fjalla One], makes letters appear tall and thin especially when in uppercase. This font style works well 
for the memory game and has been used as the chosen font to add to the user experience across the single page game application.

### 2.1.1 Game Body:
* **Start Button** - allows users to begin a new game, the game’s start theme tune is played and the game begins by making the first buzzer 
selection. Once the start button has been pressed, the game deactivates the start button throughout the course of the game and will only be 
reactivated if the user makes an incorrect move and the game ends, if the user completes the game or chooses to rest the game (via navigation 
bar). When the user hovers the cursor over the "Start" button, the button changes gradually from light silver background to a green background 
and returns back to the original state when cursor is removed from button. Green colour was used as it was suitable for its function of 
powering the game to begin.  
* **Hint Button** - allows users to make the game replay the last buzzer added to the sequence. If the hint button is pressed before the 
user begins their move, the last buzzer selected by the game will be played. Users are allowed to press the hint button as many times as 
needed before they begin attempting that level. Once the user has begun their attempt (i.e. pressed a buzzer), the hint button is disabled. 
This is to ensure that the code to replay the last selected buzzer in the sequence does not interfere which the last selected buzzer by the 
user (For more details see 4.5 Interesting bugs or problems discovered during testing). When the user hovers the cursor over the "Hint" button,
the button changes gradually from light silver background to a light orange background and returns back to the original state when cursor is 
removed from button. Orange colour was used as it was suitable for its function of helping users.  
* **Game Screen** – displays the level that the game is on. The game screen has a black screen, with red text giving it an electronic game 
effect. 
* **Green Buzzer** – (also known as Buzzer ID 0) plays Keyboard (Gospel Shuffle sound) Note E and lights up to a lighter green colour when 
pressed.
* **Yellow Buzzer** - (also known as Buzzer ID 1) plays Keyboard (Gospel Shuffle sound) Note D and lights up to a lighter yellow colour when 
pressed.
* **Red Buzzer** - (also known as Buzzer ID 2) plays Keyboard (Gospel Shuffle sound) Note F and lights up to a lighter red colour when 
pressed.
* **Blue Buzzer** - (also known as Buzzer ID 3) plays Keyboard (Gospel Shuffle sound) Note C and lights up to a lighter blue colour when 
pressed.

## 2.2 Potential Features to implement in the future:
The game has been built with a focus on how the game would be played by a user (playing as a guest) and has not created an account for 
the game. Currently, the login modal page is just a mock describing how users would log in to their account or register and does not 
store the data input from the form. In the future, the login modal will allow users to actually create an account to unlock additional 
features to the game including saving their daily scores from the game in their account. The login tab will then be hidden and the log out 
link appears when a user has successfully logged in to their account. The current user interface when playing Mimic the memory game is 
'playing as a guest', as the additional features mentioned have not yet been implemented. 



## 3. Technologies Used
* [Cloud 9] - The Integrated Development Environment (IDE) used for building the website.
*	[HTML] - Used for the structure and format of the entire website.
*	[CSS] - For styling the website and maintaining its responsiveness across various screen sizes.
*	[Bootstrap (3.3.7)] - Used for grid form and assistance in styling.
*	[JQuery] - Used for the logic behind the game and to ensure the modal windows for Instructions and Login tabs appear on the screen 
when the buttons are clicked.
*	[Tube2mp3] - Used for converting YouTube videos into MP3 audio files which were easily imported into the website.
*	[Font Awesome] - Used for displaying the social logos and vector icons present on the website.
*	[Browsershots.org] - For checking browser compatibility and cross platform browser testing.
* [Jasmine CDNJS] – For testing key sections of jQuery code for the game.
* [Yamaha PSR-175 Keyboard] – Used for creating and recording the sounds for each buzzer and the game’s start theme tune.
* [Audacity] – Used for editing the sounds for the game (Start theme tune, buzzer sounds, correct notification sound, incorrect 
notification sound and game completion sound.)
*	[W3C HTML Validator] - Used to check that no errors were present in the HTML code before final deployment.
*	[W3C CSS Validator] - Used to check that no errors were present in the CSS code before final deployment.



## 4. Testing
This section discusses the results from testing the features of Mimic – the memory game. Tests were carried out on the different 
components of the memory game and on various device screen sizes and browsers to ensure the application is responsive.

## 4.1 Process of Testing Features:
**Navigation Bar**
> "Clear instructions of the game"

* Game page - [index.html]
* Hovered the mouse over the "Instructions" tab and it changed from a dark grey colour to a white text
* Clicked the Instructions tab
* Modal appeared explaining the instructions of the game which you can exit out of by clicking the x at the top corner of the form or 
clicking outside the modal window.
* This process was also tested for login modal.


**Hint Button**
> "You can include the option for hints to provide help during the game"

* Clicked the “Hint” Button. 
* When the Hint button was pressed, the game repeated the last selected buzzer in the sequence so far.
* For level 3, I pressed the first buzzer in sequence and then pressed the hint button.
* An 'X' appeared on the game screen and an error modal message appeared, explaining that the hint button is only available before the 
user has started their attempt for a level.


**Start Button**
> "There should be a start button, so I can begin the game when I'm ready to play"

* Clicked the “Start” Button. 
* When the Start button was pressed, the game’s theme song played and the game count screen was activated.
* The Game selects first buzzer selection.


**Game Count Screen**
> "Game screen would be nice, to monitor the level you are on"

* Game screen’s default state shows two dashes “- -“, signalling that the game’s start button has not yet been pressed.
* Pressed the "Start" button.
* Game screen changes from its default state to two zeros “00”, whilst the game’s theme tune is being played. Signalling that the start 
button has been pressed and the game is about to begin. 
* After the tune has finished playing the game screen changes to level “1” and the first buzzer is selected.
* From then on the game screen continued to display the level of the game. This was tested up to the last level (level 30).


**Buzzers and Buttons**
> "Good sized buttons and features"

* Game application loaded on mobile screen size.
* Start button pressed, easily and successfully.
* Hint button pressed, easily and successfully.
* Coloured buzzers pressed, easily and successfully.
* Navigation tabs pressed, easily and successfully.
* This process was repeated and checked for all screen sizes.


**Game Background**
> "Nice and calm background for the game"

* Users tried playing the memory game and none reported issues with the game background disturbing their focus. 
* Users believe that the background complements the memory game interface.


## 4.2 HTML and CSS Validation Results:
The HTML and CSS code for the Memory Game has been tested using official validators, screenshots of the Browser Test results are available via the links below and can also be found in a folder called `browser-tests` under the `Tests` folder.

**HTML code**
* Mimic the Memory Game has [passed](https://github.com/selinaerhabor/memory-game/tree/master/Tests/browser-tests/Result%20-%20HTML%20Validator.png) with no errors returned.

**CSS Code**
* Mimic the Memory Game has [passed](https://github.com/selinaerhabor/memory-game/tree/master/Tests/browser-tests/Result%20-%20CSS%20Validator.png) with no errors returned. 


## 4.3 Jasmine Tests Results: 
The Jasmine tests were carried out for the Hint function, how the memory game selects items in an array and for the selection of audio files which make up the logic of the game. 

**Hint Function:** 
* This test demonstrated whether the hint function correctly recalls the last selected buzzer ID. For this test, I declared 
an example selection of buzzers up to level 6. The buzzers are symbolised by ID numbers (0, 1, 2 and 3).

**Selection of items in an Array:**
* This test was made up of two parts to demonstrate whether the game correctly selects a buzzer ID and can select the squareColor class from
the array of classes in html. 
* For the first test, I declared the variable for the game's moves and another variable to select a buzzer ID at random. The test 
checked that the buzzer ID selected at random by the game is between 0 and 3.
* For the second test, I declared a variable which is a representation of having multiple classes in a `<div>`. This test checked that the 
game correctly reads the squareColor class using the `.split()` method and therefore assign the right style properties to the buzzer.

**Selection of Audio Files:**
* This test demonstrated whether the game can correctly select the corresponding audio file from a buzzer ID. For this test, I declared 
the buzzer IDs, four example audio files in an array and a sound player variable which uses the index of an array to map it to each buzzer. 
This test checked that the game correctly selects a buzzer's matching audio file so the right buzzer sound plays upon selection.

Overall, the results from the tested stages of the game show that the correct variables are being selected. 
Screenshot of the [Jasmine Test Results Page].


## 4.4 Device Screen Size and Browser Compatibility Test Results:
The website has been tested on various browsers including Safari, Firefox and Google Chrome at the various 
screen sizes using [Browsershots.org]. This allowed me to test the memory game application on Linux, Windows and Mac operating systems.
* The below screen size tests were carried out assessing performance of all pages of the website using Google Chrome 74.0 (Windows):

Device | Screen Size (Width x Height) | Mimic the Memory Game
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


* Below are the test results of the website deployed on GitHub pages when tested on Browsershots.org on various browsers. 
Key screenshots of the Browser Test results can be found in a folder called `browser-tests` under the `Tests` folder.
* Key: ✓ - Application loads successfully

Operating System | Browser | Mimic the Memory Game 
---- | ---- | ---- | 
Linux | Chrome 71.0 | ✓ |
Linux | Firefox 3.0 |  ✓ |
Linux | Firefox 61.0 | ✓ | 
Windows | Firefox 64.0 | ✓  | 
Mac | Chrome 48.0 | ✓ | 
Mac | Safari 9.1 |  ✓ |

Overall, the results of the tests documented in this chapter and feedback from users suggests that the memory game works very well across key 
operating system browsers and various screen sizes with column arrangement adjusting correctly. Mimic the memory game should therefore be 
reliable and easy for users to load the game and play. 


## 4.5 Responses from users who tried out the memory game:
I asked a group of people to play mimic memory game during the development process and again after the application had been built. 
In order for users to get an idea of the logic of the game, I reduced the maximum level of the game from level 30 to level 3 so that users 
also experienced what happened when they win the game. The initial response from users was that the game should be challenging and should 
start from the beginning when the user makes a wrong move rather than the sequence for that level just being repeated until the user gets it 
right. So the game logic was adjusted to ensure this was the case. After the application had been built, users were pleased with the 
application’s visual appearance and the game’s logic. The responses show success in meeting the user requirements initially set out in the 
design brief and discussed in the user stories (see 1.1 User Stories). Below are a few of the feedback received from the users:

> "Works well on my mobile as well"

> "The game has a good level of challenge"

> "Interesting and interactive"

> "Looks stylish"
 
> "I actually enjoy playing this!"


## 4.5 Interesting bugs or problems discovered during testing:
The start button could be pressed more than once after a game has already started. 
Although, the count screen displays the two zeros “00” to indicate a new game is beginning, the game started skipping levels. 
In order to fix this issue, I used `$(".start").off("click");` which turns off the start button functionality inside of the start 
click function when a new game is in session and only brings back that functionality when the user makes an incorrect move or wins the game.

However, this issue was still occurring even when the start button was pressed after the game ended. 
I noticed that it was only when I had refreshed the page and then clicked the start button that the game worked correctly. 
So, I created a function that reloads the page after an incorrect play and added it to the modal window 'X' close button. 
Now when an incorrect move is made and the player clicks the 'X' to close the modal window, the game will reload. 
As modal windows can also be exited by clicking outside the modal, I deactivated this feature by adding 
`{backdrop: 'static', keyboard: false}` so that players are guided to press the 'X' button to exit the 
modal windows for Incorrect Move ('#showErrorModal') and Game Win ('#gameWinModal').

![Modal Window 'X' Close Button](/assets/images/screenshots-features/modal-window-close-button.png)

* Function for modal to display when user makes an incorrect move:
```sh
  function showErrorMessage(){
    $('#showErrorModal').modal('show');
    $('#showErrorModal').modal({backdrop: 'static', keyboard: false});
  }
```
  
* Function used for resetting the game upon closing certain modals:
```sh
  function resetGame(){
    location.reload(true);
  }
  
  //Modal 'X' button resets game:
  $('.closeModal').click(function(){
    resetGame();
  });
  
```

The hint button could be pressed whilst the user had already started their attempt for a level. 
As the hint button replays the last selected sequence in the game, when the user has begun attempting a level and then presses the 
hint button it replays the buzzer the player has selected last rather than the game's. In order to fix this, I created a function 
that disables the hint button and a function that makes 'X' to appear on the game screen when the user has already started 
attempting a level and clicked the hint button.

* Function used for deactivating the hint button:
```sh
  function deactivateHintButton(){
    notAllowed();
    setTimeout(hintButtonErrorMessage, 200);
    setTimeout(levelReturnsOnScreen, 300);
  }
```

* Function used for displaying the hint button error modal:
```sh
  function hintButtonErrorMessage(){
    $('#hintButtonErrorModal').modal('show');
  }
```

* Function used for displaying 'X' on game screen:
```sh
    function notAllowed(){
      $(".count").text("X");
    }
```

* When the buzzers were pressed, the class for the buzzers’ active background colours would remain on even when user is 
pressing other buttons. In order to fix this issue, I used mousedown and mouseup methods to toggle between the active and inactive 
background colours for the buzzers and I used the click method for the sound for the buzzers.

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


## 5. Deployment

## 5.1 Deployment Process:
The hosting platform for Mimic the Memory Game is GitHub Pages, which publishes the master branch containing the most updated version of code for the website.
To deploy the website to GitHub pages, I created a Repository where the code will be stored via the GitHub website.
I connected the GitHub repository to my Cloud9 workspace via terminal by clicking on the `Clone or Download` button which appears on the GitHub repository `Code` tab and copied the HTTPS link of the repository to paste it in my Cloud9 workspace terminal by typing the below:

```sh
$ git init
$ git remote add origin https://github.com/selinaerhabor/memory-game.git
```

I adjusted my GitHub Repository settings for this website by changing the source under GitHub pages from `None` to `master branch`. I then 
copied my GitHub Pages link `https://selinaerhabor.github.io/memory-game/` into my README.md file to allow easy access to the live website. 
In order to push the latest code from Cloud 9 IDE to display on GitHub pages, I used the below code:

```sh
$ git status
$ git add (placed file name here) OR $ git add .
$ git commit -m "(placed comment on why version was updated here)"
$ git push
```
This project has two branches (master and testing), the secondary branch `testing` contains code used for carrying out Jasmine Tests for the 
application.

## 5.2  Running the code locally:
The repository for this website can be cloned using the command below in Cloud 9 workspace terminal:

```sh
$ git clone https://selinaerhabor.github.io/memory-game.git
```

## 5.3 Discussion on the differences between the development code and the deployed Code Version:

* The addition of modal windows instead of browser alerts to keep users informed of why a feature is inactive or why their game ended in an 
aesthetically pleasing way. These modal windows appear for incorrect play, when the hint button is pressed when level is being attempted and 
when the game has been completed. The modal windows are also useful for not blocking the game's interface completely something that came in 
handy for the hintButtonDisabled function so that the user can easily return back to playing current game.

* Made redundant the use of `div.style.backgroundColor` for the buzzers in order to remove the need for using `!important` to ensure the 
background color changes to its active state when pressed.

* The buzzer sounds were taking some time to play when pressed. In order to reduce the time it takes for the audio files to load, I removed the 
variables calling buzzerSounds based on indexing `new Audio(buzzerSound[1])` and instead set audio files as global variables (from player's end) 
for example: var yellow = new Audio('assets/sounds/noteD.mp3').

* The Reset Game tab in the navigation bar is a modal that has been introduced to allow the user to reset the game if they wish to. The start 
button becomes inactive after the game begins and will only be reactivated again if the player wins the game or makes an incorrect move in 
which the game will be reloaded. This was done to prevent the start button being pressed multiple times accidently and as a fix to the errors 
caused in buzzer selection, when the application is not reloaded first before the start button is pressed.

* The Mimic tab on the left of the navigation bar now displays brief information about Mimic the Memory Game and link to the game's deployed 
code.

## 6. Credits

## 6.1 Content/Media:
### Game Background
**Sources**:
* The background photo used in this site was obtained from [Wallpapercave]

### Game Main Control Face
**Sources**: 
* Google Fonts (Fjalla One) – used as game screen display font and for game brand name
* The notification sound for incorrect and correct moves were obtained from [Dropbox]

### Buzzers
**Sources**:
* The sound of all the buzzers and the game theme tune were recorded using Yamaha PSR-175 Keyboard.
* The notes of the buzzer sounds have been achieved using a Gospel Shuffle music style to modify the sound effects for the 
standard keyboard notes. (Buzzer sounds: squareGreen - Note E, squareYellow - Note F, squareRed – Note G and squareBlue – Note C).

## 6.2 Code:
**Sources**:
* For making the game select all of the buzzers in the sequence one after the other, code tailored from [StackOverflow - Solution1]
* For checking if the elements in player's selection array matches the game's selection array, code tailored from [StackOverflow - Solution2]

## 6.3 Acknowledgements:
Useful resources for building this app include YouTube and Stack Overflow after receiving inspiration for the logic and user experience of 
the memory game from https://www.youtube.com/watch?v=1Yqj76Q4jJ4

[//]: # (Below are the reference links used in the body of the README file)
[here]: <https://selinaerhabor.github.io/memory-game/>
[HTML]: <https://html.com/> 
[CSS]: <https://https://en.wikipedia.org/wiki/Cascading_Style_Sheets> 
[Bootstrap (3.3.7)]: <https://getbootstrap.com/docs/3.3/components/> 
[Cloud 9]: <https://docs.c9.io/docs>
[Browsershots.org]: <http://browsershots.org/>
[Tube2mp3]: <https://www.tube2mp3.com/>
[Audacity]: <https://www.audacityteam.org/>
[Font Awesome]: <https://fontawesome.com/>
[Jasmine CDNJS]: <https://cdnjs.com/libraries/jasmine>
[Fjalla One]: <https://fonts.google.com/specimen/Fjalla+One?selection.family=Fjalla+One>
[JQuery]: <https://jquery.com/download/>
[Simon Game]: <https://en.wikipedia.org/wiki/Simon_(game)>
[Yamaha PSR-175 Keyboard]: <https://www.yamaha-keyboard-guide.com/yamaha-psr-175.html>
[W3C HTML Validator]: <https://validator.w3.org/>
[W3C CSS Validator]: <http://jigsaw.w3.org/css-validator/>
[StackOverflow - Solution1]: <https://stackoverflow.com/questions/19674380/execute-jquery-function-after-another-function-completes>
[StackOverflow - Solution2]: <https://stackoverflow.com/questions/6120931/how-to-count-the-number-of-certain-element-in-an-array>
[Dropbox]: <https://www.dropbox.com/sh/z49xw5kvydjaem3/AABvWeLA1JTnCTqTNKjpEJZPa?dl=0>
[Wallpapercave]: <https://wallpapercave.com/carbon-wallpaper-hd>
[Jasmine Test Results Page]: <(https://github.com/selinaerhabor/memory-game/tree/master/Tests/browser-tests/Result%20-%20Jasmine%20Tests.png)>
[Initial Ideas - Wireframes]: <https://github.com/selinaerhabor/memory-game/tree/master/Initial%20Ideas%20-%20Wireframes>





