const questions = [
    { 'que': "Which word is a noun?", 'a': "Run", 'b': "Happy", 'c': "Dog", 'd': "Quickly", 'correct': "c" },
    { 'que': "Which sentence is correct?", 'a': "She don't like apples.", 'b': "She doesn't likes apples.", 'c': "She doesn't like apples.", 'd': "She don't likes apples.", 'correct': "c" },
    { 'que': "Choose the correct past tense form:", 'a': "Go", 'b': "Went", 'c': "Goes", 'd': "Gone", 'correct': "b" },
    { 'que': "Which is the correct comparative form?", 'a': "More better", 'b': "Best", 'c': "Gooder", 'd': "Better", 'correct': "d" },
    { 'que': "What is the plural form of 'child'?", 'a': "Children", 'b': "Childs", 'c': "Childrens", 'd': "Childes", 'correct': "a" },
    { 'que': "Identify the adjective:", 'a': "Softly", 'b': "Soft", 'c': "Softness", 'd': "Softer", 'correct': "b" },
    { 'que': "Which sentence uses the correct article?", 'a': "An apple is red.", 'b': "A apple is red.", 'c': "The apple is red.", 'd': "Apple is red.", 'correct': "a" },
    { 'que': "Choose the correct pronoun:", 'a': "Me", 'b': "Myself", 'c': "I", 'd': "Mine", 'correct': "c" },
    { 'que': "Select the correct preposition:", 'a': "He is good in English.", 'b': "He is good at English.", 'c': "He is good on English.", 'd': "He is good of English.", 'correct': "b" },
    { 'que': "What is the synonym of 'happy'?", 'a': "Sad", 'b': "Joyful", 'c': "Angry", 'd': "Bored", 'correct': "b" }
];

let index = 0;
const total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option');

function startQuiz() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");
    loadQuestion();
}

const loadQuestion = () => {
    if (index >= total) {
        return endQuiz();
    }

    const data = questions[index];
    quesBox.innerText = `${index + 1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    optionInputs.forEach(input => input.checked = false);
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const submitQuiz = () => {
    const ans = getAnswer();
    const correctAnswer = questions[index].correct;

    if (ans === correctAnswer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    if (index < total) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

const previousQuestion = () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

const nextQuestion = () => {
    submitQuiz();
}

const endQuiz = () => {
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");

    const resultText = document.getElementById("resultText");
    if (right >= 6) {
        resultText.innerText = `Well done! You passed the test with ${right} right answers and ${wrong} wrong answers.`;
    } else {
        resultText.innerText = `Try again! You answered ${right} questions correctly and ${wrong} questions incorrectly.`;
    }

    displayFireworks();
}

const restartQuiz = () => {
    index = 0;
    right = 0;
    wrong = 0;

    document.getElementById("resultPage").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");

    loadQuestion();
}

