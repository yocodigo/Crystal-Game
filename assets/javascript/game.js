$(document).ready(function(){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
$("button").on("click", function() {
        var myAudio = $("#myAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
 });	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//DECLARE & INITIALIZE GLOBAL VARIABLES
	var computerPick = 0;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//COMPUTER'S RANDOM NUMBER GENERATOR
	resetComputerPick();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	//CRYSTAL RANDOM NUMBER GENERATOR 
	resetCrystalValues();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//ADD TO SCORE WHEN CRYSTALS ARE CLICKED
	$("img").on("click", function() {
		lockGame = false;
		$("#result").html("---------------");
		if (lockGame !== true) {
			yourPick = $(this).attr("value");
			console.log("Your Pick: " + computerPick);
			console.log("My Num: " + $(this).val());
			totalScore = totalScore + parseInt(yourPick);
			$("#score").html(totalScore);
			console.log("Greater than computer's pick? " + (totalScore == computerPick));
		}		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
		//COMPARE YOUR PICK WITH COMPUTER'S PICK
		if (totalScore == computerPick) {
			$("#result").html("You Win!");
			resetComputerPick();
			resetCrystalValues();
			wins++;
			$("#win").html(wins);
			totalScore = 0;
			$("#score").html(totalScore);

		}
		else if (totalScore >= computerPick) {
			$("#result").html("You Lose!");
			lockGame = true;
			resetComputerPick();
			resetCrystalValues();
			losses++;
			$("#loss").html(losses);
			console.log("you have " + losses + " losses!");
			totalScore = 0;
			$("#score").html(totalScore);
	;	}
	});//AddToScore Function closing brackets
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
	//RESET CRYSTAL VALUES
	function resetCrystalValues() {
	var numOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		randomNum = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum2 = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum3 = numOptions[Math.floor(Math.random() * numOptions.length)]
		randomNum4 = numOptions[Math.floor(Math.random() * numOptions.length)]
		$("#img1").attr("value", randomNum);
		$("#img2").attr("value", randomNum2);
		$("#img3").attr("value", randomNum3);
		$("#img4").attr("value", randomNum4);
	}
});//document ready closing brackets