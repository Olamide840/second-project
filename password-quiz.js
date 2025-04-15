const questions = [
    {
        question: "What is Password Safety ?",
        options: [
          "A scam where attackers try to trick you into giving personal info.",
          "The Practice of ensuring secure and safety of Passwords online.",
          "Breaking down into Systems.",
          "Checking Vulnerabilities in a System."
        ],
        answer: 1
      },
      {
        question: "Which of the following is NOT a common Poor password practice that makes individuals vulnerable to cyber threats?",
        options: [
            "Failing to change passwords Regularly.",
            "Reusing same passwords across multiple accounts or websites.",
            "Using Complex passwords with a mix of letters, numbers, and symbols",
            "Storing passwords insecurely, such as writing them down."
        ],
        answer: 2
      },
      {
        question: "What is the Primary method used in a brute-force attack to compromise passwords ?",
        options: [
            "Using a List of commom words and passwords to guess user credentials.",
            "Tricking Users into revealing their passwords through deceptive emails.",
            "Obtaining login information from one breach and trying the same credentials on other platforms.",
            "Using software to try every possible combination until the correct one is guessed.",
        ],
        answer: 3
      },
      {
        question: "which of the following types of attack types involves using a list of common words and previously breached passwords to guess user credentials ?",
        options: [
            "Dictionary Attack",
            "Phishing",
            "Credential Stuffing",
            "Keylogging"
        ],
        answer: 2
    },
    {
        question: "In the context of Password security, what is 'Credential Stuffing' ?",
        options: [
            "The Act od sending fraudlent emails to trick users into revealing their passwords.",
            "The Practice of using database of common words to guess passwords.",
            "Using compromised credentials from one service to gain access to another services.",
            "Using Malware to record a user's keystrokes, including Passwords."
        ],
        answer: 2
    },
    {
        question: "Which of the following strategies offers the MOST robust defense against a wide array of password-based cyber attacks, assuming all are implimented with diligence ?",
        options: [
            "Relying solely on memorizing a single, highly complex password that is used across all online accounts to avoid the risk of password manager vulnerabilities",
            "Frequently changing passwords to a slightly different iteration of the previous passwords, such as appending a number.",
            "Using a password manager to generate and store unique, complex passwords, combined with enabling multi-factor authrntication on all possible accounts.",
            "Implementing strict corporate policies that mandate employees create passwords based on a specific algorithm derived from personal information."
        ],
        answer: 2
    },
    {
        question: "Why is it important to use a strong password?",
        options: [
          "So it's easier to remember",
          "To prevent unauthorized access",
          "To match your username",
          "Because websites require it"
        ],
        answer: 1
      },
      {
        question: "Which of the following is a strong password?",
        options: [
          "12345678",
          "password",
          "MyDogName2020",
          "T$g8#rY!91@"
        ],
        answer: 3
      },
      {
        question: "What is the recommended minimum length for a strong password?",
        options: ["4 characters", "6 characters", "8 characters", "12 characters"],
        answer: 3
      },
      {
        question: "Which practice should you avoid when creating a password?",
        options: [
          "Mixing letters and numbers",
          "Using your birthday",
          "Adding special characters",
          "Making it long"
        ],
        answer: 1
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: [
          "Using two passwords",
          "A backup login method",
          "A second layer of security like a code or biometric",
          "Logging in from two devices"
        ],
        answer: 2
      },
      {
        question: "How often should you update your passwords?",
        options: [
          "Every 5 years",
          "Only when hacked",
          "Regularly, especially for sensitive accounts",
          "Never"
        ],
        answer: 2
      },
      {
        question: "Which of these passwords is the weakest?",
        options: ["Apple123", "LetMeIn", "Passw0rd!", "Qwerty"],
        answer: 3
      },
      {
        question: "Should you use the same password for multiple accounts?",
        options: [
          "Yes, it saves time",
          "Only if it's strong",
          "No, it's risky",
          "Yes, if it's hard to guess"
        ],
        answer: 2
      },
      {
        question: "What should you do if a service you use gets hacked?",
        options: [
          "Ignore it",
          "Change your password immediately",
          "Close your account",
          "Reinstall the app"
        ],
        answer: 1
      },
      {
        question: "Which tool can help manage multiple strong passwords?",
        options: [
          "Notebook",
          "Password manager",
          "Text document on desktop",
          "Clipboard history"
        ],
        answer: 1
      },
      {
        question: "What does a password manager do?",
        options: [
          "Creates and stores passwords securely",
          "Hacks your accounts",
          "Saves passwords to browsers only",
          "Creates viruses"
        ],
        answer: 0
      },
      {
        question: "What’s a passphrase?",
        options: [
          "A short code",
          "A sentence or phrase used as a password",
          "Your username",
          "A secret handshake"
        ],
        answer: 1
      },
      {
        question: "Which of the following is a good passphrase?",
        options: [
          "Summer2024",
          "LetMeIn123",
          "Cats&Coffee!AreLife99",
          "Admin1234"
        ],
        answer: 2
      },
      {
        question: "Why should you avoid saving passwords in your browser?",
        options: [
          "Because they’re too long",
          "Because anyone using your device could access them",
          "Because browsers delete them",
          "It slows down browsing"
        ],
        answer: 1
      },
      {
        question: "What should you do if you forget a strong password?",
        options: [
          "Reset it via 'Forgot Password'",
          "Guess until you get it",
          "Create a new account",
          "Use a weak one next time"
        ],
        answer: 0
      },
      {
        question: "Are biometric logins (like fingerprint) secure?",
        options: [
          "No, they’re easy to fake",
          "Yes, they’re very secure and convenient",
          "Only on Android",
          "Only with VPN"
        ],
        answer: 1
      },
      {
        question: "What is a brute-force attack?",
        options: [
          "Guessing passwords by trying all combinations",
          "Breaking into servers physically",
          "Sending phishing emails",
          "Asking people for passwords"
        ],
        answer: 0
      },
      {
        question: "What is 'dictionary attack' in password hacking?",
        options: [
          "Using all words in a dictionary to guess a password",
          "Sending emails to people",
          "Breaking CAPTCHA",
          "Guessing usernames"
        ],
        answer: 0
      },
      {
        question: "Which of these passwords is most secure?",
        options: [
          "Basketball2022",
          "LoveYouForever",
          "L!z_9$kM@7q",
          "Secret123"
        ],
        answer: 2
  },
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
  
    localStorage.setItem("passwordScore", score);
  }
  
  function goHome() {
    window.location.href = "home_page.html";
  }
  
  window.onload = loadQuestion;
  