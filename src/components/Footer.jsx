import styles from "./Footer.module.css";

function Footer() {
  return <footer className={styles.footer}>© {new Date().getFullYear()} Wizard of Pages</footer>;
}

export default Footer;