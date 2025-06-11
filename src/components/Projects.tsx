"use client";

import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

const Projects = () => {
  const projects = [
    {
      title: "Essente Perfumes",
      description: "A modern, responsive E-commerce website for perfumes, built with React and Tailwind CSS, featuring a clean design and smooth animations.",
      image: "/WhatsApp Image 2025-05-30 at 11.04.44_bdb1fa3e.jpg",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/mrinalkapoor/portfolio",
      live: "https://essente.vercel.app/"
    },
    {
      title: "Photography Portfolio",
      description: "A sleek photography portfolio design with fullscreen galleries, image lightbox, and smooth transitions.",
      image: "/WhatsApp Image 2025-05-30 at 11.04.45_3b92c56c.jpg",
      category: "web",
      technologies: ["React", "Typescript", "Tailwind CSS", "Vercel"],
      github: "",
      live: "https://photography-portfolio-umber-phi.vercel.app/"
    },
    {
      title: "Converge",
      description: "All in platform for creating, colaborating and managing events around the globe.",
      image: "/WhatsApp Image 2025-06-12 at 12.49.00 AM.jpeg",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DotNet", "Azure"],
      github: "https://github.com/mrinalkapoor/fitness-tracker",
      live: ""
    },
    {
      title: "HRMS CRM",
      description: "A productivity application for managing employees, tasks and streamline the recruitment process.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MagicUI", "Shadcn", "Azure"],
      github: "https://github.com/mrinalkapoor/task-manager",
      live: "https://task-manager-demo.netlify.app"
    },
    {
      title: "Portfolio OS",
      description: "Interactive portfolio designed and developed like an operating system with window terminals showcasing different sections.",
      image: "/WhatsApp Image 2025-05-30 at 11.52.49_8d657720.jpg",
      category: "web",
      technologies: ["Next.js", "Typescript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/mrinalkapoor/ecommerce-dashboard",
      live: "https://portfolio2-0-ten-peach.vercel.app/"
    },
    {
      title: "Portfolio V1",
      description: "My first portfolio website built with react, typesript and tailwind css.",
      image: "/WhatsApp Image 2025-05-30 at 11.41.13_5b0cffe1.jpg",
      category: "web",
      technologies: ["React", "Typescript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/mrinalkapoor/weather-app",
      live: "https://mrinal-portfolio1.vercel.app/"
    }
  ];

  // Map projects to card format
  const cards = projects.map((project, index) => (
    <Card 
      key={project.title}
      card={{
        category: project.category,
        title: project.title,
        src: project.image,
        technologies: project.technologies,
        github: project.github,
        live: project.live,
        content: (
          <div className="space-y-6">
            <p>{project.description}</p>
            {project.technologies && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.live && (
              <div className="mt-6">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="apple-button flex items-center justify-center w-full"
                >
                  Visit Project
                </a>
              </div>
            )}
          </div>
        )
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-neutral-950">
      {/* Section header with standard width */}
      <div className="apple-section">
        {/* Section title */}
        <h2 className="section-title text-center mb-4 animate-reveal-up">Projects</h2>
        <p className="section-subtitle text-center mb-16 animate-reveal-up animate-delay-100">
          Showcasing my latest work and creations
        </p>
      </div>
      
      {/* Expanded width container for carousel */}
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Apple-style Cards Carousel */}
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Projects;
