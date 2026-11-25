
/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


/* HERO SLIDER */

const slides = document.querySelectorAll(".hero-slide");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");

  slideNumber.textContent =
    `0${currentSlide + 1} / 0${slides.length}`;
}

function startSlider() {
  clearInterval(slideTimer);

  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

document.getElementById("nextSlide").addEventListener("click", () => {
  showSlide(currentSlide + 1);
  startSlider();
});

document.getElementById("prevSlide").addEventListener("click", () => {
  showSlide(currentSlide - 1);
  startSlider();
});

startSlider();


/* RHEA AI CHATBOT */

const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");
const chatMessages = document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
});

closeChat.addEventListener("click", () => {
  chatWindow.classList.remove("open");
});

function addMessage(message, className) {
  const messageDiv = document.createElement("div");

  messageDiv.className = className;
  messageDiv.textContent = message;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getRheaReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! 👋 Welcome to LEGO TECH. I'm RHEA. How can I assist you today?";
  }

  if (msg.includes("service") || msg.includes("services")) {
    return "We offer Website Development, App Development, Software Development, AI & ML, UI/UX Design, Digital Marketing and IT Training.";
  }

  if (msg.includes("website")) {
    return "We create modern, responsive and professional websites for businesses. Would you like to discuss your website project?";
  }

  if (msg.includes("app")) {
    return "LEGO TECH provides mobile application development solutions. Tell me a little about your app idea!";
  }

  if (msg.includes("ai") || msg.includes("chatbot")) {
    return "We work with AI, Machine Learning, intelligent automation and chatbot solutions. Let's discuss your requirements!";
  }

  if (msg.includes("internship") || msg.includes("training")) {
    return "We provide IT training and internship-related opportunities. Contact our team to learn about current programs.";
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("charges")) {
    return "Project pricing depends on your requirements and features. Please share your project details with our team.";
  }

  if (msg.includes("contact") || msg.includes("email")) {
    return "You can contact LEGO TECH through email: info@legotech.in. Our team will be happy to assist you.";
  }

  if (msg.includes("location") || msg.includes("address")) {
    return "Please contact our team for company location and office details.";
  }

  if (msg.includes("thank")) {
    return "You're welcome! 😊 Thank you for choosing LEGO TECH.";
  }

  return "Thank you for contacting LEGO TECH! I'm RHEA. Please tell me more about your requirements, or email us at info@legotech.in.";
}

function sendMessage() {
  const message = chatInput.value.trim();

  if (!message) return;

  addMessage(message, "user-message");

  chatInput.value = "";

  setTimeout(() => {
    const reply = getRheaReply(message);
    addMessage(reply, "bot-message");
  }, 600);
}

sendChat.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});


/* CONTACT FORM */

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailSubject = encodeURIComponent(subject || "New Project Enquiry");
  const mailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:info@legotech.in?subject=${mailSubject}&body=${mailBody}`;
});
