import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Rocket, Target, TrendingUp, Zap, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <Award className="text-[#e8e8e8]" size={16} />
            <span className="text-sm text-[#a8a8a8] uppercase tracking-wide">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]">
            We Transform Ideas Into <span className="bg-gradient-to-r from-white to-[#a8a8a8] bg-clip-text text-transparent">Revenue-Generating</span> Digital Products
          </h2>
          <p className="text-lg text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
            Faster time-to-market, scalable solutions, and measurable ROI. We don't just build software—we build growth engines for your business.
          </p>
        </div>

        {/* Main Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - 4 Differentiator Cards Stacked */}
          <div className="space-y-4">
            {[
              { 
                icon: Zap, 
                color: "text-yellow-400",
                title: "Speed & Efficiency", 
                desc: "Launch in weeks, not months. Our agile approach delivers 40% faster than traditional methods. We use modern frameworks, automated testing, and CI/CD pipelines to accelerate development without compromising quality. Get to market quickly and start generating revenue sooner." 
              },
              { 
                icon: TrendingUp, 
                color: "text-green-400",
                title: "Scalable Solutions", 
                desc: "Built to grow with you. Our architecture handles 10x traffic without breaking a sweat. We design systems with scalability in mind from day one, using cloud-native technologies and microservices architecture. Whether you have 100 or 100,000 users, your application performs flawlessly." 
              },
              { 
                icon: Target, 
                color: "text-blue-400",
                title: "ROI Focused", 
                desc: "Every line of code drives business value. Our clients see average 3x ROI in year one. We prioritize features that directly impact your bottom line, eliminate unnecessary complexity, and focus on metrics that matter. Your investment translates into measurable business growth and competitive advantage." 
              },
              { 
                icon: Users, 
                color: "text-purple-400",
                title: "Partnership Approach", 
                desc: "We're your extended tech team. Ongoing support and collaboration, not just delivery. From initial consultation to post-launch maintenance, we're with you every step of the way. Regular updates, transparent communication, and proactive problem-solving ensure your success is our success." 
              },
            ].map((item, index) => (
              <Card key={index} className="p-5 bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                    <item.icon className={item.color} size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#e8e8e8] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#a8a8a8] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Column - Indicators with Description */}
          <div>
            {/* Description */}
            <div className="mb-6 space-y-3">
              <p className="text-[#a8a8a8] leading-relaxed">
                Since 2014, we've built and refined digital solutions trusted across industries. We solve the daily pain points of businesses—from initial concept to ongoing support. Implementation is guided by expert teams, so transitions happen smoothly.
              </p>
              <p className="text-[#a8a8a8] leading-relaxed">
                The result is faster delivery, scalable systems, and insights that help every business grow. Our proven track record speaks for itself, with consistent success across diverse projects and long-term client partnerships. We don't just deliver projects—we build lasting relationships and ensure your continued success in the digital landscape. Every solution we create is backed by our commitment to excellence, innovation, and measurable results.
              </p>
            </div>
            
            {/* 6 Cards in 2 Rows */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, number: "10+", label: "Years in Business", color: "text-blue-400" },
                { icon: Users, number: "50+", label: "Active Clients", color: "text-green-400" },
                { icon: Rocket, number: "150+", label: "Projects Delivered", color: "text-orange-400" },
                { icon: Target, number: "10+", label: "Industries Served", color: "text-cyan-400" },
                { icon: TrendingUp, number: "99%", label: "Success Rate", color: "text-purple-400" },
                { icon: CheckCircle2, number: "24/7", label: "Support Available", color: "text-pink-400" },
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-5 text-left bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] hover:scale-105 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className={`${stat.color} mb-3`} size={20} />
                  <div className="text-3xl md:text-4xl font-bold text-[#e8e8e8] mb-2">{stat.number}</div>
                  <div className="text-xs uppercase tracking-wide text-[#a8a8a8]">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom - Social Proof Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-gradient-to-r from-[#242424] to-[#1f1f1f] border border-[#333333]">
          <div>
            <p className="text-sm text-[#a8a8a8] mb-1">Trusted by leading companies</p>
            <p className="text-lg font-semibold text-[#e8e8e8]">Join 50+ successful businesses</p>
          </div>
          <Button asChild className="bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a] hover:from-[#e8e8e8] hover:to-[#d8d8d8]">
            <a href="/portfolio">
              See Our Work <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
