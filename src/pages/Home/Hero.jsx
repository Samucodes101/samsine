import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import heroanimation from "../../assets/heroanimation.json";
import { Link } from "react-router-dom";
import hero from '../../assets/hero.jpg'

export default function Hero() {
  const heroTextRef = useRef(null);
  const animationContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Initialize Lottie animation
    const animationInstance = lottie.loadAnimation({
      container: animationContainerRef.current, 
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroanimation, 
    });

    // Slow down the animation
    animationInstance.setSpeed(0.5); 

    // Modify colors dynamically
    animationInstance.addEventListener("DOMLoaded", () => {
      const svgElements = animationContainerRef.current.querySelectorAll("path");
      svgElements.forEach((path) => {
        path.setAttribute("fill", "#3b3b3b"); 
      });
    });

    return () => {
      // Cleanup Lottie instance
      animationInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-12");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, observerOptions);

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center p-20">
        <div
          ref={heroTextRef}
          className="text-start text-white opacity-0 translate-y-12 transition-all duration-700"
        >
          <h1 className="text-4xl md:text-7xl font-bold mt-36 ">
            Crafting Tomorrow, Today;{" "}
            <p>
              Where Innovation <p>Meets Technology.</p>
            </p>
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            Bridging Dreams and Reality Through Smart Technology.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#881fb2] rounded-full hover:bg-[#45163d]">
            <Link to="/contact"><p className="font-bold hover:font-normal">Get Started</p></Link>
          </button>
        </div>

        {/* Lottie Animation Container */}
        <div
          ref={animationContainerRef}
          className="w-1/2 h-auto"
          aria-label="Lottie Animation"
        />
      </div>
    </section>
  );
}
