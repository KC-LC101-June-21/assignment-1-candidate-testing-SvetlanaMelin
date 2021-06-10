   
const quiz = require('./candidate-testing');

let question;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions =['1. Who was the first American woman in space?','2. True or false: 5 kilometer == 5000 meters?','3. (5 + 3)/2 * 10 = ?',"4. Given the array [8, 'Orbit', 'Trajectory',45], what entry is at index 2?",'5. What is the minimum crew size for the ISS?'];
let correctAnswers=["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers ='';
let candidateName;
//let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Who was the first American woman in space? ";
////let correctAnswer = "Sally Ride";
//let correctAnswer1 = "sally ride";
//let candidateAnswer = '';

function askForName() {
  // TODO 1.1b: Ask for candidate's name //k
  
const input = require('readline-sync');
candidateName = input.question('What is your name candidate? ');

}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
//candidateAnswer = input.question(question);

const input = require('readline-sync');

for (let i=0;i < questions.length;i++) {

console.log(questions[i]);
candidateAnswers[i] = input.question('Your answer: ');
console.log(`Correct answer is: ${correctAnswers[i]}\n`)
}
//console.log(`Your answer: ${candidateAnswers}`);
//conole.log(`Correct aswer:${correctAnswers}`);
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade;


/*for ( let i=o;i<correctAnswers.length;i++){


if (candidateAnswers === correctAnswers[i]){
  console.log("Your answer is correct!");
} 
else 
  {console.log('Your answer is wrong');
  }}*/

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Hello, ' +candidateName + '!');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

module.exports = {
  candidateName: candidateName,
  question: question,
  //correctAnswer: correctAnswer,
  //candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};