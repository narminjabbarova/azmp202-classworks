// 1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.

// let array = [12,23,43,54,65,67,89,90,100]
// let result = [];
// for (let i = 0; i < array.length; i++) {
//   if(array[i] % 2 == 0){
//     result.push(array[i])
//   }
// }
// let max = Math.max(...result)
// console.log(max);

// 2.Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.

// let result = [];
// for (let i = 0; i < array.length; i++) {
//   if(array[i] % 2 == 1){
//     result.push(array[i])
//   }
// }
// let max = Math.min(...result)
// console.log(min);

// 3.Verilmiş arraydə ən böyük və ən kiçik ədədlərin hasili ilə cəmini müqasiyə edin.

// let array = [12,23,43,54,65,67,89,90,100]
// let kichik = Math.min(...array);
// let boyuk = Math.max(...array);
// let hasil = kichik*boyuk;
// let cem = 0;
// for (let i = 0; i < array.length; i++) {
//   cem+=array[i] 
// };
// if(hasil>cem){
//   console.log("hasil cemden boyukdur.");
// }
// else{
//   console.log("hasil cemden kichikdir.");
// }

// 4.Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.

// let number = prompt("eded daxil edin: ")
// let digit3 = number % 10;
// let digit2 = (number % 100 - digit3) / 10;
// let digit1 = (number - number%100)/100;
// let sum = digit1 + digit2 + digit3;
// alert(`Cem: ${sum}`);

// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.

// kichik = Math.min(...array);
// boyuk = Math.max(...array);
// for (let i = 0; i < array.length; i++) {
//   if(array[i] == boyuk){
//     array[i] = kichik;
//   }
//   else if(array[i] == kichik){
//     array[i] = boyuk;
//   }
// }
// console.log(array);

// 6.Verilmiş arraydə təkrərlanan elementi tapin.

// let array = [12,23,43,54,65,67,89,90,100]
// let check;
// for (let i = 0; i < array.length; i++) {
//   check = array[i];
//   for (let j = i+1; j < array.length; j++) {
//     if(array[j]===chech){
//       console.log(check);
//     }
    
//   }
  
// }

// 7.Verilmiş arraydə ən böyük və ən kiçik ədədin hasilini arrayin ədədi ortasi ilə müqasiyə edin.

// let array = [12,23,43,54,65,67,89,90,100]
// let kichik = Math.min(...array);
// let boyuk = Math.max(...array);
// let hasil = kichik*boyuk;
// let cem = 0;
// for (let i = 0; i < array.length; i++) {
//   cem+=array[i] 
// };
// let edediorta = cem/array.length;
// if(hasil>edediorta){
//   console.log("hasil ededi ortadan boyukdur.");
// }
// else{
//   console.log("hasil ededi ortadan kichikdir.");
// }

// 7-2.Bu array-dəki insanların orta yaşını hesablayın.

// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];
// let ages = 0;
// for (let i = 0; i < people.length; i++) {
//   ages+= people[i].age;
// }
// console.log(ages/people.length);

// 8.city dəyəri Bakı olan və yaşı 20-dən böyük olan insanları tapıb adlarını çıxarın.

// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];
// for (let i = 0; i < people.length; i++) {
//   if(people[i].city =="Bakı" && people[i].age>20){
//     console.log(people[i].name);
//   }
// }

// 10. İki Array-də Eyni Elementlərin Tapılması

// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if(array1[i] ==array2[j]){
//       console.log(array1[i]);
//     }
//   }
  
// }

// 11.Verilmiş arraydə mənfi və müsbət ədədlərin sayini tapin.

// let array =[-10,12,-23,40,60,73,-6,-20];
// let positive_count = 0;
// let negative_count = 0;
// for (let i = 0; i < array.length; i++) {
//   if(array[i]>0){
//     positive_count++;
//   }
//   else if(array[i]<0){
//     negative_count++;
//   }
// }
// console.log(positive_count);
// console.log(negative_count);

// 12.Verilmiş arraydə mənfi ədədlərin hasili ilə müsbət ədədlərin hasilini müqasiyə edin.

// let array =[-10,12,-23,40,60,73,-6,-20];

// let negative_multiply = 1;
// let positive_multiply =1;
// for (let i = 0; i < array.length; i++) {

//   if(Math.sign(array[i]) ==1){
//     positive_multiply *=array[i]
//   }
//   else if (Math.sign(array[i]) == -1){
//     negative_multiply *= array[i]
//   }
// }
// console.log(negative_multiply, positive_multiply);

// 13.Verilmiş arrayi tərsinə çevirib yazin.

// let array =[11,12,14,56];
// let reverse = [];
// for (let i = array.length - 1; i >= 0; i--) {
//   reverse.push(array[i])
// }
// console.log(reverse);


