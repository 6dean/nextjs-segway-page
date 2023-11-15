import React from "react";
import styles from "../styles/Home.module.css";

const Specifications = ({ setShowDiv }) => {
  const handleClick = () => {
    setShowDiv(false);
  };
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionclose}>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            fermer
          </button>
        </div>
        <span className={styles.title}>Informations Générales</span>
        <div className={styles.info}>
          <span>Attention:</span> Veuillez respecter la législation en vigueur
          concernant l'usage des trottinettes électriques.
        </div>
        <div className={styles.info}>
          <span>Vitesse maximale:</span> 70 km/h
        </div>
        <div className={styles.info}>
          <span>Charge maximale:</span> 150 kg
        </div>
        <div className={styles.info}>
          <span>Âge minimum recommandé:</span> À partir de 14 ans
        </div>
        <div className={styles.info}>
          <span>Pour:</span> Adulte
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Motorisation</span>
        <div className={styles.info}>
          <span>Autonomie:</span> 90 km
        </div>
        <div className={styles.info}>
          <span>Puissance continue:</span> 1 500 W
        </div>
        <div className={styles.info}>
          <span>Puissance maximale:</span> 3000 W
        </div>
        <div className={styles.info}>
          <span>Capacité de la batterie:</span> 30 Ah
        </div>
        <div className={styles.info}>
          <span>Puissance de la batterie:</span> 1512 Wh
        </div>
        <div className={styles.info}>
          <span>Temps de charge:</span> 16 h
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Freins</span>
        <div className={styles.info}>
          <span>Frein avant:</span> Frein à disque
        </div>
        <div className={styles.info}>
          <span>Frein arrière:</span> Frein à disque
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Roues & Pneus</span>
        <div className={styles.info}>
          <span>Pneus:</span> Gonflables, Pleins
        </div>
        <div className={styles.info}>
          <span>Diamètre des roues:</span> 279 mm / 11 pouces
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Dimensions & Poids</span>
        <div className={styles.info}>
          <span>Poids:</span> 52,6 kg
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Particularités</span>
        <div className={styles.info}>
          <span>Couleur:</span> Noire
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Équipements</span>
        <div className={styles.info}>
          <span>
            Suspensions, Éclairage LED, Feu stop, Bluetooth, Application
            smartphone, Pliable, Écran PM-OLED, Éléments réflecteurs,
            Clignotants, Avertisseur sonore, Béquille
          </span>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
