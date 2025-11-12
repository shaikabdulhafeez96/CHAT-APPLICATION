const socket = io();

const usernameContainer = document.getElementById("username-container");
const usernameInput = document.getElementById("username-input");
const usernameBtn = document.getElementById("username-btn");

const chatContainer = document.getElementById("chat-container");
const form = document.getElementById("chat-form");
const input = document.getElementById("msg");
const messages = document.getElementById("messages");

let username = "";

// Step 1: Ask for username
usernameBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name !== "") {
    username = name;
    usernameContainer.style.display = "none";
    chatContainer.style.display = "block";
  }
});

// Step 2: Send message with username
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    socket.emit("chat message", { username, message: input.value });
    input.value = "";
  }
});

// Step 3: Receive messages from server
socket.on("chat message", (data) => {
  const li = document.createElement("li");
  li.textContent = `${data.username}: ${data.message}`;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});
