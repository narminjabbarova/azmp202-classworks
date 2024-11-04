// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə
//  içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın

// function check(sentence, word) {
//   console.log(sentence.indexOf(word));
// }
// check("she is very beautiful girl", "beautiful")

//  Daxil edilən cümlədə ən uzun sözü tapın.

// function longest(sentence) {
//   let words = sentence.split(" ");
//   longest_word = words[0].length;
//   for (let i = 0; i < words.length; i++) {
//     if(words[i].length>longest_word){
//       longest_word = words[i].length
//     }
//   }
//   console.log(longest_word);
// }
// longest("she is her best version")

// Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.
//  Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu 
//  sözlərin anagram olub-olmadığını tapmalıdır. Anagram sözlər yerləri fərqli 
//  olsa da eyni hərflərdən təşkil olunmuş sözlərdir.

// 1
// function anagrams(str1, str2) {

//   if (str1.length !== str2.length) {
//       return false;
//   }
//   const sortedStr1 = str1.toLowerCase().split('').sort().join('');
//   const sortedStr2 = str2.toLowerCase().split('').sort().join('');
//   return sortedStr1 === sortedStr2;
// }


// const word1 = "listen";
// const word2 = "silent";
// console.log(anagrams(word1, word2));

// 2
// function anagram(word1, word2) {
//   let isAnagram = false
//   for (let i = 0; i < word1.length; i++) {
//     if(word2.includes(word1[i])){

//       isAnagram = true;
//     }
//     else{
//       isAnagram = false
//     }
//   }
//   if(isAnagram == false){
//     console.log("is not anagram");
//   }
//   else{
//     console.log("is anagram");
//   }
// }
// anagram("heart", "earth")

// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.

// function convertToUpper(sentence) {
//   let letters = sentence.split("");
//   let string = "";
//   for (let i = 0; i < letters.length; i++) {
//     string+=letters[i].toUpperCase()
//   }
//   console.log(string);
// }
// convertToUpper("italy is the best country")

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// function reverse(sentence) {
//   console.log(sentence.split("").reverse().join(""));
// }
// reverse("she loves travelling")

// # Arrayi , azdan coxa düzün.

// let array = [12, 56, 96, 47, 65, 15, 20, 5];
// array.sort((a, b) => a - b);
// console.log(array);



