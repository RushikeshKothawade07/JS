const canDrive=(age)=>{
  return age>=18;
}
let runAgain = true;
while(runAgain){
  let age = prompt("Enter your age : ")
  age = Number.parseInt(age)
  if(age<=0 || age>120){
    alert("Please enter a valid age !!")
    continue;
  }
  if(canDrive(age)){
    alert("Yes, you can drive !!")
  }
  else{
    alert("Oooo, you cannot drive now!!")
  }

  runAgain = confirm("Do you want to play again? ")
}
