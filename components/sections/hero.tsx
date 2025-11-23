import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Sparkles className="text-[#e8e8e8]" size={16} />
            <span className="text-sm text-[#e8e8e8]">Transforming Ideas into Digital Reality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#e8e8e8] leading-tight">
            Digital Innovation
            <br />
            <span className="bg-gradient-to-r from-white via-[#e8e8e8] to-white bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#a8a8a8] mb-10 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that drive growth. From strategy to execution, 
            we're your partner in building the future of your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onGetStarted} 
              className="bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a] hover:from-[#e8e8e8] hover:to-[#d8d8d8] px-8 py-6 text-lg font-semibold shadow-lg shadow-white/10"
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-white/20 text-[#e8e8e8] hover:bg-white/5 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#e8e8e8] mb-1">{stat.number}</div>
                <div className="text-sm text-[#a8a8a8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </section>
  );
}
