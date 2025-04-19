const questions = [
    {
        question: "What is the primary goal of data protection regulations like the GDPR ?",
        options: [
            "To allow companies to collect unlimited personal data",
            "To enhance individuals' control over their personal information",
            "To monitor internet usage patterns",
            "To promote targetted advertising"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a fundamental principle of the GDPR ?",
        options: [
            "Data should be processed unlawfully and transparently",
            "Data should be collected for specified, legitimate purposes",
            "Data should be inaccurate and kept up to date",
            "Data should be kept in a form which permits identification of data subjects indefinitely"
        ],
        answer: 1 
    },
    {
        question: "What does the term 'DATA MINIMIZATION' refers to ?",
        options: [
            "Collecting as much data as possible",
            "Processing only the necessary amount of personal information required for a specific purpose",
            "Storing data indefinitely",
            "Sharing data with third parties without restrictions"
        ],
        answer: 1
    },
    {
        question: "Which of the following is an example of a social engineering attack ?",
        options: [
            "Installing antivirus software",
            "Encrypting sensitive data",
            "Using firewalls to block unauthorized access",
            "Sending a phishing email to trick users into revealing personal information"
        ],
        answer: 3
    },
    {
        question: "Under the GDPR, what is the 'right to be forgoteen' ?",
        options: [
            "The right to access all personal data held by an organization",
            "The right to object to data processing for marketing purposes",
            "The right to have personal data erased under certain conditions",
            "The right to transfer personal data to another service provider"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of a Data Protection Officer (DPO) under the GDPR",
        options: [
            "To manage marketing campaigns",
            "To monitor compliance with data protection laws",
            "To handle customer service inquiries",
            "To develop new products"
        ],
        answer: 1
    },
    {
        question: "Wich of the following is considered sensitive personal data under the GDPR ?",
        options: [
            "Name",
            "Email Address",
            "Racial or ethnic origin",
            "Telephone number"
        ],
        answer: 2
    },
    {
        question: "What is a common consequence of a data breach ?",
        options: [
            "Increased customer trust",
            "Legal actions and financial penalties",
            "Enhanced brand reputation",
            "Improved data security practices"
        ],
        answer: 1
    },
    {
        question: "What does the term 'pseudonymization' means in data protection ?",
        options: [
            "Encrypting data to make it unreadable",
            "Sharing data with third parties",
            "Storing data in a secure location",
            "Replacing personal identifiers with pseudonyms to protect privacy"
        ],
        answer: 3
    },
    {
        question: "Which of the following is a recommended practice to enhance data privacy ?",
        options: [
            "Sharing password with colleague",
            "Using the same password for multiple accounts",
            "Implementing multi-factor authentication",
            "Disabling fire walls"
        ],
        answer: 2
    },
    {
        question: "What is the main goal of data protection?",
        options: [
          "To advertise products",
          "To store more data",
          "To safeguard personal and sensitive information",
          "To share information with third parties"
        ],
        answer: 2
      },
      {
        question: "Which of the following is considered personal data?",
        options: [
          "Your favorite color",
          "Your email address",
          "Public park location",
          "A movie title"
        ],
        answer: 1
      },
      {
        question: "What does GDPR stand for?",
        options: [
          "Global Data Protection Rules",
          "General Data Protection Regulation",
          "Government Data Policy Regulations",
          "General Database Privacy Rules"
        ],
        answer: 1
      },
      {
        question: "Which action helps protect your data privacy online?",
        options: [
          "Sharing passwords with friends",
          "Using public Wi-Fi without VPN",
          "Using strong and unique passwords",
          "Accepting all cookies blindly"
        ],
        answer: 2
      },
      {
        question: "What is data encryption used for?",
        options: [
          "Speeding up data transfer",
          "Storing files offline",
          "Making data unreadable to unauthorized users",
          "Filing taxes online"
        ],
        answer: 2
      },
      {
        question: "Who is responsible for protecting your personal data?",
        options: [
          "Only the government",
          "Only companies",
          "Both individuals and organizations",
          "Hackers"
        ],
        answer: 2
      },
      {
        question: "Which of the following is a privacy risk?",
        options: [
          "Setting your profile to private",
          "Using multi-factor authentication",
          "Posting sensitive details on social media",
          "Using secure websites"
        ],
        answer: 2
      },
      {
        question: "What does a privacy policy explain?",
        options: [
          "How to use your phone",
          "What the weather will be",
          "How a company collects and uses your data",
          "How to get discounts"
        ],
        answer: 2
      },
      {
        question: "Which of the following is a best practice for data protection?",
        options: [
          "Backing up your data regularly",
          "Using one password for all accounts",
          "Leaving your computer unlocked",
          "Clicking unknown links"
        ],
        answer: 0
      },
      {
        question: "How can you tell a website is secure?",
        options: [
          "It has ‘http://’ in the URL",
          "It has colorful fonts",
          "It asks for your password multiple times",
          "It has ‘https://’ and a padlock icon"
        ],
        answer: 3
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
  
    localStorage.setItem("dataScore", score);
  }
  
  function goHome() {
    window.location.href = "home_page.html";
  }
  
  window.onload = loadQuestion;
  