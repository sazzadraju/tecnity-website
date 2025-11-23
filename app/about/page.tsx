import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Rocket, Target, TrendingUp, Eye, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-b border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <Award className="text-[#e8e8e8]" size={16} />
            <span className="text-sm text-[#a8a8a8] uppercase tracking-wide">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]">
            About <span className="bg-gradient-to-r from-white to-[#a8a8a8] bg-clip-text text-transparent">Tecnity</span>
          </h1>
          <p className="text-lg text-[#a8a8a8] max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering innovative digital solutions that drive business growth and success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#e8e8e8]">Our Story</h2>
            <div className="space-y-4 text-[#a8a8a8] leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and business, Tecnity has grown into a trusted partner for companies seeking digital transformation. Our journey began with a simple belief: that technology should empower businesses, not complicate them.
              </p>
              <p>
                Over the years, we've helped numerous clients across various industries achieve their digital goals. From startups to established enterprises, we've delivered solutions that not only meet expectations but exceed them.
              </p>
              <p>
                Today, we continue to innovate and evolve, staying ahead of technological trends to provide our clients with cutting-edge solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-y border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333]">
              <Target className="text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-[#e8e8e8]">Our Mission</h3>
              <p className="text-[#a8a8a8] leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage. We strive to be the trusted technology partner that helps our clients achieve their strategic objectives.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333]">
              <Eye className="text-green-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-[#e8e8e8]">Our Vision</h3>
              <p className="text-[#a8a8a8] leading-relaxed">
                To be the leading digital innovation partner recognized for excellence, creativity, and transformative solutions that shape the future of business technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#e8e8e8]">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "We embrace new technologies and creative approaches to solve complex problems.",
                icon: Rocket,
                color: "text-blue-400"
              },
              {
                title: "Quality",
                description: "We deliver excellence in every project, ensuring the highest standards.",
                icon: Award,
                color: "text-orange-400"
              },
              {
                title: "Integrity",
                description: "We build trust through transparency, honesty, and ethical practices.",
                icon: Shield,
                color: "text-green-400"
              },
              {
                title: "Collaboration",
                description: "We work closely with clients as partners to achieve shared success.",
                icon: Users,
                color: "text-purple-400"
              },
            ].map((value, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] transition-all">
                <value.icon className={`${value.color} mb-3`} size={32} />
                <h3 className="font-bold text-lg mb-2 text-[#e8e8e8]">{value.title}</h3>
                <p className="text-sm text-[#a8a8a8] leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-y border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: Rocket, color: "text-blue-400" },
              { number: "50+", label: "Happy Clients", icon: Users, color: "text-green-400" },
              { number: "10+", label: "Years Experience", icon: Award, color: "text-orange-400" },
              { number: "30+", label: "Team Members", icon: TrendingUp, color: "text-pink-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                <div className="text-4xl md:text-5xl font-bold text-[#e8e8e8] mb-2">{stat.number}</div>
                <div className="text-[#a8a8a8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#e8e8e8]">Why Choose Tecnity?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Proven Expertise",
                description: "Years of experience delivering successful projects across various industries.",
                color: "text-blue-400"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Ongoing support and maintenance to ensure your solutions run smoothly.",
                color: "text-green-400"
              },
              {
                icon: Rocket,
                title: "Agile Delivery",
                description: "Fast, iterative development process that adapts to your changing needs.",
                color: "text-orange-400"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "We prioritize security in every solution we build.",
                color: "text-cyan-400"
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description: "Built to grow with your business and handle increasing demands.",
                color: "text-purple-400"
              },
              {
                icon: Target,
                title: "Partnership Approach",
                description: "We work as an extension of your team, committed to your success.",
                color: "text-pink-400"
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] transition-all">
                <item.icon className={`${item.color} mx-auto mb-4`} size={40} />
                <h3 className="font-bold text-lg mb-2 text-[#e8e8e8]">{item.title}</h3>
                <p className="text-sm text-[#a8a8a8] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
