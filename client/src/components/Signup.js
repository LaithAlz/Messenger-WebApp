import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      try {
        const config = { headers: { "Content-type": "application/json" } };
        const { data } = await axios.post(
          "/api/user",
          { name, email, password },
          config
        );
        setSuccess("Registration successful. You can now log in.");

        localStorage.setItem("userInfo", JSON.stringify(data));
        history("/");
      } catch (error) {
        setError("An error occurred during registration.");
        setSuccess("");
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <textarea
          name="bio"
          placeholder="Write a bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
