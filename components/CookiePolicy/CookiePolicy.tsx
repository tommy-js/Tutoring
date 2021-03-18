import React from "react";
import styles from "./styles.module.scss";

export const CookiePolicy: React.FC = () => {
  return (
    <div className={styles.cookie_policy}>
      <h1 className={styles.header}>Our Cookie Policy</h1>
      <h3 className={styles.subheader}>
        At Functional Tutoring we collect a small amount of data to help us
        optimize our site and better serve you. We never sell your data: we only
        use it to keep track of which pages are seeing more traffic than others,
        which of our visitors have accepted our cookie policies and already seen
        our email signup dropdown, etc. Below is a complete breakdown of where
        we use your data and for what purpose.
      </h3>
      <ol>
        <li>
          Google: cookies are sometimes used in conjunction with Google to track
          the number of users on our site at any given time.
        </li>
        <li>
          Facebook: we keep track of site data through Facebook so that we can
          tell which of our pages are doing well and which are not.
        </li>
        <li>
          MailChimp: we use cookies here to ensure that those who receive our
          email-signup popup once do not receive it again.
        </li>
      </ol>
    </div>
  );
};
