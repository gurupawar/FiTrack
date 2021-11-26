import { useState } from "react";
import styles from "./Login.module.css";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
        <span>Log in to your account 🔐</span>
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
          <div className="login__form-bottom">
            <Link to="/" className={styles.forgot}>
              Forgot Password
            </Link>
            <button className="btn btn-secondary">Log in</button>
          </div>
          <Link to="/signup" className="bottom__message">
            Don’t have an account? <span>Signup Now</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
