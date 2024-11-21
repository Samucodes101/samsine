import { useState, useEffect, useRef } from 'react';
import nsitf from '../../assets/NSITF.png';
import nimc from '../../assets/NIMC.png';
import ferma from '../../assets/Ferma.png';
import nitt from '../../assets/NITT.png';
import galaxy from '../../assets/Galaxy_Backbone.png';
import son from '../../assets/SON.png';
import niwa from '../../assets/NIWA.png';
import fcc from '../../assets/FCC.png';

export default function LogoClouds() {
  const logos = [
    nitt,
    nsitf,
    nimc,
    ferma,
    galaxy,
    son,
    niwa,
    fcc
  ];

  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const containerWidth = containerRef.current?.scrollWidth || 0;
        const logoWidth = containerWidth / logos.length;
        const newOffset = prevOffset - logoWidth;
        return Math.abs(newOffset) >= containerWidth ? 0 : newOffset;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="py-16 bg-[#ebefef]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Clients</h2>

        {/* Logo Carousel */}
        <div
          className="relative flex justify-center items-center h-24 overflow-hidden"
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="h-24 w-58 mx-4"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
