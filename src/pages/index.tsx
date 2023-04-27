/* eslint-disable react/no-unescaped-entities */
import React from "react";
import gsap, { Power4 } from "gsap";
import Image from "next/image";
import mainImg from "../../public/universe.jpg";

export default function Home() {
  const logoRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    gsap.from(".nav-logo, .nav-links > a", {
      top: 30,
      opacity: 0,
      ease: Power4.easeInOut,
      delay: 1,
      duration: 2,
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
    gsap.from(".play-wrapper, .pattern, .copy", 2, {
      scaleY: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
      delay: 2.5,
    });

    gsap.from(".hr", 2, {
      width: "0%",
      ease: "power3.inOut",
      delay: 3,
    });

    gsap.from(".btns", 2, {
      x: 50,
      opacity: 0,
      ease: "power3.inOut",
      delay: 3,
    });

    gsap.from(".play-btn", 2, {
      scale: 0,
      ease: "power3.inOut",
      delay: 3,
    });
    gsap.from(".hero-wrapper", 2, {
      width: "100%",
      ease: "power3.inOut",
      delay: 3,
    });
    gsap.from(".arrow", 2, {
      scale: 0,
      ease: "power3.inOut",
      delay: 3,
    });
    gsap.from(".marquee", 2, {
      bottom: "-10rem",
      ease: "power3.inOut",
      delay: 4,
    });
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <div ref={logoRef} className="nav-logo">
          FE DEV
        </div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="header">
        <div className="header-left col">
          <div className="item">
            <h1 className="item-medium">HI, I'M JUNG JIN WOO</h1>
            <h2 className="item-small">HI, I'M JUNG JIN WOO</h2>
          </div>
        </div>
        <div className="header-right col">
          <div className="play-wrapper">
            <div className="play-btn"></div>
          </div>
          <div className="pattern">✦ ✦ ✦</div>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider col">
          <div className="hr"></div>
        </div>
      </div>
      <div className="hero">
        <Image src={mainImg} alt="메인 이미지" />
        <div className="hero-wrapper"></div>
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
