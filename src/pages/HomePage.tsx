import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* Image Section */}
      <section className="relative py-16 bg-blue-50 dark:bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="https://images.unsplash.com/photo-1694889650715-e2f01607861e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="EV Charging Station" 
            className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </section>

      <Features />
    </>
  );
};

export default HomePage; 