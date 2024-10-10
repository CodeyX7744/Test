const myButton = document.querySelector('#myButton');
const display = document.querySelector('.show');

myButton.addEventListener("click",greet);
const namePerson = "Kim";

function greet(event) {
    display.textContent = `Hi ${namePerson}!`;
}

console.log(`Hi ${namePerson.toUpperCase()}!`);


let testString ="Kim";


console.log(testString.split("").reverse().join())

const birthyear = 1947;
const thisyear = 1965;
const firstname = "Carlos";
const lastname = "Stevenson";
const fullname = firstname + " " + lastname

let greeting = `Hello! My name is ${firstname} ${lastname} and I am ${thisyear - birthyear} years old.`

console.log(greeting);

let chosenNum = document.querySelector('#num');

chosenNum.addEventListener("change", selNum);

function selNum() {
    let choice = chosenNum.value;
   

    switch (choice) {
        case "one":
            display.textContent = "You chose 1!"
            break;
        case "two":
            display.textContent = "You chose 2!"
            break;
        case "three":
            display.textContent = "You chose 3!"
            break;    
        
    }
}