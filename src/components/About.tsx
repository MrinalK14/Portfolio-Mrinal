"use client";

import { User, Camera, Code, Aperture } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-32 bg-white dark:bg-black">
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">About Me</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          The story behind my work and passion.
        </p>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1 animate-reveal-up animate-delay-200">
            <div className="relative">
              <div className="apple-image aspect-[3/4] overflow-hidden">
                {/* Light mode image with fade transition */}
                <img
                  src="/Mrinal.jpg"
                  alt="Mrinal Kapoor"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Dark mode image with fade transition */}
                <img
                  src="/Mrinal2.jpg"
                  alt="Mrinal Kapoor"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 -z-10"></div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2 animate-reveal-up animate-delay-300">
            <h3 className="text-2xl font-semibold mb-6">
              Developer with a passion for design and creativity
            </h3>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Born in Gurugram, I completed my schooling from Blue Bells Model School in 2020 and graduated from Chandigarh University with a bachelor's degree in Computer Science Engineering in 2024.
              </p>
              
              <p>
                I'm passionate about creating clean, efficient code that solves real problems. My approach combines technical precision with creative vision, allowing me to build digital experiences that are both functional and beautiful.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring photography, staying updated with the latest tech trends, and constantly learning new skills to expand my creative and technical toolkit.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div>
                <h4 className="text-4xl font-semibold">1+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-semibold">5+</h4>
                <p className="text-sm text-muted-foreground">Technologies Mastered</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12">
              <a 
                href="#experience" 
                className="apple-button"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
