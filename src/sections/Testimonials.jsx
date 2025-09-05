import React, { useState } from 'react';

const Testimonials = () => {
  // Component for handling image fallbacks
  const TestimonialImage = ({ src, alt, name }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      setHasError(true);
    };

    if (hasError) {
      // Create initials from name
      const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
      return (
        <div className="w-14 h-14 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
          {initials}
        </div>
      );
    }

    return (
      <img
        src={imgSrc}
        alt={alt}
        className="w-14 h-14 rounded-full object-cover mr-4"
        onError={handleError}
      />
    );
  };
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'Global Travel Solutions',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      testimonial: "Airliners has transformed our business operations completely. Their unbiased approach and exceptional support have helped us increase our revenue by 40% within the first year of partnership.",
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accentColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Operations Director',
      company: 'Elite Corporate Travel',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      testimonial: "The seamless integration and dedicated support from Airliners made our transition effortless. Our clients love the improved booking experience, and we've seen a 60% increase in customer satisfaction.",
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      accentColor: 'text-green-600'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Founder',
      company: 'Premium Business Journeys',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      testimonial: "Working with Airliners has been a game-changer for our agency. The higher commission rates and transparent pricing have significantly improved our profit margins while maintaining excellent service quality.",
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      accentColor: 'text-purple-600'
    }
  ];

  const stats = [
    {
      number: '98%',
      label: 'Partner Satisfaction',
      description: 'of our partners rate their experience as excellent'
    },
    {
      number: '45%',
      label: 'Average Revenue Increase',
      description: 'within the first year of partnership'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'round-the-clock assistance for all partners'
    },
    {
      number: '72hrs',
      label: 'Integration Time',
      description: 'average time to get fully operational'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
              Success Stories from Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                Partners
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how travel agencies and corporate partners are thriving with Airliners' comprehensive solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`${testimonial.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Quote Icon */}
              <div className={`${testimonial.accentColor} mb-6`}>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                "{testimonial.testimonial}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <TestimonialImage 
                  src={testimonial.image}
                  alt={testimonial.name}
                  name={testimonial.name}
                />
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm font-light">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 text-center mb-12 tracking-wide">
            Partnership Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-semibold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-gray-800 mb-4 tracking-wide">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Start your journey with Airliners today and experience the difference our partnership can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white font-light px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Get Started Today
            </button>
            <button className="border border-blue-600 text-blue-600 font-light px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-all duration-300">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
