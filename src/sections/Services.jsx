import React from 'react';

const Services = () => {

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
        </svg>
      ),
      bgColor: 'bg-indigo-100',
      title: 'Flights',
      description: 'Nets and Commissions, discounted First and Business class airfares everywhere.',
      features: [
        'Exclusive access to net and commission-based fares.',
        'Deep discounts on First and Business class travel.',
        'Global access to airfares, with no location restrictions.'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
        </svg>
      ),
      bgColor: 'bg-blue-100',
      title: 'Hotels',
      description: 'Premium accommodations with exclusive rates and personalized service worldwide.',
      features: [
        'Access to exclusive hotel rates and amenities.',
        'Premium locations in major business districts.',
        'Dedicated concierge and support services.'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <path d="M14 16V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"/>
          <path d="M15 2v4"/>
          <path d="M15 8v2"/>
          <path d="M15 14v4"/>
          <path d="M22 2v20"/>
        </svg>
      ),
      bgColor: 'bg-green-100',
      title: 'Support',
      description: 'Round-the-clock dedicated support for all your travel needs and emergencies.',
      features: [
        '24/7 multilingual customer support team.',
        'Emergency assistance and rebooking services.',
        'Real-time updates and travel notifications.'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
          <path d="M8 2v4"/>
          <path d="M16 2v4"/>
          <rect width="18" height="18" x="3" y="4" rx="2"/>
          <path d="M3 10h18"/>
          <path d="M8 14h.01"/>
          <path d="M12 14h.01"/>
          <path d="M16 14h.01"/>
          <path d="M8 18h.01"/>
          <path d="M12 18h.01"/>
          <path d="M16 18h.01"/>
        </svg>
      ),
      bgColor: 'bg-purple-100',
      title: 'Management',
      description: 'Complete corporate travel management with policy compliance and reporting.',
      features: [
        'Automated policy compliance and approvals.',
        'Comprehensive expense tracking and reporting.',
        'Integrated booking platform for all travel needs.'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      ),
      bgColor: 'bg-orange-100',
      title: 'Insurance',
      description: 'Comprehensive travel insurance coverage for business travelers worldwide.',
      features: [
        'Medical and emergency coverage worldwide.',
        'Trip cancellation and interruption protection.',
        'Business equipment and document coverage.'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M8 16H3v5"/>
        </svg>
      ),
      bgColor: 'bg-red-100',
      title: 'Analytics',
      description: 'Detailed reporting and analytics to optimize your travel programs and costs.',
      features: [
        'Real-time travel spend analytics and insights.',
        'Custom reporting and dashboard creation.',
        'Cost optimization recommendations and trends.'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                Services
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive B2B travel solutions designed to streamline your business operations and maximize efficiency
          </p>
        </div>


        {/* Service Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const cardColors = [
                'bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-100',
                'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100',
                'bg-gradient-to-br from-green-50 to-green-100/50 border-green-100',
                'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-100',
                'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-100',
                'bg-gradient-to-br from-red-50 to-red-100/50 border-red-100'
              ];
              
              return (
                <div 
                  key={index} 
                  className={`max-w-xs ${cardColors[index]} rounded-xl shadow-md border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col mx-auto group`}
                >
                {/* Icon and Title Section */}
                <div className="flex flex-col items-center p-4 text-center">
                  <div className={`${service.bgColor} p-3 rounded-full mb-3`}>
                    {service.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h2>
                  <p className="text-sm text-gray-500 font-light leading-snug">
                    {service.description}
                  </p>
                </div>

                {/* Details List Section */}
                <div className="px-4 flex-grow">
                  <ul className="space-y-2 text-gray-500">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-green-500 flex-shrink-0 mt-1"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-8.82"/>
                          <path d="m9 11 3 3L22 4"/>
                        </svg>
                        <span className="text-xs leading-snug font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-Action Button */}
                <div className="p-4 pt-3">
                  <button className="w-full bg-indigo-600 text-white font-light py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg transition-colors duration-200 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Services;
