let age = 10;
let ageLimit = 18;

if (age >= ageLimit) {
  console.log("you can get drivers license");
} else if (age < ageLimit) {
  console.log("you cant get drivers license");
} else {
  console.log("eror 404 , contact support or call us +559944423");
}

// data type string

let myName = "Sandro";

let greeting = "hello";
let greeting2 = "hello";
let FullText = `${greeting} ${myName} ! Welcome Back`;

let textLenght = FullText.length - 1;

console.log(FullText[textLenght]);

//

console.log(FullText.toUpperCase());
console.log(FullText.toLowerCase());

let greetings = "helllo";
console.log(greetings.lastIndexOf("e"));

console.log(greetings.includes("helllo"));

if (greetings.includes("helllo")) {
  console.log("ეს წინადადება შეიცავს სიტყვა Helllo-ს");
} else {
  console.log("ეს წინადადება არ შეცავს სიტყვა Helllo-ს");
}

let userName = prompt("დაწერეთ მხოლოდ თავენი სახელი");

if (userName.includes(" ")) {
  console.log("არ უნდა შეიცავდეს space-ს");
} else {
  console.log(`Hello, ${userName}`);
}
