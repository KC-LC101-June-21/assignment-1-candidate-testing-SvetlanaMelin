const quiz = require('./candidate-testing');
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = [ 'Who was the first American woman in space? ','True or false: 5 kilometer == 5000 meters? ','(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",'What is the minimum crew size for the ISS? ' ];
let candidateAnswers = [];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswer = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //k
const input = require('readline-sync');
candidateName = input.question('Candidate Name: ');
//console.log('\n');
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
//candidateAnswer = input.question(question);

const input = require('readline-sync');
for (let i = 0;i < questions.length;i++) {
console.log(`${i+1}) ${questions[i]}`);
candidateAnswers[i] = input.question('Your Answer: ');
console.log(`Correct Answer: ${correctAnswers[i]}\n`);

}

//console.log(numberOfCorrectAnswers);
//console.log(`Your answer: ${candidateAnswers}`);
//conole.log(`Correct aswer:${correctAnswers}`);
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade=0;
let n = 0;

//let numberOfCorrectAnswers=[]
let numberOfQuestions = 0;
for (i = 0;i<questions.length;i++){
if ((candidateAnswers[i] == correctAnswers[i])||
(candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase())){

  n++;


//console.log (candidateAnswers[i].toLowerCase==correctAnswers[i].toLowerCase)

  //console.log(candidateAnswers[i])
  //console.log(correctAnswers[i])
  //console.log(n)


numberOfQuestions = questions.length;
numberOfQuestions = Number(numberOfQuestions);
grade = (n/numberOfQuestions)*100;




}}
//console.log(grade)
//console.log(numberOfQuestions)
//console.log(typeof(numberOfQuestions))}
console.log(`>>> Overall Grade: ${Math.round(grade)}% (${n} of ${numberOfQuestions} responses correct) <<<`);

if (grade >= 50){
console.log(`>>> Status: PASSED <<<`)

}else{ console.log(`>>> Status: FAILED <<<`)
}
return grade;
}

//----------------
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 // console.log('Hello, ' +candidateName + '!');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};


