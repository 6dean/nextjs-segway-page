import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Caroussel from "../modules/caroussel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.headertext}>
        <div>Trottinette KickScooter GT2P</div>
      </div>
      <div className={styles.description}>
        <div>
          <p>
            Vivez une expérience plus rapide, plus puissante et toujours
            meilleure, Segway présente la dernière super trottinette électrique.
          </p>
          <p>
            Ressentez la sensation du vent avec une vitesse de pointe de 70
            km/h, atteignant les 50 km/h en moins de 4 secondes.
          </p>
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
          <div className={styles.emote}>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3BodHR4ZHgzY2kzOGFycTRobW14/template_primary"
              alt="speed"
            />
          </div>
          <div>VITESSE MAX</div>
          <div>70 km/h</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2Nvd3o1NHliYXZ3MGpwa2Zzdmlq/template_primary"
              alt="range"
            />
          </div>
          <div>AUTONOMIE</div>
          <div>90 km</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3R4YXltdGRpbnh0eXJ1ZGVhZWNv/template_primary"
              alt="weight"
            />
          </div>
          <div>POIDS</div>
          <div>53 kg</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2VsY2xxdHRrMmJwcHhjdXhqaG0x/template_primary"
              alt="charge"
            />
          </div>
          <div>TEMPS DE CHARGE</div>
          <div>6 heures</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2NoYWZ4eHhldG1oZ2pya3Rtemt1/template_primary"
              alt="motor"
            />
          </div>
          <div>MOTEUR</div>
          <div>2x 3000 W</div>
        </div>
      </div>
      <div className={styles.textcategorie}>
        <div>Des caractéristiques uniques</div>
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3ZmOXl1Z3Fib2c1ZTgyYmplZWht/template_primary"
          alt="scooter-logo"
        />
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.listingperk}>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2ZhbGF0NDJkMnY3ZHh0ZnY3cmJ4/template_primary"
                alt="screen"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Écran PM-OLED</div>
              <div className={styles.perkelemdesc}>
                1ère mondiale, transparent et en couleurs
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2UxYmc4YXpqZW5qb2xlcHY1b3M1/template_primary"
                alt="motors"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>6000W deux moteurs</div>
              <div className={styles.perkelemdesc}>
                Réparti sur le moteur à l'avant et à l'arrière
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2pobDd4aXBweDNmeGZ5aGZkcjVh/template_primary"
                alt="cadre"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Cadre aluminium</div>
              <div className={styles.perkelemdesc}>
                Des matériaux de qualité Premium
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3N3cHd4c3Bsb2p5aXF6ZjZ1d3lh/template_primary"
                alt="SDTC"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>
                Contrôle de Traction (SDTC)
              </div>
              <div className={styles.perkelemdesc}>
                Maitrisez votre engin sur tout type de sol
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L214ZnFjc2toM2tlaG94Y3R4d2kw/template_primary"
                alt="wishbone"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Wishbone suspension</div>
              <div className={styles.perkelemdesc}>
                Améliore la stabilité à haute vitesse
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2drajV6OGU1M2N5ajAwYTB5cWI0/template_primary"
                alt="freins"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Freins Hydraulique</div>
              <div className={styles.perkelemdesc}>
                Profitez d'un freinage puissant et de disques perforés
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2x3bGJieWdhOGlka2hreWZieDl0/template_primary"
                alt="batterie"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Batterie</div>
              <div className={styles.perkelemdesc}>
                Conçu par segway, puissance et dissipation de chaleur
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2VqZ3pwa2IybXgzcnlkaGFhMWJl/template_primary"
                alt="pliage"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>
                Système de pliage sécurisé
              </div>
              <div className={styles.perkelemdesc}>
                Pliez et dépliez facilement votre trottinette en toute sécurité
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3ZkbHFqNmh5Y21tZWc2cmdmcG1y/template_primary"
                alt="ports"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Double port de charge</div>
              <div className={styles.perkelemdesc}>
                Réduit le temps de charge quasiment par deux
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2pqM2ZlYmplbGpjbGVmZ2ZiYm0w/template_primary"
                alt="headlight"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Eclairage puissant</div>
              <div className={styles.perkelemdesc}>
                900 Lumens vous assurant une bonne visibilité la nuit
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2VoYmVxNHdobnpra250N2o5cXJw/template_primary"
                alt="leds"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Signature Lumineuse</div>
              <div className={styles.perkelemdesc}>
                Définissez le style que vous voulez pour votre monture
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2JzbjR6Ym55ZmF4cWVwb3Q5ZWJ1/template_primary"
                alt="susp-rear"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Suspension arrière</div>
              <div className={styles.perkelemdesc}>
                Réglable et robuste pour plus stabilité
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2QwMHZhMW1keGZ4czl1Z2dnZDJ5/template_primary"
                alt="suspensions"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Suspensions réglable</div>
              <div className={styles.perkelemdesc}>
                Trouvez le réglage qu'il vous faut entre confort et stabilité à
                haute vitesse
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2xqaTB2NXp6dHR2cHNvOHRybHNz/template_primary"
                alt="boost"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Mode Boost</div>
              <div className={styles.perkelemdesc}>
                Atteignez votre vitesse de pointe en moins de 7 secondes
              </div>
            </div>
          </div>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2RtcWMyYmd0anhvcGdrcG9tc2Jt/template_primary"
                alt="tires"
              />
            </div>
            <div className={styles.perkelembottom}>
              <div className={styles.perkelemtext}>Pneus auto-réparant</div>
              <div className={styles.perkelemdesc}>
                Ne vous souciez plus de clous ou de verre présent sur la
                chaussée
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textcategorie}>
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2JjcXA1Z21qOXRpd24yZzNjcmZw/template_primary"
          alt="details-logo"
        />
        <div>Découvrez tous les détails</div>
      </div>
      <div className={styles.morecontainer}>
        <div className={styles.leftdiv}>
          <Caroussel />
        </div>
        <div className={styles.rightdiv}>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2psdXBibWNmaGR2NW1mbWxhcmZi/template_primary"
                alt="icon-trott"
              />
              <div className={styles.rightdivtitle}>Nom du modèle</div>
              <div className={styles.rightdivdesc}>Segway SuperScooter GT2</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3pxdmh1ZXYzdDAzenlyaW5xbWc1/template_primary"
                alt="icon-dim"
              />
              <div className={styles.rightdivtitle}>Dimension</div>
              <div className={styles.rightdivdesc}>1485×656×1308 mm</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3NnZXMxa2lhemZqczh1OWd6eGVz/template_primary"
                alt="icon-weight"
              />
              <div className={styles.rightdivtitle}>Poids Max autorisé</div>
              <div className={styles.rightdivdesc}>150 kg</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L245MW9kZnpndjFybDZjd3U3N2Jj/template_primary"
                alt="icon-size"
              />
              <div className={styles.rightdivtitle}>Taille conseillé</div>
              <div className={styles.rightdivdesc}>120 - 200 cm</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2xqd21zM3B1OGYybW51cDR6cmI5/template_primary"
                alt="icon-rain"
              />
              <div className={styles.rightdivtitle}>IP Rating</div>
              <div className={styles.rightdivdesc}>IPX4</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3EzZGV4anc2bmZkYWQ5eDlybGhv/template_primary"
                alt="icon-volt"
              />
              <div className={styles.rightdivtitle}>Voltage nominal</div>
              <div className={styles.rightdivdesc}>50 V</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3F6a2tmdWtxeXlmbW9maHF0eGRy/template_primary"
                alt="icon-motor"
              />
              <div className={styles.rightdivtitle}>Puissance moteur</div>
              <div className={styles.rightdivdesc}>3000 W x2</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2docHJoYnA1dHE5YjdieWEzaGhu/template_primary"
                alt="icon-mode"
              />
              <div className={styles.rightdivtitle}>Mode de conduite</div>
              <div className={styles.rightdivdesc}>
                Walk, Eco, Sport and Race
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2V0emxybjgxY2t3YTh4dzNsamVu/template_primary"
                alt="icon-tires"
              />
              <div className={styles.rightdivtitle}>Type de pneu</div>
              <div className={styles.rightdivdesc}>Tubeless 11 pouces</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2w2a2p6dWJjYWpraWQ1ZDZqMnk5/template_primary"
                alt="icon-app"
              />
              <div className={styles.rightdivtitle}>Application Mobile</div>
              <div className={styles.rightdivdesc}>
                Segway-Ninebot sur iOS et Android
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2V3ZTA1c2lvOHRibzBmZXpxZGM0/template_primary"
                alt="icon-alarm"
              />
              <div className={styles.rightdivtitle}>Antivol</div>
              <div className={styles.rightdivdesc}>
                Alarme & verrouillage de la trottinette
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3J2eWp3bXFseWFteDV1anplMXhy/template_primary"
                alt="icon-bike"
              />
              <div className={styles.rightdivtitle}>Poignet type moto</div>
              <div className={styles.rightdivdesc}>
                Accelération souple et précise
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textcategorie}>
        <div>Où se la procurer</div>
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2RxcjI1OGhlNTRtcGV2d2lrc21u/template_primary"
          alt="buy-logo"
        />
      </div>
      <Footer />
    </div>
  );
}
