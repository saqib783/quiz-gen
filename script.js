const questions = [
    {
    question:"What was the **original name of Islamabad** before it became the capital?",
    answers:[
      {text:"Potohar Region", correct: false},
      {text:"Rawalpindi", correct: false},
      {text:"Maidan-e-Kohsar", correct: false},
      {text:"Mai Laaj / Laal Koti Area", correct: true}  // ✅ rare fact
    ]
},
       {
        question:"Pakistan shares the **longest border** with which country?",
        answers:[
          {text:"India", correct: true}, // 3,323 km
          {text:"Afghanistan", correct: false},
          {text:"China", correct: false},
          {text:"Iran", correct: false},
        ]
    },
     {
        question:"Which is Pakistan’s **coldest place** (recorded -50°C)?",
        answers:[
          {text:"Skardu", correct: false},
          {text:"Ziarat", correct: false},
          {text:"Sibi", correct: false},
          {text:"Siberian Valley, Gilgit Baltistan", correct: true},
        ]
    },
      {
        question:"What was the **old name of Faisalabad**?",
        answers:[
          {text:"Lyallpur", correct: true},
          {text:"Montgomery", correct: false},
          {text:"Sialkot", correct: false},
          {text:"Campbellpur", correct: false},
        ]
    },
       {
        question:"Where did Pakistan conduct its first **nuclear test**?",
        answers:[
          {text:"Ras Koh Hills (Chagai)", correct: true},
          {text:"Margalla Hills", correct: false},
          {text:"Karakoram", correct: false},
          {text:"Thar Desert", correct: false},
        ]
    },
     {
        question:"Which is the **deepest place in Pakistan**?",
        answers:[
          {text:"Hingol Valley", correct: false},
          {text:"Khewra Mine", correct: false},
          {text:"Badin (Sindh)", correct: true}, // lowest elevation
          {text:"Chagai", correct: false},
        ]
    },
      {
        question:"Which Pakistani city is called the ‘City of Saints’?",
        answers:[
          {text:"Multan", correct: true},
          {text:"Sukkur", correct: false},
          {text:"Lahore", correct: false},
          {text:"Kasur", correct: false},
        ]
    },
      {
        question:"Which is the national fruit of Pakistan?",
        answers:[
          {text:"Apple", correct: false},
          {text:"Mango", correct: true},
          {text:"Orange", correct: false},
          {text:"Banana", correct: false},
        ]
    },
        {
        question:"Which Pakistani scientist is known as the father of the nuclear program?",
        answers:[
          {text:"Dr. Abdul Qadeer Khan", correct: true},
          {text:"Dr. Abdus Salam", correct: false},
          {text:"Ishfaq Ahmad", correct: false},
          {text:"Munir Ahmad Khan", correct: false},
        ]
    },
      {
        question:"In which year was the State Bank of Pakistan inaugurated?",
        answers:[
          {text:"1947", correct: false},
          {text:"1948", correct: true},
          {text:"1949", correct: false},
          {text:"1950", correct: false},
        ]
    },
      {
        question:"Which is the oldest university in Pakistan?",
        answers:[
          {text:"University of Punjab", correct: true},
          {text:"Karachi University", correct: false},
          {text:"Sindh University", correct: false},
          {text:"Peshawar University", correct: false},
        ]
    },
      {
        question:"Who was the first female judge of the Supreme Court of Pakistan?",
        answers:[
          {text:"Khalida Rashid", correct: false},
          {text:"Ayesha Malik", correct: true},
          {text:"Nasira Iqbal", correct: false},
          {text:"Fakhr-un-Nisa", correct: false},
        ]
    },
     {
        question:"Who wrote the famous book 'The Republic'?",
        answers:[
          {text:"Plato", correct: true},
          {text:"Aristotle", correct: false},
          {text:"Socrates", correct: false},
          {text:"Homer", correct: false},
        ]
    },
     {
        question:"Which Indian missile is also known as 'Agni'?",
        answers:[
          {text:"Surface-to-Air Missile", correct: false},
          {text:"Ballistic Missile", correct: true},
          {text:"Cruise Missile", correct: false},
          {text:"Anti-Tank Missile", correct: false},
        ]
    },
       {
        question:"Which is the smallest ocean in the world?",
        answers:[
          {text:"Indian Ocean", correct: false},
          {text:"Arctic Ocean", correct: true},
          {text:"Atlantic Ocean", correct: false},
          {text:"Pacific Ocean", correct: false},
        ]
    },
        {
        question:"Who was the first woman to win a Nobel Prize?",
        answers:[
          {text:"Marie Curie", correct: true},
          {text:"Mother Teresa", correct: false},
          {text:"Rosalind Franklin", correct: false},
          {text:"Indira Gandhi", correct: false},
        ]
    },
 {
        question:"Which country is known as the Land of the Rising Sun?",
        answers:[
          {text:"China", correct: false},
          {text:"Japan", correct: true},
          {text:"South Korea", correct: false},
          {text:"Thailand", correct: false},
        ]
    },

    {
        question:"Which is the largest animal in the world?",
        answers:[
          {text:"Shark",correct: false},
           {text:"Blue Whale",correct: true},
            {text:"Elephant",correct: false},
             {text:"Giraffe",correct: false},
        ]
    },
     {
        question:"Which is the smallest continent in the world?",
        answers:[
          {text:"Asia",correct: false},
           {text:"Australia",correct: true},
            {text:"Arctic",correct: false},
             {text:"Antarctica",correct: false},
        ]
    },
      {
        question:"Which is the  largest desert in the world?",
        answers:[
          {text:"Antarctica",correct: false},
           {text:"Gobi",correct: false},
            {text:"Sahara",correct: true},
             {text:"Kalahari",correct: false},
        ]
    },
    {
         question:"Which planet is known as the Red Planet?",
        answers:[
          {text:"Earth", correct: false},
          {text:"Mars", correct: true},
          {text:"Jupiter", correct: false},
          {text:"Saturn", correct: false},
        ]
    },
     {
        question:"Who is known as the Father of Computers?",
        answers:[
          {text:"Albert Einstein", correct: false},
          {text:"Charles Babbage", correct: true},
          {text:"Isaac Newton", correct: false},
          {text:"Nikola Tesla", correct: false},
        ]
    },
     {
        question:"What is the national game of India?",
        answers:[
          {text:"Cricket", correct: false},
          {text:"Hockey", correct: true},
          {text:"Football", correct: false},
          {text:"Kabaddi", correct: false},
        ]
    },
     {
        question:"Which is the fastest land animal?",
        answers:[
          {text:"Lion", correct: false},
          {text:"Cheetah", correct: true},
          {text:"Horse", correct: false},
          {text:"Tiger", correct: false},
        ]
    },
     {
        question:"Which gas do humans inhale to survive?",
        answers:[
          {text:"Carbon Dioxide", correct: false},
          {text:"Oxygen", correct: true},
          {text:"Nitrogen", correct: false},
          {text:"Hydrogen", correct: false},
        ]
    }
];



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

