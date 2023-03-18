const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const timer = document.getElementById("timer");
const timeRemaining = document.getElementById("timeRemaining");
const question = document.getElementById("question");
const options = document.getElementById("options");
const resultContainer = document.getElementById("resultContainer");
const scoreElement = document.getElementById("score");
const initials = document.getElementById("initials");
const saveBtn = document.getElementById("saveBtn");

const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"],
      answer: 2,
    },
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
      answer: 1,
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      options: ["The <head> section", "Both the <head> section and the <body> section", "The <body> section"],
      answer: 1,
    },
  ];

let currentQuestion = 0;
let timeLeft = 60;
let timerId;
let quizScore = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    timerId = setInterval(updateTimer, 1000);
    displayQuestion();
  }
  
  function updateTimer() {
    timeLeft--;
    timeRemaining.textContent = timeLeft;
  
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endQuiz();
    }
  }
  
  function displayQuestion() {
    const current = questions[currentQuestion];
    question.textContent = current.question;
    options.innerHTML = "";
  
    current.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        checkAnswer(index);
      });
      options.appendChild(button);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
  
    if (selected === correct) {
      quizScore++;
    } else {
      timeLeft -= 10;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      clearInterval(timerId);
      endQuiz();
    }
  }
  
  function endQuiz() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = quizScore;
    saveBtn.addEventListener("click", saveResult);
  }
  
  function saveResult() {
    const userInitials = initials.value;
    if (userInitials !== "") {
      const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
      const newScore = { initials: userInitials, score: quizScore };
      savedScores.push(newScore);
      localStorage.setItem("scores", JSON.stringify(savedScores));
      alert("Your score has been saved.");
    } else {
      alert("Please enter your initials.");
    }
  }
