import logo from "./images/netflix-logo.png";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <header>
      <section className={styles.container}>
        <img src={logo} className={styles.logo} />
        <Navigation />
        <Toolbar />
      </section>
    </header>
  );
}

export default Header;
