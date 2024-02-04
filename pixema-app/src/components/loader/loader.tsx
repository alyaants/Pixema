import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <Lottie animationData={animation} loop={true} className={styles.loader} />
  );
};

export default Loader;
