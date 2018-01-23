$(document).ready(function(){
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//COMPUTER'S RANDOM NUMBER GENERATOR
var yourPick = 0;
var randomSelection = 0;
var computerValueOptions = [];
var randomNum = 0;
    for (var i = 19; i <= 120; i++) {
        computerValueOptions.push(i);
        // console.log(computerValueOptions);
    }
randomSelection = Math.floor(Math.random() * computerValueOptions.length);
$("#computer-pick").text(randomSelection);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//BUTTON RANDOM NUMBER GENERATOR 
var numOptions = 0;
var crystalValueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
randomNum = numOptions[Math.floor(Math.random() * crystalValueOptions.length)];
$("#button1").attr("value", randomNum);
$("#button2").attr("value", randomNum);
$("#button3").attr("value", randomNum);
$("#button4").attr("value", randomNum);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ADD TO SCORE WHEN BUTTONS ARE PRESSED
// $("button").on("click", addToScore() {
// 	var sum = 0;
// 	lockGame = false;
// 	if (lockGame !== true) {
// 		yourPick = $(this).attr("value");
// 		console.log("Your Pick: " + randomSelection);
// 		console.log("My Num: " + $(this).val());
// 		sum += parseInt(yourPick);
// 		$("#score").html(sum);
// 	}	
// });//AddToScore Function closing brackets



});//document ready closing brackets

//If the numbers match you let them know.
// 	if (sum === computerPick) {
// 		$("#result").html("Yep! You got it! Refresh the page to play again.");
// 		// resetGame();
// 		//computer picks a new number
// 		var computerPick = Math.floor(Math.random() * 50) + 1;
// 	}
// 	// If the numbers did not match. You also let them know
// 	else if (sum >= computerPick) {
// 		$("#result").html("Nope. Refresh the page to play again.");
// 		lockGame = true;
// }

// resetGame();
// 		//assign new values to crystals
// 		function resetGame() {
// 		//computer picks a new number
// 		var computerPick = Math.floor(Math.random() * 50) + 1;
// 		//array between 1 -12 to choose from
// 		var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// 		randomNum = numOptions[Math.floor(Math.random() * numOptions.length)]
// 		$("#button1").attr("data-crystalvalue", randomNum);
// 		$("#button2").attr("data-crystalvalue", randomNum);
// 		$("#button3").attr("data-crystalvalue", randomNum);
// 		$("#button4").attr("data-crystalvalue", randomNum);
	// }//sure delete the lockgame if you dare....jk.

	// }
	// 
