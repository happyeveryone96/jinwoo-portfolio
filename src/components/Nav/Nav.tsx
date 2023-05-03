import Link from "next/link";
import React from "react";
import gsap, { Power4 } from "gsap";

const Nav = () => {
  React.useEffect(() => {
    gsap.from(".nav_logo, .nav_links > a", {
      top: 30,
      // opacity: 0,
      ease: Power4.easeInOut,
      delay: 1,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  const logoRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="nav">
      <div ref={logoRef} className="nav_logo">
        <Link href="/">HOME</Link>
      </div>
      <div className="nav_links">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
