import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";

export const ClimbingVideo: React.FC = () => {
  return (
    <div className={styles.climbing_video}>
      <ReactPlayer
        url="https://youtu.be/bfDO_iSIHCs"
        loop={true}
        playing={true}
        controls={false}
        volume={0}
        muted={true}
      />
    </div>
  );
};
