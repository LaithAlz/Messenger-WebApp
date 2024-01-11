const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { notFound } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 3001;

connectDB();

const app = express();
// const chats = [
//   { id: "1", name: "Laith", lastMessage: "Hey", timestamp: "1 minute ago" },
//   { id: "2", name: "Ameer", lastMessage: "Hello!", timestamp: "5 minutes ago" },
// ];

const http = require('http').Server(app);
const cors = require('cors');


app.use(express.json());
app.use(cors())


const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });


  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
    console.log(data);
  });


  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });


});


app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


app.use(notFound);
// app.use(errorHandler)


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
