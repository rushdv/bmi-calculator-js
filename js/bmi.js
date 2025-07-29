/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// let height = parseFloat(prompt("Enter your height in meters: ")) ; // in metere
// let weight = parseFloat(prompt("Enter your weight in kg: ")) ; // in kg

let height = 1.75;
let weight = 65;

let bmi = weight / (height * height );

console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5){
    console.log("You are underweight.");
}
else{
    if(bmi <= 24.9){
        console.log("You are normal.")
    }
    else{
        if( bmi <= 29.9){
            console.log("You are overweight.");
        }
        else{
            console.log("You are obese.")
        }
    }
}