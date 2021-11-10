// //This will work it is true//
// var x = 0; 
// while (x < 5) {
//     console.log(x);
//     x = x + 1;
// };
// //This will not work it is not ture//
// var x= 5;
// while (x<5) {
//     console.log(x);
//     x = x + 1;
// }

// //for loop//
// for(var i=0; i<=20; i++) {
//     if(i % 2 ===0){
//     console.log(i + `is even`) 
// } else {
//     console.log(i + `is odd`)
// }
// }
// //if else statements//
// var money= 1500.00;
// var bills= 2500.00;
// if (money > bills) {
//     console.log("You are covered!")
// }
// else { console.log("uh-oh!")
// }; 

// const today= new Date();
// console.log(today);
// //returns the current day in number form//
// const dayNumber= today.getDay();
// console.log(dayNumber);
// //storing my output location//
// const element=document.getElementById("message1")

// //Display A diffrent message every day for dog cbd//

// function specail () {
//     if (dayNumber==1){
//     return '1/2 off all oils';
// } else if (dayNumber == 2) {
//     return '2-for-1 treats';
// } else if (dayNumber == 3) {
//     return 'buy one get on';
// } else if (dayNumber == 4) {
//     return '2 for 1';
// } else if (dayNumber == 5) {
//     return 'bring a friend';
// } else if (dayNumber == 6) {
//     return 'Buy two edibles get one free'
// } else if (dayNumber == 7) {
//     return 'Brunch and free samples'
// } else (element.classList.add("hideme"))
// }
// console.log('you got a' + specail ());
// element.innerHTML='Check out The Specital Today' + '</br>' + specail();

// //for grade excercise//

// function assignGrade(score){
// if(score > 90) {
//     return 'A';
// }else if(score > 80 && score < 90) {
//     return 'B';
// }else if(score > 70 && score < 80){
//     return 'C';
// }else if(score > 60 && score < 70){
//     return 'D';
// }else {
//     return 'F';
// }
// }

// console.log(`You got  ` + assignGrade(95));
// console.log(`You got  ` + assignGrade(68));
// console.log(`You got  ` + assignGrade(22));
// console.log(`You got  ` + assignGrade(78));

// var yourAge = window.prompt("Please Enter Your Age: ")
//   if (yourAge < 13)
//    window.alert("You are" + " " + yourAge + " " + "years old, you must be at least 18 to visit this site!");
//   if (yourAge >= 13)
//    window.alert("You are" + " " + yourAge + " " + "Thank You For Choosing Dog CBD Treats!");
//   if (yourAge < 18)
//    location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

// //switch, case, break//

//    switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
//   document.getElementById("demo").innerHTML = "Today is " + day;

// //   //array literal//
// //   // assign the array to a variable//
// //   const colors=['maroon','black','blue','orange', 'red'];
// //   const myAges=[21, 18, 16, 15, 7];
// //   const compNums=[12>12, 9==='nine', 1==2, 'eight'=== 'EIGHT', 5.=5 ];

// //   //JS Keyword//
// //   //build in javascript methods new Array//

// //   var colors= new Array('maroon','black','blue','orange', 'red');
// //   var myAges= new Array(21, 18, 16, 15, 7);
// //   var compNums= new Array(12>12, 9==='nine', 1==2, 'eight'=== 'EIGHT', 5.=5);

// //   //JS Constructor method//
  
// //   colors[0]='marroon';
// //   colors[1]='black';
// //   colors[2]='blue';
// //   colors[3]='orange';
// //   colors[4]='red';


//   var Classmates= new Array('Emily', 'Anthony', 'Michael', 'Luz', 'Aaron', 'Anna', 'Shelby')
//   console.log(Classmates.length);

//   //loop over an array//
//   //a for loop//
//   for(i=0; i<Classmates.length; i++) {
//       console.log(Classmates);
//   }

//   //array methods//
// //push adds a item to the end of a array + need to add a value/names//
// //pop removes the last item from the array//
// //unshit adds a item at the beginning of the array + have to add a value/name//
// //shift removes a item from the beginning of the array//
// //.indexOf find a spefic index in the array and return where it is in your array//

//  Classmates.splice(1, 0, 'Ali');

//   console.log(Classmates.indexOf('Ali'));


//        //Create an Array called "donuts" that list 7-10 different items
//   //1 Using a loop, iterate through this array and console.log all the donuts
//   //2 Write the command to remove the first donut fron the array
//   //3 Write the command to remove the last donuts from the array
//   //4 Write the command to add a new donut "lime zest" to the front of the array
//   //5 Write the command to add another donut "lemon pie" to the end of the array
//   //6 Use either the join() or toString() method to convert an array to a string.
//   //7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
//   //8 Write the command that gives the indexOf where "chocolate" is located.
//   //9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
//   //10 **Using the splice method, remove one donut from the array and add another.
//   //11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
//   //12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
   

var fortunes = [
    
    "You will win a <em>million</em> dollars! Yay!",
    "You will step on a piece of gum.",
    "You will be attacked by a fluffy bunny.",
    "You will lose your wallet",
    "You will see a monster",
    "You will win a new Tesla",
    "You will find true love",
  ];
  
  function tellFortune() {
    
    
    var randomNumber = Math.floor(Math.random() * fortunes.length);
  
    
    console.log("random number: " + randomNumber);
  
    
   document.getElementById("fortune").innerHTML = fortunes[randomNumber];
  }
  
  function reset() {
    
    
  }