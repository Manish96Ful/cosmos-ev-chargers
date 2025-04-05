import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 w-full bg-blue-50 dark:bg-blue-950">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Commitment to a Greener Future
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-700 dark:text-blue-200">
            Cosmos EV Chargers is dedicated to accelerating the world's transition to sustainable energy.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
              <p className="text-gray-700 dark:text-blue-200 mb-4">
                Founded in 2018, Cosmos EV Chargers began with a simple mission: make EV charging accessible everywhere. 
                What started as a small team of engineers and environmental enthusiasts has grown into a leading provider 
                of electric vehicle charging infrastructure across the country.
              </p>
              <p className="text-gray-700 dark:text-blue-200">
                Our founder, Jane Chen, recognized the potential for electric vehicles to revolutionize transportation, 
                but also saw the critical need for a more robust charging network. That vision drives our continuous innovation 
                and expansion.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-blue-200 mb-4">
                We're on a mission to build the most reliable and accessible EV charging network in the world. 
                By developing cutting-edge charging technology and strategic partnerships, we're removing barriers 
                to EV adoption and helping create a cleaner planet.
              </p>
              <p className="text-gray-700 dark:text-blue-200">
                Every Cosmos charging station is powered by 100% renewable energy, either through direct solar/wind 
                installations or renewable energy credits, ensuring that your journey is truly emissions-free.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Innovation</h4>
                  <p className="mt-2 text-gray-700 dark:text-blue-200">
                    We constantly push the boundaries of what's possible in EV charging technology, 
                    from faster charging speeds to smarter power management systems.
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Sustainability</h4>
                  <p className="mt-2 text-gray-700 dark:text-blue-200">
                    Environmental responsibility is at our core. We design our products and operations 
                    to minimize ecological impact and maximize renewable energy use.
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">Accessibility</h4>
                  <p className="mt-2 text-gray-700 dark:text-blue-200">
                    We believe EV charging should be available to everyone, everywhere. We work to ensure our 
                    stations are widely distributed, easy to use, and fairly priced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 