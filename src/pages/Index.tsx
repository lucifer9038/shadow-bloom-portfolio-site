
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'MongoDB', level: 75 }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
              Pritesh Bhuravane
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 text-blue-400 animate-float">
              Web Developer
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
              Building modern, responsive web applications with cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-8xl font-bold text-white">
                    PB
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-left">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Hello! I'm Pritesh</h3>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I'm a passionate web developer with 3+ years of experience creating dynamic and responsive web applications. 
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                My goal is to build scalable web solutions that make a difference. I'm always eager to learn new technologies 
                and collaborate with talented teams to create amazing user experiences.
              </p>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-blue-300 italic">
                  "Fun fact: I can solve a Rubik's cube in under 2 minutes and I'm a coffee enthusiast who codes best with a perfect latte! ☕"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl">Bachelor of Technology in Computer Science</CardTitle>
                  <p className="text-muted-foreground">Savitribai Phule Pune University • 2020 - 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">CGPA: 8.5/10</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Data Structures</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Algorithms</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Web Development</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Database Systems</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl">Higher Secondary Certificate (HSC)</CardTitle>
                  <p className="text-muted-foreground">Maharashtra State Board • 2018 - 2020</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Percentage: 92%</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Physics</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Chemistry</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Mathematics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover gradient-border bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills & Technologies</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 card-hover">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-400 font-semibold">{skill.name}</span>
                    <span className="text-purple-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">🏆 Hackathon Winner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Won 1st place at TechFest 2023 hackathon for developing an AI-powered study assistant</p>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">📜 AWS Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AWS Certified Developer Associate certification for cloud computing expertise</p>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">💼 Internship Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Completed 6-month internship at TechCorp with outstanding performance rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-right">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <span className="text-muted-foreground">pritesh.bhuravane@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <span className="text-muted-foreground">+91 9876543210</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span className="text-muted-foreground">Pune, Maharashtra, India</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white p-3">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white p-3">
                  <Github className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white p-3">
                  <Twitter className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <Card className="gradient-border bg-card/50 backdrop-blur-sm animate-slide-left">
              <CardHeader>
                <CardTitle className="text-blue-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-purple-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-purple-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-purple-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500 h-32"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2024 Pritesh Bhuravane. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-pink-400 hover:text-pink-300">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
