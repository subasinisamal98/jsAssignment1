//Q.1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(sentence.split("love").length)

//Q.2
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let matches = sentence2.match(/because/gi); 
let count = matches ? matches.length : 0;  
console.log(count);

//Q.3
const sentence3 ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanText = sentence3.replace(/[%$@#&;!?]/g, '');
const words = cleanText.split(' ');
const wordCount = {};
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});
const mostFrequentWord = Object.keys(wordCount).reduce((a, b) => wordCount[a] > wordCount[b] ? a : b);
console.log(mostFrequentWord);

//Q.4
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let monthlySalary = 5000; 
let annualBonus = 10000;    
let monthlyCoursesIncome = 15000;
let totalAnnualIncome = (monthlySalary + monthlyCoursesIncome) * 12 + annualBonus;
console.log(totalAnnualIncome);
