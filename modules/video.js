import React from "react";
import styles from "../styles/Home.module.css";

const VideoComponent = () => {
  return (
    <div className={styles.fullWidthVideo}>
      <video
        width="100%"
        height="auto"
        autoPlay
        muted
        controls
        controlsList="nodownload"
      >
        <source
          src="https://res.cloudinary.com/dlfp2xvis/video/upload/f_auto:video,q_auto/v1/segway/la5nlgezcflfa6xwqecj"
          type="video/mp4"
        />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoComponent;
