import { FacebookPixel } from "../components/FacebookPixel/FacebookPixel";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import styles from "./variables.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  );
};

export default App;
