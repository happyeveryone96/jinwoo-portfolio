import Link from "next/link";
import React from "react";
import gsap from "gsap";

const Nav = () => {
  React.useLayoutEffect(() => {
    gsap.from(".nav", 1, {
      width: "0%",
      ease: "power0.inOut",
      delay: 0,
    });
  }, []);

  const logoRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="nav">
      <div ref={logoRef} className="nav-logo">
        <Link href="/">HOME</Link>
      </div>
      <div className="nav-links">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Nav;
