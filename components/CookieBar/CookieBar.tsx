import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const cookie = require("../../public/cookies.png");
const close = require("../../public/close.png");

export const CookieBar: React.FC = () => {
  const [cookies, setCookies] = useState(true);

  function getCookie(cname: string) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    console.log(getCookie("allowCookiesFT"));
    if (getCookie("allowCookiesFT") === "true") {
      setCookies(true);
    } else {
      setCookies(false);
    }
  }, []);

  function setCookiesToTrue() {
    document.cookie =
      "allowCookiesFT = true;" +
      "expires=" +
      new Date(new Date().getTime() + 60 * 60 * 1000 * 24 * 365).toUTCString();
    setCookies(true);
  }

  function tempClose() {
    setCookies(true);
  }

  function renderCookiesBar() {
    if (cookies === false) {
      return (
        <div className={styles.cookie_bar}>
          <div className={styles.close_image} onClick={() => tempClose()}>
            <img src={close} className={styles.close} />
          </div>
          <h2 className={styles.header}>
            We store cookies to improve your experience
          </h2>
          <div className={styles.image_block}>
            <img src={cookie} className={styles.image} />
          </div>
          <div className={styles.interactives}>
            <button
              onClick={() => setCookiesToTrue()}
              className={styles.button}
            >
              Okay
            </button>
            <Link href="/cookie-policy">
              <a className={styles.link}>Learn more</a>
            </Link>
          </div>
        </div>
      );
    } else return null;
  }

  return renderCookiesBar();
};
