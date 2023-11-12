import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.elementimg}>
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L25qem9leXlmdm40MHRrd29oMWpy/template_primary"
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
      <div className={styles.categories}>
        <div className={styles.card}>
          <div>VITESSE</div>
          <div>70 km/h</div>
        </div>
        <div className={styles.card}>
          <div>AUTONOMIE</div>
          <div>90 km</div>
        </div>
        <div className={styles.card}>
          <div>POIDS</div>
          <div>54 kg</div>
        </div>
        <div className={styles.card}>
          <div>CHARGE</div>
          <div>6 heures</div>
        </div>
        <div className={styles.card}>
          <div>DIMENSION</div>
          <div>150x160x40cm </div>
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
