import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>admin</h1>
        <Link to="/signup">
          <button type="button" className={styles.white_btn}>
            register
          </button>
        </Link>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
