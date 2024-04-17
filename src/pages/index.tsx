/* eslint-disable react/no-unescaped-entities */
import React from "react";
import gsap, { Power4 } from "gsap";
import Contact from "../components/Contact/Contact";

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
    gsap.from(".contact", 2, {
      x: 50,
      opacity: 0,
      ease: "power4.out",
      delay: 3.5,
    });
    gsap.from(".nickname", 2, {
      x: 50,
      opacity: 0,
      ease: "power4.out",
      delay: 1.5,
    });
    gsap.from("h1", 2, {
      y: 50,
      opacity: 0,
      ease: "power4.inOut",
      delay: 2,
    });
  }, []);

  return (
    <div className="container">
      <div>
        <div className="header">
          <div className="slogan">
            Be <span className="happy">happy</span>, everyone!
          </div>
          <h1>JUNG JINWOO</h1>
        </div>
      </div>
      <Contact />
    </div>
  );
}
