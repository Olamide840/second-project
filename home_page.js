  function updateProgress() {
    const phishing = localStorage.getItem("phishingScore");
    const password = localStorage.getItem("passwordScore");
    const browsing = localStorage.getItem("safeScore");
    const malware = localStorage.getItem("malwareScore");
    const insider = localStorage.getItem("insiderScore");
    const data = localStorage.getItem("dataScore");
    const wifi = localStorage.getItem("wifiScore");

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

    if (malware && malware > 0) {
      document.getElementById("malware-status").textContent = "✅ Completed";
      completed++;
    }

    if (insider && insider > 0) {
      document.getElementById("insider-status").textContent = "✅ Completed";
      completed++;
    }

    if (data && data > 0) {
      document.getElementById("data-status").textContent = "✅ Completed";
      completed++;
    }

    if (wifi && wifi > 0) {
      document.getElementById("wifi-status").textContent = "✅ Completed";
      completed++;
    }
    const percent = (completed / 7) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  window.onload = updateProgress;
