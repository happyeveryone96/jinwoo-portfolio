import React from "react";
import gsap, { Power1, Power3, Power4 } from 'gsap';

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
        // gsap.from("h1", 2, {
        //     y: 50,
        //     opacity: 0,
        //     ease: "power4.inOut",
        //     delay: 1.5,
        //     stagger: {
        //         amount: 0.3,
        //     },
        // });
        // gsap.from(".play-wrapper, .pattern, .copy", 2, {
        //     scaleY: 0,
        //     ease: "power3.inOut",
        //     stagger: {
        //         amount: 0.3,
        //     },
        //     delay: 2.5,
        // });
        //
        // gsap.from(".hr", 2, {
        //     width: "0%",
        //     ease: "power3.inOut",
        //     delay: 3,
        // });
        //
        // gsap.from(".btns", 2, {
        //     x: 50,
        //     opacity: 0,
        //     ease: "power3.inOut",
        //     delay: 3,
        // });
        //
        // gsap.from(".play-btn", 2, {
        //     scale: 0,
        //     ease: "power3.inOut",
        //     delay: 3,
        // });
        // gsap.from(".hero-wrapper", 2, {
        //     width: "100%",
        //     ease: "power3.inOut",
        //     delay: 3,
        // });
        // gsap.from(".arrow", 2, {
        //     scale: 0,
        //     ease: "power3.inOut",
        //     delay: 3,
        // });
        // gsap.from(".marquee", 2, {
        //     bottom: "-10rem",
        //     ease: "power3.inOut",
        //     delay: 4,
        // });
    }, [])

  return (
      <div className="container">
        <div className="nav">
          <div ref={logoRef} className="nav-logo">Das Grune</div>
          <div className="nav-links">
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">Let's Talk</a>
          </div>
        </div>
        <div className="header">
          <div className="header-left col">
            <div className="item">
              <h1>Digitize</h1>
              <h1>Ideas</h1>
            </div>
          </div>
          <div className="header-right col">
            <div className="play-wrapper">
              <div className="play-btn">
                <ion-icon name="play-sharp"></ion-icon>
              </div>
            </div>
            <div className="pattern">✦ ✦ ✦</div>
            <div className="copy">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, assumenda alias. Reiciendis nobis ea sint quibusdam,
                doloremque magnam natus amet.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <div className="btns col">
            <div className="btn">
              <ion-icon name="analytics"></ion-icon>
              <span>2022 Best Agency</span>
            </div>
            <div className="btn">
              <ion-icon name="glasses"></ion-icon>
              <span>World Class Agency</span>
            </div>
          </div>
          <div className="divider col">
            <div className="hr"></div>
          </div>
        </div>
        <div className="hero">
          <img
              src="https://images.unsplash.com/photo-1655669661634-2a2692fad546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt=""
          />
          <div className="hero-wrapper"></div>
          <div className="arrow">
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </div>
        </div>
        <div className="marquee">
        <span>
          discuss your ideas - unexpected time - spatial experiences - best
          specialists - impulse - independent online store - you can't download
          the experience
        </span>
        </div>
      </div>
  )
}
