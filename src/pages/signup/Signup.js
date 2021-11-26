import styles from "./Signup.modul.css";
import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <div className="login">
      <div className="login__header">
        <Link to="/" className="Link">
          <img src={arrow} alt="arrow" />
        </Link>
        <p>
          Need help? <a href="mailto:hello@example.code">hello@example.code</a>
        </p>
      </div>
      <div className="login__body">
        <div className="logo">FiTrack</div>
        <span>Create new account 🔐</span>
        <form onSubmit={handleSubmit} className="login__form">
          <label>
            <span>Email</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </label>
          <label>
            <span>DisplaName</span>
            <input
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              required
            />
          </label>
          {error && <span className="error-message">{error}</span>}
          <div className="login__form-bottom">
            <Link to="/" className={styles.forgot}></Link>
            {!isPending && (
              <button className="btn btn-secondary">Sign up</button>
            )}
            {isPending && (
              <button className="btn btn-secondary" disabled>
                Loading
              </button>
            )}
          </div>
          <Link to="/login" className="bottom__message">
            Already have an account? <span>Login here</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
