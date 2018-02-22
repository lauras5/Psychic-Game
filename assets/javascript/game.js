$(document).ready(function() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lettersLength = letters.length
    var letterToGuess = ''
  
    // generates random letter
    var rLetter = (letters[Math.floor(Math.random() * lettersLength)])
      console.log(rLetter)
    var wins = 0;
        $(".wins").html("Wins : " + wins)
    var losses = 0;
        $(".losses").html("Losses : " + losses)
    var guessesLeft = 10
        $(".guessesLeft").html("You have " + guessesLeft + " guesses left!")
    var guesses = []
        $(".guesses").html([])
    var newLetter = function() {
        this.letterToGuess = this.letters[Math.floor(Math.random() * this.lettersLength)]
    }


    var reset = function() {
        guesses = $(".guesses").html([" "])
        guessesLeft = 9;
        rLetter = (letters[Math.floor(Math.random() * lettersLength)])
    }

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var valid = (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122);
        if (!valid) {
            e.preventDefault();
        }

        console.log(userGuess)
        if(guessesLeft > 0){
            if(userGuess != rLetter) {
                // alert("wrong!")
                $(".guesses").append(userGuess);
                guessesLeft--
                $(".guessesLeft").html("You have " + guessesLeft + " guesses left!")
            }
            if(userGuess === rLetter) {
                alert("You Win! You're a Psychic! The letter was '" + rLetter + "'!")
                wins++
                $(".wins").html("Wins : " + wins)
                reset()
            }
        }
        
        else if (guessesLeft === 0) {
            alert("You Lose! The answer was '" + rLetter + "'. Try again!")
            losses++
            $(".losses").html("Losses : " + losses)
            reset()
        }
    }
})
