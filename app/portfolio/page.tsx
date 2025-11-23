"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PortfolioModal } from "@/components/modals/portfolio-modal";
import { projects, Project } from "@/lib/data/portfolio";
import { Briefcase } from "lucide-react";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-b border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <Briefcase className="text-[#e8e8e8]" size={16} />
            <span className="text-sm text-[#a8a8a8] uppercase tracking-wide">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]">
            Our <span className="bg-gradient-to-r from-white to-[#a8a8a8] bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-lg text-[#a8a8a8] max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries. Click on any project to see detailed case studies and results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="cursor-pointer bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a]">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-[#e8e8e8] text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-[#a8a8a8]">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#a8a8a8] mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#2a2a2a] text-[#e8e8e8] text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-[#2a2a2a] text-[#a8a8a8] text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-[#a8a8a8] mt-4 hover:text-[#e8e8e8] transition-colors">
                    Click to view details →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PortfolioModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
