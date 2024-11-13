var $word = $("#word")
var $text = $("#text")
var $scoreElement = $("#score")
var $timeElement = $("#time")
var $end = $("#end")
var $settingsButton = $("#settings-btn")
var $settings = $("#settings")
var $settingsForm = $("#settings-form")
var $difficultySelect = $("#difficulty")
var words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "js",
  "bad",
  "north",
  "css",
  "steer",
  "silver",
  "html",
  "rbk",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
]

var randomWord
var score = 0
var time = 10

var difficulty = localStorage.getItem("difficulty")
var timeInterval = setInterval(updateTime, 1000)

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function addWordToDom() {
  randomWord = getRandomWord()
  $word.text(randomWord)
}

function updateScore() {
  score++
  $scoreElement.text(score)
}

function updateTime() {
  time--
  $timeElement.text(time + "s")
  if (time === 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}

function gameOver() {
  $end.html(`
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button id="play-again-btn">Play Again</button>
    `)
  $end.css("display", "flex")

  $("#play-again-btn").click(function () {
    location.reload()
  })
}

$text.on("input", function () {
  var typedText = $(this).val()
  if (typedText === randomWord) {
    $(this).val("")
    addWordToDom()
    updateScore()
    if (difficulty === "hard") {
      time += 2
    } else if (difficulty === "medium") {
      time += 3
    } else {
      time += 5
    }
    updateTime()
  }
})

$settingsButton.click(function () {
  $settings.toggleClass("hide")
})

$settingsForm.on("change", function (e) {
  difficulty = $(e.target).val()
  localStorage.setItem("difficulty", difficulty)
})

$difficultySelect.val(difficulty)
addWordToDom()
$text.focus()