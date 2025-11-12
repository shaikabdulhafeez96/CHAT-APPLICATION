# CHAT-APPLICATION

*COMPANY*:  CODTECH IT SOLUTIONS

*NAME*: SHAIK ABDULHAFEEZ

*INTERN ID*: CT06DR1513

*DOMAIN*: Full Stack Web Development
 
*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

##The main goal of this project is to create a real-time chat application where users can send and receive messages instantly. This means that when one user types and sends a message, the other users who are connected to the same chat will see that message immediately — without needing to refresh the page. To achieve this, we will use technologies like WebSocket or Socket.IO, which allow two-way communication between the client (frontend) and the server (backend).

In a normal website, communication between the browser and the server happens using the HTTP protocol. When you send a request, the server gives a response and the connection ends. But in a real-time chat application, this method is not suitable because users need to receive messages continuously. WebSocket solves this problem by creating a permanent connection between the client and the server. Once the connection is open, both sides can send and receive data anytime without reconnecting. Socket.IO is a library built on top of WebSocket that makes it much easier to work with and adds more features such as automatic reconnection and event-based messaging.

In this project, the frontend will be built using basic web technologies such as HTML, CSS, and JavaScript. The HTML part will create the structure of the chat interface. It will include an input box where users can type their messages and a message area where all chat messages will appear. CSS will be used to make the page look nice and user-friendly — for example, giving colors, borders, and layout to the chat window. JavaScript will handle the dynamic part of the frontend. It will connect to the server through Socket.IO and send or receive messages in real-time.

The backend will be created using Node.js and Express.js. Node.js is a JavaScript runtime that allows us to run JavaScript on the server side. Express.js helps to handle routes and serve static files easily. Inside the backend, we will create a server.js file that will use Socket.IO to listen for incoming connections and handle events like when a user connects, sends a message, or disconnects. Whenever a message is received from one user, the server will broadcast that message to all connected users so everyone can see it instantly.

To run this project, we will install Node.js and use commands like npm init and npm install express socket.io to set up the environment. After that, we can create a folder structure with public for frontend files and server.js for backend code. Once everything is set up, running node server.js will start the server, and the app will be available on http://localhost:3000. Opening this link in multiple browser tabs will allow us to test the real-time chat by sending messages from one tab and seeing them appear in the others immediately.

This project demonstrates how real-time communication works on the internet. It teaches important concepts such as event-driven programming, client-server communication, and handling multiple users at the same time. It also helps in understanding how modern apps like WhatsApp Web, Facebook Messenger, or Slack work internally.

In short, this Chat Application project is about combining both frontend and backend development to create a live, interactive chat system. It improves skills in Node.js, Express.js, and Socket.IO while also showing how to make user interfaces with HTML, CSS, and JavaScript. The final deliverable is a fully functional chat web app where users can join, send messages, and see them in real time without refreshing — just like a professional chat service.

#OUTPUT

<img width="1920" height="1140" alt="Image" src="https://github.com/user-attachments/assets/6b1d555d-0947-45ae-9975-3ff22d3105a5" />
