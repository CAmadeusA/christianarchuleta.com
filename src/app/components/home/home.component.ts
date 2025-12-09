import { Component } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-section min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="display-4 fw-bold text-light mb-4">
                Hello, I'm <span class="text-white">Christian Archuleta</span>
              </h1>
              <h2 class="text-white-50 mb-4 fs-4">
                Senior Software Engineer | Senior Technical Consultant at CGI Federal
              </h2>
              <p class="text-white-50 mb-4 lead">
                Senior Software Engineer with {{yearsOfExperience}} years of experience delivering full-stack solutions 
                in enterprise and government environments. Skilled in building scalable web applications 
                using JavaScript (Node.js, Angular), Java/Spring Boot, and C++ for performance-critical systems.
              </p>
              <div class="hero-buttons position-relative">
                <button routerLink="/projects" class="btn btn-light btn-lg me-3" style="position: relative; z-index: 10; text-decoration: none;">
                  <i class="bi bi-folder me-2"></i>View Projects
                </button>
                <button routerLink="/contact" class="btn btn-outline-light btn-lg" style="position: relative; z-index: 10; text-decoration: none;">
                  <i class="bi bi-envelope me-2"></i>Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image text-center mt-3 mt-lg-0">
              <div class="profile-card">
                <div class="profile-circle">
                  <img src="/PFP.png" alt="Christian Archuleta - Senior Software Engineer and Technical Consultant at CGI Federal" class="img-fluid rounded-circle"/>
                </div>
                <div class="profile-stats mt-4">
                  <div class="row">
                    <div class="col-4">
                      <div class="stat-item">
                        <h4 class="text-white">{{ yearsOfExperience }}</h4>
                        <p class="text-white-50">Years Experience</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="stat-item">
                        <h4 class="text-white">125+</h4>
                        <p class="text-white-50">Iterations Completed</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="stat-item">
                        <h4 class="text-white">94.8%</h4>
                        <p class="text-white-50">Client & Corporate Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <a href="#about" class="text-white text-decoration-none">
          <i class="bi bi-chevron-down fs-1"></i>
          <p class="mt-2 mb-0">Scroll Down</p>
        </a>
      </div>
    </section>

    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center mb-5">
              <h2 class="fw-bold">About Me</h2>
              <p class="text-muted">Get to know more about my professional journey</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content">
              <h3 class="fw-bold mb-3">Professional Background</h3>
              <p class="text-muted mb-4">
                Senior Software Engineer with {{ yearsOfExperience }} years of experience delivering full-stack solutions 
                in enterprise and government environments. Currently working at CGI Federal as a 
                Senior Consultant, driving software projects that impact mission-critical operations.
              </p>
              <p class="text-muted mb-4">
                Skilled in building scalable web applications using JavaScript (Node.js, Angular), 
                Java/Spring Boot, and C++ for performance-critical systems. Specialized in designing 
                and developing end-to-end systems, from modern frontends to secure backend services, 
                with a focus on clean architecture, reliability, and efficiency.
              </p>
              <div class="about-features">
                <div class="row">
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Full-Stack Development</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Angular & TypeScript</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Java Spring Boot</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Section 508 Accessibility</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Microservices Architecture</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="feature-item d-flex align-items-center mb-3">
                      <i class="bi bi-check-circle-fill text-primary me-3"></i>
                      <span>Agile/Scrum Methodology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-image">
              <div class="card shadow-lg">
                <div class="card-body p-4">
                  <h4 class="fw-bold mb-3">Professional Highlights</h4>
                  <div class="progress-item mb-4">
                    <div class="d-flex justify-content-between mb-2">
                      <span>Technical Skills</span>
                      <span>95%</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-primary" style="width: 95%"></div>
                    </div>
                  </div>
                  <div class="progress-item mb-4">
                    <div class="d-flex justify-content-between mb-2">
                      <span>Project Management</span>
                      <span>85%</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-success" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="progress-item mb-4">
                    <div class="d-flex justify-content-between mb-2">
                      <span>Communication</span>
                      <span>90%</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-info" style="width: 90%"></div>
                    </div>
                  </div>
                  <div class="progress-item">
                    <div class="d-flex justify-content-between mb-2">
                      <span>Leadership</span>
                      <span>85%</span>
                    </div>
                    <div class="progress">
                      <div class="progress-bar bg-warning" style="width: 85%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
      position: relative;
      overflow: hidden;
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="60" r="1.2" fill="rgba(255,255,255,0.1)"/></svg>');
      opacity: 0.2;
    }
    
    .profile-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      padding: 40px;
      transition: transform 0.3s ease;
    }
    
    .profile-card:hover {
      transform: translateY(-5px);
    }
    
    .profile-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
      border: 3px solid rgba(255,255,255,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
      }
      40% {
        transform: translateY(-10px) translateX(-50%);
      }
      60% {
        transform: translateY(-5px) translateX(-50%);
      }
    }
    
    .section-header {
      padding-bottom: 20px;
      border-bottom: 2px solid #667eea;
      margin-bottom: 40px;
    }
    
    .about-content h3 {
      color: #333;
    }
    
    .about-image .card {
      border: none;
    }
    
    .feature-item {
      transition: transform 0.3s ease;
    }
    
    .feature-item:hover {
      transform: translateX(5px);
    }
  `]
})
export class HomeComponent {
  yearsOfExperience: string;

  constructor(private experienceService: ExperienceService) {
    this.yearsOfExperience = this.experienceService.getExperienceText();
  }

}
