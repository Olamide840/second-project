const questions = [
    {
      question: "What is phishing?",
      options: [
        "A scam where attackers try to trick you into giving personal info",
        "A way to make your password stronger",
        "A tool to secure your browser",
        "A type of antivirus software"
      ],
      answer: 0
    },
    {
      question: "Which is a common phishing method?",
      options: [
        "Sending fake emails",
        "Installing antivirus software",
        "Posting memes online",
        "Clearing browser cache"
      ],
      answer: 0
    },
    {
      question: "What should you check in a suspicious email?",
      options: [
        "The sender's favorite color",
        "The file size",
        "The sender’s email address",
        "The number of emojis used"
      ],
      answer: 2
    },
    {
      question: "Phishing emails often include:",
      options: [
        "Discounts for loyal customers",
        "Warnings and urgent messages",
        "Funny memes",
        "High-quality jokes"
      ],
      answer: 1
    },
    {
      question: "A real company email usually:",
      options: [
        "Is full of spelling mistakes",
        "Comes from a strange domain",
        "Has a professional tone and correct grammar",
        "Asks for your password directly"
      ],
      answer: 2
    },
    {
      question: "What should you do with a suspicious link?",
      options: [
        "Click it immediately",
        "Send it to friends",
        "Hover to preview it first",
        "Trust it if it looks real"
      ],
      answer: 2
    },
    {
      question: "Phishing messages try to get:",
      options: [
        "Your favorite music",
        "Your personal and financial details",
        "Your browser settings",
        "Your location only"
      ],
      answer: 1
    },
    {
      question: "Where do phishing attacks happen?",
      options: [
        "Only in emails",
        "Only on social media",
        "Anywhere online (emails, SMS, websites)",
        "Only through apps"
      ],
      answer: 2
    },
    {
      question: "A fake website might:",
      options: [
        "Use HTTPS always",
        "Look exactly like a real one",
        "Have no buttons",
        "Be impossible to detect"
      ],
      answer: 1
    },
    {
      question: "If a message says 'Act Now!' and threatens you, it's likely:",
      options: [
        "A normal customer service message",
        "An urgent update",
        "A phishing attempt",
        "Spam with no harm"
      ],
      answer: 2
    },
    {
      question: "One way to avoid phishing is:",
      options: [
        "Using public Wi-Fi",
        "Ignoring grammar",
        "Never opening emails",
        "Enabling multi-factor authentication"
      ],
      answer: 3
    },
    {
      question: "How often should you change your passwords?",
      options: [
        "Never",
        "Only if you forget them",
        "Regularly, especially if there’s a breach",
        "Only yearly"
      ],
      answer: 2
    },
    {
      question: "What is spear phishing?",
      options: [
        "A scam targeting a wide audience",
        "A scam targeting one person or organization",
        "Fishing for fun",
        "Using antivirus tools"
      ],
      answer: 1
    },
    {
      question: "What’s a giveaway of a phishing SMS?",
      options: [
        "Short message",
        "Typos and suspicious links",
        "Friendly tone",
        "Coming from known contact"
      ],
      answer: 1
    },
    {
      question: "What should you do if you fall for a phishing scam?",
      options: [
        "Ignore it",
        "Report it and change your passwords",
        "Yell at the computer",
        "Try again"
      ],
      answer: 1
    },
    {
      question: "Why do phishers use logos of real companies?",
      options: [
        "To look professional",
        "To entertain",
        "For legal reasons",
        "To build their brand"
      ],
      answer: 0
    },
    {
      question: "What’s a phishing kit?",
      options: [
        "A pack of fishing rods",
        "Tools used to build fake websites easily",
        "Anti-phishing browser tool",
        "Company security package"
      ],
      answer: 1
    },
    {
      question: "Can phishing happen over phone calls?",
      options: [
        "No",
        "Yes, it's called vishing",
        "Only for banks",
        "Only overseas"
      ],
      answer: 1
    },
    {
      question: "Why should you avoid clicking unknown attachments?",
      options: [
        "They might contain malware or viruses",
        "They might be memes",
        "They use up data",
        "They are boring"
      ],
      answer: 0
    },
    {
      question: "You received an email from 'support@amaz0n-security.com'. What do you do?",
      options: [
        "Click the link to secure your account",
        "Ignore it, it's legit",
        "Check if the email address is suspicious — it likely is",
        "Reply to ask for more info"
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
  
    localStorage.setItem("phishingScore", score);
  }
  
  function goHome() {
    window.location.href = "home_page.html";
  }
  
  window.onload = loadQuestion;
  