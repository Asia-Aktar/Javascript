 // 1 Write a function that takes a sentence as input, where each word is written backward, and returns the sentence with words spelled correctly (forward).

// Input: "olleH dlroW"
// Output: "Hello World"

function reverse (str){
    return str. split ("").reverse(). join("");
}
console.log(reverse("dlroW olleH"));

// (2) Write a function that takes an array of numbers where every second number is null (words not in correct order) and replace those null values with the average of the two surrounding numbers.
// Input: [10, null, 20, null, 30]
// Output: [10, 15, 20, 25, 30]

function replaceNullWithAverage(arr) {
    for (let i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] === null) {
            arr[i] = (arr[i - 1] + arr[i + 1]) / 2;
        }
    }
    return arr;
}

const inputArray = [10, null, 20, null, 30];
const outputArray = replaceNullWithAverage(inputArray);
console.log(outputArray);



// (5) Write a function that takes a string where ingredients are concatenated together without commas and returns an array of individual ingredients by splitting the string after each word.

// Input: "TomatoesOnionsLettuce"
// Output: ["tomatoes", "onions", "lettuce"]

function splitIngredients(ingredients){
    return ingredients.split(/(?=[A-Z])/).map(word => word.toLowerCase());
}

console.log(splitIngredients("TomatoesOnionsLettuce"));

// 
// (3) Write a function that removes duplicate items from a shopping list (array of strings).
// Input: ["rum", "gold", "parrot food", "rum", "gold", "map"]
// Output: ["rum", "gold", "parrot food", "map"]


let birds =["rum", "gold", "parrot food", "rum", "gold", "map"];

let splice = birds.splice(3,2, );
console.log(birds);


// Write a function to count how many unique ways the knight can reach the top of the stairs by taking 1, 2, or 3 steps at a time.
// Input: 4
// Output: 7

function countWays(n)
{
    let res = new Array(n + 2);
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;

    for (let i = 3; i <= n; i++)
        res[i] = res[i - 1] + res[i - 2] + res[i - 3];

    return res[n];
}
 
let n = 4;
  console.log(countWays(n));




// **Task:**(8)

// Write a function that takes a phrase as input and returns the words in reverse order.

// Input: "The dragon breathes fire"
// Output: "fire breathes dragon The"

function reverseString (str){
    let value = "The dragon breathes fire";
    console.log(value);
    console.log(value.split(" ").reverse().join(" "));
}

reverseString();

//(10) Write a function that takes an array of numbers representing map fragment IDs and returns the array sorted in ascending order, so the pirate can see the correct order of the map.
// Input: [9, 3, 5, 7, 1]
// Output: [1, 3, 5, 7, 9]

const points = [9,3,5,7,1];
points.sort(function(a,b) {
    return a-b});
    console.log(points);

    // (6)  Write a function that takes the nu mber of knights as input and returns the total number of gold coins needed to distribute in this pattern.Write a function that takes the number of knights as input and returns the total number of gold coins needed to distribute in this pattern.
    // Input: 5
// Output: 15
function totalCoins(n){
    return (n * (n+1)) / 2;
}
console.log(totalCoins(5));

//(7) Write a function that checks if a number is a perfect square. If it is, return the dragon’s age; otherwise, return "Try again!".
// Input: 49
// Output: 49
function dragonAge(number){
    if(Number.isInteger (Math.sqrt(number))){
        return number;
    }else{
        return " Try again!"
    }
}

console.log(dragonAge (49));
console.log(dragonAge(50));

const jantro1 = ["sword", "shield", "potion"];
const jontro2 = ["potion", "ring", "shield"];
function mergeInventories(jontro1, jontro2) {
    // Combine both arrays and convert them to a Set to remove duplicates
    const mergedSet = new Set([...jontro1, ...jontro2]);

    // Convert the Set back to an array
    return Array.from(mergedSet);
}


console.log(mergeInventories(jantro1, jontro2)); 
