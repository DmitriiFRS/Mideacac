"use client";

import styles from "./Contacts.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";

function YandexMap() {
   const [isLoading, setLoading] = useState<boolean>(true);
   return (
      <div className={`${isLoading ? styles.contacts__map__loading : styles.contacts__Ymap}`}>
         {isLoading && <div></div>}
         <div className={styles.contacts__YmapBody}>
            <YMaps query={{ apikey: process.env.REACT_APP_YMAPS_KEY }}>
               <Map
                  defaultState={{ center: [41.285448, 69.227032], zoom: 18 }}
                  style={{
                     width: "100%",
                     height: "100%",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                  }}
                  onLoad={() => setLoading(false)}
                  onError={() => alert("Ошибка при загрузке карты")}
               >
                  <Placemark geometry={[41.285448, 69.227032]} options={{ iconColor: "#ff0000" }} />
               </Map>
            </YMaps>
         </div>
      </div>
   );
}
export default YandexMap;
