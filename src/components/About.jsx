import React from 'react';
import { User, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Jayesh Berwal</h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            Computer Science & Engineering Student
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Cybersecurity</span>
            <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Web & API Security</span>
            <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Penetration Testing</span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            I'm a Computer Science and Engineering student at Lovely Professional University with a strong interest in cybersecurity, web and API security, penetration testing, vulnerability assessment, and software development.
          </p>
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyber/10 hover:bg-cyber/20 text-cyber border border-cyber/30 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Download size={18} />
            View CV
          </a>
        </div>
        
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-cyber/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-secondary/50">
            <img 
              src="/profile.jpg" 
              alt="Jayesh Berwal" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
          <User className="text-cyber" size={28} /> About
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science and Engineering student at Lovely Professional University interested in cybersecurity and practical software development. I enjoy analyzing applications and APIs, identifying security weaknesses, validating vulnerabilities, and building useful technology.
        </p>
      </div>
    </section>
  );
};

export default About;
