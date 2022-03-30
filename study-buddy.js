// define Dom elements to manipulate
const container = document.querySelector(".container")
const flipCard = document.querySelector(".flip")
const questionCard = document.querySelector(".front")
const answerCard = document.querySelector(".back")
const correctBtn = document.querySelector(".correct")
const incorrectBtn = document.querySelector(".incorrect")
const gameScore = document.querySelector("#current-score")
const nextBtn = document.querySelector(".next")
const resetBtn = document.querySelector(".reset")

// Array of Questions
let jsDeck = [
    {
    question: "What are the five primitive data types in JavaScript?",
    answer: "String, Numbers, Boolean, Undefined, Null",
    },
    {
    question: "What is a higher order function?",
    answer: "A function that accepts functions as parameters and/or returns a function.",
    },
    {
    question: "How do you acess a page element by id?",
    answer: "document.getElementById(id);",
    },
    {
    question: "Which array method removes the last element from an array?",
    answer: "pop()",
    },
    {
    question: "Function _________ are the values received by the function when it is invoked.",
    answer: "arguments"
}]

// I got it right button function
// let score = 0
// let i = 0

// function increaseScore () {
// let add = parseInt(gameScore)
// score = score + add;
// return score
// }
// increaseScore(2)
// console.log(score);


// how do I access value in this objects of arrays??
// use find() array method or filter
// let data = Object.entries(jsDeck)
// function getQuestion() {
//     questions = data[Math.floor(Math.random() * jsDeck.length)]
//     questionCard.innerHTML = `<p>${questions[0]}</p>`
// }

// let displayQuestion = Object.values(jsDeck);
// console.log(displayQuestion[0]);

// // event listeners
// correctBtn.addEventListener("click", () => {
// increaseScore()
// gameScore.innerHTML = `${score}`
// document.style.display = "block"
// })

// event listener to flip card
flipCard.addEventListener("click", function (e) {
  flipCard.classList.toggle("flip");
});