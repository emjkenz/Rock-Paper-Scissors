var items = ["R", "P","S"]

var computer = items[Math.floor(Math.random()*items.length)]
console.log(computer)

var continueGame = true

function guess(Player, computer,Stats){ 
    if (Player === computer) {
        Stats.Ties++
        return "Ties"
    }
   else if (Player==="R"&&computer==="S"|| Player==="S"&&computer==="P"|| Player==="P"&&computer==="R") {
        Stats.Wins++    
        return "Wins"
    }
   else if (Player==="R"&&computer==="P"|| Player==="S"&&computer==="R"|| Player==="P"&&computer==="S") {
        Stats.Losses++ 
        return "Losses"
    }
 }

var Stats = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
}

while(continueGame){
    var choice = prompt("Choice R, P or S") 
    var computer = items[Math.floor(Math.random()*items.length)]
    alert (guess(choice.toUpperCase(), computer.toUpperCase(), Stats))
    alert("Wins; "+Stats.Wins+"\nLosses; "+Stats.Losses+"\nTies; "+Stats.Ties)
    continueGame = confirm ("Play again?")
}

alert ("Thanks for playing!")