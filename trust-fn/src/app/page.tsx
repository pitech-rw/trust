import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h1>Trust</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Get certified taskers <span>-&gt;</span>
          </h2>
          <p>
            Request for a service provider and get unmatched experience
          </p>
        </a>
      </div>
    </main>
  );
}
