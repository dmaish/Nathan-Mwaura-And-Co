
import React from 'react';
import { Building, Users, FileText, Home, Briefcase, Gavel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Corporate Law",
      description: "Comprehensive corporate legal services including business formation, compliance, mergers, acquisitions, and corporate governance."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Contract Law",
      description: "Expert contract drafting, review, negotiation, and dispute resolution to protect your business interests."
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Real Estate Law",
      description: "Full spectrum real estate services including property transactions, title verification, and property dispute resolution."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Family Law",
      description: "Compassionate representation in family matters including divorce, custody, matrimonial property, and adoption proceedings."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Employment Law",
      description: "Comprehensive employment law services for both employers and employees, including labor disputes and compliance."
    },
    {
      icon: <Gavel className="h-8 w-8 text-blue-600" />,
      title: "Litigation",
      description: "Experienced trial advocacy and dispute resolution across civil, commercial, and criminal matters."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg border border-gray-200">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Don't see your specific legal need listed? We handle a wide range of legal matters. 
            Contact us to discuss how we can help.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
