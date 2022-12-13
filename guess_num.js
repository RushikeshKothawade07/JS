let x = Math.floor((Math.random() * 10) + 1)
let n;
let pts=100;
do{
   n = prompt("Enter your guess : ( 1 - 10 )")
  if(n!=x){
    console.log("OOPS! Try again!")
    pts=pts-10;
  }
  if(n<x){
    console.log("Close!! Increase it a little bit!")
  }
  else if(n>x){
    console.log("Close!! Decrease it a little bit!")
  }
}while(n!=x)

console.log("Wow! your guess is correct !!")
console.log(`Your Score : ${pts} points. `)
console.log("Well Played!!")
