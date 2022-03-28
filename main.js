let team1 = 0
let team2 = 0


function team1Score(score) {
    
    team1 += score

    console.log(team1)
    drawScores()
}

function team2Score(score) {
    team2 += score
    console.log(team2)
    drawScores()
}

function drawScores() {
   let team1ScoreElem =  document.getElementById("team1Score")

   let team2ScoreElem =  document.getElementById("team2Score")

   team1ScoreElem.innerText = (team1)
   team2ScoreElem.innerText = (team2)
}

function clearScore(teamName) {
    team1 = 0
    team2 = 0
    drawScores()
}

drawScores()