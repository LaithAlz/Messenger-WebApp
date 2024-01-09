import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatPrev from "./components/ChatPrev";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import People from "./components/People";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ChatState } from "./context/ChatProvider";
import Search from "./components/Search";

function App() {
  const { user } = ChatState();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/friends" element={user ? <Friends /> : <Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route path="/people" element={user ? <People /> : <Login />} />
        <Route
          path="/people/:id"
          element={user ? <UserProfile /> : <Login />}
        />
        <Route path="/chat/:id" element={user ? <ChatPrev /> : <Login />} />
        <Route path="/search" element={user ? <Search /> : <Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
