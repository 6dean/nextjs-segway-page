import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/lg40dhsyhvs70lhk2e6y"
            alt="logo"
            width={"40%"}
          />
        </Link>
      </div>
      <div className={styles.menuing}>
        <Link href="/histoire">
          <div className={styles.menuingtext}>histoire de la marque</div>
        </Link>
        <div className={styles.menuingtext}>specifications</div>
      </div>
    </div>
  );
};

export default Header;
