import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, query, where, collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const q = query(
        collection(db, "Wrestleverse", "LoginDetails", "Users"),
        where("username", "==", username),
        where("password", "==", password)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        setError("Invalid username or password.");
      }
    } catch {
      setError("Login failed. Please try again.");
    }
  };

  const handleRegister = async () => {
    setError("");
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    const q = query(
      collection(db, "Wrestleverse", "LoginDetails", "Users"),
      where("username", "==", username)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      setError("Username already exists.");
      return;
    }

    await addDoc(collection(db, "Wrestleverse", "LoginDetails", "Users"), {
      username,
      password,
    });

    setIsRegistering(false);
    setError("Registration successful. Please log in.");
  };

  return (
    <div className="LoginPage">
      {/* Left panel */}
      <div className="LoginBrand">
        <img src="/Images/Wrestleverse2K26S.png" alt="Wrestleverse" />
        <h1>Wrestleverse</h1>
        <p>
          Your universe. Your roster. Your story.
          <br />
          Log in to continue your journey.
        </p>
      </div>

      {/* Right panel */}
      <div className={`LoginPanel ${isRegistering ? "register" : ""}`}>
        <h2>{isRegistering ? "Register" : "Login"}</h2>

        {error && <p className="LoginError">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={isRegistering ? handleRegister : handleLogin}>
          {isRegistering ? "Create Account" : "Login"}
        </button>

        <span
          className="LoginToggle"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "Already have an account? Login"
            : "No account? Register"}
        </span>
      </div>
    </div>
  );
};

export default Login;