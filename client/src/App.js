import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatPrev from "./components/ChatPrev";

function App() {

  const chats = [{name: "Laith", lastMessage: "Hello", timestamp: "now", unread: true }]

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        <Route
            path="/"
            element={<Home chats={chats} />}
          />
          <Route
            path="/chat/1"
            element={<ChatPrev />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
