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
const dayNumber= today.getDay();
console.log(dayNumber);
const element=document.getElementById("message1")


