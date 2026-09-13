import React from 'react';
import Section from './Section';
import { Code2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "REST APIs"]
    },
    {
      title: "Cybersecurity",
      skills: ["Web Application Security", "API Security", "Penetration Testing", "Vulnerability Assessment"]
    },
    {
      title: "Tools & Platforms",
      skills: ["MySQL", "Git", "GitHub", "Burp Suite", "Nmap", "Kali Linux"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Player", "Adaptability", "Analytical Thinking"]
    }
  ];

  return (
    <Section id="skills" title="Skills" icon={Code2}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card p-6 hover-card">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-3 py-1.5 bg-secondary/50 border border-cardBorder text-gray-300 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
