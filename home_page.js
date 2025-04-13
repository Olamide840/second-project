function goToModule(module) {
    alert("You selected: " + module);
  }
  
  function scrollToModules() {
    document.getElementById("modules").scrollIntoView({ behavior: "smooth" });
  }

  function updateProgress() {
    const phishing = localStorage.getItem("phishingScore");
    const password = localStorage.getItem("passwordScore");
    const browsing = localStorage.getItem("browsingScore");

    let completed = 0;

    if (phishing && phishing > 0) {
      document.getElementById("phishing-status").textContent = "✅ Completed";
      completed++;
    }

    if (password && password > 0) {
      document.getElementById("password-status").textContent = "✅ Completed";
      completed++;
    }

    if (browsing && browsing > 0) {
      document.getElementById("browsing-status").textContent = "✅ Completed";
      completed++;
    }

    const percent = (completed / 3) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  window.onload = updateProgress;
