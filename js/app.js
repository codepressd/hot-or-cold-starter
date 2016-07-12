
$(document).ready(function(){
	var randNum = randomNum();
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
  	});

  	/* Create a random number between 1 and 100*/

  	function randomNum (){

  		return Math.floor((Math.random() * 100) + 1);
  		

  	};

  	/*submit guess and track how many guesses and how close to the number*/


});


