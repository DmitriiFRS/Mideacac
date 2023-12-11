"use client";

import { useRef } from "react";
import styles from "../Magboost.module.scss";
import Image, { StaticImageData } from "next/image";

function ContentImage({ image }: { image: StaticImageData | undefined }) {
   return (
      <div className={styles.bearing__imageContainer}>
         {image?.src && <Image src={image.src} alt="compressor" fill />}
      </div>
   );
}
export default ContentImage;
