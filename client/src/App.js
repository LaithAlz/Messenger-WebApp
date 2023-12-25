import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatPrev from "./components/ChatPrev";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import People from "./components/People";
import UserProfile from "./components/UserProfile";

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
            path="/friends"
            element={<Friends />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/people"
            element={<People />}
          />

<Route
            path="/people/1"
            element={<UserProfile />}
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
