const startBtn = document.querySelector('#start');
const starting = document.querySelector('.starting');
const nextbtn = document.querySelector('.btn');
let ques = document.querySelector('.ques');
let answers = document.querySelector('.answers');
const final = document.querySelector('.start')
let currentquestionIndex = 0;
let score = 0;
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { Text : "shark", correct: false},
      {Text:"Blue Whale", correct:true},
      {Text:"Elephant", correct:false},
      {Text:"Giraffe" , correct:false},
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { Text : "Earth", correct: false},
      {Text:"Jupiter", correct:false},
      {Text:"Mars", correct:true},
      {Text:"Saturn" , correct:false},
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { Text : "Seoul", correct: false},
      {Text:"Beijing", correct:false},
      {Text:"Tokyo", correct:true},
      {Text:"Bangkok" , correct:false},
    ]
  },
  {
    question: " Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { Text : "Charles Dickens", correct: false},
      {Text:"William Shakespeare", correct:true},
      {Text:"Mark Twain", correct:false},
      {Text:"Jane Austen" , correct:false},
    ]
  }
];


startBtn.addEventListener('click',()=>{
  startBtn.style.display = 'none'
  starting.style.display = 'block';
});


function startQuiz(){
  currentquestionIndex=0;
  score=0;
  showQuestion();
}

function showQuestion() {
  let currentquestion = questions[currentquestionIndex];
  let questionNo = currentquestionIndex + 1;
  ques.innerHTML = questionNo + ". " + currentquestion.question;

  answers.innerHTML = ''; // Clear previous answers

  currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    // You can optionally add dataset to track if it's correct
    button.dataset.correct = answer.correct;
    
    // Add event listener to handle clicks
    button.addEventListener("click", () => {
      if (answer.correct) {
        button.style.backgroundColor = "green";
        button.style.color = "white"
        score++;
      } else {
        button.style.backgroundColor = "red";
      }
      // Disable all buttons after one click
      Array.from(answers.children).forEach(btn => btn.disabled = true);
    });

    answers.appendChild(button);
  });
  
}
nextbtn.addEventListener('click',()=>{
   currentquestionIndex++;
   if(currentquestionIndex < questions.length){
     showQuestion();
   }else{
     alert("Quiz finished! your score : " + score);
     location.reload();
   }
});


startQuiz()