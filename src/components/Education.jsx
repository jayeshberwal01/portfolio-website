import React from 'react';
import Section from './Section';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      score: "CGPA: 7.14",
      period: "Aug 2024 – Present"
    },
    {
      school: "Prince Uch Madhyamik Vidyalaya",
      location: "Sikar, Rajasthan",
      degree: "Intermediate",
      score: "80%",
      period: "Apr 2022 – Mar 2024"
    },
    {
      school: "Santr L V M Sr. Sec School",
      location: "Bhiwani, Haryana",
      degree: "Matriculation",
      score: "84%",
      period: "Apr 2021 – Mar 2022"
    }
  ];

  return (
    <Section id="education" title="Education & Qualifications" icon={GraduationCap}>
      <div className="relative pl-8 md:pl-10 space-y-8 before:absolute before:inset-0 before:ml-4 md:before:ml-5 before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyber/50 before:via-cardBorder before:to-transparent">
        {education.map((edu, index) => (
          <div key={index} className="relative group">
            {/* Timeline Icon */}
            <div className="absolute -left-8 md:-left-10 mt-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyber/50 bg-background text-cyber shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover:bg-cyber/10 transition-colors">
              <GraduationCap size={14} />
            </div>
            
            <div className="glass-card p-6 md:p-8 hover-card">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.school}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {edu.location}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-gray-300 font-medium px-3 py-1.5 rounded-md bg-secondary/30 border border-cardBorder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    {edu.period}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 bg-cyber/10 border border-cyber/20 rounded-md text-cyber">
                    {edu.score}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-cardBorder/50 pt-4 mt-2">
                <p className="text-gray-200 font-medium">
                  {edu.degree}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
