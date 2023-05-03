import Nav from "@/components/Nav/Nav";
import Link from "next/link";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const d = document,
        w = "https://tally.so/widgets/embed.js";
      if (d.querySelector('script[src="' + w + '"]') == null) {
        const s = d.createElement("script");
        (s.src = w), d.body.appendChild(s);
      }
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="contact-container">
        <div className="copy">
          <div className="copy-wrapper">
            <h1>FRONT-END DEVELOPER JUNG JIN WOO</h1>
            <h2>Phone. 010-5756-0347</h2>
            <h2>Email. happyeveryone@naver.com</h2>
            <h2>Address. 경기도 화성시 산척동</h2>
            <h2>Date of birth. 96.03.30</h2>
            <h2>
              <Link href="https://github.com/happyeveryone96" target="_blank">
                GitHub.
              </Link>
            </h2>
            <h2>
              <Link href="https://velog.io/@happyeveryone96" target="_blank">
                Blog.
              </Link>
            </h2>
          </div>
        </div>

        <div className="overlay">
          <div className="overlay-copy">
            <h2 className="contact">Contact</h2>
            <div className="form">
              <iframe
                src="https://tally.so/embed/mOaONM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="421"
                frameBorder="0"
                title="Contact form"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
