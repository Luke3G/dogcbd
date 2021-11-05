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

//Display A diffrent message every day//

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