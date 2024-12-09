/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 40;
let regularRent = 800;

let Children = age <= 10;
let student = age > 10 && age <= 25;
let seniorCitizen = age >= 60;


if(Children){
    console.log("Bust rent: You're free");
}
else if(student){
    console.log('Bus rent: '+ (regularRent - (regularRent * (50 / 100))));
}
else if(seniorCitizen){
    console.log('Bus rent: '+ (regularRent - (regularRent * (15 / 100))));
}
else{
    console.log("Bus rent: " + regularRent);
};

