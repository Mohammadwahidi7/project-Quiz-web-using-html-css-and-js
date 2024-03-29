const questions = [
  {
    question: "Choose the correct html tag for the smallest font size",
    options: ["<h4>","<h6>","<h3>","<heading>"],
    answer: "<h6>",
  },
  {
    question:
      "what is the correct html tag for inserting a line break?",
    options: ["bloukquote>", "<br>", "<lb>", "<break>"],
    answer: "<br>",
  },
  {
    question: "with the _____ attribute you can define the URL in which the anchor tag will be redirected to",
    options: ["target", "action", "method", "href"],
    answer: "href",
  },
  {
    question: "The____ specifies the address (i.e. location) of the web page displayed in the browser window",
    options: ["TCP/IP", "DNS", "HTTP", "URL"],
    answer: "URL",
  },
  {
    question: "Html program is saved using _____ extension",
    options: [
      ".htmn",
      ".html",
      ".htnl",
      ".htlm",
    ],
    answer: ".html",
  },
  {
    question: "cols attribute is use with_______",
    options: ["<ol>", "<textarea>", "<th>", "<td>"],
    answer: "<th>",
  },
  {
    question: "Html is a set of markup",
    options: ["none of the above", "attributes", "sets", "tags"],
    answer: "none of the above",
  },
  {
    question: "Html stands for______",
    options: ["High Text Marking Language", "Hyper Text Macine Language", "Hyper Text Marking Language", "Hyper Text Markup Language"],
    
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Choose the correct HTML element to define important text",
    options: ["<important>", "<i>", "<strong>", "<b>"],
    answer: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    options: ["mark>", "<italic>", "<em>", "<i>"],
    answer: "<em>",
  },
  {
    question: "مين افضل مبرمج بجامعه عمان العربيه",
    options: ["محمد الوحيدي", "محمد الوحيدي", "محمد الوحيدي", "محمد الوحيدي"],
    answer: "محمد الوحيدي",
  },
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultsElement = document.getElementById("results");
const counterElement = document.getElementById("counter");
const messageElement = document.getElementById("message");
let timer;

function displayQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  const question = questions[currentQuestion];

  // Display the question
  questionElement.textContent = question.question;

  // Clear previous options and display new ones
  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(optionElement);
  });

  // Update the results display
  updateResults();

  // Start the timer
  startTimer();
}

function startTimer() {
  let timeLeft = 180; // 180 seconds
  counterElement.textContent = `Time : ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    counterElement.textContent = `Time : ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      checkAnswer(null); // Move to the next question when time runs out
    }
  }, 1000);
}

function checkAnswer(selectedOption) {
  clearInterval(timer); // Stop the timer when an answer is selected

  const correctAnswer = questions[currentQuestion].answer;

  // Get all option elements
  const optionElements = optionsElement.querySelectorAll(".option");

  // Immediately apply styling based on correctness
  optionElements.forEach((optionElement) => {
    if (optionElement.textContent === selectedOption) {
      if (selectedOption === correctAnswer) {
        optionElement.classList.add("correct");
        score++;
      } else {
        optionElement.classList.add("incorrect");
      }
    } else if (optionElement.textContent === correctAnswer) {
      optionElement.classList.add("correct");
    }
  });

  // Wait for a short delay before moving to the next question
  setTimeout(() => {
    currentQuestion++;
    displayQuestion();
  }, 1000); // Delay for 1 second
}

function showResults() {
  // Display the custom message
  messageElement.textContent = `Your score is ${score} of ${totalQuestions}`;
  messageElement.style.display = "block";
}

function updateResults() {
  resultsElement.textContent = `Score: ${score} // ${totalQuestions}`;
}

// Start the quiz
displayQuestion();