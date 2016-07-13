
$(document).ready(function(){
	var randNum = randomNum();
	var guessUser;
	var amtGuess = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/* New Game clears random num, clears guesses, generates new random num */

  	$(".new").on('click', function(){
  		randNum = randomNum();
  		amtGuess = 0;
  		$('#count').text(amtGuess);
  	});

  	/* Create a random number between 1 and 100*/

  	function randomNum (){

  		return Math.floor((Math.random() * 100) + 1);
  		

  	};

  	/*submit guess and track how many guesses and how close to the number*/
  	$('form').submit(function(e){
  		e.preventDefault();
  		guessUser = parseInt($('#userGuess').val());

  		if (guessUser < 1 || guessUser > 100){
  			alert("Guess must be between 1 and 100");
  			amtGuess--;
  		}
  		$()
  		amtGuess++;
  		$('#count').text(amtGuess);
  	});

/*Function to compare how close the guess was*/
  	function howClose(num){
  		var numDiff = Math.abs(randNum - guessUser);
  		
  		if(numDiff > 70 ){
  			$('h2#feedback').text('Artic Cold');
  		}else if(numDiff < 70 && numDiff > 50){
  			$('h2#feedback').text('Ice Cold');
  		}else if(numDiff < 50 && numDiff > 30){
  			$('h2#feedback').text('Cold');
  		}else if(numDiff < 30 && numDiff > 20){
  			$('h2#feedback').text('Luke Warm');
  		}else if(numDiff < 20 && numDiff > 10){
  			$('h2#feedback').text('Warm');
  		}else if(numDiff < 10 && numDiff > 5){
  			$('h2#feedback').text('Hot');
  		}else if(numDiff < 5 && numDiff > 1){
  			$('h2#feedback').text('So Hot In Here!');
  		}else(numDiff == 0){
  			$('h2#feedback').text('Boom You Guessed It!');
  		}


  	};

});


