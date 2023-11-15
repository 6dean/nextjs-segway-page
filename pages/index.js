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
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/njzoeyyfvn40tkwoh1jr"
          alt="gt2p"
        />
      </div>
      <div className={styles.categories}>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/phttxdx3ci38arq4hmmx"
              alt="speed"
            />
          </div>
          <div>VITESSE MAX</div>
          <div>70 km/h</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/cowz54ybavw0jpkfsvij"
              alt="range"
            />
          </div>
          <div>AUTONOMIE</div>
          <div>90 km</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/txaymtdinxtyrudeaeco"
              alt="weight"
            />
          </div>
          <div>POIDS</div>
          <div>53 kg</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/elclqttk2bppxcuxjhm1"
              alt="charge"
            />
          </div>
          <div>TEMPS DE CHARGE</div>
          <div>6 heures</div>
        </div>
        <div className={styles.card}>
          <div className={styles.emote}>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/chafxxxetmhgjrktmzku"
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
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/vf9yugqbog5e82bjeehm"
          alt="scooter-logo"
        />
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.listingperk}>
          <div className={styles.perkelem}>
            <div className={styles.imglist}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/falat42d2v7dxtfv7rbx"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/e1bg8azjenjolepv5os5"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/jhl7xippx3fxfyhfdr5a"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/swpwxsplojyiqzf6uwya"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/mxfqcskh3kehoxctxwi0"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/gkj5z8e53cyj00a0yqb4"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/lwlbbyga8idkhkyfbx9t"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ejgzpkb2mx3rydhaa1be"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/vdlqj6hycmmeg6rgfpmr"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/jj3febjeljclefgfbbm0"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ehbeq4whnzkknt7j9qrp"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/bsn4zbnyfaxqepot9ebu"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/d00va1mdxfxs9ugggd2y"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/lji0v5zzttvpso8trlss"
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
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/dmqc2bgtjxopgkpomsbm"
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
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/bcqp5gmj9tiwn2g3crfp"
          alt="details-logo"
        />
        <div>Plus de détails</div>
      </div>
      <div className={styles.morecontainer}>
        <div className={styles.leftdiv}>
          <Caroussel />
        </div>
        <div className={styles.rightdiv}>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/jlupbmcfhdv5mfmlarfb"
                alt="icon-trott"
              />
              <div className={styles.rightdivtitle}>Nom du modèle</div>
              <div className={styles.rightdivdesc}>Segway SuperScooter GT2</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/zqvhuev3t03zyrinqmg5"
                alt="icon-dim"
              />
              <div className={styles.rightdivtitle}>Dimension</div>
              <div className={styles.rightdivdesc}>1485×656×1308 mm</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/sges1kiazfjs8u9gzxes"
                alt="icon-weight"
              />
              <div className={styles.rightdivtitle}>Poids Max autorisé</div>
              <div className={styles.rightdivdesc}>150 kg</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/n91odfzgv1rl6cwu77bc"
                alt="icon-size"
              />
              <div className={styles.rightdivtitle}>Taille conseillé</div>
              <div className={styles.rightdivdesc}>120 - 200 cm</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ljwms3pu8f2mnup4zrb9"
                alt="icon-rain"
              />
              <div className={styles.rightdivtitle}>IP Rating</div>
              <div className={styles.rightdivdesc}>IPX4</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/q3dexjw6nfdad9x9rlho"
                alt="icon-volt"
              />
              <div className={styles.rightdivtitle}>Voltage nominal</div>
              <div className={styles.rightdivdesc}>50 V</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/qzkkfukqyyfmofhqtxdr"
                alt="icon-motor"
              />
              <div className={styles.rightdivtitle}>Puissance moteur</div>
              <div className={styles.rightdivdesc}>3000 W x2</div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ghprhbp5tq9b7bya3hhn"
                alt="icon-mode"
              />
              <div className={styles.rightdivtitle}>Mode de conduite</div>
              <div className={styles.rightdivdesc}>
                Walk, Eco, Sport and Race
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/etzlrn81ckwa8xw3ljen"
                alt="icon-tires"
              />
              <div className={styles.rightdivtitle}>Type de pneu</div>
              <div className={styles.rightdivdesc}>Tubeless 11 pouces</div>
            </div>
          </div>
          <div className={styles.elemmore}>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/l6kjzubcajkid5d6j2y9"
                alt="icon-app"
              />
              <div className={styles.rightdivtitle}>Application Mobile</div>
              <div className={styles.rightdivdesc}>
                Segway-Ninebot sur iOS et Android
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ewe05sio8tbo0fezqdc4"
                alt="icon-alarm"
              />
              <div className={styles.rightdivtitle}>Antivol</div>
              <div className={styles.rightdivdesc}>
                Alarme & verrouillage de la trottinette
              </div>
            </div>
            <div className={styles.rightdivelem}>
              <img
                src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/rvyjwmqlyamx5ujze1xr"
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
        <div>Bousculer vos habitudes</div>
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/vvmnbprydjspighcgbsn"
          alt="new-logo"
        />
      </div>
      <div className={styles.textcategorie}>
        <img
          src="https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/dqr258he54mpevwiksmn"
          alt="buy-logo"
        />
        <div>Où se la procurer</div>
      </div>
      <Footer />
    </div>
  );
}
