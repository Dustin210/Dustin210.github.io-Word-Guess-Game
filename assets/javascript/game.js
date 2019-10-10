//variables
var nameOptions = ["dustin", "beth", "jon","brynn","alyssa","henry"];
var selectedName = "";
var lettersInName =[];
var nameLines =0;
var linesAndCorrect = [];
var wrongNames = [];

// counts
var winCount = 0;
var lossCount= 0;
var guessesLeft= 9;

function startGame () {
    selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    lettersInName = selectedName.split("");
    nameLines = lettersInName.length;

    //game reset
    guessesLeft = 9;
    wrongNames = [];
    linesAndCorrect = [];

    // loop, list the blanks and correct guesses, link to HTML
    for (var i=0; i<nameLines; i++){
        linesAndCorrect.push("_");
    }
    
    document.getElementById("nameToGuess").innerHTML = linesAndCorrect;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lossCount").innerHTML = lossCount;
    document.getElementById("winCount").innerHTML = winCount;
    

    console.log(selectedName);
    console.log(lettersInName);
    console.log(nameLines);
    console.log(linesAndCorrect);

}

function checkLetters(letter) {
   
    var isLetterInName = false;
    for (var i=0; i<nameLines; i++){
        if(selectedName[i] == letter) {
            isLetterInName = true;
           
        }
    }

    if(isLetterInName) {
        for (var i=0; i<nameLines; i++) {
            if(selectedName[i] == letter) {
                 linesAndCorrect = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(linesAndCorrect);


}

function roundComplete() {
    console.log("The Win count:" + winCount + "| Loser count:" + lossCount +"| Guesses left:" + guessesLeft);
}



//start code
startGame();


//keys

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
   
    console.log(letterGuessed);
}



//Functions