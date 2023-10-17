import logo from "../images/netflix-logo.png";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <Navigation />
      <Toolbar />
    </div>
  );
}

export default Header;
