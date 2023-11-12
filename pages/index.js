import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      // HEADER
      <div className={styles.header}>
        <div>
          <div>SEGWAY</div>
        </div>
        <div className={styles.menuing}>
          <div>history</div>
          <div>specifications</div>
        </div>
      </div>
      // ELEMENT 1<div></div>
      <footer>
        <div className={styles.title}>
          <Link href="/credits">credit</Link>
        </div>
      </footer>
    </div>
  );
}
