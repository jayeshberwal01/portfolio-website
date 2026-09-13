import React from 'react';
import Section from './Section';
import { Target } from 'lucide-react';

const Training = () => {
  return (
    <Section id="training" title="Training" icon={Target}>
      <div className="glass-card p-6 md:p-8 hover-card">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">Future Cert Labs</h3>
            <p className="text-gray-300 font-medium">70-Hour Hands-On Instructor-Led Training</p>
            <p className="text-sm text-gray-400 italic">Web Application & API Security Training + Project Course</p>
          </div>
          <span className="text-sm text-cyber font-medium whitespace-nowrap bg-cyber/10 px-3 py-1 rounded-full border border-cyber/20">
            June 2026 – July 2026
          </span>
        </div>
        
        <p className="text-gray-300 mb-4">
          Gained practical experience in security assessment and vulnerability analysis through hands-on exercises.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Security assessment
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Vulnerability analysis
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Real-world security scenarios
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Security validation
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Technical analysis
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Vulnerability reporting
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
            Practical security project
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Training;
