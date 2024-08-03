// 
var a = 1;
var b = true;
console.log(a == b);
// 
var a = 0;
var b = false;
console.log(a == b);
// 
var a = 0;
var b = false;
console.log(a === b);
// 
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
console.log(a + b + c + d - e);
// 
var a = true;
var a = false;
console.log(a + a);
// 
var a = {
    name: "Anurag Bishnoi",
    year: "2005",
    dob: "26/08/2005",
}
console.log(a);
// 
let x = 2;
const y = 3;

console.log(x);
console.log(x = y + 1);
console.log(x = x * y);
//
// if else
let k = 25;
if (k === 25) { console.log("yes equal"); }
else {

    console.log("not equal");
}
// 
let m = 50;
let s = 40;
if (m === s) {
    console.log("m is smaller");
}
else (m > s)
{
    console.log("m is greater");
}
// 
let age = 20;
let canDrink = age >= 21 ? "Yes" : "No";
if (age === canDrink) {
    console.log("age is 18 plus");
}
else (canDrink === age)
{
    console.log("not able to drink");
}

for (let i = 0; i <= 1; i++) {
    console.log(i);

}
// 
setTimeout(() => {
    console.log("js set time out is here");

}, 500);

//
document.querySelector('.topbox').style.backgroundColor = "orange"
document.querySelector('.topbox').style.width = "400px"
document.querySelector('.topbox').style.height = "200px"
document.querySelector('.topbox').style.display = "flex"
document.querySelector('.topbox').style.justifyContent = "center"


// 
document.querySelector('h1').style.color = "gray"
document.querySelector('h1').style.fontFamily = "Impact,sans-serif"
document.querySelector('h1').style.fontSize = "35px"
document.querySelector('h1').style.fontWeight = "400"
document.querySelector('h1').style.textAlign = "center"
document.querySelector('h1').style.display = "flex"
document.querySelector('h1').style.alignItems = "center"

// 

const para_1 = document.createElement("h2");
para_1.innerText = "THIS IS A PARAGRAPH"
para_1.style.backgroundColor = 'skyblue'
para_1.style.padding = '25px'
para_1.style.fontFamily = "Impact,sans-serif"
document.body.appendChild(para_1);
