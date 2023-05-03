/* eslint-disable react/no-unescaped-entities */
import React from "react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import mainImg from "../../public/images/universe.jpg";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  React.useEffect(() => {
    gsap.from(".nav_logo, .nav_links > a", {
      top: 30,
      opacity: 0,
      ease: Power4.easeInOut,
      delay: 1,
      duration: 1,
      stagger: 0.3,
    });
    gsap.from("h1", 2, {
      y: 50,
      opacity: 0,
      ease: "power4.inOut",
      delay: 1.5,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from("h2", 2, {
      y: 50,
      opacity: 0,
      ease: "power4.inOut",
      delay: 1.5,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(".play_wrapper, .pattern", 2, {
      scaleY: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
      delay: 2.5,
    });
    gsap.from(".play_btn", 2, {
      scale: 0,
      ease: "power3.inOut",
      delay: 3,
    });
    gsap.from(".main_wrapper", 2, {
      width: "100%",
      ease: "power3.inOut",
      delay: 3,
    });
    gsap.from(".marquee", 1, {
      bottom: "-10rem",
      ease: "power3.inOut",
      delay: 4,
    });
  }, []);

  return (
    <div className="container">
      <Nav />
      <div className="header">
        <h1>HI, I'M JUNG JIN WOO</h1>
        <h2>HI, I'M JUNG JIN WOO</h2>
        <div className=" col">
          <div className="play_wrapper">
            <div className="play_btn"></div>
          </div>
          <div className="pattern">✦ ✦ ✦</div>
        </div>
      </div>
      <div className="main">
        <Image src={mainImg} alt="메인 이미지" />
        <div className="main_wrapper"></div>
      </div>
      <div className="marquee">
        <span>
          JavaScript - TypeScript - HTML - CSS - SCSS - Styled-Components -
          React.js - Redux.js - Recoil.js
        </span>
      </div>
    </div>
  );
}
