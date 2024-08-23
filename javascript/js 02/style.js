

 //  if the sentence has the specified word, and then use an if-else statement to print a message.

let nature =" 'Hello, How are you?";

let search = "Hello";

let searchValue = nature.toLowerCase().search(search.toLowerCase());

if (searchValue !== -1){
    console.log(search, "has been found");
} else{
  console.log("serch, Not found");
}

// whether the email is a Yahoo address or not.

let yahooAddress = "example@yahoo.com";
let checkFor = "email.com";

let searchEmail = yahooAddress.toLowerCase () .includes(checkFor.toLowerCase());

console.log(searchEmail);

// Prompt the user for their name
let greeting = "Hello, sara";

let userName = prompt("Please enter your name:");

let output = greeting.concat(" ", userName.trim());

// userName = userName.trim();

// let greeting = "Hello, " + userName;

console.log(output);

// / er the number is divisible by 10 or not.

function checkDivisibilityBy10(number) {
    if (number % 10 === 0) {
      console.log(`${number} is divisible by 10.`);
    } else {
      console.log(`${number} is not divisible by 10.`);
    }
  }
  
//   
  checkDivisibilityBy10(50); 
  checkDivisibilityBy10(23); 

//   number is even or odd.

  function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  let num = 7; 
  checkEvenOrOdd(num);

//  is a string or number. 
//   hint: you can use if / else and typeof to check
    
  function checkType(input) {
    if (typeof input === "string") {
      console.log("The given input is a string.");
    } else if (typeof input === "number") {
      console.log("The given input is a number.");
    } else {
      console.log("The given input is neither a string nor a number.");
    }
  }
  
  // Test cases
  checkType("Hello");
  checkType(42); 
  checkType(true); 