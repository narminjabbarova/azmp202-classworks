// 1) Write a JavaScript program to create a class called "Person" with properties 
// for name, age and country. Include a method to display the person's details.
// Create two instances of the 'Person' class and display their details.

// class Person {
//   constructor(name, age, country){
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   displayDetails(){
//     console.log(this.name, this.age, this.country);
//   }
// }
// const person1 = new Person("Narmin", 19, "Azerbaijan");
// person1.displayDetails();

// const person2 = new Person("John", 30, "USA");
// person2.displayDetails();


// 2)Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide 
// functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) 
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi
// prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi.

class CustomMath {
  constructor(number) {
    this.value = number;
  }

  plus(num) {
    this.value += num;
    return this;  
  }

  minus(num) {
    this.value -= num;
    return this;  
  }

  multiply(num) {
    this.value *= num;
    return this;  
  }

  divide(num) {
    this.value /= num;
    return this;  
  }

  getResult() {
    return this.value;  
  }
}

var result = new CustomMath(50).plus(6).minus(30).multiply(3).divide(2).getResult();
console.log(result); 
