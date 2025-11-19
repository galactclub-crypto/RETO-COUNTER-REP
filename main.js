let numberScoreA = document.getElementById("numberA")
let numberScoreB = document.getElementById("numberB")
let scoreText = document.getElementById("score-text")
let result1 = 0
let result2 = 0



// functions of the Team A score

function teamAScore1(){

    result1 ++
    numberScoreA.textContent = result1
    scoreText.textContent = ""

}
function teamAScore2(){

    result1 += 2
    numberScoreA.textContent = result1
    scoreText.textContent = ""
}
function teamAScore3(){

    result1 += 3
    numberScoreA.textContent = result1
    scoreText.textContent = ""
}

// functions of the Team B score

function teamBScore1(){

    result2 ++
    numberScoreB.textContent = result2
    scoreText.textContent = ""
}
function teamBScore2(){

    result2 += 2
    numberScoreB.textContent = result2
    scoreText.textContent = ""
}
function teamBScore3(){

    result2 += 3
    numberScoreB.textContent = result2
    scoreText.textContent = ""
}

function resetAll(){
    
    

    if (result1 > result2 ){
        scoreText.textContent = "Home Team WON!"
    }
    else if(result1 < result2){
        scoreText.textContent = "Away Team WON!"

    }
    else{
        scoreText.textContent = "THE MATCH IS EVEN!"
    }
     result2 = 0
     result1 = 0
     numberScoreB.textContent = result1
     numberScoreA.textContent = result2
    
    

}

