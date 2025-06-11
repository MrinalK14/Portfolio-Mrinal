"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, Linkedin, Github, FileText } from 'lucide-react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black z-0"></div>
      
      {/* Content container */}
      <div 
        className="apple-section relative z-10 flex flex-col items-center justify-center text-center"
        style={{ 
          transform: `translateY(${scrollPosition * 0.2}px)`,
          opacity: 1 - scrollPosition * 0.002
        }}
      >
        <h1 className="hero-headline animate-reveal-up">
          Developer.<br />
          Designer.<br />
          Creator.
        </h1>
        
        <p className="hero-subheadline animate-reveal-up animate-delay-200">
          Crafting digital experiences with precision and creativity.
          Building products that make a difference.
        </p>
        
        <div className="flex gap-4 mt-8 animate-reveal-up animate-delay-300">
          <a 
            href="https://www.linkedin.com/in/mrinal-kapoor-462794230/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apple-button flex items-center gap-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/MrinalK14" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apple-button-outline flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="https://drive.google.com/file/d/1EKknlh-ZtOyzevriM3NOoplCapwyyRwl/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apple-button-outline flex items-center gap-2"
            aria-label="Download Resume"
          >
            <FileText size={18} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
      
      {/* Hero image */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[44.5vh] z-0 overflow-hidden"
        style={{ 
          transform: `translateY(${scrollPosition * 0.1}px)`,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
