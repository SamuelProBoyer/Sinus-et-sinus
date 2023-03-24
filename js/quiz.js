const audioWin = new Audio("../audio/win.wav");
const audioLoose = new Audio("../audio/loose.wav");
const audioEnd = new Audio("../audio/endMusic.mp3");


// Sample quiz data
const quizData = [
    {
      questionAudio: new Audio("../audio/questions/microbes.mp4"),
      answers: [
        { audio: "../img/Vrai.png", correct: true },
        { audio: "../img/Faux.png", correct: false },
      ],
    },
    {
      questionAudio: new Audio("../audio/questions/du_nez.mp4"),
      answers: [
        { audio: "../img/Cosinus-math.png", correct: false },
        { audio: "../img/Sinus_nez.png", correct: true },
      ],
    },
    {
      questionAudio: new Audio("../audio/questions/2triangles.wav"),
      answers: [
        { audio: "../img/Cosinus-math.png", correct: false },
        { audio: "../img/Sinus-math.png", correct: true },
      ],
    },
    {
      questionAudio: new Audio("../audio/questions/formule.wav"),
      answers: [
        { audio: "../img/Faux.png", correct: false },
        { audio: "../img/Vrai.png", correct: true },
      ],
    },
  ];
  
   
  
  // Shuffle the quiz data
  quizData.sort(() => Math.random() - 0.5);
  
   
  
  const questionButtons = document.querySelectorAll(".playSound");
  const questionAudio = document.getElementById("question-audio");
  const answerButtons = document.querySelectorAll(".answer-button");
  const score = document.getElementById("score");
  const correctAnswers = document.getElementById("correct-answers");
  const totalQuestions = document.getElementById("total-questions");
  const resultsContainer = document.getElementById("results-container");
  
   
  
  let currentQuestionIndex = 0;
  let scoreValue = 0;
  let correctAnswersValue = 0;
  
   
  
  function showQuestion() {
    questionAudio.src = quizData[currentQuestionIndex].questionAudio.src;
    playButton();
  
   
  
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].querySelector(".answer-audio").src =
        quizData[currentQuestionIndex].answers[i].audio;
      answerButtons[i].addEventListener("click", function () {
        checkAnswer(i);
      });
    }
  }
  
   
  
  function playQuestionAudio() {
    questionAudio.play();
  }
  
   
  
  function playButton() {
    questionButtons.forEach((playSound, index) => {
      playSound.addEventListener("click", () => {
        quizData.forEach((audio) => audio.questionAudio.pause());
        playQuestionAudio();
      });
    });
  }
  
   
  
  function checkAnswer(index) {
    if (quizData[currentQuestionIndex].answers[index].correct) {
      correctAnswersValue++;
      audioWin.play();
    } else {
      audioLoose.play();
    }
  
   
  
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showResults();
    }
  }
  
   
  
  function showResults() {
  //   totalQuestions.innerText = quizData.length;
  //   correctAnswers.innerText = correctAnswersValue;
  //   resultsContainer.style.display = "block";
  window.location.href = "../end.html";
  audioEnd.play();
  }
  
   
  
  showQuestion();