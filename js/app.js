
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
  		$('#userGuess').val('');
  		$('ul#guessList').html('');
  		$('h2#feedback').text('Make your Guess!')
  	});

  	/* Create a random number between 1 and 100*/

  	function randomNum (){

  		return Math.floor((Math.random() * 100) + 1);
  		

  	};

  	/*submit guess and track how many guesses*/
  	$('form').submit(function(e){
  		e.preventDefault();
  		guessUser = parseInt($('#userGuess').val());

  		if (guessUser < 1 || guessUser > 100){
  			alert("Guess must be between 1 and 100");
  			amtGuess--;
  		}
  		var numDiff = Math.abs(randNum - guessUser);

  		howClose(numDiff);
  		$('ul#guessList').append('<li>' + guessUser + '</li>');
  		amtGuess++;
  		$('#count').text(amtGuess);
  		$('#userGuess').val('');
  	});

/*Function to compare how close the guess was*/
  	function howClose(num){

  		if(num >= 70 ){
  			$('h2#feedback').text('Artic Cold');
  		}
  		else if(num < 70 && num >= 50){
  			$('h2#feedback').text('Ice Cold');
  		}
  		else if(num < 50 && num >= 30){
  			$('h2#feedback').text('Cold');
  		}
  		else if(num < 30 && num >= 20){
  			$('h2#feedback').text('Luke Warm');
  		}
  		else if(num < 20 && num >= 10){
  			$('h2#feedback').text('Warm');
  		}
  		else if(num < 10 && num >= 5){
  			$('h2#feedback').text('Hot');
  		}
  		else if(num < 5 && num >= 1){
  			$('h2#feedback').text('So Hot In Here!');
  		}
  		else if(num == 0)
  			$('h2#feedback').text('Boom You Guessed It!');
  		


  	};

});


