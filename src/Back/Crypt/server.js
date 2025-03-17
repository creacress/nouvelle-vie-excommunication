const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const CryptoJS = require("crypto-js");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const SECRET_KEY = "pimo-secret-key"; // Clé de chiffrement AES
const messages = [];

io.on("connection", (socket) => {
  console.log("Un utilisateur anonyme s'est connecté");

  // Envoi des anciens messages chiffrés
  socket.emit("chatHistory", messages);

  // Réception d'un message
  socket.on("sendMessage", (encryptedMsg) => {
    messages.push(encryptedMsg); // On stocke les messages temporairement
    io.emit("receiveMessage", encryptedMsg);
  });

  // Suppression automatique des messages après 24h
  setTimeout(() => {
    messages.length = 0;
    io.emit("chatHistory", []);
  }, 24 * 60 * 60 * 1000);
});

server.listen(4000, () => {
  console.log("Serveur WebSocket sécurisé sur le port 4000");
});
