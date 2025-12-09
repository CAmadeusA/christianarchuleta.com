import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="projects-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center mb-5 mt-5">
              <h2 class="fw-bold">Featured Projects</h2>
              <p class="text-muted">Showcasing my best work and professional achievements</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" *ngFor="let project of projects">
            <div class="project-card h-100">
              <div class="project-image">
                <img [src]="project.image" [alt]="getProjectImageAlt(project)" class="w-100">
                <div class="project-overlay">
                  <div class="project-links">
                    <a [href]="project.liveUrl" target="_blank" class="btn btn-primary me-2">
                      <i class="bi bi-eye me-2"></i>Live Demo
                    </a>
                    <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="btn btn-outline-light">
                      <i class="bi bi-github me-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-content p-4">
                <div class="project-tags mb-3">
                  <span class="badge bg-primary me-2" *ngFor="let tag of project.tags">{{ tag }}</span>
                </div>
                <h5 class="fw-bold mb-2">{{ project.title }}</h5>
                <p class="text-muted mb-3">{{ project.description }}</p>
                <div class="project-stats d-flex justify-content-between text-muted small">
                  <span><i class="bi bi-calendar me-2"></i>{{ project.date }}</span>
                  <span><i class="bi bi-briefcase me-2"></i>{{ project.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12">
            <div class="project-cta text-center">
              <h4 class="fw-bold mb-3">Want to see more of my work?</h4>
              <p class="text-light mb-4">
                Let's discuss how we can work together on your next big idea.
              </p>
              <a routerLink="/contact" class="btn btn-outline-light btn-lg">
                <i class="bi bi-envelope me-2"></i>Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    }
    
    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    
    .project-image {
      position: relative;
      overflow: hidden;
    }
    
    .project-image img {
      height: 250px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(194, 1, 20, 0.9) 0%, rgba(255, 127, 17, 0.9) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-links .btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .project-links .btn:hover {
      transform: translateY(-2px);
    }
    
    .project-content h5 {
      color: #333;
      transition: color 0.3s ease;
    }
    
    .project-card:hover .project-content h5 {
      color: #667eea;
    }
    
    .project-cta {
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
      padding: 40px;
      border-radius: 15px;
      color: white;
    }
    
    .project-cta h4 {
      color: white;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Federal Financial Systems - Full-Stack Development',
      description: 'Developing and maintaining complex full-stack features using Angular 21, Java Spring Boot, Node.js, and C++ for CGI’s federal ERP platforms. Building reusable libraries and compliant UI components with full Section 508 accessibility.',
      image: '/Momentum.png',
      tags: ['Angular 21', 'Java Spring Boot', 'Node.js', 'C++', 'Section 508', 'Microservices'],
      date: '2024 - Present',
      category: 'Federal ERP Platform',
      liveUrl: 'https://www.cgi.com/us/en-us/federal/momentum-enterprise-suite',
      githubUrl: null,
    },
    {
      title: 'Federal Healthcare Enrollment Platform - Modernization',
      description: 'Delivered a multi-year modernization initiative for a major federal healthcare enrollment system. Re-architected legacy Angular codebase into micro-frontends and shared libraries. Implemented performance optimizations via lazy loading, import maps, and Webpack tuning.',
      image: '/PECOS2.0.jpg',
      tags: ['Angular 10+', 'Node.js', 'Express.js', 'Micro-frontends', 'Elasticsearch', 'PDF Services'],
      date: '2022 - 2024',
      category: 'Healthcare Platform',
      liveUrl: 'https://www.youtube.com/watch?v=eUGgzpf5A4k',
      githubUrl: null,
    },
    {
      title: 'Federal Healthcare Enrollment - Frontend Development',
      description: 'Contributed to the frontend development of a modernized federal healthcare enrollment system. Developed responsive, accessible Angular components from UX designs, aligned with Section 508 compliance standards.',
      image: '/PECOS2.0.jpg',
      tags: ['Angular', 'Java Spring Boot', 'Section 508', 'Agile/Scrum', 'API Integration'],
      date: '2020 - 2022',
      category: 'Healthcare System',
      liveUrl: 'https://www.youtube.com/watch?v=eUGgzpf5A4k',
      githubUrl: null,
    },
    {
      title: 'Omnichannel Retail Platform - Mobile & Web',
      description: 'Contributed to web and mobile application development focused on improving user experience and performance across omni-channel platforms. Designed and implemented RESTful APIs to support data integration and enhance backend functionality.',
      image: '/JCPenney.jpg',
      tags: ['Android', 'RESTful APIs', 'Bluetooth', 'Wi-Fi Beacons', 'Mobile Development'],
      date: '2018',
      category: 'Retail Platform',
      liveUrl: 'https://www.jcpenney.com/',
      githubUrl: null,
    }
  ];

  getProjectImageAlt(project: any): string {
    const altTexts: { [key: string]: string } = {
      '/Momentum.png': 'Momentum Enterprise Suite - Federal financial management system interface',
      '/PECOS2.0.jpg': 'PECOS 2.0 healthcare enrollment platform user interface',
      '/JCPenney.jpg': 'JCPenney omnichannel retail platform interface'
    };
    
    return altTexts[project.image] || `${project.title} project screenshot`;
  }
}
