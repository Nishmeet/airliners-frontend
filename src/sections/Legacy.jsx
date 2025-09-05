import React from 'react';
import girlImage from '../assets/img1.jpeg';

const Legacy = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
              Our Legacy &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Building the future of B2B travel through innovation, partnership, and unwavering commitment to excellence
          </p>
        </div>

        {/* Split Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Legacy Card */}
          <div className="relative h-96 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${girlImage})`
              }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Trusted Excellence
              </h3>
              <p className="text-white/90 text-lg font-light leading-relaxed mb-6">
                Over a decade of expertise in B2B travel solutions, serving 500+ partner agencies across 50+ countries worldwide
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">500+</div>
                  <div className="text-white/80 text-sm">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">10M+</div>
                  <div className="text-white/80 text-sm">Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Card */}
          <div className="relative h-96 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
              }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Innovation Forward
              </h3>
              <p className="text-white/90 text-lg font-light leading-relaxed mb-6">
                Cutting-edge technology and seamless integrations that power the next generation of business travel solutions
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">28+</div>
                  <div className="text-white/80 text-sm">Airlines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">190+</div>
                  <div className="text-white/80 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-white">99.9%</div>
                  <div className="text-white/80 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-light px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Partner with Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
