"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/data/services";
import { CheckCircle2, Clock, DollarSign } from "lucide-react";

const iconColors: { [key: string]: string } = {
  "ai-solutions-lab": "text-blue-400",
  "bizcore": "text-green-400",
  "mobilehub": "text-orange-400",
  "architectpro": "text-purple-400",
  "cloudops": "text-cyan-400",
  "supportpro": "text-pink-400"
};

export function ServiceModal({
  service,
  open,
  onOpenChange,
  onRequestQuote,
}: {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestQuote: () => void;
}) {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!w-[85vw] !max-w-[1200px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333333]" style={{ width: '85vw', maxWidth: '1200px' }}>
        {/* Header with Icon and Title */}
        <DialogHeader className="border-b border-[#333333] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#242424] to-[#1f1f1f] border border-[#333333]">
              <span className={`material-icons text-5xl ${iconColors[service.id]}`}>{service.icon}</span>
            </div>
            <div className="flex-1">
              <DialogTitle className="text-3xl text-[#e8e8e8] mb-2">{service.title}</DialogTitle>
              <Badge className="bg-white/10 text-[#e8e8e8] border-white/20 text-sm px-3 py-1">{service.category}</Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          {/* Overview Section */}
          <div className="bg-gradient-to-br from-[#242424] to-[#1f1f1f] border border-[#333333] rounded-xl p-4">
            <h3 className="text-lg font-semibold text-[#e8e8e8] mb-2">Overview</h3>
            <div className="space-y-2 text-[#a8a8a8] leading-relaxed text-sm">
              <p>{service.description}</p>
              <p>{service.fullDescription}</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Key Features - Takes 2 columns */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#242424] to-[#1f1f1f] border border-[#333333] rounded-xl p-4">
              <h3 className="text-lg font-semibold text-[#e8e8e8] mb-3 flex items-center gap-2">
                <CheckCircle2 className={iconColors[service.id]} size={18} />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-2 mb-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-black/20 border border-[#333333]">
                    <span className={`material-icons text-sm mt-0.5 ${iconColors[service.id]} flex-shrink-0`}>check_circle</span>
                    <span className="text-[#e8e8e8] text-xs">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-[#333333]">
                <h4 className="text-base font-semibold text-[#e8e8e8] mb-2 flex items-center gap-2">
                  <span className={`material-icons text-sm ${iconColors[service.id]}`}>code</span>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <Badge key={index} className="bg-black/40 text-[#e8e8e8] border border-[#333333] hover:bg-black/60 transition-colors text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose This Service - Takes 1 column */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "speed", title: "Fast Delivery", desc: "Quick turnaround without compromising quality." },
                { icon: "verified", title: "Proven Results", desc: "Track record of successful implementations." },
                { icon: "support", title: "Ongoing Support", desc: "Continuous assistance and maintenance." }
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-[#242424] to-[#1f1f1f] border border-[#333333] rounded-xl p-4 flex-1">
                  <span className={`material-icons ${iconColors[service.id]} text-3xl mb-2 block`}>{benefit.icon}</span>
                  <h4 className="font-semibold text-[#e8e8e8] mb-1 text-sm">{benefit.title}</h4>
                  <p className="text-xs text-[#a8a8a8] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </DialogContent>
    </Dialog>
  );
}
