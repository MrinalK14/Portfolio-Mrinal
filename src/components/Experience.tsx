"use client";

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const workExperience = [
    {
      title: "Software Engineer",
      company: "IntelliCredence Pvt Ltd",
      location: "Bengaluru, KA",
      period: "2024 - Present",
      description: [
        "Led the development of an internal HRMS-CRM system using React.js, Node.js, Express.js, and Graph QL, making interdepartmental communication 60% more efficient and streamlining recruitment process",
        "Set up CI/CD pipelines, cutting deployment time by 80% and making the system more reliability.",
        "Optimized backend services for the HRMS system, improving database queries performance by 30%.",
        "Created a feature-rich event management app for meet-ups and conferences, handling sponsor management, venue selection, speaker coordination, catering integration, and attendee engagement-boosting operational efficiency by 35%.",
        "Automated payroll processing and offer letter generation in the HRMS module, reducing manual effort by 60%."
      ],
      gradientFrom: "#3B82F6",
      gradientTo: "#8B5CF6"
    },
    {
      title: "Software Engineer Trainee",
      company: "Hero MotoCorp Pvt Ltd",
      location: "Gurugram, HR",
      period: "2022 - 2022",
      description: [
        "Designed and implemented a high-performance web scraping application using Python, leveraging Beautiful Soup, Selenium, and Pandas to automate data extraction and management—streamlining vendor, inventory, and product data processing in Google Sheets by 80%.",
        "Developed a Python-based document automation system, optimizing document handling and reducing manual intervention by 70%, leading to improved efficiency and accuracy.",
        "Conducted comprehensive research and testing of RPA tools, including UI Path and Automation Anywhere delivering detailed reports and presentations on automation strategies and feasibility driving data-backend decisions making for implementation."
      ],
      gradientFrom: "#8B5CF6", 
      gradientTo: "#EC4899"
    }
  ];
  
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Chandigarh University",
      location: "Mohali, PB",
      period: "2020 - 2024",
      achievements: [
        "Graduated with BE-CSE",
        "Specialized in Artificial Intelligence and Machine Learning",
        "Led the university's media team"
      ],
      gradientFrom: "#06B6D4",
      gradientTo: "#3B82F6"
    },
    {
      degree: "High School",
      institution: "Blue Bells Model School",
      location: "Gurugram, HR",
      period: "2018 - 2020",
      achievements: [
        "Scored 76.83% in XII",
        "Scored 77% in X"
      ],
      gradientFrom: "#3B82F6",
      gradientTo: "#8B5CF6"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white dark:bg-black">
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">Experience</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          My professional journey and education
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-16 animate-reveal-up animate-delay-200">
          <div className="inline-flex rounded-full bg-gray-100 dark:bg-neutral-900 p-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'work' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'education' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Education
            </button>
          </div>
        </div>
        
        {/* Work Experience */}
        {activeTab === 'work' && (
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${50 + index * 50}ms` }}
              >
                {/* Left column - Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-muted-foreground">{job.location}</span>
                  </div>
                </div>
                
                {/* Right column - Content */}
                <div>
                  <MagicCard 
                    gradientFrom={job.gradientFrom} 
                    gradientTo={job.gradientTo}
                    gradientSize={300}
                    gradientColor={job.gradientFrom}
                    gradientOpacity={0.15}
                    className="h-full"
                  >
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-muted-foreground mb-6">{job.company}</p>
                      
                      <ul className="space-y-3">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MagicCard>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {activeTab === 'education' && (
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${50 + index * 50}ms` }}
              >
                {/* Left column - Timeline */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-muted-foreground">{edu.location}</span>
                  </div>
                </div>
                
                {/* Right column - Content */}
                <div>
                  <MagicCard 
                    gradientFrom={edu.gradientFrom} 
                    gradientTo={edu.gradientTo}
                    gradientSize={300}
                    gradientColor={edu.gradientFrom}
                    gradientOpacity={0.15}
                    className="h-full"
                  >
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-6">{edu.institution}</p>
                      
                      <ul className="space-y-3">
                        {edu.achievements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MagicCard>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
