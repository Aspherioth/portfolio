import styles from "./PageFold.module.css";

function PageFold({ children, customClasses }) {
  return (
    <section className={`card ${styles.fold} ${customClasses || ""}`}>
      {children}
    </section>
  );
}

export default PageFold;