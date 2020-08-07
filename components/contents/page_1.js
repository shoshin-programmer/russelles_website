// Assets
import styles from "./page_1.module.css";

export default function PageOne() {
  return (
    <div className={styles.mainWrap}>
      <p className={styles.title}>Russelle Anne Vitales</p>
      <img src="/assets/profile.jpg" className={styles.profilePic} />
      <p className={styles.text}>Counsellor</p>
    </div>
  );
}
