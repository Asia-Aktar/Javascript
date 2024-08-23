

// Function to display a dynamic message
function creatyMessage (name, language, year){

   const underline = "-" .repeat(Name.length);
     const message =`${Name}, you have been coding in ${language} since ${year}.
 ${underline}`;

console.log(message);
}
// template literals 
let language = "Python";
let Name= "sara";
let year = 2018;

let output = ` ${Name} you have been coding in ${language}, since ${year}`;

// console.log (output);

creatyMessage(Name, language, year);

