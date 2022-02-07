let scores = [];


let userPrompt = () => {

	return parseInt(prompt(`Enter test score
or enter 999 to end entries`));

}


let msg = function(scores) {

	let sum_score = 0;
	for (i=0; i<(scores.length); i++){
		sum_score += scores[i];
		alert(`sum_score: ${sum_score}`);
	}
	
	avg_score = sum_score/scores.length;
	alert(`Average score is ${avg_score}`);
}


// 1st input request outside loop to decide whether to collect value or
// exit program
let userInput = userPrompt();


while (userInput != 999) {
	
	scores.push(userInput);

	// 2nd input request to iterate and get more values
	// until user decides to pres 999
	userInput = userPrompt();

}

// calculate average and return string as alert.

msg(scores);