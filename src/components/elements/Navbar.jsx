// styles
import styles from "../styles/Navbar.module.css";

// logo
import logo from "../../img/logo.svg";

const Navbar = () => {
  return (
    <header id="top-page" className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.link} href="#om">
              OM MEG
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="#prosjekter">
              PROSJEKTER
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
