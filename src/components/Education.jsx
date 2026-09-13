import React from 'react';
import Section from './Section';

const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      score: "CGPA: 7.14",
      period: "August 2024 – Present"
    },
    {
      school: "Prince Uch Madhyamik Vidyalaya",
      location: "Sikar, Rajasthan",
      degree: "Intermediate",
      score: "80%",
      period: "April 2022 – March 2024"
    },
    {
      school: "Santr L V M Sr. Sec School",
      location: "Bhiwani, Haryana",
      degree: "Matriculation",
      score: "84%",
      period: "April 2021 – March 2022"
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="glass-card p-6 relative overflow-hidden group">
            {/* Subtle left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cardBorder group-hover:bg-cyber transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
              <h3 className="text-lg md:text-xl font-bold text-foreground">{edu.school}</h3>
              <span className="text-sm text-gray-400 font-medium whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-full border border-cardBorder">
                {edu.period}
              </span>
            </div>
            
            <p className="text-cyber text-sm mb-2">{edu.location}</p>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
              <p className="text-gray-300 font-medium">{edu.degree}</p>
              <span className="mt-2 sm:mt-0 text-sm font-semibold px-2 py-1 bg-secondary rounded text-gray-200">
                {edu.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
