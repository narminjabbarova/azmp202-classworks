// let age = prompt("Zehmet olmasa yashinizi daxil  edin.")
// if(age>=0){
//   if(age>=65){
//     alert("Pensiya uchun uygunsunuz")
//   }
//   else{
//     alert("Pensiya uchun uygun deyilsiniz")
//   }

// }

// else{
//   alert("Yashiniz duzgun deyil")
// }

// task 2

// let teref1 = prompt("1-ci terefi daxil edin: ");
// let teref2 = prompt("2-ci terefi daxil edin: ");
// let teref3 = prompt("3-cu terefi daxil edin: ");
// if(teref1==teref2 && teref2==teref3){
//   alert("beraberterefli uchbucag")
// }
// else{
//   alert("muxtelifterefli uchbucag")
// }

// task3

// let number = prompt("enter the number: ");
// if(number>0){
//   alert("is positive")
// }
// else{
//   alert("is negative")
// }

// task4

// let month = +prompt("enter the month: ");
// switch (month) {
//   case 1: alert("january")
//      break;

//     case 2: alert("february")
//     break;

//     case 3: alert("march")
//     break;

//     case 4: alert("april")
//     break;

//     case 5: alert("may")
//     break;

//     case 6: alert("june")
//     break;

//     case 7: alert("july")
//     break;

//     case 8: alert("august")
//     break;

//     case 9: alert("september")
//     break;

//     case 10: alert("october")
//     break;

//     case 11: alert("november")
//     break;

//     case 12: alert("december")
//     break;

//   default: alert("enter the correct month")
//     break;

// }

// task5

// let number = prompt("enter the number: ");
// if(number>=0){
//   if(number%15==0 ){
//     alert("true")
//   }
// }
// else{
//   alert("enter the correct number: ")
// }

// task6

// let number = prompt("enter the number: ");
// if(number%2==0){
//   alert("bolundu")
// }
// else{
//   alert("enter the correct number")
// }

// task7

// let number1 = prompt("enter the first number: ");
// let number2 = prompt("enter the second number: ");
// if(number1*number2>0){
//   alert("is positive")
// }
// else{
//   alert("is negative")
// }

// task8

// let number = prompt("enter the number: ");
// if (number>1 && number<100){
//   alert("correct number")
// }
// else{
//   alert("enter the another number")
// }

// task9

// let number1 = prompt("enter the first number: ");
// let number2 = prompt("enter the second number: ");
// let number3 = prompt("enter the third number: ");
// if(number1>number2 && number1>number3){
//   alert("the biggest number is number1")
// }
// else if(number2>number1 && number2>number3){
//   alert("the biggest number is number2")
// }
// else if(number3>number1 && number3>number2){
//   alert("the biggets number is number3")
// }

// task10

// let score = +prompt("enter the student score: ");
// if(score>90){
//   alert("A")
// }
// else if(score>80 && score<90){
//   alert("B")
// }
// else if(score>70 && score<80){
//   alert("C")
// }
// else if(score>60 && score<70){
//   alert("D")
// }
// else{
//   alert("F")
// }

// task11

// let age = prompt("enter your age: ");
// if(age>0 && age<18){
//   alert("Yeniyetme")
// }
// else if(age>18 && age<65){
//   alert("Yetkin")
// }
// else{
//   alert("Yashli")
// }

// task11

// let time = +prompt("enter the time: ");
// if(time>6 && time<=12){
//   alert("Sabahiniz xeyir")
// }
// else if(time>12 && time<=17){
//   alert("Gunortaniz xeyir")
// }
// else if(time>17 && time <25){
//   alert("Axshaminiz xeyir")
// }

// task12

// let x = +prompt("enter the x value");
// let y = +prompt("enter the y value");
// if(x>0 && y<0){
//   alert(4*x + 2*y + 4)
// }
// else if(x>0 && y==0){
//   alert( 2*x - y+3 )
// }
// else if(x<0 && y>0){
//   alert(3*x + 4*y+3 )
// }


// 30.10 TASKS
// task1
// for (let i = 0; 1 <=100; i++) {
//  if (i%2 == 0){
//   console.log(i);
//  }
//   }

 // task2
// let count =0
// for (let i = 0; 1 <=100; i++) {
//   if (i%2 == 1){
//     count++
//   }
   
//  }console.log(count);

 // task3
// let sum =0
//  for (let i = 0; 1 <=100; i++) {
//   if  (i%5 == 0){
//     sum+= i
//    console.log(i);
//   }
   
//  }

//  task4-#1
//  let arr =[12,14,35,56,68,93]
//  let sum =0
//  for (let i = 0; i < arr.length; i++) {
//   sum+= arr[i]
//  }
//  console.log(sum);

// #2
//  for (let i = 0; i < arr.length; i++) {
//   if(i%2==1){
//     console.log(arr[i]);
//   }
//  }

 //  #3
// for (let i = 0; i < arr.length; i+2) {
//   console.log(arr[i]);
// }

// #4
// let biggest = array[0]
// for (let i = 0; i < array.length; i++) {  
//   if(array[i]>biggest){
//     biggest = array[i]
//   }
// } 
// console.log(biggest);

// #5
// let biggest = array[0]
// let smallest = array[0]
// for (let i = 0; i < array.length; i++) {  
//   if(array[i]>biggest){
//     biggest = array[i]
//   }
//   if(array[i]<smallest){
//     smallest = array[i]
//   }
// } 
// console.log(biggest - smallest);

// #6
// let number = prompt("enter the number")
// let array =[11,14,34,86,95,23]
// for (let i = 0; i < array.length; i++) {
//   if(number = array[i]){
//     alert(`${array[i]} array'e daxildir`)
//   }
// }

// #7
// const employees = [
//   { name: "Jamil", salary : 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ]
// for (let i = 0; i < employees.length; i++) {
//   if(employees[i].salary>60000){
//     console.log(employees[i].name);
//   }
// }

// #8
// let number = +prompt("enter the number: ")
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial = factorial*i
  
// }
// alert(factorial);

// #9
// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, qu";
// let count = 0;
// for (let i = 0; index < str.length; i++) {
//   if(str[i]=-"o"){
//     count++
//   }
  
// }
// console.log(count);

// #10
// const countries = ["azerbaijan", "norway", "germany", "albania", "america"]
// for (let i = 0; i < countries.length; i++) {
//   if(countries[i][0]= "a"){
//     console.log(countries[i]);
//   }
  
// }

// for (let i = 0; i < countries.length; i++) {
//   if(countries[i][0]= "a" && countries[i][countries[i].length-1]){
//     console.log(countries[i]);
//   }
  
// }

// let n = 427;
// while (n>0) {
//   let reminder = n % 10;
//   console.log(reminder);
//   number = (number - reminder) / 10;
// }

// let number = 753
// let isPrime = true;
// for (let i = 2; i < Math.sqrt(number); i++) {
//   if(number % i === 0){
//    isPrime = false;
//    break;
//   }
  
// }
// isPrime === true
// ? console.log(`${number} is prime`)
// : console.log(`${number} is NOT prime`);


// const scores = [60, 75, 88, 75, 93, 45]
// for (let i = 0; i < scores.length; i++) {
//   sum= sum + scores[i]
// }
// console.log(sum / scores.length);

// for (let i = 0; i < scores.length; i++) {
//   if(scores[i]> scores[i-1]){
//     max = scores[i]
//   }
// }

// console.log(max);







 







