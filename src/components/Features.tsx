import React, { useEffect, useState, useRef } from 'react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(Array(3).fill(false));
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible([true, false, false]);
            setTimeout(() => setIsVisible([true, true, false]), 300);
            setTimeout(() => setIsVisible([true, true, true]), 600);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      title: 'Fast Charging',
      description: 'Our stations deliver up to 150kW of power, charging your EV to 80% in just 30 minutes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgClass: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Eco-Friendly',
      description: 'Powered by 100% renewable energy sources, making your journey truly sustainable.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgClass: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Wide Network',
      description: 'With over 500 stations across the country, you\'re never far from a Cosmos charger.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgClass: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
  ];

  return (
    <div className="py-20 w-full bg-white dark:bg-blue-900 relative" ref={featuresRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80" fill="#34d399">
          <path d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zm-3 5a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2zm0 5a1 1 0 100-2 1 1 0 000 2zm7-6h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm9 7a1 1 0 100-2 1 1 0 000 2zm-5 0a1 1 0 100-2 1 1 0 000 2zm5-5a1 1 0 100-2 1 1 0 000 2zm-5 0a1 1 0 100-2 1 1 0 000 2zm-5-5a1 1 0 100-2 1 1 0 000 2zm0 5a1 1 0 100-2 1 1 0 000 2zm15 12h2v-2h-2v-2h-2v2h-2v2h2v2h2v-2zm-2-7v-2h-2v2h2zm0-7h-2v2h2v-2zm-5 0v2h2v-2h-2zm10 0h-2v2h2v-2zm-25 7a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm5 5a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm20 0h-2v2h2v-2zm-5 0h-2v2h2v-2z"></path>
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase inline-block relative">
            <span className="animate-pulse absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-green-400"></span>
            Features
            <span className="animate-pulse absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-green-400"></span>
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A Better Way to Charge
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-700 dark:text-blue-200 lg:mx-auto">
            Our charging stations are designed with both drivers and the planet in mind.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out transform ${
                  isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="h-full bg-gradient-to-b from-white to-blue-50 dark:from-blue-900 dark:to-blue-950 p-8">
                  <div className={`mb-6 inline-flex items-center justify-center rounded-full p-3 shadow-lg ${feature.bgClass}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-4 text-base text-gray-700 dark:text-blue-200">{feature.description}</p>
                  
                  {/* Interactive element */}
                  <div className="mt-6 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-green-500 opacity-75 animate-pulse" 
                        style={{ animationDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 transform rotate-45 bg-gradient-to-r from-green-400 to-blue-500 opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 gap-8 bg-blue-50 dark:bg-blue-950 rounded-lg shadow-xl p-6 sm:p-8 md:grid-cols-4 overflow-hidden">
          <div className="text-center animate-fadeIn">
            <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center">
              <span className="inline-block counter">500+</span>
            </div>
            <div className="mt-2 text-base text-gray-700 dark:text-blue-200">Charging Stations</div>
          </div>
          
          <div className="text-center animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center">
              <span className="inline-block counter">100%</span>
            </div>
            <div className="mt-2 text-base text-gray-700 dark:text-blue-200">Renewable Energy</div>
          </div>
          
          <div className="text-center animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center">
              <span className="inline-block counter">30k+</span>
            </div>
            <div className="mt-2 text-base text-gray-700 dark:text-blue-200">Happy Customers</div>
          </div>
          
          <div className="text-center animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center">
              <span className="inline-block counter">24/7</span>
            </div>
            <div className="mt-2 text-base text-gray-700 dark:text-blue-200">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 