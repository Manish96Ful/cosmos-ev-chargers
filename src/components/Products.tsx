import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Cosmos Home',
      description: 'Perfect for residential use, the Cosmos Home delivers up to A 7.2kW of power, fully charging most EVs overnight.',
      features: ['Level 2 AC charging', 'Easy installation', 'Smartphone app integration', '3-year warranty'],
      price: '$599',
      image: 'https://via.placeholder.com/300x200?text=Cosmos+Home'
    },
    {
      id: 2,
      name: 'Cosmos Pro',
      description: 'Our commercial-grade Level 2 charger, ideal for businesses, apartment complexes, and public spaces.',
      features: ['11kW power output', 'RFID access control', 'Network connectivity', 'Weather resistant', 'Payment integration'],
      price: '$1,299',
      image: 'https://via.placeholder.com/300x200?text=Cosmos+Pro'
    },
    {
      id: 3,
      name: 'Cosmos Ultra',
      description: 'High-powered DC fast charging station for quick top-ups and highway corridor installation.',
      features: ['Up to 150kW output', '80% charge in 30 minutes', 'Multiple connector options', 'Built-in 15" display', 'Advanced load management'],
      price: 'Starting at $35,000',
      image: 'https://via.placeholder.com/300x200?text=Cosmos+Ultra'
    },
    {
      id: 4,
      name: 'Cosmos Solar',
      description: 'Our most sustainable solution, combining solar canopy with EV charging for true zero-emission charging.',
      features: ['Solar canopy integration', 'Battery storage option', 'Grid-independent operation', 'Level 2 charging', 'Smart energy management'],
      price: 'Custom pricing',
      image: 'https://via.placeholder.com/300x200?text=Cosmos+Solar'
    }
  ];

  return (
    <section className="py-16 w-full bg-blue-100 dark:bg-blue-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase">Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Charging Solutions
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-700 dark:text-blue-200">
            Explore our range of EV charging products, designed for every need from home use to commercial applications.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-blue-950 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-base font-semibold text-green-600 dark:text-green-400">{product.price}</p>
                  </div>
                  <p className="mt-3 text-base text-gray-700 dark:text-blue-200">{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-green-500 dark:text-green-400">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm text-gray-700 dark:text-blue-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products; 