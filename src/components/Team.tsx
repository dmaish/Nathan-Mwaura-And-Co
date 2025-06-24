
import React from 'react';
import { Award, BookOpen, Scale } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Nathat Mwaura",
      position: "Senior Partner & Founder",
      education: "LLB (Hons), University of Nairobi; Admitted to the Kenya Bar",
      specialization: "Corporate Law, Litigation, Real Estate",
      experience: "15+ years of legal practice",
      icon: <Scale className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Associate Advocate",
      position: "Associate Partner",
      education: "LLM, University of Nairobi; LLB (Hons), Kenyatta University",
      specialization: "Family Law, Employment Law, Contract Drafting",
      experience: "8+ years of specialized practice",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Junior Associate",
      position: "Junior Associate",
      education: "LLB (Hons), Strathmore University; Kenya School of Law",
      specialization: "Research, Client Relations, Document Preparation",
      experience: "3+ years of growing expertise",
      icon: <Award className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of legal professionals dedicated to providing 
            exceptional service and achieving the best outcomes for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600 text-sm">{member.education}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Specialization</h4>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team brings together diverse legal expertise and a shared commitment to excellence. 
              We work collaboratively to ensure that every client receives comprehensive legal support 
              tailored to their unique needs. With continuous professional development and staying 
              current with legal developments, we maintain the highest standards of legal practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Successful Cases</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
