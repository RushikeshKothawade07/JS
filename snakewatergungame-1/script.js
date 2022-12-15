const match = (user, comp) => {
  if (user == comp) {
    return "0";
  }
  else if ((user === 'S' && comp === 'W') || (user === 'G' && comp === 'S') || (user === 'W' && comp === 'G')) {
    return "u";
  }

  else if ((user === 'W' && comp === 'S') || (user === 'S' && comp === 'G') || (user === 'G' && comp === 'W')) {
    return "c";
  }
}
let chances = 5;
let userpts = 0, comppts = 0, drawpts = 0;
let username = prompt("Enter your username : ", "John")
document.write(`<br>Hello ${username} ! <br> Welcome to the Game Zone <br>`)
chances = prompt("Chances you want to beat me : ", "5")
while (chances != 0) {
  let user = prompt("Enter your choice ['S','W','G'] : ")
  user = user.toUpperCase()
  let compi = Math.floor(Math.random() * 3)
  let comp = ['S', 'W', 'G'][compi]
  let result = match(user, comp)
  let winner = "";
  if (result === "0") {
    winner += "It's a Draw!!"
    drawpts++;
  }
  else if (result === "u") {
    winner += "You Won!!"
    userpts++;
  }
  else if (result === "c") {
    winner += "Computer Won!!"
    comppts++;
  }
  chances--;
  document.write(`<br> ${username} : ${user} <br>Computer : ${comp}<br> Verdict : ${winner} <br>Chances left :   ${chances}<br>`)
}

let won = ""
if (userpts > comppts) {
  won += `Congratulations ${username}!! You are the Winner of this game...`
}
else if (comppts > userpts) {
  won += `Ooo, ${username}! Computer Won.. Better Luck Next Time !!`
}
else {
  won += `Tight one, ${username}! It's a Draw!!`
}
document.write(`<br><em><u>Results</u> : </em > <br><br>Your Score : ${userpts} points<br>Computer Score : ${comppts} points<br>Draw : ${drawpts}<br><br><em>Verdict : ${won}</em><br><br>`)
