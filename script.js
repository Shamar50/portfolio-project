// =======================
// script.js
// =======================

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('#filters .btn');
const projectCards = document.querySelectorAll('#projectGrid > div');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#filters .btn.active')?.classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Chatbot Logic
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById('chatbot');
  const chatbotBody = chatbot.querySelector('.chatbot-body');
  const chatbotHeader = chatbot.querySelector('.chatbot-header');

  // Toggle visibility
  chatbotHeader.addEventListener('click', () => {
    chatbot.classList.toggle('active');
  });

  // Load HTML UI
  chatbotBody.innerHTML = `
    <div class="chat-log">
      <p>Hello! 👋 I'm your virtual assistant.</p>
      <p>Try asking me:</p>
      <ul>
        <li>Tell me about how you trade</li>
        <li>What graphic design work do you do?</li>
        <li>Tell me more about Academic writing</li>
        <li>What services do you offer?</li>
        <li>How can I contact you?</li>
      </ul>
    </div>
    <div class="chatbot-input">
      <input type="text" id="userInput" placeholder="Type your question..." />
      <button id="sendBtn">Send</button>
    </div>
  `;

  const sendBtn = chatbot.querySelector('#sendBtn');
  const userInput = chatbot.querySelector('#userInput');
  const chatLog = chatbot.querySelector('.chat-log');

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('Trading') || msg.includes('Forex') || msg.includes('Fx')) {
      return "I trade based on data analysed for the past years or months to increase the percentage of accurate results.";
    }

    if (msg.includes('web') || msg.includes('design') || msg.includes('graphic')) {
      return "I design and develop passionate, creative design like; flyers, bronchures, CVs, back-drop etc for clients satisfaction, by applying all he/she wants.";
    }

    if (msg.includes('services') || msg.includes('offer') || msg.includes('provide')) {
      return "My services include Trading, Academic writing, Graphic design.";
    }

    if (msg.includes('academic') || msg.includes('writing') || msg.includes('Wri')) {
      return "Academic writing is a formal, structured, and evidence-based style of writing used in universities and scholar publications. It often involve formatting styles like; APA format and MPA format.";
    }

    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
      return "You can contact me via the form below or reach out on LinkedIn, WhatsApp, or Email — links are in the footer!";
    }

    return "🤖 Sorry, I didn't understand that. Please try rephrasing your question.";
  };

  const addToChat = (sender, text) => {
    chatLog.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  };

  const handleSend = () => {
    const question = userInput.value.trim();
    if (question) {
      addToChat('You', question);
      const response = getBotResponse(question);
      addToChat('Bot', response);
      userInput.value = '';
    }
  };

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
});

// Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-bs-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-bs-theme', newTheme);
});
