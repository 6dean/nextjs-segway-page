import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.elementimg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUGhrxwKdgRQHqiAgVQXWKhTM5UTNbnL2TVf2nUSapKKCgWpn4Ie91p4iZ5rjxEIIx2_83P27bkkLAELj_aH1wC_-ADsQV"
          alt="gt2p"
        />
      </div>
      <div>
        <div>
          Bringing you an experience that’s faster, stronger, and ever-better,
          Segway presents the latest super scooter–the GT2 fast electric
          scooter. Catch the wind with us at nearly 44mph an hour, shooting from
          0-30mph in less than four seconds.
        </div>
      </div>
      <footer>
        <div className={styles.title}>
          <Link href="/credits">credit</Link>
        </div>
      </footer>
    </div>
  );
}
