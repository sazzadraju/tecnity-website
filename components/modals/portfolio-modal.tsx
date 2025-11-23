"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/data/portfolio";

export function PortfolioModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <p className="text-sm text-muted-foreground">Client: {project.client}</p>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Badge>{project.category}</Badge>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Challenge</h3>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Results</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="material-icons text-primary text-sm mt-0.5">trending_up</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
