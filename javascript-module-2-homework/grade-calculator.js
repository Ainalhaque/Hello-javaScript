/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 30;

if(score >= 90){
    console.log("Result A");
}
else if(score >= 80){
    console.log("Result B");
}
else if(score >= 70){
    console.log("Result C");
}
else if (score >= 60) {
    console.log("Result D");
}
else{
    console.log("Result F")
}

