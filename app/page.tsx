"use client";

import { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/services";
import { products } from "@/lib/data/products";
import { projects } from "@/lib/data/portfolio";
import { ArrowRight, Star, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <Hero onGetStarted={() => setQuoteModalOpen(true)} />
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-12 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-[#a8a8a8] font-semibold mb-2 uppercase tracking-wide text-sm">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8e8e8]">Our Best Services</h2>
            <p className="text-[#a8a8a8] max-w-2xl mx-auto">
              We offer comprehensive digital solutions from strategy to execution. Our expert team delivers cutting-edge technology services that drive business growth and digital transformation.
            </p>
          </div>

          {/* Services Grid - 4 in one row */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 4).map((service, index) => {
                const iconColors = [
                  "text-blue-400",
                  "text-green-400",
                  "text-orange-400",
                  "text-purple-400"
                ];
                return (
                  <Card key={service.id} className="bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:border-[#444444] hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <span className={`material-icons text-5xl ${iconColors[index]} mb-3`}>{service.icon}</span>
                      <CardTitle className="text-xl text-[#e8e8e8] mb-2">{service.title}</CardTitle>
                      <p className="text-xs uppercase tracking-wide text-[#a8a8a8] mb-3">{service.category}</p>
                      <CardDescription className="text-[#a8a8a8] mb-4">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services" className="text-sm text-[#e8e8e8] hover:text-white transition-colors inline-flex items-center gap-1">
                        See more details <ArrowRight size={14} />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a] hover:from-[#e8e8e8] hover:to-[#d8d8d8]">
              <Link href="/services">
                See All Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.06),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-[#a8a8a8] font-semibold mb-2 uppercase tracking-wide text-sm">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8e8e8]">Our Recent Work</h2>
            <p className="text-[#a8a8a8] max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries. We've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.slice(0, 4).map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:from-[#2a2a2a] hover:to-[#242424] transition-all hover:scale-[1.02] backdrop-blur">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a]">{project.category}</Badge>
                  <CardTitle className="text-[#e8e8e8]">{project.title}</CardTitle>
                  <CardDescription className="text-[#a8a8a8]">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#2a2a2a] text-[#e8e8e8]">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] text-[#1a1a1a] hover:from-[#e8e8e8] hover:to-[#d8d8d8]">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gradient-to-bl from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.06),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-[#a8a8a8] font-semibold mb-2 uppercase tracking-wide text-sm">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8e8e8]">What Makes Us Different</h2>
            <p className="text-[#a8a8a8] max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "verified", title: "Solution Focused", desc: "We focus on delivering practical solutions that solve real business problems." },
              { icon: "support_agent", title: "Customer Oriented", desc: "Your success is our priority. We work closely with you every step of the way." },
              { icon: "trending_up", title: "99.99% Success", desc: "Our track record speaks for itself with consistently successful project delivery." },
              { icon: "psychology", title: "Decision Maker", desc: "We help you make informed decisions with data-driven insights and expertise." },
            ].map((item, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:from-[#2a2a2a] hover:to-[#242424] transition-all backdrop-blur">
                <CardHeader>
                  <span className="material-icons text-5xl text-[#e8e8e8] mb-3 mx-auto">{item.icon}</span>
                  <CardTitle className="text-lg text-[#e8e8e8]">{item.title}</CardTitle>
                  <CardDescription className="text-[#a8a8a8]">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.06),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-[#a8a8a8] font-semibold mb-2 uppercase tracking-wide text-sm">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8e8e8]">What Our Clients Say</h2>
            <p className="text-[#a8a8a8] max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Tecnity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "John Smith",
                role: "CEO, TechCorp",
                content: "Tecnity delivered exceptional results. Their team's expertise and dedication transformed our digital presence completely.",
              },
              {
                name: "Sarah Johnson",
                role: "Founder, StartupHub",
                content: "Professional, reliable, and innovative. Tecnity exceeded our expectations in every way. Highly recommended!",
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateLabs",
                content: "Outstanding service and support. They truly understand what it takes to build great software that scales.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:from-[#2a2a2a] hover:to-[#242424] transition-all backdrop-blur">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-[#e8e8e8] text-[#e8e8e8]" size={16} />
                    ))}
                  </div>
                  <CardDescription className="text-base text-[#e8e8e8]">{testimonial.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-[#e8e8e8]">{testimonial.name}</p>
                  <p className="text-sm text-[#a8a8a8]">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-bl from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] border-t border-[#333333] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-[#a8a8a8] font-semibold mb-2 uppercase tracking-wide text-sm">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8e8e8]">Get In Touch</h2>
            <p className="text-[#a8a8a8] max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Mail, title: "Email", value: "info@tecnity.com", href: "mailto:info@tecnity.com" },
              { icon: Phone, title: "Phone", value: "+880 1913 946907", href: "tel:+8801913946907" },
              { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh", href: "#" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-[#242424] to-[#1f1f1f] border-[#333333] hover:from-[#2a2a2a] hover:to-[#242424] transition-all backdrop-blur">
                <item.icon className="mx-auto mb-4 text-[#e8e8e8]" size={32} />
                <h3 className="font-semibold mb-2 text-[#e8e8e8]">{item.title}</h3>
                <a href={item.href} className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                  {item.value}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
