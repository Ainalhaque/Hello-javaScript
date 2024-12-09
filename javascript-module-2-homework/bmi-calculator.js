/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


let weight = 74;
let height = 1.73736;

let bmi = weight / height^2;

console.log("Your BMI is " + bmi)

if(bmi < 18.5){
    console.log("You're underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You're normal");
}
else if (bmi >= 25 && bmi <= 29.9){
    console.log("You're overweight");
}
else{
    console.log("you're obese");
};




