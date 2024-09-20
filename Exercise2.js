//Q.1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//Q.2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Q.3
let a ='10';
let b = 10;
console.log(typeof a === typeof b);  

let c = Number(a);
console.log(typeof c === typeof b);

//Q.4
let x = parseFloat('9.8');
let y = 10;
console.log(x === y);  

x = y;
console.log(x === y) ; 

//q.5
let ab = 'Python';
let bc = 'Jargon';
console.log(ab.includes('on'));
console.log(bc.includes('on'));

//Q.6
let sen = 'hope this course is not full of jargon';
console.log(sen.includes('jargon'));

//Q.7
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

//Q.8
let min = 50;
let max = 100;
let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber1);

//Q.9
let randomNumber2 = Math.floor(Math.random() * 256);
console.log(randomNumber2);

//Q.10
let string = 'JavaScript';
let randomIndex = Math.floor(Math.random() * string.length);
let Characters = string[randomIndex];
console.log(Characters)

//Q.11
console.log(
  "1 1 1 1 1\n" +
  "2 1 2 4 8\n" +
  "3 1 3 9 27\n" +
  "4 1 4 16 64\n" +
  "5 1 5 25 125"
);

//Q.12
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(31, 23));











