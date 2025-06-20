import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink, Phone, MapPin, ChevronUp, Menu, X, Code, Palette, Database, Zap } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    achievements: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const fullText = "Building modern, responsive web applications with cutting-edge technologies";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

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

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'HTML/CSS', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'TypeScript', level: 80, icon: Code },
    { name: 'React', level: 88, icon: Code },
    { name: 'Node.js', level: 75, icon: Database },
    { name: 'Python', level: 70, icon: Code },
    { name: 'Git', level: 85, icon: Code },
    { name: 'MongoDB', level: 75, icon: Database }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with dark theme and smooth animations",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">PB</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 px-4 text-sm font-medium transition-colors hover:text-blue-400 ${
                      activeSection === item.id ? 'text-blue-400' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-blue-400/30 rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
              Pritesh Bhuravane
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 text-blue-400 animate-float">
              Web Developer
            </h2>
            <div className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto h-16">
              <span className="inline-block border-r-2 border-blue-400 pr-2 animate-blink">
                {typedText}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 card-hover">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-8xl font-bold text-white animate-glow">
                    PB
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-semibold text-blue-400">Hello! I'm Pritesh</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer with 3+ years of experience creating dynamic and responsive web applications. 
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to build scalable web solutions that make a difference. I'm always eager to learn new technologies 
                and collaborate with talented teams to create amazing user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20 card-hover">
                  <Code className="h-8 w-8 text-blue-400 mb-2" />
                  <h4 className="font-semibold text-blue-300">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">Writing maintainable and efficient code</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20 card-hover">
                  <Palette className="h-8 w-8 text-purple-400 mb-2" />
                  <h4 className="font-semibold text-purple-300">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">Creating beautiful user experiences</p>
                </div>
              </div>
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
      <section ref={sectionRefs.education} id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    Bachelor of Technology in Computer Science
                  </CardTitle>
                  <p className="text-muted-foreground">Savitribai Phule Pune University • 2020 - 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">CGPA: 8.5/10</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500/30 transition-colors">Data Structures</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm hover:bg-purple-500/30 transition-colors">Algorithms</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm hover:bg-pink-500/30 transition-colors">Web Development</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm hover:bg-green-500/30 transition-colors">Database Systems</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    Higher Secondary Certificate (HSC)
                  </CardTitle>
                  <p className="text-muted-foreground">Maharashtra State Board • 2018 - 2020</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Percentage: 92%</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500/30 transition-colors">Physics</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm hover:bg-purple-500/30 transition-colors">Chemistry</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm hover:bg-pink-500/30 transition-colors">Mathematics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Projects</h2>
          
          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-400 mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card key={index} className="card-hover gradient-border bg-card/50 backdrop-blur-sm overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center justify-between">
                      {project.title}
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm hover:bg-purple-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transition-all">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="card-hover gradient-border bg-card/50 backdrop-blur-sm overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-400 text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills & Technologies</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 card-hover group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-blue-400 font-semibold">{skill.name}</span>
                          <span className="text-purple-300">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={sectionRefs.achievements} id="achievements" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    🏆
                  </div>
                  Hackathon Winner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Won 1st place at TechFest 2023 hackathon for developing an AI-powered study assistant</p>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    📜
                  </div>
                  AWS Certified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AWS Certified Developer Associate certification for cloud computing expertise</p>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  Internship Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Completed 6-month internship at TechCorp with outstanding performance rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-400">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-purple-500/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">Email</p>
                    <p className="text-muted-foreground">pritesh.bhuravane@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-purple-500/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-purple-500/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">Location</p>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white p-3 card-hover">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white p-3 card-hover">
                  <Github className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white p-3 card-hover">
                  <Twitter className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <Card className="gradient-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-3">
                  <Zap className="h-6 w-6" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-purple-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500 transition-colors"
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
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500 transition-colors"
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
                      className="bg-background/50 border-purple-500/30 focus:border-blue-500 h-32 transition-colors"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                    <Mail className="mr-2 h-4 w-4" />
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© 2024 Pritesh Bhuravane. All rights reserved.</p>
              <p className="text-sm text-muted-foreground/70">Built with React, TypeScript & Tailwind CSS</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 card-hover">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 card-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-pink-400 hover:text-pink-300 card-hover">
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-green-400 hover:text-green-300 card-hover"
                onClick={scrollToTop}
              >
                <ChevronUp className="h-5 w-5" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
