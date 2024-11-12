import { useState, useEffect } from 'react';

export default function LogoClouds() {
  const logos = [
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2020/12/partner-1-1-1.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2020/12/partner-21-1-1.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2020/12/partner-3-1-1.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2020/12/logo_4-1-1.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2020/12/logo_5-1-1.png',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="py-16 bg-[#180231]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative flex justify-center items-center h-24 overflow-hidden">
          <div
            className="flex"
          >
            {logos.map((logo, index) => (
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
