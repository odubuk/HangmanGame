var words = [
    "blowtorch", "night", "gossip", "acrobatic", "blueberry", "strange", "slippery", "believe", "content", "javascript", "jquery", "honesty", "fortunate", "fraudulent", "demolition", "establishment", "crazy", "graffiti", "love", "foreign", "flags", "lightning", "thunder", "rain", "donation", "extravagant", "present", "halloween", "mohawk", "culture", "experiment", "peppermint", "chocolate", "coding", "python", "html"]

/*
function checkUser(){
    if (playerName === ""){
        playerName = "Player"
    }else{
    }
    console.log("The user's name is " + playerName + ".")
}

var playerName = prompt("Please enter your name");

checkUser();

var printUserName = document.getElementById("username").innerHTML = playerName;
*/

var randomWord = words[Math.floor(Math.random() * words.length)];
console.log('The random word is "' + randomWord + '".');

function guessWord(){
    for (let i = 0; i < randomWord.length; i++){
        randomWord[i] = "_ ";
        return randomWord[i];
    }
}

var guessField = document.getElementById("chosenword");
guessWord();
