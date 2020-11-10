
const diceRoll = () => {
  const randomNum = Math.floor((Math.random() * 6) + 1)
  return randomNum
}

const rollOutcome = () => {

  const num1 = diceRoll()
  const image1 = document.querySelector(".img1").setAttribute("src", `images/dice${num1}.png`)

  const num2 = diceRoll()
  const image2 = document.querySelector(".img2").setAttribute("src", `images/dice${num2}.png`)

  if (num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
  } else if (num2 > num1) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
  } else {
    document.querySelector("h1").textContent = "Draw!"
  }

}