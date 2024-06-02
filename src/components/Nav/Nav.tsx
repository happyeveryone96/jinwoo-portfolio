import Link from "next/link";
import React from "react";

const Nav = () => {
  const logoRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="nav">
      <div className="nav_wrap">
        <div ref={logoRef} className="nav_logo">
          <Link href="/">Home</Link>
        </div>
        <div className="nav_links">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
