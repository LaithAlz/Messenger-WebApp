const express = require("express");
const io = require("socket.io");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 3001;

connectDB();

const app = express();
// const chats = [
//   { id: "1", name: "Laith", lastMessage: "Hey", timestamp: "1 minute ago" },
//   { id: "2", name: "Ameer", lastMessage: "Hello!", timestamp: "5 minutes ago" },
// ];

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
// app.use("/api/chats", chatRoutes);

app.use(notFound);
// app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
