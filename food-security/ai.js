const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Plant tips database
const plantTips = {
  "olive": "Olive trees prefer well-drained soil and good air circulation. Avoid overwatering to prevent root rot.",
  "wheat": "Plant wheat in winter in irrigated or rain-fed lands. Remove weeds regularly.",
  "tomato": "Tomatoes grow best in nutrient-rich soil. Use drip irrigation to prevent leaf diseases.",
  "prickly pear": "Prickly pear needs sunny, dry soil. Reduce watering as the plant is drought-resistant.",
  "pepper": "Plant peppers in fertile soil, protect from frost, and lightly fertilize every two weeks.",
  "cucumber": "Cucumbers need frequent watering and nutrient-rich soil, best planted in spring.",
  "potato": "Plant potatoes in loose soil and ensure proper ventilation to prevent rot."
};

function handleUserInput() {
  const query = userInput.value.trim().toLowerCase();
  if (!query) return;

  // Show user message
  const userMsg = document.createElement('div');
  userMsg.classList.add('user');
  userMsg.textContent = userInput.value;
  chatBox.appendChild(userMsg);

  // Find best match in plantTips
  let response = "❌ Sorry, I don't have tips for that plant.";
  for (let plant in plantTips) {
    if (query.includes(plant)) {
      response = plantTips[plant];
      break;
    }
  }

  // Show bot response
  const botMsg = document.createElement('div');
  botMsg.classList.add('bot');
  botMsg.textContent = response;
  chatBox.appendChild(botMsg);

  // Clear input
  userInput.value = "";

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing Enter to send
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    handleUserInput();
  }
});
