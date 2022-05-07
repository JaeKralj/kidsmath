// Elemnts Var
const guess = document.getElementById("input");
const message = document.querySelector(".message");
const questionNum = document.getElementById("question-number");
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const operator = document.getElementById("operator");
const afterQuizMsg = document.getElementById("after-quiz-msg");
const continueDialog = document.getElementById("continue-dialog");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const quiz = document.getElementById("quiz");
const afterQuiz = document.getElementById("after-quiz");

let randomOne = Math.floor(Math.random() * 11);
let randomTwo = Math.floor(Math.random() * 11);
let questionNumber = 1;
let correctAnswers = 0;
let count = 0;
let answer;

// defaults
afterQuiz.style.display = "none";
questionNum.textContent = '1';
firstNumber.textContent = randomOne;
secondNumber.textContent = randomTwo;

add = () => answer = randomOne + randomTwo; 
subtract = () => answer = randomOne - randomTwo;
function arithmeticsLogic() {
    randomOne > randomTwo ? operator.textContent = "-" : operator.textContent = "+";
    randomOne > randomTwo ? subtract() : add();
}
arithmeticsLogic();

function addNewQuestion() {
    randomOne = Math.floor(Math.random() * 11);
    randomTwo = Math.floor(Math.random() * 11);
    questionNumber++;
    if (questionNumber !== 11) {
        questionNum.textContent = questionNumber;
    } else {
        quiz.style.display = "none";
        afterQuiz.style.display = "block";
    }
    firstNumber.textContent = randomOne;
    secondNumber.textContent = randomTwo;
    arithmeticsLogic();
    count = 0;
    console.log(answer);
}

function checkAnswer() {
    if (Number(guess.value) === answer) {
        correctAnswers++;
        if (correctAnswers === 10) {
        afterQuizMsg.textContent = `Excellent 💯. You Got ${correctAnswers} Out of 10`;    
        } else if (correctAnswers >= 6 && correctAnswers < 10){
        afterQuizMsg.textContent = `Good Job 💯. You almost Got Everything 💪🏾. You Got ${correctAnswers} Out of 10`;    
        } else if (correctAnswers < 6) {
        afterQuizMsg.textContent = `Try Harder Next Time, You Can DO IT 💪🏾. You Got ${correctAnswers} Out of 10`;    
        }
        message.textContent = `Yay!👏 You Are Correct! 💯, The Answer is ${answer}`;
        setTimeout(() => message.textContent = `You Can Solve The Simple Questions 💪🏾`, 1500);
        input.style.backgroundColor = 'blue';
        setTimeout(() => input.style.backgroundColor = 'transparent', 1000);
        addNewQuestion();
    } else if (Number(guess.value) !== answer){
        count++;
        if (count < 3) {
            message.textContent = `That's incorrect, You have ${3 - count} tries left 💪🏾`;
            input.style.backgroundColor = 'red';
            setTimeout(() => input.style.backgroundColor = 'transparent', 1000);
            setTimeout(() => message.textContent = `You Can DO it 💪🏾`, 1500);
            setTimeout(() => message.textContent = `You Can Solve The Simple Questions 💪🏾`, 1500);
        } else if (count === 3){
            message.textContent = `The answer is ${answer}, You will get it next time 💪🏾`;
            input.style.backgroundColor = 'blue';
            setTimeout(() => input.style.backgroundColor = 'transparent', 1000);
            setTimeout(() => message.textContent = `You Can Solve The Simple Questions 💪🏾`, 1500);
            addNewQuestion();
        }
    }
}

document.getElementById("input-form").addEventListener('submit', (e) => {
    e.preventDefault()    
    checkAnswer();
    guess.value = ''
});

yesBtn.addEventListener('click', () => {
    questionNumber = 0;
    addNewQuestion();
    quiz.style.display = "block";
    input.focus();
    afterQuiz.style.display = "none";
});

noBtn.addEventListener('click', () => {
    window.close();
});