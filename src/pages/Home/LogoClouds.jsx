import { useState, useEffect } from 'react';

export default function LogoClouds() {
  const logos = [
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-13_at_13.03.34_ed25e81a-removebg-preview.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-13_at_13.03.34_09dd32e0-removebg-preview.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/IMG-20241113-WA0030-removebg-preview.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/IMG-20241113-WA0029-removebg-preview.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/IMG-20241113-WA0028-removebg-preview.png',
    'https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/IMG-20241113-WA0027-removebg-preview.png',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="py-16 bg-[#0a312c]">
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
