const start = document.querySelector(".start button");
const rulesbox = document.querySelector(".rulesbox");
const Quit = rulesbox.querySelector(".buttons .Quit");
const Continue = rulesbox.querySelector(".buttons .Continue");
const Quiz = document.querySelector(".Quiz");
const result = document.querySelector(".result");
const options = document.querySelector(".options");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer button");
const bottom_ques_counter = document.querySelector("footer .count");

start.onclick = () => {
    rulesbox.classList.add("activerules"); 
    let a=5;
    console.log(a);
}

Quit.onclick = () =>{
    rulesbox.classList.remove("activerules");
}

Continue.onclick = () =>{
    rulesbox.classList.remove("activerules");
    Quiz.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
    startTimer(20); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .Exit");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult();
    }
}

restart_quiz.onclick = ()=>{
    Quiz.classList.add("activeQuiz"); 
    result.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue);
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    Next.classList.remove("show");
}
quit_quiz.onclick = ()=>{
    window.location.reload(); 
}


