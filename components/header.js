import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <img
            src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2xnNDBkaHN5aHZzNzBsaGsyZTZ5/template_primary"
            alt="logo"
            width={"50%"}
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
