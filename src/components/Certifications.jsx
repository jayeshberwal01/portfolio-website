import React from 'react';
import Section from './Section';

const Certifications = () => {
  const certifications = [
    {
      title: "Mastercard Cybersecurity Job Simulation",
      issuer: "Mastercard",
      date: "September 2026"
    },
    {
      title: "Deloitte Cyber Job Simulation",
      issuer: "Deloitte",
      date: "September 2026"
    },
    {
      title: "Database Management System Part-1",
      issuer: "Infosys",
      date: "July 2026"
    },
    {
      title: "C Programming – 18-Hour Live Course",
      issuer: "CSE Pathshala",
      date: "January 2025"
    },
    {
      title: "Certificate of Merit – Communication & Public Speaking",
      issuer: "Lovely Professional University",
      date: "November 2024"
    }
  ];

  return (
    <Section id="certificates" title="Certificates & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="glass-card p-5 hover-card flex flex-col justify-between h-full">
            <div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-1 leading-snug">{cert.title}</h3>
              <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-cardBorder">
              <span className="text-xs text-cyber font-medium">
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
