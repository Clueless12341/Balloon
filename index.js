import FlyingObject from "./app.js";

let score = 0

function generateBalloon() {
    const balloon = new FlyingObject('images/balloon.png')

    balloon.render()
    balloon.animate()
}

function generateBomb() {
    const bomb = new FlyingObject('images/bomb.png')

    bomb.render()
    bomb.animate()
}

// shoot the target
document.addEventListener("click", (e) => {
    const element = e.target
    const elementImg = e.target.getAttribute("src")
    
    if (elementImg == 'images/balloon.png') {
        score++
        document.querySelector(".score").textContent = `Score: ${score}`

        element.style.display = 'none'
    } else if (elementImg == 'images/bomb.png') {
        score--
        document.querySelector(".score").textContent = `Score: ${score}`

        element.style.display = 'none'
    }
})

function timer() {
    let allocatedTime = 20

    let interval = setInterval(() => {
        if (allocatedTime <= 0) {
            clearInterval(interval)
            allocatedTime = 0
            document.body.innerHTML = endGame()
            document.querySelector('.playAgain').onclick = () => {
                window.location.reload()
            }
        } else {
            allocatedTime-- 
            document.querySelector('.timer').textContent = `Time: ${allocatedTime}`
        }
    }, 1000)
}

function endGame() {
    clearInterval(generateBalloon)
    clearInterval(generateBomb)
    document.querySelector(".score").textContent = `Score: ${score}`

    return `<div class="gameStats">
        <p class="gameover">GAME OVER!</p>
        <p class="endingScore">Score: ${score}</p>
        <button class="playAgain">Play again!</button>
    </div>`
}

document.querySelector('.startBtn').addEventListener('click', () => {
    document.querySelector('.startBtn').style.display = 'none'

    timer()
    setInterval(generateBalloon, 1000)
    setInterval(generateBomb, 2000)
})