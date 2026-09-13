import React, { useState } from 'react';
import Section from './Section';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
            I'm currently looking for new opportunities in cybersecurity and software development. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:jayeshberwal@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyber transition-colors group">
              <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-cyber/10 border border-cardBorder group-hover:border-cyber/30 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                <p className="font-medium">jayeshberwal@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center border border-cardBorder">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                <p className="font-medium">+91-7710418817</p>
              </div>
            </div>
            
            <a href="https://www.linkedin.com/in/jayesh-berwal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyber transition-colors group">
              <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-cyber/10 border border-cardBorder group-hover:border-cyber/30 transition-colors">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">LinkedIn</p>
                <p className="font-medium">jayesh-berwal</p>
              </div>
            </a>
            
            <a href="https://github.com/jayeshberwal01/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyber transition-colors group">
              <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-cyber/10 border border-cardBorder group-hover:border-cyber/30 transition-colors">
                <GithubIcon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">GitHub</p>
                <p className="font-medium">jayeshberwal01</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="glass-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-secondary/30 border border-cardBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber/50 focus:ring-1 focus:ring-cyber/50 transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary/30 border border-cardBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber/50 focus:ring-1 focus:ring-cyber/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-secondary/30 border border-cardBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber/50 focus:ring-1 focus:ring-cyber/50 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyber/10 hover:bg-cyber/20 text-cyber border border-cyber/30 font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="p-3 bg-cyber/10 border border-cyber/20 text-cyber rounded-lg text-sm text-center">
                Message saved locally (Simulation only). I'll connect an email service later!
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
