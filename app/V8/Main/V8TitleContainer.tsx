"use client";

import { useState, useEffect } from "react";
import V8Title from "./V8Title";
import V8TitleMobile from "./V8TitleMobile";

function V8TitleContainer() {
   const [matches, setMatches] = useState(false);
   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 900px)");
      setMatches(mediaQuery.matches);

      const handler = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
   }, []);
   return <>{matches ? <V8TitleMobile /> : <V8Title />}</>;
}
export default V8TitleContainer;
