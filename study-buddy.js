// define Dom elements to manipulate
const container = document.querySelector(".container");
const flipCard = document.querySelector(".flip");
const questionCard = document.querySelector(".front");
const questionContent = document.querySelector(".front-card-content");
const answerContent = document.querySelector(".back-card-content");
const answerCard = document.querySelector(".back");
const correctBtn = document.querySelector("#correct");
const incorrectBtn = document.querySelector("#incorrect");
const gameScore = document.querySelector("#current-score");
const nextBtn = document.querySelector(".next");
const resetBtn = document.querySelector(".reset");
const directionBtn = document.querySelector("#directions");
const modalContent = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-button")

// Array of Questions
let jsDeck = [
    {question: "What are the five primitive data types in JavaScript?",
    answer: "String, Numbers, Boolean, Undefined, Null"},
    {question: "What is a higher order function?",
    answer: "A function that accepts functions as parameters and/or returns a function."},
    {question: "How do you acess a page element by id?",
    answer: "document.getElementById(id);"},
    {question: "Which array method removes the last element from an array?",
    answer: "pop( )"},
    {question: "Function _________ are the values received by the function when it is invoked.",
    answer: "arguments"},
    {question: "What method creates a new array with the results of calling a provided function on every element in this array?",
    answer: "map( )"},
    {question: "What method creates a new array with only elements that passes the condition inside the provided function?",
    answer: "filter( )"},
    {question: "What method helps to loop over array by executing a provided callback function for each element in an array?",
    answer: "forEach( )"},
    {question: "When does a JavaScript function stop executing?",
    answer: "When it reaches a return statement."}
]
// function for card deck
let questionIndex = 0

deck1()
function deck1() {
    questionContent.textContent = jsDeck[questionIndex].question
    answerContent.textContent = jsDeck[questionIndex].answer
}

// next button
function next() {
    console.log("callingNext")
    questionIndex++
    deck1()
}
nextBtn.addEventListener("click", next) 

// Score buttons
let score = 0;
correctBtn.addEventListener("click", function() {
    score += 1
    gameScore.innerHTML = score;
});
// I got it wrong button
incorrectBtn.addEventListener("click", function() {
    score -= 1
    gameScore.innerHTML = score;
})

// Event listener to flip card
flipCard.addEventListener("click", function() {
  flipCard.classList.toggle("flip");
});

// reset button
function clear () {
    questionContent.textContent = jsDeck[0].question
    answerContent.textContent = jsDeck[0].answer
}
// console.log(clear);
resetBtn.addEventListener("click",clear) 
// open direction modal 
const directions = () => {
    modal.style.display = "block"
}
directionBtn.addEventListener("click", directions)
// close direction modal 
const startGame = () => {
    modal.style.display = "none"
}
closeBtn.addEventListener('click', startGame)
// Code did not work
// I got it right button
// let point = 0
// function increase() {
//    let score = point + parseInt(gameScore.value);
//    console.log(score);
// }
// console.log(increase);
// / const getQuestion = jsDeck.find(question => question.question);
// console.log(getQuestion);

// let i =0; 
// function qCard() {
//     document.getElementsByClassName("next").textContent = jsDeck[i]; i++;
//     if (i == jsDeck.length) {i = 0;}
// }
// function clear () {
//     for (let i = deck1.length -1; i > 0; i--) {
//      let randomIndex = Math.floor(math.random() * i)
//      let currentIndex = deck1[i]
//      deck1[i] = deck1[randomIndex]
//      deck1[randomIndex] = currentIndex
//     }
// function gameEnd() {
//     if (jsDeck[questionIndex] >= jsDeck[questionIndex].length -1) {
//       questionContent.textContent = "THE END"
//   } else { 
//       deck1()
//   }
// }