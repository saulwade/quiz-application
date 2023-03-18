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
  