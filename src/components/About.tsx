
import React from 'react';
import { CheckCircle, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices and client relationships."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in every case, delivering superior legal services and outcomes."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Client-Focused",
      description: "Our clients' interests are at the heart of everything we do, ensuring personalized attention."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Results-Driven",
      description: "We are committed to achieving the best possible outcomes for our clients in every matter."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Firm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established with a vision to provide exceptional legal services, we have grown to become 
            one of Kenya's most trusted law firms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nathat Mwaura & Co. Advocates was founded with a simple yet powerful mission: to provide 
              accessible, high-quality legal services to individuals and businesses across Kenya. Our 
              firm has built a reputation for excellence through years of dedicated service and successful 
              case outcomes.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that every client deserves personalized attention and expert legal guidance. 
              Our team combines deep legal knowledge with practical experience to deliver solutions 
              that are both legally sound and commercially viable.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium">Licensed to practice in all Kenyan courts</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                "Extensive experience across multiple practice areas",
                "Proven track record of successful case outcomes",
                "Personalized approach to every client matter",
                "Transparent communication and regular updates",
                "Competitive and fair pricing structure",
                "Strong network of professional relationships"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
