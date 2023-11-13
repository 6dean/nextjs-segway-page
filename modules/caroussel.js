import React from "react";
import { useState } from "react";

import styles from "../styles/Home.module.css";

const images = [
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2Npc2pibjd5anBvd3pjMW1icDdp/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3RqaG1qbWpvdmFmc3RpenMzN2lz/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2tyYm14am1uaWxsNDlhdXdjcGt4/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3RjZnRvdThyaXdlaTByY214b3c2/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2NrbmFzaHFocmNtZnR6djk2Y2oz/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L21iaGJncm96ZjdndG9sbHF1Ym9k/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2V6c2p1M2V6a2lwbjMzeWRqdnp6/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3ZkcXpqdGdrenpwanRtZmd3cHhs/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L2J0aHVjNGQ5MXdlYXd5bDBwc2pp/template_primary",
  "https://res-console.cloudinary.com/dlfp2xvis/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c2Vnd2F5L3g5MXdoa3B6bW04Z2J0Z3hmYWZ2/template_primary",
];

const Caroussel = () => {
  const [valueTab, setValueTab] = useState(0);

  console.log(valueTab);

  const handleClick = (index) => {
    setValueTab(index);
  };

  return (
    <>
      <div>
        {images.map((e, i) => {
          if (i === valueTab) {
            return (
              <div key={i}>
                <img src={e} alt="img" width={"30%"} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.caroussel}>
        {images.map((e, i) => {
          console.log(e, i);
          return (
            <div key={i} onClick={() => handleClick(i)}>
              <img src={e} alt="img" width={"30%"} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Caroussel;
