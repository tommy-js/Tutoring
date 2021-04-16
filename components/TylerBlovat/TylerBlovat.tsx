import React from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import { Footer } from "../Footer/Footer";
import { EmailSignup } from "../EmailSignup/EmailSignup";
import styles from "./styles.module.scss";

const self_portrait = require("../../public/image.jpg");
const checkmark = require("../../public/checkmark.png");
const email = require("../../public/email.png");
const phone = require("../../public/phone.png");

export const TylerBlovat: React.FC = () => {
  return (
    <div className={styles.tyler_blovat}>
      <div className={styles.head_block}>
        <h1 className={styles.header}>Tyler Blovat</h1>
        <div className={styles.image_block}>
          <img src={self_portrait} className={styles.image} />
        </div>
      </div>
      <div className={styles.profile}>
        <h2 className={styles.profile_header}>About Tyler</h2>
        <p className={styles.profile_text}>
          Hi! My name is Tyler and I am a graduate of the University of
          Connecticut's math program. I have around three years of tutoring
          experience and love helping people understand difficult concepts. I've
          also spent about two months working as a teaching assistant for
          SmartStart, a prep course for new college students. You could say I'm
          both super passionate and very well-qualified for what I do. In my
          free time, I love to rock climb, learn languages, and play chess. Feel
          free to message me and get in touch!
        </p>
        <div className={styles.further_info}>
          <div className={styles.checkbox}>
            <div className={styles.checkmark_box}>
              <div className={styles.checkmark_image}>
                <img src={checkmark} className={styles.checkmark} />
              </div>
            </div>
            <p className={styles.checkbox_text}>
              Gives frequent updates on student progress
            </p>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.checkmark_box}>
              <div className={styles.checkmark_image}>
                <img src={checkmark} className={styles.checkmark} />
              </div>
            </div>
            <p className={styles.checkbox_text}>Certified CRLA Level 1 tutor</p>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.checkmark_box}>
              <div className={styles.checkmark_image}>
                <img src={checkmark} className={styles.checkmark} />
              </div>
            </div>
            <p className={styles.checkbox_text}>
              Bachelor's Degree in subject area
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contact_bar}>
        <div className={styles.buttons}>
          <div className={styles.schedule_button_block}>
            <Link href="/schedule">
              <button className={styles.schedule_button}>Schedule</button>
            </Link>
          </div>
          <div className={styles.contact_button_block}>
            <Link href="/contact">
              <button className={styles.contact_button}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.education_block}>
        <h3 className={styles.education_header}>Tyler's Education</h3>
        <div className={styles.education}>
          <h3 className={styles.education_block_header}>
            University of Connecticut
          </h3>
          <span className={styles.date_bar}>2019</span>
          <p className={styles.education_subheader}>
            Bachelor's in Mathematics
          </p>
        </div>
      </div>
      <div className={styles.contact_block}>
        <h3 className={styles.get_in_touch}>Get In Touch</h3>
        <div className={styles.contact}>
          <div className={styles.contact_image_block}>
            <img src={phone} className={styles.contact_image} />
          </div>
          <p className={styles.contact_text}>845-372-2933</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.contact_image_block}>
            <img src={email} className={styles.contact_image} />
          </div>
          <p className={styles.contact_text}>tyler@functionaltutoring.com</p>
        </div>
      </div>
      <div className={styles.teaching_block}>
        <h3 className={styles.teaching_header}>Watch Tyler Teach</h3>

        <div className={styles.video_block}>
          <ReactPlayer
            url="https://youtu.be/Iz1rEDRCaIM"
            loop={false}
            playing={false}
            controls={true}
            volume={100}
            muted={false}
            width={"100%"}
            height={"100%"}
            className={styles.player}
          />
        </div>
      </div>
      <EmailSignup />
      <Footer />
    </div>
  );
};
