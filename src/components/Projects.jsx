import React from 'react';
import Section from './Section';
import { ExternalLink, Briefcase } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "OWASP crAPI – API Penetration Testing & Security Assessment",
      date: "July 2026",
      description: "Performed a black-box assessment of REST endpoints using PTES, OWASP WSTG, and API Security Top 10:2023.",
      points: [
        "Discovered and validated 12 flaws including BOLA, BOPLA, BFLA, broken authentication, mass assignment, SSRF, and business-logic abuse.",
        "Manipulated requests, parameters, tokens, headers, and JSON payloads to verify authorization weaknesses and exploitability.",
        "Documented findings with CVSS v4 severity, CWE/CAPEC mapping, exploitation evidence, impact analysis, and remediation recommendations."
      ],
      technologies: ["Burp Suite", "Kali Linux"],
      github: null
    },
    {
      title: "EduSolve AI – AI Powered Math & Science Tutor",
      date: "May 2026",
      description: "Built an AI tutoring platform for step-by-step Math & Science problem solving using LLMs.",
      points: [
        "PDF-based textbook querying",
        "Speech-to-text and Text-to-speech",
        "KaTeX mathematical rendering",
        "Vercel serverless API proxy for securely handling AI API requests and protecting credentials"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Vercel", "OpenRouter API", "PDF.js", "KaTeX", "Git", "GitHub"],
      github: "https://github.com/jayeshberwal01/edusolve-ai"
    }
  ];

  return (
    <Section id="projects" title="Projects" icon={Briefcase}>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card p-6 md:p-8 hover-card">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <span className="text-sm text-cyber font-medium whitespace-nowrap bg-cyber/10 px-3 py-1 rounded-full border border-cyber/20">
                {project.date}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
              {project.points.map((point, i) => (
                <li key={i} className="leading-relaxed text-sm md:text-base">{point}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs font-medium text-gray-400 bg-secondary/50 px-2 py-1 rounded border border-cardBorder">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.github && (
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-md transition-colors"
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
