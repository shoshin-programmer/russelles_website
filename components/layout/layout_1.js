// Assets
import styles from "./layout_1.module.css";

export default function LayoutOne({ children }) {
  return (
    <React.Fragment>
      <div className={styles.layout}>
        <div className={styles.content}>{children}</div>
      </div>
    </React.Fragment>
  );
}
