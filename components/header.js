import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <div>SEGWAY</div>
        </Link>
      </div>
      <div className={styles.menuing}>
        <Link href="/history">
          <div>history</div>
        </Link>
        <div>specifications</div>
      </div>
    </div>
  );
};

export default Header;
