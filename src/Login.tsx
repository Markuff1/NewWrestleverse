import React, { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getDocs, query, where, collection, deleteDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth, db } from "./firebaseConfig";
import { useAuthUser, usernameToEmail } from "./auth";
import "./Login.css";

const LEGACY_USERS = collection(db, "Wrestleverse", "LoginDetails", "Users");
const MIN_PASSWORD_LENGTH = 6; // Firebase Auth's minimum

const errorCode = (err: unknown) => (err instanceof FirebaseError ? err.code : "");

/** Creates the Firebase Auth account for `username`, keeping the username as its display name. */
async function createAccount(username: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(auth, usernameToEmail(username), password);
  await updateProfile(user, { displayName: username });
}

/**
 * Old plaintext accounts (Wrestleverse/LoginDetails/Users): if this username + password is one,
 * move it to Firebase Auth and delete the old record. Returns false if it isn't one, or if
 * firestore.rules have already closed the old collection off.
 */
async function migrateLegacyAccount(username: string, password: string) {
  let snapshot;
  try {
    snapshot = await getDocs(query(LEGACY_USERS, where("username", "==", username), where("password", "==", password)));
  } catch {
    return false;
  }
  if (snapshot.empty) return false;

  await createAccount(username, password);
  await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));
  return true;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const user = useAuthUser();

  const handleLogin = async () => {
    setError("");
    if (!username.trim() || !password) {
      setError("Invalid username or password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, usernameToEmail(username), password);
      navigate("/home");
    } catch (err) {
      try {
        if (await migrateLegacyAccount(username.trim(), password)) {
          navigate("/home");
          return;
        }
      } catch (migrateErr) {
        if (errorCode(migrateErr) === "auth/weak-password") {
          setError(`Your password is too short for the new login system. Please register a new account with at least ${MIN_PASSWORD_LENGTH} characters.`);
          return;
        }
      }
      const code = errorCode(err);
      setError(
        code === "auth/too-many-requests"
          ? "Too many attempts. Please wait a few minutes and try again."
          : code === "auth/invalid-credential" || code === "auth/user-not-found" || code === "auth/wrong-password"
            ? "Invalid username or password."
            : "Login failed. Please try again."
      );
    }
  };

  const handleRegister = async () => {
    setError("");
    const name = username.trim();
    if (!name || !password) {
      setError("Username and password are required.");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }

    // Don't let a new account take the name of an old account that hasn't been moved over yet.
    try {
      const legacy = await getDocs(query(LEGACY_USERS, where("username", "==", name)));
      if (!legacy.empty) {
        setError("Username already exists.");
        return;
      }
    } catch {
      // The old collection is closed off once every account has been moved — nothing to check.
    }

    try {
      await createAccount(name, password);
      navigate("/home");
    } catch (err) {
      setError(
        errorCode(err) === "auth/email-already-in-use"
          ? "Username already exists."
          : "Registration failed. Please try again."
      );
    }
  };

  // One request at a time, so a double click / double Enter can't create or migrate an account twice.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    try {
      await (isRegistering ? handleRegister() : handleLogin());
    } finally {
      setBusy(false);
    }
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setError("");
  };

  // Already signed in (e.g. coming back to the site) - skip the form. Not while a request is
  // running: registering signs in before the username is saved to the account.
  if (user && !busy) return <Navigate to="/Home" replace />;

  // Switching to Register slides the two panels past each other so they swap sides (Login.css).
  // The `key`s restart each side's fade-in so the new text arrives as the panels land.
  return (
    <div className={`LoginPage ${isRegistering ? "is-register" : ""}`}>
      {/* Brand panel — left for Login, right for Register */}
      <div className="LoginBrand">
        <img src="/Images/WrestleVerseIconV5.webp" alt="Wrestleverse" />
        <h1>Wrestleverse</h1>
        <p key={String(isRegistering)} className="LoginSwapIn">
          {isRegistering ? "Join the " : "Control the "}
          <span className="textImp">Chaos</span>
          <br />
          {isRegistering ? "Create an account to start your journey." : "Log in to continue your journey."}
        </p>
      </div>

      {/* Form panel — right for Login, left for Register */}
      <form className="LoginPanel" onSubmit={handleSubmit}>
        <div key={String(isRegistering)} className="LoginPanelContent LoginSwapIn">
          <h2>{isRegistering ? "Register" : "Login"}</h2>

          {error && <p className="LoginError">{error}</p>}

          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete={isRegistering ? "new-password" : "current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={busy}>
            {isRegistering
              ? busy ? "Creating Account…" : "Create Account"
              : busy ? "Logging In…" : "Login"}
          </button>

          <span className="LoginToggle" onClick={toggleMode}>
            {isRegistering
              ? "Already have an account? Login"
              : "No account? Register"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;