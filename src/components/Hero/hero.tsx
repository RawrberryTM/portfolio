"use client";
import React, { useEffect, useRef, useState } from "react";
import Particles from "@/animations/Particles/particles";
import styles from "./hero.module.scss";
import Image from "next/image";
import { WeatherData, getWeatherData } from "@/hooks/getWeatherData";
import Logo from "../UI/Logo/logo";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarState } from "@/redux/reducer/NavbarStateReducer";
import { getNavState } from "@/redux/reducer/NavbarStateSelector";

export default function HeroBg() {
  const target = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [Weather, setWeather] = useState<WeatherData | null>(null);

  const isInView = useInView(target);

  const dispatch = useDispatch();
  const navState = useSelector(getNavState);

  useEffect(() => {
    // if its true then set the nav state to be Home (hero)
    if (isInView) {
      dispatch(setNavbarState("Home"));
    }
  }, [isInView]);

  useEffect(() => {
    const getWeatherInfo = async () => {
      const res = await getWeatherData("Uttarakhand");
      setWeather(res);
    };

    const updateScrollProgress = () => {
      requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollableHeight) * 100;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", updateScrollProgress);

    getWeatherInfo();
    // remove the event listener
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div id="Hero" ref={target} className={styles.container}>
      <div className={styles.introTextContainer}>
        <div className={styles.innerTextContainer}>
          <p
            style={{
              color: "#77B73B",
              fontWeight: "700",
              fontFamily: "Monoton",
            }}
          >
            Dev Team
          </p>
          <h5 className="descp text-lg font-dokoFont mt-6">
            Where Dreams Become Games
          </h5>
        </div>
      </div>

      <div className={styles.heroBackground} />

      <div
        style={{
          transform: `translateY(${-scrollProgress * 8}px) 
                     translateX(${-scrollProgress * 8}px)
                     scale(${1 + scrollProgress * 0.07}) rotate(${
            -scrollProgress * 2
          }deg)`,
        }}
        className={`${styles.svgIcon7}`}
      >
        <Image fill alt="Hello" src={"/icons/unrealengine.svg"} />
      </div>

      <div
        style={{
          transform: `translateY(${-scrollProgress * 8}px) 
                     translateX(${scrollProgress * 8}px)
                     scale(${1 + scrollProgress * 0.07}) rotate(${
            scrollProgress * 2
          }deg)`,
        }}
        className={`${styles.svgIcon1} ${styles.svgIcon}`}
      >
        <Image fill alt="Hello" src={"/icons/c++.svg"} />
      </div>
      {/* 
            <div
            style={{ transform: `scale(${1 + (scrollProgress * 0.07)}) rotate(${-scrollProgress * 2}deg)`,
          
                   }} 
            className={`${styles.svgIcon2} ${styles.svgIcon}`}>
                <Image 
                fill alt="Hello" src={"/icons/laptop.svg"}/>
            </div> */}

      <div
        style={{
          transform: `translateY(${-scrollProgress * 8}px) 
      
                    scale(${1 + scrollProgress * 0.07}) rotate(${
            scrollProgress * 2
          }deg)`,
        }}
        className={`${styles.svgIcon3}`}
      >
        <Image fill alt="Hello" src={"/icons/gamepad.svg"} />
      </div>

      {/* <div style={{ transform: `translateY(${scrollProgress * 30}px) rotate(${-scrollProgress * 5}deg)` }} className={`${styles.svgIcon4} ${styles.svgIcon}`}>
                <Image fill alt="Hello" src={"/icons/plant.svg"}/>
            </div> */}

      <div className="absolute left-10 top-10">
        <div className="flex items-center gap-4">
          <Logo className="rounded-md h-12 w-12" />
          <p className="text-xl font-customFont">RawrBerry</p>
        </div>
      </div>

      <Particles className={styles.particlesBG} />
    </div>
  );
}
