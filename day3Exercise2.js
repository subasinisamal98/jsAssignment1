//Q.1
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
base = 20;
height = 10;
let area = 0.5 * base * height;
console.log(area);

//Q.2
let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");
sideA = 5;
sideB = 4;
sideC = 3;
let perimeter = sideA + sideB + sideC;
console.log(perimeter)

//Q.3
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");
let area2 = length * width;
let perimeter2 = 2 * (length + width);
console.log(area2);
console.log(perimeter2)

//Q.4
const pi = 3.14;
let radius = prompt("Enter the radius of the circle:");
let area3 = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(area3);
console.log(circumference);

//Q.5
const slope = 2; 
const yIntercept = -2; 
const xIntercept = -yIntercept / slope; 
console.log(slope);
console.log(yIntercept);
console.log(xIntercept);

//Q.6
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope1 = (y2 - y1) / (x2 - x1);
console.log(slope);

//Q.7
const comparison = slope === slope1 ? "Slopes are equal" : "Slopes are different";
console.log(comparison)

//Q.8
const calculateY = (x) => x ** 2 + 6 * x + 9;
for (let x = -10; x <= 10; x++) {
    const y = calculateY(x);
    const result = (y === 0) ? `y is 0 at x = ${x}` : `y is ${y} at x = ${x}`;
    console.log(result);
}
//Q.9
const hours =(prompt("Enter hours:"));
const ratePerHour =(prompt("Enter rate per hour:"));
hours= 40;
ratePerHour= 28;
const weeklyEarnings = hours * ratePerHour;
console.log(weeklyEarnings);

//Q.10
const name = prompt("Enter your name:");
const say = name.length > 7 ? "Your name is long." : "Your name is short.";
console.log(say);

//Q.11
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
const say1 = firstName.length > lastName.length 
    ? `Your first name, ${firstName} is longer than your family name, ${lastName}.` 
    : firstName.length < lastName.length 
    ? `Your family name, ${lastName} is longer than your first name, ${firstName}.` 
    : `Your first name, ${firstName} and your family name, ${lastName} are of the same length.`;
console.log(say1);

//Q.12
let myAge = 500;
let yourAge = 250;
let ageDifference = myAge - yourAge;
let say2 = `I am ${ageDifference} years older than you.`;
console.log(say2);

//Q.13
const birthYear = parseInt(prompt("Enter birth year:"));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const say3 = age >= 18 
    ? `You are ${age}. You are old enough to drive.` 
    : `You are ${age}. You can't drive.`;
console.log(say3);

//Q.14
const years =(prompt("Enter number of years you live:"));
const totalYears = years || 100; 
const secondsInOneYear = 365 * 24 * 60 * 60;
const totalSeconds = totalYears * secondsInOneYear;
console.log(`You lived ${totalSeconds} seconds.`);

//Q.15
const now1 = new Date();
const year1 = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); 
const day = String(now.getDate()).padStart(2, '0');
const hours1 = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log(format1);
console.log(format2);
console.log(format3);











