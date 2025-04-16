const questions = [
    {
        question: "What is the meaning of a safe-browsing ?",
        options: [
            "The act of using strong Passwords.",
            "Using Bell-Lapadula Model",
            "The practice of navigating the internet in a way that minimizes the risk of encountering malicious content like malware, phishing scams, and other online threats.",
            "Giving strangers your credentials for Security check-ups"
        ],
        answer: 2
    },
        {
          question: "What is safe browsing?",
          options: [
            "Using the internet during the day only",
            "Avoiding websites with pop-ups",
            "Practicing habits that protect you from online threats",
            "Browsing incognito mode"
          ],
          answer: 2
        },
        {
          question: "What does HTTPS in a URL indicate?",
          options: [
            "The site is fun",
            "The site has a secure connection",
            "The site is fast",
            "The site is offline"
          ],
          answer: 1
        },
        {
          question: "Which of the following is a risky behavior online?",
          options: [
            "Clicking unknown links",
            "Using antivirus",
            "Blocking pop-ups",
            "Updating software"
          ],
          answer: 0
        },
        {
          question: "How do you know a website is secure?",
          options: [
            "It has many ads",
            "It loads slowly",
            "It starts with https:// and shows a padlock",
            "It asks for your password immediately"
          ],
          answer: 2
        },
        {
          question: "What should you do if your browser shows a warning about a site?",
          options: [
            "Ignore it",
            "Proceed anyway",
            "Report the site and leave immediately",
            "Turn off your internet"
          ],
          answer: 2
        },
        {
          question: "Why should you avoid public Wi-Fi for sensitive activities?",
          options: [
            "It's slower",
            "It may be monitored or intercepted by attackers",
            "It drains your battery",
            "It shows ads"
          ],
          answer: 1
        },
        {
          question: "What is a common method attackers use to steal your data?",
          options: [
            "Playing games",
            "Phishing websites",
            "VPN connections",
            "Secure emails"
          ],
          answer: 1
        },
        {
          question: "Which browser feature helps you avoid suspicious websites?",
          options: [
            "Incognito mode",
            "Safe Browsing or Security warnings",
            "Themes",
            "Bookmarks"
          ],
          answer: 1
        },
        {
          question: "What should you do before downloading files online?",
          options: [
            "Click as fast as possible",
            "Check file size only",
            "Verify the source is trusted",
            "Ignore the name"
          ],
          answer: 2
        },
        {
          question: "Pop-up ads often lead to...",
          options: [
            "Free money",
            "Helpful tools",
            "Malicious websites or malware",
            "Government websites"
          ],
          answer: 2
        },
        {
          question: "What is clickjacking?",
          options: [
            "Hacking your browser history",
            "Tricking you into clicking hidden elements",
            "Blocking ads",
            "Playing videos without consent"
          ],
          answer: 1
        },
        {
          question: "How can you protect your privacy while browsing?",
          options: [
            "Share passwords",
            "Allow all cookies",
            "Use secure websites and limit sharing personal info",
            "Keep GPS on always"
          ],
          answer: 2
        },
        {
          question: "What does a browser extension do?",
          options: [
            "Improves graphics",
            "Adds features to your browser",
            "Hacks websites",
            "Speeds up your PC"
          ],
          answer: 1
        },
        {
          question: "Why is it risky to save passwords in the browser?",
          options: [
            "They get deleted quickly",
            "Hackers can extract them if the device is compromised",
            "They make typing hard",
            "They slow down your connection"
          ],
          answer: 1
        },
        {
          question: "Which of these is a good security practice?",
          options: [
            "Always logging out of websites",
            "Leaving tabs open overnight",
            "Using your name as a username",
            "Installing random extensions"
          ],
          answer: 0
        },
        {
          question: "What is malware?",
          options: [
            "A type of ad blocker",
            "A program that protects your data",
            "A harmful program designed to damage or steal information",
            "A fast browser"
          ],
          answer: 2
        },
        {
          question: "Should you keep your browser and plugins updated?",
          options: [
            "No, it changes the look",
            "Yes, updates fix security issues",
            "Only once a year",
            "Only if you’re using Chrome"
          ],
          answer: 1
        },
        {
          question: "How can you block dangerous websites?",
          options: [
            "Bookmark them",
            "Use browser security settings or extensions",
            "Click on them repeatedly",
            "Share them with friends"
          ],
          answer: 1
        },
        {
            question: "Which of the following is a sign of a fake website?",
        options: [
            "Secure padlock",
            "Grammar mistakes and odd URLs",
            "HTTPS in the address bar",
            "Fast loading speed"
    ],
    answer: 1
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
      
        localStorage.setItem("safeScore", score);
      }
      
      function goHome() {
        window.location.href = "home_page.html";
      }
      
      window.onload = loadQuestion;
      