import React from 'react';
import { User, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-20 mt-10">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
          <div className="absolute inset-0 rounded-full bg-cyber/30 blur-2xl"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyber/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] bg-secondary/50 z-10">
            <img 
              src="/profile.jpg" 
              alt="Jayesh Berwal" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-4 w-4 h-4 bg-cyber rounded-full border-2 border-background z-20"></div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-cardBorder mb-6">
          <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase flex items-center gap-2">
            <span className="text-cyber">✦</span> Computer Science & Engineering Student
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Jayesh Berwal</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-3xl leading-relaxed">
          Building Secure Web Applications & API Systems
        </p>

        <a 
          href="/cv.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent hover:bg-cyber/10 text-cyber border border-cyber/50 font-medium py-2.5 px-6 rounded-full transition-all duration-300"
        >
          <Download size={16} />
          RESUME
        </a>
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
