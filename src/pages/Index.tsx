
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink, Phone, MapPin, ChevronUp, Menu, X, Code, Palette, Database, Zap, Calendar, Award, BookOpen, Users, Camera, Music, Bike, Gamepad2, Globe, Smartphone, Monitor, Brain, Clock, MessageSquare, Target, Briefcase, FileText, Star, Trophy, Medal, GraduationCap, Certificate } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    achievements: useRef<HTMLElement>(null),
    personal: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const quotes = [
    "Building modern, responsive web applications with cutting-edge technologies",
    "Turning ideas into innovative digital solutions",
    "Passionate about creating seamless user experiences"
  ];

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const currentText = quotes[currentQuote];
    const timer = setInterval(() => {
      if (index < currentText.length) {
        setTypedText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);
          setTypedText('');
        }, 2000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentQuote]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'Java', level: 85, category: 'Programming', icon: Code },
    { name: 'Python', level: 80, category: 'Programming', icon: Code },
    { name: 'JavaScript', level: 90, category: 'Programming', icon: Code },
    { name: 'HTML/CSS', level: 95, category: 'Web', icon: Code },
    { name: 'React.js', level: 88, category: 'Frontend', icon: Code },
    { name: 'React Native', level: 82, category: 'Mobile', icon: Smartphone },
    { name: 'Flutter', level: 78, category: 'Mobile', icon: Smartphone },
    { name: 'Python Django', level: 75, category: 'Backend', icon: Database },
    { name: 'MySQL', level: 80, category: 'Database', icon: Database },
    { name: 'Firebase', level: 75, category: 'Database', icon: Database },
    { name: 'Git/GitHub', level: 85, category: 'Tools', icon: Code },
    { name: 'Linux', level: 70, category: 'Tools', icon: Monitor }
  ];

  const projects = [
    {
      title: "Pet Adoption App",
      description: "A React Native mobile application for seamless pet adoption, featuring user authentication, direct messaging, and admin management.",
      technologies: ["React Native", "Firebase", "User Authentication", "Real-time Messaging"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
      category: "Mobile App",
      featured: true
    },
    {
      title: "ShopMatcher Application",
      description: "A Flutter-based mobile app that integrates multiple Indian e-commerce platforms, allowing users to compare and purchase products efficiently.",
      technologies: ["Flutter", "API Integration", "E-commerce", "Product Comparison"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      category: "Mobile App",
      featured: true
    },
    {
      title: "E-Learning Website",
      description: "A Python Django-powered online learning platform with study material management, student records, and secure payment integration.",
      technologies: ["Python", "Django", "Payment Gateway", "User Management"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      category: "Web Application",
      featured: false
    },
    {
      title: "NewsPortal",
      description: "A React.js-powered dynamic news portal that fetches and displays real-time news updates using REST APIs.",
      technologies: ["React.js", "REST API", "Real-time Updates", "Responsive Design"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400",
      category: "Web Application",
      featured: false
    },
    {
      title: "Home Fitness App",
      description: "An interactive mobile application designed for home workout solutions with exercise tracking and progress monitoring.",
      technologies: ["Mobile Development", "UI/UX Design", "Progress Tracking"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      category: "Mobile App",
      featured: false
    },
    {
      title: "Hotel Website",
      description: "A responsive website for hotel booking and reservations with modern design and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/pritesh",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      category: "Web Application",
      featured: false
    }
  ];

  const achievements = [
    {
      title: "MS-CIT Certified",
      description: "Achieved 89% score in Maharashtra State Certificate in Information Technology",
      icon: Certificate,
      category: "Certification"
    },
    {
      title: "DevTown Bootcamp Graduate",
      description: "Successfully completed Instagram Clone development using HTML & CSS",
      icon: Code,
      category: "Training"
    },
    {
      title: "State Level Kho-Kho Player",
      description: "Selected for Senior State Kho-Kho Competition 2023-24 (Ratnagiri District)",
      icon: Medal,
      category: "Sports"
    },
    {
      title: "Inter Zonal Representative",
      description: "Represented MU Inter Zonal Men Kho-Kho 2023-24 (Kokan Zone)",
      icon: Trophy,
      category: "Sports"
    },
    {
      title: "Tech Carnival 2023 Head",
      description: "Led PPT Competition as head organizer in Tech Carnival 2023",
      icon: Users,
      category: "Leadership"
    },
    {
      title: "Drawing Excellence",
      description: "Secured Grade A in Elementary Drawing Examination",
      icon: Palette,
      category: "Creative"
    }
  ];

  const personalSkills = [
    { skill: "Analytical & Problem-Solving", icon: Brain },
    { skill: "Adaptability & Quick Learning", icon: Zap },
    { skill: "Time Management", icon: Clock },
    { skill: "Team Collaboration", icon: Users },
    { skill: "Effective Communication", icon: MessageSquare },
    { skill: "Creative Thinking", icon: Palette }
  ];

  const hobbies = [
    { name: "Photography", icon: Camera },
    { name: "Playing Team Games", icon: Gamepad2 },
    { name: "Bike Riding", icon: Bike },
    { name: "Music", icon: Music }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Interactive cursor effect */}
      <div 
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">PB</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
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
              Web & Mobile Developer
            </h2>
            <div className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto h-16">
              <span className="inline-block border-r-2 border-blue-400 pr-2 animate-blink">
                {typedText}
              </span>
            </div>
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
              MCA Student | React Native & Flutter Developer | Problem Solver
            </p>
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
                I'm a passionate MCA student and web/mobile developer with expertise in React Native, Flutter, and Django. 
                Currently pursuing my Master's in Computer Applications at FAMT Ratnagiri while building innovative digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-blue-300">Career Objective:</strong> To present and enhance my creativity, skills, working capabilities 
                and to serve my organization in the best possible way with sheer determination, hard work and commitment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20 card-hover">
                  <Code className="h-8 w-8 text-blue-400 mb-2" />
                  <h4 className="font-semibold text-blue-300">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">React, Django, Mobile Apps</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20 card-hover">
                  <Target className="h-8 w-8 text-purple-400 mb-2" />
                  <h4 className="font-semibold text-purple-300">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">Analytical & Creative Thinking</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-blue-300 italic">
                  🏆 "Selected for State Level Kho-Kho Competition & passionate about photography, team games, and bike riding!"
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
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    Master of Computer Applications (MCA) - Pursuing
                  </CardTitle>
                  <p className="text-muted-foreground">FAMT Ratnagiri, Mumbai University • 2024 - 2026</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Currently pursuing advanced studies in computer applications</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Advanced Programming</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Mobile Development</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Project Management</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    Bachelor of Science in Computer Science (BSc CS)
                  </CardTitle>
                  <p className="text-muted-foreground">ASP College, Devrukh, Mumbai University • 2021 - 2024</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">CGPA: 9.92/10 🏆</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Data Structures</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Algorithms</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Web Development</Badge>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">Database Systems</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-400 text-lg">Higher Secondary (HSC)</CardTitle>
                    <p className="text-muted-foreground text-sm">G.K Sapare Jr. College, Devrukh • 2019 - 2021</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Science Stream • 89.66%</p>
                  </CardContent>
                </Card>

                <Card className="card-hover gradient-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-400 text-lg">Secondary (SSC)</CardTitle>
                    <p className="text-muted-foreground text-sm">M.V. Sonavade High School • 2019</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">86%</p>
                  </CardContent>
                </Card>
              </div>
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
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                        {project.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {tech}
                        </Badge>
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

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                          {tech}
                        </Badge>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
          
          {/* Skills by Category */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Programming', 'Frontend', 'Mobile', 'Backend', 'Database', 'Tools'].map((category) => (
                <Card key={category} className="bg-card/50 backdrop-blur-sm border border-purple-500/20 card-hover">
                  <CardHeader>
                    <CardTitle className="text-blue-400 text-lg text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === category).map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                          <div key={index} className="group">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-blue-400 font-medium text-sm">{skill.name}</span>
                                  <span className="text-purple-300 text-sm">{skill.level}%</span>
                                </div>
                              </div>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">Personal Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 card-hover group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-blue-300 font-medium">{skill.skill}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-hover gradient-border bg-card/50 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        {achievement.title}
                        <Badge variant="secondary" className="ml-2 bg-yellow-500/20 text-yellow-300">
                          {achievement.category}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section ref={sectionRefs.personal} id="personal" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Personal Details</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Personal Info */}
              <Card className="bg-card/50 backdrop-blur-sm border border-purple-500/20 card-hover">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-3">
                    <User className="h-6 w-6" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <span className="text-muted-foreground">Date of Birth: 27th October 2002</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-purple-400" />
                    <span className="text-muted-foreground">Languages: English, Hindi, Marathi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span className="text-muted-foreground">Ratnagiri, Maharashtra, India</span>
                  </div>
                </CardContent>
              </Card>

              {/* Hobbies */}
              <Card className="bg-card/50 backdrop-blur-sm border border-purple-500/20 card-hover">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-3">
                    <Star className="h-6 w-6" />
                    Hobbies & Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => {
                      const IconComponent = hobby.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg card-hover">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-blue-300 text-sm font-medium">{hobby.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20 bg-card/30">
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
                    <p className="text-muted-foreground">bhuravanepritesh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-purple-500/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 9405059038</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-purple-500/20 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">Location</p>
                    <p className="text-muted-foreground">47/A, Khalchi Wadi, Vighravali Sayale, Ratnagiri, Maharashtra – 415804</p>
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
