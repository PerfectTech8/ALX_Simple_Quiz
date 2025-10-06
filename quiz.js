function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    const feedBack = document.getElementById("feedback");
    feedBack.textContent = "";
    
    if(userAnswer === correctAnswer){
        feedBack.textContent = "Correct! Well done.";
    }else{
        feedBack.textContent = "That's incorrect. Try again!";
    }
}

const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);