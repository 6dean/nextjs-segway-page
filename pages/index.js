import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.description}>
        <div>
          Bringing you an experience that’s faster, stronger, and ever-better,
          Segway presents the latest super scooter–the GT2 fast electric
          scooter. Catch the wind with us at nearly 44mph an hour, shooting from
          0-30mph in less than four seconds.
        </div>
      </div>
      <div className={styles.elementimg}>
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L25qem9leXlmdm40MHRrd29oMWpy/template_primary"
          alt="gt2p"
        />
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
          <div>53 kg</div>
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
      <div>Des caractéristiques uniques</div>
      <div className={styles.scrollContainer}>
        <div className={styles.listingperk}>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2ZhbGF0NDJkMnY3ZHh0ZnY3cmJ4/template_primary"
                alt="screen"
              />
            </div>
            <div>ECRAN PM-OLED</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2UxYmc4YXpqZW5qb2xlcHY1b3M1/template_primary"
                alt="motors"
              />
            </div>
            <div>6000W deux moteurs</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2pobDd4aXBweDNmeGZ5aGZkcjVh/template_primary"
                alt="cadre"
              />
            </div>
            <div>Cadre aluminium Premium</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3N3cHd4c3Bsb2p5aXF6ZjZ1d3lh/template_primary"
                alt="SDTC"
              />
            </div>
            <div>SDTC</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L214ZnFjc2toM2tlaG94Y3R4d2kw/template_primary"
                alt="wishbone"
              />
            </div>
            <div>Wishbone suspension</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2drajV6OGU1M2N5ajAwYTB5cWI0/template_primary"
                alt="freins"
              />
            </div>
            <div>Freins Hydraulique</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2x3bGJieWdhOGlka2hreWZieDl0/template_primary"
                alt="batterie"
              />
            </div>
            <div>Batterie</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2VqZ3pwa2IybXgzcnlkaGFhMWJl/template_primary"
                alt="pliage"
              />
            </div>
            <div>Système de pliage sécurisé</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3ZkbHFqNmh5Y21tZWc2cmdmcG1y/template_primary"
                alt="ports"
              />
            </div>
            <div>Double port de charge</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2pqM2ZlYmplbGpjbGVmZ2ZiYm0w/template_primary"
                alt="headlight"
              />
            </div>
            <div>Eclairage puissant</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2VoYmVxNHdobnpra250N2o5cXJw/template_primary"
                alt="leds"
              />
            </div>
            <div>Signature Lumineuse personnalisé</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2JzbjR6Ym55ZmF4cWVwb3Q5ZWJ1/template_primary"
                alt="susp-rear"
              />
            </div>
            <div>Suspension arrière</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2QwMHZhMW1keGZ4czl1Z2dnZDJ5/template_primary"
                alt="suspensions"
              />
            </div>
            <div>Suspensions réglable</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2xqaTB2NXp6dHR2cHNvOHRybHNz/template_primary"
                alt="boost"
              />
            </div>
            <div>Mode Boost</div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2RtcWMyYmd0anhvcGdrcG9tc2Jt/template_primary"
                alt="tires"
              />
            </div>
            <div>Pneus auto-réparant</div>
          </div>
        </div>
      </div>
      <div>Plus de détails</div>
      <div className={styles.morecontainer}>
        <div>
          <img
            src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3JwdzRoYnEwcTdpaHBlOHBrN3I1/template_primary"
            alt="trott"
            width={"70%"}
          />
        </div>
        <div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Nom du modèle:</div>
            <div className={styles.elemmoretext}>Segway SuperScooter GT2</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Dimension:</div>
            <div className={styles.elemmoretext}>1485 × 656 × 1308 mm</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Poids Max autorisé:</div>
            <div className={styles.elemmoretext}>150 kg</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Taille conseillé:</div>
            <div className={styles.elemmoretext}>120 - 200 cm</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>IP Rating:</div>
            <div className={styles.elemmoretext}>IPX4</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Voltage nominal:</div>
            <div className={styles.elemmoretext}>50 V</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Moteur:</div>
            <div className={styles.elemmoretext}>3000 W x2</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Mode de conduite:</div>
            <div className={styles.elemmoretext}>Walk, Eco, Sport and Race</div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.elemmoredetail}>Type de pneu:</div>
            <div className={styles.elemmoretext}>Tubeless 11 pouces</div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
