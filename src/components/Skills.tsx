"use client";

import React from 'react';

const Skills = () => {
  // Skills organized by category - standard icons from skillicons.dev
  const skillCategories = [
    { category: "Frontend", icons: "js,ts,react,nextjs,vue,scss,tailwind,html,css" },
    { category: "Backend", icons: "nodejs,dotnet,python,express,postman,mongodb,mysql,graphql" },
    { category: "DevOps & Tools", icons: "vercel,azure,aws,gcp,git,github,vscode,figma,notion" },
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50 dark:bg-neutral-950">
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">My Skills</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          Technologies and tools I work with
        </p>
        
        {/* Skills Display */}
        <div className="mb-16 animate-reveal-up">
          {skillCategories.map(({ category, icons }, index) => {
            // Get custom icons for this category
            
            return (
              <div key={index} className={`overflow-hidden ${index > 0 ? 'mt-10' : ''}`}>
                <h3 className="text-xl font-semibold mb-3 text-center">{category}</h3>
                
                {category !== "Tools" ? (
                  // For categories without custom icons, display standard icons normally
                  <picture>
                    <source 
                      media="(max-width: 640px)" 
                      srcSet={`https://skillicons.dev/icons?i=${icons}&perline=3`} 
                    />
                    <img
                      src={`https://skillicons.dev/icons?i=${icons}`}
                      width={800}
                      height={100}
                      alt={`${category} Skills: ${icons.split(',').join(', ')}`}
                      loading="eager"
                      className="max-w-full h-auto mx-auto rounded-xl shadow-sm bg-gray-50 dark:bg-neutral-900 p-4"
                      decoding="async"
                    />
                  </picture>
                ) : (
                  // For Tools category with custom icons, create a custom container
                  <div className="relative">
                    {/* Standard icons from skillicons.dev */}
                    <picture>
                      <source 
                        media="(max-width: 640px)" 
                        srcSet={`https://skillicons.dev/icons?i=${icons}&perline=3`} 
                      />
                      <img
                        src={`https://skillicons.dev/icons?i=${icons}`}
                        width={800}
                        height={100}
                        alt={`${category} Skills: ${icons.split(',').join(', ')}`}
                        loading="eager"
                        className="max-w-full h-auto mx-auto rounded-xl shadow-sm bg-gray-50 dark:bg-neutral-900 p-4"
                        style={{ marginBottom: "0" }}
                        decoding="async"
                      />
                    </picture>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
