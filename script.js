const questionElement =document.getElementById('question')
const answerButton = document.getElementById('answerButtons')

const next = document.getElementById('next-btn')



let currentQuestionIndex = 0
let score = 0


function Startquiz(){
    resetState()
currentQuestionIndex = 0;
score = 0;
next.innerHTML = "next"
showQuestion()
}

function showQuestion(){
  resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + "." + currentQuestion.question;

    currentQuestion.answers.forEach(ans =>{
      const button = document.createElement('button');
      button.innerHTML = ans.text;
      button.classList.add('btn')
      answerButton.appendChild(button)
       if(ans.correct){
        button.dataset.correct = ans.correct
       }
      button.addEventListener("click" , selectAnswer)
    })
}


function resetState(){
    next.style.display ="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
      questionElement.innerHTML = "";
}
 

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    next.style.display ="block" ;
}
function showScore(){
 resetState();
 questionElement.innerHTML = `You scored ${score} out of ${questions.length}!.`
 next.style.display = "block";
}
 
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
  }
 next.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton()
    }
    else{
        Startquiz()
    }
 })
Startquiz()
