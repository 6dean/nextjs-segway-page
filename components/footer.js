import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.title}>
        Powered by Vercel - <Link href="/credits">credit</Link>
      </div>
    </footer>
  );
};

export default Footer;
