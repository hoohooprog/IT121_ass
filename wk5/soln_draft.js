let scores = [];
let roundNumber = 0;

let msg = (){
	let sum_score = 0;
	for (i=0; i<scores.len; i++){
		sum_score += scores[0];
	}
	avg_score = sum_scores/scores.len;
	return `Average score is ${avg_score}`
}

do ( 
	//request_user_score parseInt;
	//add to scores array
	scores = prompt(`Enter test score
			or enter 999 to end entries`)
	)
while ( parseInt(scores) != 999 )

// final msg
alert( msg() );



 
 