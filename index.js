// javascript


 let countElHome = document.getElementById("count-el-home")
 let homeScore = 0
 let guestScore = 0


//Home count

function plusOneHome() {
    homeScore += 1
    countElHome.textContent = homeScore
}


function plusTwoHome() {
    homeScore += 2
    countElHome.textContent = homeScore
}


function plusThreeHome() {
    homeScore += 3
    countElHome.textContent = homeScore
    
}

//Guest count

let countElGuest = document.getElementById("count-el-guest")

function plusOneGuest() {
    guestScore += 1
    countElGuest.textContent = guestScore

}


function plusTwoGuest() {
    guestScore += 1
    countElGuest.textContent = guestScore
}


function plusThreeGuest() {
    guestScore += 1
    countElGuest.textContent = guestScore
}


//New Game Button

function newGame() {
    homeScore = 0
    countElHome.textContent = homeScore
    guestScore = 0
    countElGuest.textContent = guestScore
}