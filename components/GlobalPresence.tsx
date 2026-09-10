'use client';

export default function GlobalPresence() {
  const globalHubs = [
    {
      country: 'Ontario, Canada',
      img: '/locations/CANADA.svg',
    },
    {
      country: 'United Kingdom',
      img: '/locations/UK.svg',
    },
    {
      country: 'Ireland',
      img: '/locations/Dublin.png',
    },
    {
      country: 'UAE',
      img: '/locations/UAE.svg',
    },
    {
      country: 'India (Noida HQ)',
      img: '/locations/INDIA.svg',
    },
    {
      country: 'United States',
      img: '/locations/USA.svg',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-blue-900/30 text-white">
      {/* Section Header */}
      <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
        <p className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
          GLOBAL FOOTPRINT &amp; CLIENT REACH
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[0.95]">
          SERVING CLIENTS<br />
          <span className="text-blue-500 italic font-light">ACROSS THE GLOBE.</span>
        </h2>
      </div>

      {/* Seamless Floating Skylines Grid - Box Free */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 items-end">
        {globalHubs.map((hub, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-end text-center space-y-4 group cursor-default"
          >
            {/* Skyline Image */}
            <div className="w-full h-36 flex items-end justify-center px-4 overflow-hidden">
              <img
                src={hub.img}
                alt={hub.country}
                className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Country Title */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                {hub.country}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
