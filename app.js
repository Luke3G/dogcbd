//This will work it is true//
var x = 0; 
while (x < 5) {
    console.log(x);
    x = x + 1;
};
//This will not work it is not ture//
var x= 5;
while (x<5) {
    console.log(x);
    x = x + 1;
}

//for loop//
for(var i=0; i<=20; i++) {
    if(i % 2 ===0){
    console.log(i + `is even`) 
} else {
    console.log(i + `is odd`)
}
}
//if else statements//
var money= 1500.00;
var bills= 2500.00;
if (money > bills) {
    console.log("You are covered!")
}
else { console.log("uh-oh!")
}; 

const today= new Date();
console.log(today);
//returns the current day in number form//
const dayNumber= today.getDay();
console.log(dayNumber);
//storing my output location//
const element=document.getElementById("message1")

//Display A diffrent message every day for dog cbd//

function specail () {
    if (dayNumber==1){
    return '1/2 off all oils';
} else if (dayNumber == 2) {
    return '2-for-1 treats';
} else if (dayNumber == 3) {
    return 'buy one get on';
} else if (dayNumber == 4) {
    return '2 for 1';
} else if (dayNumber == 5) {
    return 'bring a friend';
} else if (dayNumber == 6) {
    return 'Buy two edibles get one free'
} else if (dayNumber == 7) {
    return 'Brunch and free samples'
} else (element.classList.add("hideme"))
}
console.log('you got a' + specail ());
element.innerHTML='Check out The Specital Today' + '</br>' + specail();

//for grade excercise//

function assignGrade(score){
if(score > 90) {
    return 'A';
}else if(score > 80 && score < 90) {
    return 'B';
}else if(score > 70 && score < 80){
    return 'C';
}else if(score > 60 && score < 70){
    return 'D';
}else {
    return 'F';
}
}

console.log(`You got  ` + assignGrade(95));
console.log(`You got  ` + assignGrade(68));
console.log(`You got  ` + assignGrade(22));
console.log(`You got  ` + assignGrade(78));

var yourAge = window.prompt("Please Enter Your Age: ")
  if (yourAge < 13)
   window.alert("You are" + " " + yourAge + " " + "years old, you must be at least 18 to visit this site!");
  if (yourAge >= 13)
   window.alert("You are" + " " + yourAge + " " + "Thank You For Choosing Dog CBD Treats!");
  if (yourAge < 18)
   location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

//switch, case, break//

   switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("demo").innerHTML = "Today is " + day;

//   //array literal//
//   // assign the array to a variable//
//   const colors=['maroon','black','blue','orange', 'red'];
//   const myAges=[21, 18, 16, 15, 7];
//   const compNums=[12>12, 9==='nine', 1==2, 'eight'=== 'EIGHT', 5.=5 ];

//   //JS Keyword//
//   //build in javascript methods new Array//

//   var colors= new Array('maroon','black','blue','orange', 'red');
//   var myAges= new Array(21, 18, 16, 15, 7);
//   var compNums= new Array(12>12, 9==='nine', 1==2, 'eight'=== 'EIGHT', 5.=5);

//   //JS Constructor method//
  
//   colors[0]='marroon';
//   colors[1]='black';
//   colors[2]='blue';
//   colors[3]='orange';
//   colors[4]='red';


  var Classmates= new Array('Emily', 'Anthony', 'Michael', 'Luz', 'Aaron', 'Anna', 'Shelby')
  console.log(Classmates.length);

  //loop over an array//
  //a for loop//
  for(i=0; i<Classmates.length; i++) {
      console.log(Classmates);
  }

  //array methods//
//push adds a item to the end of a array + need to add a value/names//
//pop removes the last item from the array//
//unshit adds a item at the beginning of the array + have to add a value/name//
//shift removes a item from the beginning of the array//
//.indexOf find a spefic index in the array and return where it is in your array//

 Classmates.splice(1, 0, 'Ali');

  console.log(Classmates.indexOf('Ali'));

var sodas= new Array('coke', 'pepsi', 'Dr. Pepper', 'Sprite')

console.log(sodas)

var family= new Array('Charlie', 'Angie', 'Marcus', 'Nick', 'Landon', 'Carolyn')

console.log(family)
      
//solution//
var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}
for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}

//object literal//
var sibling= {
    name: "Mark",
    age: 21,
    single: false,
    children: false,
    order: "younger"
};

sibling.single=true;
sibling.gender="male";
delete sibling.age;


var meeting= sibling.name + sibling.age + sibling.single + sibling.gender;

console.log(meeting);

document.getElementById("demo").innerHTML= sibling.name;

//new kewword setting the values//

// var sibling= new Object();
// sibling.name="Mark";
// sibling.age= 21;
// sibling.single= false;
// sibling.children=false;
// sibling.order="younger";


const recipe= {
    title: "mole",
    serving: 2,
    ingredients: ['cumin ', 'cinnamon', 'cocoa']
};
document.getElementById('title').innerHTML='Title:' + recipe.title;
document.getElementById('serving').innerHTML='ServingSize:' + recipe.serving;
document.getElementById('ingredients').innerHTML='ingredients' + recipe.ingredients;

for(var i=0; i<recipe.ingredients.length; i++)

console.log(`${recipe.ingredients[i]}`);

//Reading List//

var books = [
    {
     title: 'To Kill a Mockingbird',
     author: 'Harper Lee',
     alreadyRead: true
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      alreadyRead: true
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
      alreadyRead: true
    },
    {
      title: 'Watchmen',
      author: 'Alan Moore , Dave Gibbons',
      alreadyRead: false
    }
    ];
  
  for (var i = 0; i < books.length;  i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if(book.alreadyRead) {
      console.log('Was Read ' + bookInfo);
    } else {
      console.log('I need to read ' + bookInfo);
    }
    
  }

  //car dealership//

  var caddy = {
      make: "Ford",
      model: "Mustang"

  }

