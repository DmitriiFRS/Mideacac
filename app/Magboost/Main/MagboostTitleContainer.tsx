"use client";

import MagboostTitle from "./MagboostTitle";
import MagboostTitleMobile from "./MagboostTitleMobile";
import { useEffect, useState } from "react";

function MagboostTitleContainer() {
   const [matches, setMatches] = useState(false);
   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 630px)");
      setMatches(mediaQuery.matches);

      const handler = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
   }, []);
   return <>{matches ? <MagboostTitleMobile /> : <MagboostTitle />}</>;
}
export default MagboostTitleContainer;
