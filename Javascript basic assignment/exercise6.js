//Grade Checker

let score = 
parseInt(prompt("Enter your score (0-100)"));
if (score >= 70 && score <= 100)
{
    alert("Excellent");
}else is (score >= 50 && score < 70) {
    alert("Good");
}else if (score >= 0 && score < 50){
    alert("Needs Improvement");
}else{
    alert("Invalid score");
}

//Sample output
//Prompt: Enter your score
//User Input: 65
//Alert: Good
