import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const images = [
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/cisjbn7yjpowzc1mbp7i",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/krbmxjmnill49auwcpkx",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/mbhbgrozf7gtollqubod",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/tcftou8riwei0rcmxow6",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/tjhmjmjovafstizs37is",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/cknashqhrcmftzv96cj3",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/ezsju3ezkipn33ydjvzz",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/vdqzjtgkzzpjtmfgwpxl",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/x91whkpzmm8gbtgxfafv",
  "https://res.cloudinary.com/dlfp2xvis/image/upload/f_auto,q_auto/v1/segway/bthuc4d91weawyl0psji",
];

const Caroussel = () => {
  const [valueTab, setValueTab] = useState(0);

  const handleClick = (index) => {
    setValueTab(index);
  };

  return (
    <div className={styles.divcaroussel}>
      <div>
        {images.map((e, i) => {
          if (i === valueTab) {
            return (
              <div className={styles.divshowoff} key={i}>
                <img src={e} alt="img" style={{ maxWidth: "70%" }} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.caroussel}>
        {images.map((e, i) => {
          return (
            <>
              <img
                className={styles.carousselcontainimg}
                key={i}
                onClick={() => handleClick(i)}
                src={e}
                alt="img"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Caroussel;
