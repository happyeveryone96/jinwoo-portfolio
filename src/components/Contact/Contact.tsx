import Link from "next/link";
import React, { useEffect } from "react";
import css from "../../styles/contact.module.css";

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
    <div className="contact">
      <div className={css.contact_container}>
        <div className={css.copy}>
          <div className={css.copy_wrapper}>
            <h2>FRONT-END DEVELOPER</h2>
            <h2>Email. happyeveryone@naver.com</h2>
            <h2>Address. 경기도 화성시 산척동</h2>
            <h2>Birth. 1996.03.30</h2>
            <div className={css.link_wrapper}>
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
        </div>
      </div>
      <div className={css.intro}>
        Hello, my name is Jung Jinwoo
        <br />
        <br /> I know the importance of collaboration, believe that better
        results come from good teamwork
        <br />
        <br />I have no aversion to learning new things and adapt quickly to new
        technologies.
      </div>
      <div className={css.overlay}>
        <div className={css.overlay_copy}>
          <h2 className={css.contact}>Contact</h2>
          <div className={css.form}>
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
  );
};

export default Contact;
