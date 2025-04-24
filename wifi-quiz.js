const questions = [
    {
      question: "What is Wi-Fi snooping?",
      options: [
        "Using Wi-Fi to browse social media",
        "Spying on users’ data over unsecured Wi-Fi networks",
        "Sharing your password with friends",
        "Using VPN at home"
      ],
      answer: 1
    },
    {
      question: "What type of Wi-Fi network is most vulnerable to snooping?",
      options: [
        "Password-protected networks",
        "VPN-encrypted networks",
        "Open public Wi-Fi networks",
        "Private home networks"
      ],
      answer: 2
    },
    {
      question: "Which device is often used for Wi-Fi snooping?",
      options: [
        "Smartwatch",
        "Router",
        "Packet sniffer",
        "Printer"
      ],
      answer: 2
    },
    {
      question: "What is a packet sniffer?",
      options: [
        "A food delivery tool",
        "A malware detector",
        "A tool that captures data transmitted over a network",
        "A music player"
      ],
      answer: 2
    },
    {
      question: "What’s the safest way to use public Wi-Fi?",
      options: [
        "Use it without protection",
        "Always log in to bank apps",
        "Use a VPN",
        "Turn off your firewall"
      ],
      answer: 2
    },
    {
      question: "How can hackers intercept your Wi-Fi traffic?",
      options: [
        "Through social media",
        "By buying your router",
        "Using sniffing tools on open networks",
        "By calling your ISP"
      ],
      answer: 2
    },
    {
      question: "Which of these prevents Wi-Fi snooping?",
      options: [
        "Turning off Wi-Fi completely",
        "Using a VPN",
        "Changing your email address",
        "Opening more browser tabs"
      ],
      answer: 1
    },
    {
      question: "Why should you avoid logging into sensitive accounts on public Wi-Fi?",
      options: [
        "It's slower",
        "It drains your battery",
        "It can expose your login data to snoopers",
        "It uses your data bundle"
      ],
      answer: 2
    },
    {
      question: "What should you look for before connecting to a public hotspot?",
      options: [
        "The signal strength",
        "If the hotspot name looks official and trustworthy",
        "If it’s the fastest one",
        "If it’s free"
      ],
      answer: 1
    },
    {
      question: "Which of these is a sign your device may have been snooped?",
      options: [
        "Fast internet",
        "Unusual pop-ups and slow performance",
        "Longer battery life",
        "Extra storage space"
      ],
      answer: 1
    },
    {
      question: "Should you keep file sharing on while using public Wi-Fi?",
      options: [
        "Yes, for convenience",
        "No, it increases the risk of attacks",
        "Only if you trust the Wi-Fi name",
        "Yes, it helps your friends connect"
      ],
      answer: 1
    },
    {
      question: "What is HTTPS?",
      options: [
        "A social media tool",
        "A secure version of a website connection",
        "A free Wi-Fi service",
        "An email provider"
      ],
      answer: 1
    },
    {
      question: "Why is HTTPS better than HTTP?",
      options: [
        "It loads faster",
        "It uses more ads",
        "It encrypts the data between browser and server",
        "It allows pop-ups"
      ],
      answer: 2
    },
    {
      question: "What should you disable on your device in public places?",
      options: [
        "Bluetooth and auto-connect to networks",
        "Your flashlight",
        "Your camera",
        "Your music player"
      ],
      answer: 0
    },
    {
      question: "Can Wi-Fi snooping happen without you noticing?",
      options: [
        "Yes, it's often invisible",
        "No, it always shows popups",
        "Only during updates",
        "Only on mobile phones"
      ],
      answer: 0
    },
    {
      question: "What does a VPN do on public Wi-Fi?",
      options: [
        "Blocks websites",
        "Increases download speed",
        "Encrypts your internet connection",
        "Turns off your internet"
      ],
      answer: 2
    },
    {
      question: "How can you tell if a public network is fake?",
      options: [
        "It asks for login info and looks similar to real ones",
        "It has fast speed",
        "It plays music",
        "It requires money"
      ],
      answer: 0
    },
    {
      question: "What’s one way to verify a legitimate public Wi-Fi network?",
      options: [
        "Guess it by the name",
        "Ask a staff member",
        "Connect to all and see which works",
        "Use your hotspot"
      ],
      answer: 1
    },
    {
      question: "What’s a major risk of connecting to public Wi-Fi without protection?",
      options: [
        "Free data",
        "Getting a new IP address",
        "Man-in-the-middle attacks",
        "Battery drain"
      ],
      answer: 2
    },
    {
      question: "What is one way to stay safe while traveling and using Wi-Fi?",
      options: [
        "Use open Wi-Fi freely",
        "Disable security settings",
        "Use mobile data or VPN",
        "Turn off airplane mode"
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
      
        localStorage.setItem("wifiScore", score);
      }
      
      function goHome() {
        window.location.href = "home_page.html";
      }
      
      window.onload = loadQuestion;
      