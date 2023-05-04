import Link from "next/link";
import React from "react";

const Nav = () => {
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
