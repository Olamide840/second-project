const questions = [
    {
        question: "What is an Insider Threats ?",
        options: [
            "A hacker from outside the organization",
            "A current or former employee, contractor, or partner who poses a threat",
            "A competitor trying to steal company secrets",
            "A natural disaster impacting data centers"
        ],
        answer: 1
    },
    {
        question: "Which of the following are types of insider threats ?",
        options: [
            "Human errors",
            "Careless works/arrangements by the insiders",
            "Outsider hackers",
            "Structural Failures"
        ],
        answer: 1
    },
    {
        question: "Insider threats only come from disgruntled employees.",
        options: [
            "TRUE",
            "FALSE",
            "I DONT KNOW"
        ],
        answer: 0
    },
    {
        question: "What is the common unintentional insider threat behaviour ?",
        options: [
            "Selling data to competitiors",
            "Falling for phishing emails",
            "Installing keyloggers",
            "Encrypting company files for ransome"
        ],
        answer: 1
    },
    {
        question: "Scenario: 'An employee clicks on a phishing email link, accidentally giving an attacker access to company data. What kind of insider threats is this ?'",
        options: [
            "Malicious",
            "Accidental",
            "Compromised",
            "External"
        ],
        answer: 2
    },
    {
        question: "Which of the following is a clear red flag for a potential insider threat ?",
        options: [
            "Accessing training materials during work hours",
            "Asking a coworker for help with a software tool",
            "Applying software updates as instructed",
            "Downloading large volumes of sensitive data"
        ],
        answer: 3
    },
    {
        question: "Monitoring activity can help detect insider threats.",
        options: [
            "TRUE",
            "FALSE",
            "NOT SURE"
        ],
        answer: 0
    },
    {
        question: "What is the best defense against insider threats ?",
        options: [
            "Strong physical security",
            "Firewalls and antivirus software",
            "User behavioral analysis and employee training",
            "Hiring more IT staff"
        ],
        answer: 2
    },
    {
        question:"Scenario: 'A contractor has left the company but still has access to internal systems. What is the best course of action ?'",
        options: [
            "Do nothing, they wont use it",
            "Wait until the next audit",
            "Immediately revoke access",
            "Send a warning email"
        ] ,
        answer: 2
    },
    {
        question: "Which department is typically involved in managing insider threats ?",
        options: [
            "Marketing",
            "Human Resources",
            "IT and Security",
            "Legal",
            "All of the above"
        ],
        answer: 4
    },
    {
        question: "Which of the following can be considered an insider?",
        options: [
          "A delivery driver",
          "A hacker from a foreign country",
          "A current or former employee with access to systems",
          "An unknown person browsing your website"
        ],
        answer: 2
      },
      {
        question: "Which of these is an example of an accidental insider threat?",
        options: [
          "Leaking data to the media on purpose",
          "Losing a company laptop with sensitive data",
          "Selling company secrets for money",
          "Installing keyloggers"
        ],
        answer: 1
      },
      {
        question: "Why are insider threats dangerous?",
        options: [
          "They are easy to detect",
          "They always cause viruses",
          "They have trusted access to sensitive data",
          "They can only damage physical devices"
        ],
        answer: 2
      },
      {
        question: "Which behavior may indicate a potential insider threat?",
        options: [
          "Coming to work early",
          "Frequent travel for meetings",
          "Accessing large amounts of sensitive data without reason",
          "Asking IT for help"
        ],
        answer: 2
      },
      {
        question: "How can organizations reduce insider threats?",
        options: [
          "Allowing unlimited access to all employees",
          "Using strong firewalls only",
          "Implementing user activity monitoring and access control",
          "Sharing passwords between teams"
        ],
        answer: 2
      },
      {
        question: "What is an example of a malicious insider?",
        options: [
          "Someone who forgot their password",
          "An employee who sells data to outsiders",
          "An employee who loses their badge",
          "A system glitch"
        ],
        answer: 1
      },
      {
        question: "What role does training play in preventing insider threats?",
        options: [
          "None",
          "It helps outsiders understand company rules",
          "It ensures employees are aware of security practices",
          "It increases the risk"
        ],
        answer: 2
      },
      {
        question: "Which tool can help detect insider threats?",
        options: [
          "Email filters only",
          "User Behavior Analytics (UBA)",
          "Graphic design software",
          "Spreadsheet tools"
        ],
        answer: 1
      },
      {
        question: "Who should be held responsible for preventing insider threats?",
        options: [
          "Only the IT department",
          "Only top management",
          "Every employee",
          "Only the security guard"
        ],
        answer: 2
      },
      {
        question: "Which of the following is NOT a form of insider threat?",
        options: [
          "Data theft by an employee",
          "Accidental leak by a contractor",
          "A hacker breaching the system from outside",
          "Negligent use of admin rights"
        ],
        answer: 2
      }
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = `Q${currentQuestion + 1}: ${q.question}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    btn.className = "option-btn";
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correct) btn.style.backgroundColor = "green";
    if (idx === selected && idx !== correct) btn.style.backgroundColor = "red";
  });

  if (selected === correct) score++;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("score").textContent = `You got ${score} out of ${questions.length} (${percent}%)`;

  localStorage.setItem("insiderScore", score);
}

function goHome() {
  window.location.href = "home_page.html";
}

window.onload = loadQuestion;
