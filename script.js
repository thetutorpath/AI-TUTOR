let lastMessage = "Hi! I'm Kritika, your spoken English tutor. Let's enjoy practicing English!";

function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "demo" && password === "demo@234") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("chat-container").style.display = "block";
  } else {
    document.getElementById("login-error").innerText = "Invalid credentials!";
  }
}

function sendMessage() {
  const input = document.getElementById("user-input").value;
  if (input.trim()) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p>You: ${input}</p>`;
    const reply = "Kritika: " + input; // Simulated reply
    lastMessage = reply;
    chatBox.innerHTML += `<p style='color:green;'>${reply}</p>`;
    document.getElementById("user-input").value = "";
    speak(reply);
  }
}

function repeatMessage() {
  speak(lastMessage);
}

function uploadImage() {
  document.getElementById("image-input").click();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes("Female") || voice.name.includes("Google"));
  speechSynthesis.speak(utterance);
}
