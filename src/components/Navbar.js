import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className="logo">
            FiTrack
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
