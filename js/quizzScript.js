const quizData = [{
    question: 'The average of first 50 natural numbers is ………….',
    a: '25.30',
    b: '25.5',
    c: '25.00',
    d: '12.25',
    correct: 'b'
}, {
    question: 'What is 1004 divided by 2?',
    a: '52',
    b: '502',
    c: '520',
    d: '5002',
    correct: 'b'
}, {
    question: 'An integer that is divisible by 2 is called?',
    a: 'Even number',
    b: 'Natural number',
    c: 'Odd number',
    d: 'Whole number',
    correct: 'a'
}, {
    question: 'What is the number called located on the bottom part of a fraction?',
    a: 'Numerator',
    b: 'Denominator',
    c: 'Componendo',
    d: 'Ratio',
    correct: 'b'
}, {
    question: 'Which number has just 3 prime factors of 2, 3 and 7?',
    a: '18',
    b: '24',
    c: '52',
    d: '42',
    correct: 'd'
}];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {

        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {

    //check to see answer   
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});