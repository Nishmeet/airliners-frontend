import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');
  
  // Beautiful travel destination images for the carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80', // Santorini, Greece
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Maldives
    'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'  // Dubai skyline
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    travelers: '1'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight search:', formData);
  };

  const tabs = [
    { id: 'flights', name: 'Flights', icon: '✈️' },
    { id: 'hotels', name: 'Hotel', icon: '🏨' },
    { id: 'cars', name: 'Rental Car', icon: '🚗' }
  ];

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Text - Upper portion */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Your Premier Partner for{' '}
              <span className="text-blue-400">B2B Travel Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto font-light">
              Streamline your business travel with comprehensive solutions designed for corporate partners and travel agencies worldwide
            </p>
          </div>
        </div>

        {/* Search Form - Lower portion */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white   overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b-2 border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-center font-medium transition-colors duration-200 border-b-2 ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600 border-transparent'
                    }`}
                  >
                    <span className="inline-flex items-center space-x-2">
                      <span className="text-lg">{tab.icon}</span>
                      <span>{tab.name}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Flight Search Form */}
              {activeTab === 'flights' && (
                <div className="p-6">
                  <form onSubmit={handleSubmit}>
                    {/* Trip Type and Traveler Options */}
                    <div className="flex flex-wrap items-center gap-8 mb-6">
                      {/* Trip Type Dropdown */}
                      <div className="flex items-center space-x-2">
                        <select className="border-none bg-transparent text-gray-700 font-medium focus:outline-none cursor-pointer">
                          <option>Round trip</option>
                          <option>One way</option>
                        </select>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Traveler Info */}
                      <div className="flex items-center space-x-2 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Economy, 1 traveller</span>
                      </div>
                      
                      {/* Nonstop Only Checkbox */}
                      <label className="flex items-center space-x-2 text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span>Nonstop only</span>
                      </label>
                    </div>

                    {/* Search Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                      {/* From */}
                      <div className="md:col-span-3">
                        <label className="block text-sm text-gray-600 mb-2 font-semibold">From</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="from"
                            value={formData.from}
                            onChange={handleInputChange}
                            placeholder="Toronto"
                            className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg font-medium bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Swap Button */}
                      <div className="md:col-span-1 flex justify-center pb-3">
                        <button
                          type="button"
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </button>
                      </div>

                      {/* To */}
                      <div className="md:col-span-3">
                        <label className="block text-sm text-gray-600 mb-2 font-semibold">To</label>
                        <input
                          type="text"
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          placeholder="Destination"
                          className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg font-medium bg-transparent"
                        />
                      </div>

                      {/* Departure - Return */}
                      <div className="md:col-span-3 relative">
                        <label className="block text-sm text-gray-600 mb-2 font-semibold">Departure - Return</label>
                        <input
                          type="text"
                          name="departure"
                          value={formData.departure}
                          onChange={handleInputChange}
                          placeholder="Select dates"
                          className="w-full px-0 py-3 pr-8 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg font-medium bg-transparent"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>

                      {/* Search Button */}
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="w-full px-6 py-4 bg-yellow-400 hover:bg-blue-500 text-black font-bold transition duration-200 text-lg"
                        >
                          Search flights
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Placeholder for other tabs */}
              {activeTab === 'hotels' && (
                <div className="p-6 text-center text-gray-500 py-16">
                  <h3 className="text-xl font-semibold mb-2">Hotel Search</h3>
                  <p>Hotel search functionality coming soon...</p>
                </div>
              )}

              {activeTab === 'cars' && (
                <div className="p-6 text-center text-gray-500 py-16">
                  <h3 className="text-xl font-semibold mb-2">Car Rental Search</h3>
                  <p>Car rental search functionality coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
