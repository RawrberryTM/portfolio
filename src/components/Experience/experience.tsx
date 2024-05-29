"use client";
import React, { useRef } from "react";
import styles from "./experience.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  text_reveal_animation_1,
  text_reveal_animation_2,
} from "@/animations/TextReveal/text-reveal.cofig";
import Image from "next/image";

import { HiDownload } from "react-icons/hi";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div id="Experience" ref={ref} className={styles.container}>
      <div className={styles.lineMask}>
        <motion.p
          variants={text_reveal_animation_1}
          initial="initial"
          animate={inView ? "enter" : ""}
        >
          Experience
        </motion.p>
      </div>
      <div className={styles.innerContainer}>
        <motion.div
          variants={text_reveal_animation_2}
          initial="initial"
          animate={inView ? "enter" : ""}
          className={`${styles.workExpInfoContainer}`}
        >
          <div className={styles.orgNameAndYear}>
            <div>
              <h1 className={styles.orgName}>Game Industry</h1>
              <p className={styles.role}>Game Development & Design Team</p>
            </div>
            <div>
              <p className={styles.workingPeriod}>2020 - Present</p>
              <p className={styles.workingPeriod}>Remote (IST , TURKEY )</p>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Developing games where one can experience the thrill of a
              different way of gaming.
            </p>
          </div>
        </motion.div>
        {/* <div className={styles.resumeLink}>
          <h1 className='flex items-center gap-1'>Download Resume <HiDownload/></h1>
        </div> */}
      </div>
      <div
        style={{
          transform: inView ? "none" : "translateX(200px)",
          opacity: inView ? 1 : 0,
          transformOrigin: 0,
          transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`${styles.svgIcon}`}
      >
        <Image fill alt="Hello" src={"/icons/plant.svg"} />
      </div>
    </div>
  );
};

export default Experience;
