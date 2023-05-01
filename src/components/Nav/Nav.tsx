import Link from "next/link";
import React from "react";

const Nav = () => {
  const logoRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="nav">
      <div ref={logoRef} className="nav-logo">
        <Link href="/">HOME</Link>
      </div>
      <div className="nav-links">
        <Link href="#">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
