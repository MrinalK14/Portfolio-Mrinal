"use client";

import React, { useState } from 'react';
import { Award, Medal, FileCheck } from 'lucide-react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  
  const certifications = [
    {
      title: "Pyhton Essential for MLOps",
      issuer: "Coursera",
      date: "2024",
      description: "Essential MLOps skills using Python, including automation, deployment, and monitoring of ML systems",
      icon: <FileCheck size={20} className="text-blue-500" />
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      date: "2024",
      description: "Leveraging Python for data analysis, machine learning models, and AI development workflows.",
      icon: <FileCheck size={20} className="text-blue-500" />
    },
    {
      title: "Palo Alto Networks Cybersecurity Fundamentals",
      issuer: "Coursera",
      date: "2023",
      description: "Network security fundamentals, threat detection, and cybersecurity best practices.",
      icon: <FileCheck size={20} className="text-blue-500" />
    },
    {
      title: "AI & Machine Learning Specialization",
      issuer: "Coursera",
      date: "2022",
      description: "Advanced machine learning algorithms, neural networks, and practical AI applications.",
      icon: <FileCheck size={20} className="text-blue-500" />
    }
  ];
  
  const achievements = [
    {
      title: "Research Paper",
      organization: "International Conference on Smart Devices (ICSD)",
      date: "2024-Present",
      description: "Researched and developed a novel approach to home security using facial recognition algorithms with improved accuracy and reduced false positives.",
      icon: <Award size={20} className="text-purple-500" />
    },
    {
      title: "Hackathon Winner",
      organization: "Chandigarh University",
      date: "2023",
      description: "First place in the CU hackathon for pitiching an innovative solution in healthcare.",
      icon: <Award size={20} className="text-purple-500" />
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-white dark:bg-black">
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">Certifications & Achievements</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          Professional qualifications and notable accomplishments
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-16 animate-reveal-up animate-delay-200">
          <div className="inline-flex rounded-full bg-gray-100 dark:bg-neutral-900 p-1">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'certifications' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'achievements' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>
        
        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-neutral-950 rounded-2xl p-8 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: `${50 + index * 50}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{cert.title}</h3>
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                    <p className="text-sm mb-4">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-neutral-950 rounded-2xl p-8 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: `${50 + index * 50}ms` }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.organization}</p>
                    <p className="text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto animate-reveal-up animate-delay-300">
          <p className="text-xl italic text-muted-foreground">
            "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
          </p>
          <p className="mt-4 font-medium">— Steve Jobs</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
