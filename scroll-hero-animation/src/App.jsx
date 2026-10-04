import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =========================================
         INITIAL LOAD ANIMATION
      ========================================= */

      const intro = gsap.timeline();

      intro
        .from(titleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
        })

        .from(
          statsRef.current.children,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5"
        )

        .from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.7,
            rotate: -8,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );


      /* =========================================
         MAIN SCROLL-DRIVEN VISUAL
      ========================================= */

      gsap.to(visualRef.current, {
        y: 420,
        x: 120,
        scale: 1.25,
        rotate: 18,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });


      /* =========================================
         BACKGROUND GLOW ANIMATION
      ========================================= */

      gsap.to(".glow-one", {
        x: 250,
        y: 180,
        scale: 1.4,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".glow-two", {
        x: -220,
        y: -150,
        scale: 1.3,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });


      /* =========================================
         STATISTICS SCROLL ANIMATION
      ========================================= */

      gsap.to(statsRef.current, {
        y: 100,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "25% top",
          end: "65% top",
          scrub: 1,
        },
      });


      /* =========================================
         SCROLL INDICATOR
      ========================================= */

      gsap.to(".scroll-indicator", {
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "10% top",
          end: "30% top",
          scrub: 1,
        },
      });


      /* =========================================
         HEADLINE SCROLL ANIMATION
      ========================================= */

      gsap.to(titleRef.current, {
        y: -120,
        opacity: 0.25,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "70% top",
          scrub: 1,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);


  return (
    <main ref={heroRef} className="page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero">

        {/* Background Glow */}
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>


        {/* =====================================
            HEADLINE
        ===================================== */}

        <div ref={titleRef} className="hero-title">

          <p className="small-label">
            CREATIVE DIGITAL EXPERIENCE
          </p>

          <h1>
            W E L C O M E
            <br />
            I T Z F I Z Z
          </h1>

          <p className="subtitle">
            Scroll to explore the experience
          </p>

        </div>


        {/* =====================================
            STATISTICS
        ===================================== */}

        <div ref={statsRef} className="stats">

          <div className="stat">
            <span className="number">
              95%
            </span>

            <span className="description">
              Smooth Interaction
            </span>
          </div>


          <div className="stat">
            <span className="number">
              87%
            </span>

            <span className="description">
              User Engagement
            </span>
          </div>


          <div className="stat">
            <span className="number">
              92%
            </span>

            <span className="description">
              Visual Impact
            </span>
          </div>

        </div>


        {/* =====================================
            MAIN VISUAL
        ===================================== */}

        <div ref={visualRef} className="visual">

          <div className="visual-shadow"></div>

          <svg
            viewBox="0 0 700 350"
            className="car"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* Main Car Body */}

            <path
              d="
                M90 235
                L125 170
                C145 130 195 105 255 100
                L430 100
                C475 105 520 130 550 170
                L600 205
                C620 220 630 235 630 250
                L90 250
                Z
              "
              fill="#f5f5f5"
            />


            {/* Roof */}

            <path
              d="
                M205 105
                L260 45
                C275 30 295 25 320 25
                L405 25
                C430 25 450 35 465 55
                L510 105
                Z
              "
              fill="#d8d8d8"
            />


            {/* Left Window */}

            <path
              d="
                M275 52
                L315 40
                L350 40
                L350 92
                L240 92
                Z
              "
              fill="#202020"
            />


            {/* Right Window */}

            <path
              d="
                M365 40
                L405 40
                C420 40 430 48 442 62
                L470 92
                L365 92
                Z
              "
              fill="#202020"
            />


            {/* Red Accent */}

            <path
              d="
                M105 210
                L590 210
                L610 225
                L100 225
                Z
              "
              fill="#ff3b30"
            />


            {/* Front Light */}

            <ellipse
              cx="580"
              cy="190"
              rx="25"
              ry="12"
              fill="#ffffff"
            />


            {/* Back Light */}

            <ellipse
              cx="120"
              cy="190"
              rx="20"
              ry="12"
              fill="#ff3b30"
            />


            {/* Back Wheel */}

            <circle
              cx="200"
              cy="250"
              r="55"
              fill="#111111"
            />

            <circle
              cx="200"
              cy="250"
              r="27"
              fill="#888888"
            />

            <circle
              cx="200"
              cy="250"
              r="10"
              fill="#eeeeee"
            />


            {/* Front Wheel */}

            <circle
              cx="500"
              cy="250"
              r="55"
              fill="#111111"
            />

            <circle
              cx="500"
              cy="250"
              r="27"
              fill="#888888"
            />

            <circle
              cx="500"
              cy="250"
              r="10"
              fill="#eeeeee"
            />

          </svg>

        </div>


        {/* =====================================
            SCROLL INDICATOR
        ===================================== */}

        <div className="scroll-indicator">

          <span>
            SCROLL
          </span>

          <div className="scroll-line"></div>

        </div>

      </section>


      {/* =========================================
          SECOND SECTION
      ========================================= */}

      <section className="content-section">

        <p className="section-label">
          KEEP EXPLORING
        </p>

        <h2>
          Motion creates
          <br />
          <span>connection.</span>
        </h2>

        <p className="section-text">
          This interactive experience uses GSAP ScrollTrigger
          to create smooth scroll-driven animations. The visual
          movement is directly connected to the user's scrolling
          position instead of using automatic playback.
        </p>

      </section>


      {/* =========================================
          THIRD SECTION
      ========================================= */}

      <section className="final-section">

        <p>
          SCROLL-DRIVEN EXPERIENCE
        </p>

        <h2>
          THANK YOU
        </h2>

        <span>
          Built with React + GSAP
        </span>

      </section>

    </main>
  );
}

export default App;