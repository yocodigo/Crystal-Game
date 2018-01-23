
$(document).ready(function() {
	var totalScore = 0;
	var randomRed = 0;
	var randomGreen = 0;
	var randomBlue = 0;
	var randomYellow = 0;
	var computerNum = Math.floor(Math.random() * 50);


//Game Initialization //generate random number. figure out how to add to document
$("randomNum")

	

});

//function that will generate a unique random number for each button when they are clicked on
$("button").on("click", function() {

	
	//function for green crystal
	randomGreen = Math.floor(Math.random * 10);
		
	//function for red crystal
	randomRed = Math.floor(Math.random * 10);

	//function for yellow crystal
	randomGreen = Math.floor(Math.random * 10);

	//function for blue crystal
	randomGreen = Math.floor(Math.random * 10);

});


//function to add wins and losses
 if (yourPick == computerPick) {
            $("#result").html("Yep! You got it! Refresh the page to play again.");

          }

          // If the numbers did not match. You also let them know
          else {
            $("#result").html("Nope. Refresh the page to play again.");
            lockGame = true;
          }
        }//sure delete the lockgame if you dare....jk.



//Computer Selection Process
		// var computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		// var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		// computerGuess.textContent;
		// var maxValue = 10;
		// //Compare user and computer selections
	 // 	if (userGuess != computerGuess) {
		// 	if (guessCount > 9) {
		// 		lossCount.textContent++;
		// 		alert("YOU LOSE! Start Over.");
		// 		guessCount.textContent = 0;
		// 		winCount.textContent = 0;
		// 	}else {
		// 		guessCount.textContent++;
		// 		console.log("Your guess is " + userGuess);
		// 		console.log("the computer's guess is " + computerGuess);
		// 	}	
		// }else {
		// 	// (userGuess == computerGuess)
		//  	winCount.textContent++;
		// 	guessCount.textContent = 0;	
		// 	alert("YOU WIN!");				
		// }

//function for score


