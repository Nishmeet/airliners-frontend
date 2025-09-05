import React from 'react';

const WhyUs = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Unbiased Solutions',
      description: 'We provide completely neutral recommendations based solely on your needs, not our profit margins. Our agnostic approach ensures you always get the best deals and solutions available in the market.',
      features: ['No airline bias', 'Transparent pricing', 'Best route optimization', 'Independent recommendations']
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Higher Commissions',
      description: 'Maximize your revenue with our competitive commission structure. We offer some of the highest commission rates in the industry, helping you grow your business profitably.',
      features: ['Industry-leading rates', 'Tiered commission structure', 'Performance bonuses', 'Transparent calculations']
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5Z" />
        </svg>
      ),
      title: 'Dedicated Partner Support',
      description: 'Every partner gets assigned a dedicated account manager who understands your business needs. Get personalized support whenever you need it, from onboarding to ongoing operations.',
      features: ['Personal account manager', '24/7 emergency support', 'Training and onboarding', 'Regular business reviews']
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Seamless Integration',
      description: 'Our advanced API and integration tools make it easy to connect with your existing systems. Get up and running quickly with minimal technical overhead.',
      features: ['RESTful APIs', 'SDK libraries', 'White-label solutions', 'Technical documentation']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
              Why Partner{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                With Us?
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the advantages that make Airliners the preferred choice for travel industry professionals worldwide
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const cardColors = [
              'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100',
              'bg-gradient-to-br from-green-50 to-green-100/50 border-green-100', 
              'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-100',
              'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-100'
            ];
            
            return (
              <div 
                key={index} 
                className={`${cardColors[index]} rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-6 leading-relaxed font-light">
                {benefit.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 font-light">
                    <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
            Ready to Transform Your Travel Business?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Join hundreds of successful partners who are already benefiting from our comprehensive travel solutions. 
            Start your partnership journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition duration-300">
              Start Partnership
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
