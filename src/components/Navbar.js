import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

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
              <li>
                <a href="#" onClick={logout} className="btn">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
