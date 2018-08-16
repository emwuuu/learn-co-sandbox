$(document).ready(function(){
  
  var winArr = [
 ["#0-0", "#1-0", "#2-0"], // top row
 ["#0-1", "#1-1", "#2-1"], // middle row
 ["#0-2", "#1-2", "#2-2"], // bottom row
 ["#0-0", "#0-1", "#0-2"], // left column
 ["#1-0", "#1-1", "#1-2"], // middle column
 ["#2-0", "#2-1", "#2-2"], // right column
 ["#0-0", "#1-1", "#2-2"], // back slash
 ["#0-2", "#1-1", "#2-0"] // forward slash
]

  
 // takes in a DOM id and checks whether its text is equal to the second argument (mark)
function elementContains(id, mark) {
  return $(id).text() === mark
}

// to be run after each turn. checks whether a given mark ('X'/'O') populates all three spots in any given win combination
function playerWon(mark) {
  for (var idx = 0; idx < winArr.length; idx++) { // for every win combination
    var winCombo = winArr[idx]
    var won = winCombo.every(id => elementContains(id, mark)) // check if elementContains returns true for every id
    if (won) return true
  }
  return false // if we got here, it means no winning combination was found and we can safely return false
}
  
  $(".cell").on("click", markCell);
  
  let MARK = "X"
  let COUNTER = 0
  
  function markCell(){
    
     if (this.innerText === "") {
     
        this.innerText = MARK
        //this cell was marked with either an x or an o
        COUNTER = COUNTER +1
        
         if (playerWon(MARK)) {
           //check if a player has won the game. it is possible to win on the 9th click so it's placed before the tie condition. 
           console.log(MARK + " WON THE GAME!!")
           resetGame()
         } else if (COUNTER === 9) {
           //if no player wins by 9th click, then game will tie. in the scenario that there's 9 clicks and no win combo is met, this condition also covers that tie scenario.
           console.log ("TIE GAME")
           resetGame()
         }
        
         
        if (MARK === "X"){
        MARK = "O"
          
        } else if (MARK === "O") {
        MARK = "X"  
        
        }
    
     }
    
  
    }  
  
  
  
  
  
  
  
  
  
 function resetGame(){
   COUNTER = 0
   MARK = "X"
   $('.cell').text("")
   
   
 } 
  
  
  
  
})