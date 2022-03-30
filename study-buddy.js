// define Dom elements to manipulate
let card = document.querySelector(".container")
let flipCard = document.querySelector("#flip")
let questionCard = document.querySelector(".front-card")
let answerCard = document.querySelector(".back-card")
let correctBtn = document.querySelector(".correct")
let incorrectBtn = document.querySelector(".incorrect")
let nextBtn = document.querySelector(".next")
let resetBtn = document.querySelector(".reset")
let score = 0
let i = 0
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

// function getQuestion () {
//     questionCard.innerHTML = jsDeck[0][0];

// }
// // funtion for nextBtn
// function forward () {
//     i = i + 1
//     i = i % jsDeck.length
//     return jsDeck[i][0]
// }
// console.log(forward);

// function nextCard () {
//     nextBtn
// }


// how do I access value in this objects of arrays??
// use find() array method or filter
// let data = Object.entries(jsDeck)
// function getQuestion() {
//     questions = data[Math.floor(Math.random() * jsDeck.length)]
//     questionCard.innerHTML = `<p>${questions[0]}</p>`
// }

let displayQuestion = Object.values(jsDeck);
console.log(displayQuestion[0]);

// event listeners
// correctBtn.addEventListener("click", () => {
    // increaseScore()
// insert dom element.innerHTML = `
// })