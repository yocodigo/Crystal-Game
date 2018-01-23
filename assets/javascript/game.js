$(document).ready(function(){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//DECLARE & INITIALIZE GLOBAL VARIABLES
	var computerPick = 0;
	var totalScore = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//COMPUTER'S RANDOM NUMBER GENERATOR
	resetComputerPick();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//BUTTON RANDOM NUMBER GENERATOR 
	resetButtonValues();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//ADD TO SCORE WHEN BUTTONS ARE PRESSED
	$("button").on("click", function() {
		lockGame = false;
		if (lockGame !== true) {
			yourPick = $(this).attr("value");
			console.log("Your Pick: " + computerPick);
			console.log("My Num: " + $(this).val());
			totalScore = totalScore + parseInt(yourPick);
			$("#score").html(totalScore);
			console.log(totalScore == computerPick);
		}	
	});//AddToScore Function closing brackets
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//COMPARE YOUR PICK WITH COMPUTER'S PICK
	if (totalScore == computerPick) {
		$("#result").text("Yep! You got it! Refresh the page to play again.");
		resetComputerPick();
		resetButtonValues();
	}
	else if (totalScore >= computerPick) {
		$("#result").text("Nope. Refresh the page to play again.");
		lockGame = true;
		resetComputerPick();
		resetButtonValues();
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//RESET COMPUTER'S PICK
	function resetComputerPick() {
		var yourPick = 0;
		var computerValueOptions = [];
		var randomNum = 0;
		    for (var i = 19; i <= 120; i++) {
		        computerValueOptions.push(i);
		    }
		computerPick = Math.floor(Math.random() * computerValueOptions.length);
		$("#computer-pick").text(computerPick);
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//RESET BUTTON VALUES
	function resetButtonValues() {
	var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		randomNum = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum2 = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum3 = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum4 = numOptions[Math.floor(Math.random() * numOptions.length)]
		$("#button1").attr("value", randomNum);
		$("#button2").attr("value", randomNum2);
		$("#button3").attr("value", randomNum3);
		$("#button4").attr("value", randomNum4);
	}
});//document ready closing brackets