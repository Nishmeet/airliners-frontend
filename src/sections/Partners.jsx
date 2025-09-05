import React, { useState } from 'react';

const LogoWithFallback = ({ partner }) => {
  const [imgSrc, setImgSrc] = useState(partner.logo);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc === partner.logo && partner.fallback) {
      setImgSrc(partner.fallback);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-16 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105">
        <div className="text-center">
          <div className="text-white font-semibold text-sm">{partner.code}</div>
          <div className="text-white text-xs opacity-90">Airlines</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={`${partner.name} logo`}
      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-105"
      onError={handleError}
    />
  );
};

const Partners = () => {
  const airlinePartners = [
    { 
      name: 'American Airlines', 
      code: 'AA',
      logo: 'https://logo.clearbit.com/aa.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/American_Airlines_logo_2013.svg/200px-American_Airlines_logo_2013.svg.png'
    },
    { 
      name: 'Delta Air Lines', 
      code: 'DL',
      logo: 'https://logo.clearbit.com/delta.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/200px-Delta_logo.svg.png'
    },
    { 
      name: 'United Airlines', 
      code: 'UA',
      logo: 'https://logo.clearbit.com/united.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/United_Airlines_Logo.svg/200px-United_Airlines_Logo.svg.png'
    },
    { 
      name: 'British Airways', 
      code: 'BA',
      logo: 'https://logo.clearbit.com/britishairways.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/British_Airways_Logo.svg/200px-British_Airways_Logo.svg.png'
    },
    { 
      name: 'Lufthansa', 
      code: 'LH',
      logo: 'https://logo.clearbit.com/lufthansa.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/200px-Lufthansa_Logo_2018.svg.png'
    },
    { 
      name: 'Air France', 
      code: 'AF',
      logo: 'https://logo.clearbit.com/airfrance.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/200px-Air_France_Logo.svg.png'
    },
    { 
      name: 'Emirates', 
      code: 'EK',
      logo: 'https://logo.clearbit.com/emirates.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png'
    },
    { 
      name: 'Singapore Airlines', 
      code: 'SQ',
      logo: 'https://logo.clearbit.com/singaporeair.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/200px-Singapore_Airlines_Logo_2.svg.png'
    },
    { 
      name: 'Qatar Airways', 
      code: 'QR',
      logo: 'https://logo.clearbit.com/qatarairways.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/200px-Qatar_Airways_Logo.svg.png'
    },
    { 
      name: 'Turkish Airlines', 
      code: 'TK',
      logo: 'https://logo.clearbit.com/turkishairlines.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Turkish_Airlines_logo_2019_compact.svg/200px-Turkish_Airlines_logo_2019_compact.svg.png'
    },
    { 
      name: 'Japan Airlines', 
      code: 'JL',
      logo: 'https://logo.clearbit.com/jal.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Japan_Airlines_Logo_%28Font-Red%29.svg/200px-Japan_Airlines_Logo_%28Font-Red%29.svg.png'
    },
    { 
      name: 'KLM', 
      code: 'KL',
      logo: 'https://logo.clearbit.com/klm.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/200px-KLM_logo.svg.png'
    },
    { 
      name: 'Air India', 
      code: 'AI',
      logo: 'https://logo.clearbit.com/airindia.in',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Air_India_Logo.svg/200px-Air_India_Logo.svg.png'
    },
    { 
      name: 'Swiss International', 
      code: 'LX',
      logo: 'https://logo.clearbit.com/swiss.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_International_Air_Lines_Logo_2011.svg/200px-Swiss_International_Air_Lines_Logo_2011.svg.png'
    },
    { 
      name: 'Air Canada', 
      code: 'AC',
      logo: 'https://logo.clearbit.com/aircanada.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Air_Canada_Logo.svg/200px-Air_Canada_Logo.svg.png'
    },
    { 
      name: 'Virgin Atlantic', 
      code: 'VS',
      logo: 'https://logo.clearbit.com/virgin-atlantic.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Virgin_Atlantic_logo.svg/200px-Virgin_Atlantic_logo.svg.png'
    },
    { 
      name: 'Cathay Pacific', 
      code: 'CX',
      logo: 'https://logo.clearbit.com/cathaypacific.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cathay_Pacific_logo.svg/200px-Cathay_Pacific_logo.svg.png'
    },
    { 
      name: 'Etihad Airways', 
      code: 'EY',
      logo: 'https://logo.clearbit.com/etihad.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad_Airways_logo.svg/200px-Etihad_Airways_logo.svg.png'
    },
    { 
      name: 'Korean Air', 
      code: 'KE',
      logo: 'https://logo.clearbit.com/koreanair.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Korean_Air_logo.svg/200px-Korean_Air_logo.svg.png'
    },
    { 
      name: 'ANA', 
      code: 'NH',
      logo: 'https://logo.clearbit.com/ana.co.jp',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/All_Nippon_Airways_Logo.svg/200px-All_Nippon_Airways_Logo.svg.png'
    },
    { 
      name: 'Qantas', 
      code: 'QF',
      logo: 'https://logo.clearbit.com/qantas.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Qantas_logo_2016.svg/200px-Qantas_logo_2016.svg.png'
    },
  
   
  
    { 
      name: 'China Southern', 
      code: 'CZ',
      logo: 'https://logo.clearbit.com/csair.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/China_Southern_Airlines_logo.svg/200px-China_Southern_Airlines_logo.svg.png'
    },
    
  
    { 
      name: 'Malaysia Airlines', 
      code: 'MH',
      logo: 'https://logo.clearbit.com/malaysiaairlines.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Malaysia_Airlines_logo_%282013%29.svg/200px-Malaysia_Airlines_logo_%282013%29.svg.png'
    },
 
    { 
      name: 'Ethiopian Airlines', 
      code: 'ET',
      logo: 'https://logo.clearbit.com/ethiopianairlines.com',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ethiopian_Airlines_Logo.svg/200px-Ethiopian_Airlines_Logo.svg.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
              Our Airline{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                Partners
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            We work with the world's leading airlines to provide you with the best flight options and competitive pricing
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {airlinePartners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[120px]"
            >
              {/* Airline Logo */}
              <div className="w-20 h-16 flex items-center justify-center mb-3">
                <LogoWithFallback partner={partner} />
              </div>
              
              {/* Airline Name */}
              <h3 className="text-center text-xs font-normal text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
     
         
          
          {/* Benefits Timeline */}
         

            

        
      </div>
    </section>
  );
};

export default Partners;
