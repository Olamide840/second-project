  const tips = [
    "Tip: Never Share your Password via Unverified/illegitimate Email",
    "Tip: Do not use the same username and password for all your accounts",
    "Tip: Do not click on suspicious links",
    "Tip: Enable two fator authentication or a MFA",
    "Tip: Use a RBAC for implementing employees access",
    "Tip: Regularly BackUp your data",
    "Tip: Use a VPN on public wifi",
    "Tip: Use a Behavioral analytics",
    "Tip: Use Strong Encryption",
    "Tip: Use anti-virus software",
  ];
  let index = 0;
  const tipText = document.getElementById("tip-text");
  setInterval(() => {
    index = (index + 1) % tips.length;
    tipText.style.opacity = 0.5;
    setTimeout(() => {
      tipText.textContent = tips[index];
      tipText.style.opacity = 1;
      tipText.style.fontWeight = bolder;
    }, 500);
  }, 4000);
  

  
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
