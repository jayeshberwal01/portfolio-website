import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Jayesh Berwal</h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
          Computer Science & Engineering Student
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Cybersecurity</span>
          <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Web & API Security</span>
          <span className="px-3 py-1 bg-cyber/10 text-cyber border border-cyber/20 rounded-full text-sm font-medium">Penetration Testing</span>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          I'm a Computer Science and Engineering student at Lovely Professional University with a strong interest in cybersecurity, web and API security, penetration testing, vulnerability assessment, and software development.
        </p>
      </div>
      
      <div className="glass-card p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
          <span className="text-cyber">#</span> About
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science and Engineering student at Lovely Professional University interested in cybersecurity and practical software development. I enjoy analyzing applications and APIs, identifying security weaknesses, validating vulnerabilities, and building useful technology.
        </p>
      </div>
    </section>
  );
};

export default About;
