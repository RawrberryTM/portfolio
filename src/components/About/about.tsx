import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./about.module.scss";
import Blobs from "../UI/Blob/blob";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getNavState } from "@/redux/reducer/NavbarStateSelector";
import { setNavbarState } from "@/redux/reducer/NavbarStateReducer";

const About = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  const isInView = useInView(target);
  const dispatch = useDispatch();
  const navState = useSelector(getNavState);

  useEffect(() => {
    if (isInView) {
      dispatch(setNavbarState("About"));
    }
  }, [isInView, dispatch]);

  const x = useTransform(scrollYProgress, [0, 1], [-510, 600]);
  const y = useTransform(scrollYProgress, [0, 1], [130, -190]);

  const getNegativeX = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(x, (value) => -value);
  };

  const twiceYValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(y, (value) => value * 2.5);
  };

  return (
    <div id="About" ref={target} className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.boldTitle}>
          <motion.h1 style={{ x }}>A little bit</motion.h1>
          <h1 className={styles.middleTitle}>About</h1>
          <motion.h1 style={{ x: getNegativeX() }}>Rawrberry</motion.h1>
        </div>

        <div className={styles.aboutMeContainer}>
          <div className={styles.innerAboutMeContainer}>
            <div className={styles.aboutMeText}>
              <div className={styles.textContainer}>
                <p>
                  Where{" "}
                  <span className="text-[3rem] font-medium max-sm:text-[1.4rem]">
                    Dreams
                  </span>{" "}
                  Become Games
                </p>
              </div>
            </div>
          </div>

          <div className={styles.outerAboutMeConatiner}>
            <div className={styles.textBoxContainer}>
              <div className={styles.innerTextBoxContainer}>
                <p>
                  We, Rawrberry, are talented individuals dedicated to creating
                  immersive and captivating gaming experiences for the players
                  around the globe. We bring together a diverse range of skills,
                  including programming, art, design, and storytelling, to bring
                  our ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transformOrigin: 0,
          transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`${styles.svgIcon}`}
      >
        <Image fill alt="Hello" src={"/icons/c++.svg"} />
      </div>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transformOrigin: 0,
          transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`${styles.svgIcon1}`}
      >
        <Image fill alt="Hello" src={"/icons/unrealengine.svg"} />
      </div>
    </div>
  );
};

export default About;
