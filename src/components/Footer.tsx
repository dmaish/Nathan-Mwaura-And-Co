
import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Nathat Mwaura & Co.</h3>
                <p className="text-gray-400">Advocates</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Excellence in Legal Practice. We provide comprehensive legal solutions 
              across Kenya with integrity, expertise, and unwavering commitment to justice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@nathatmwaura.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">ABC Place, Waiyaki Way, Westlands, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Our Team', id: 'team' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal Services</h4>
            <ul className="space-y-2">
              {[
                'Corporate Law',
                'Contract Law',
                'Real Estate Law',
                'Family Law',
                'Employment Law',
                'Litigation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nathat Mwaura & Co. Advocates. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-400 transition-colors">Legal Notice</button>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Licensed to practice law in Kenya. Bar Admission Number: [License Number]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
