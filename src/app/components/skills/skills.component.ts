import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center mb-5 mt-5">
              <h2 class="fw-bold">Skills & Expertise</h2>
              <p class="text-muted">Technical skills and professional competencies</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6">
            <div class="skills-category">
              <h4 class="fw-bold mb-4">
                <i class="bi bi-code me-2 text-primary"></i>Technical Skills
              </h4>
              
              <div class="skill-item mb-4" *ngFor="let skill of technicalSkills">
                <div class="d-flex justify-content-between mb-2">
                  <span class="fw-semibold">{{ skill.name }}</span>
                  <span class="text-muted">{{ skill.level }}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-primary" [style.width]="skill.level + '%'"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="skills-category">
              <h4 class="fw-bold mb-4">
                <i class="bi bi-people me-2 text-success"></i>Professional Skills
              </h4>
              
              <div class="skill-item mb-4" *ngFor="let skill of professionalSkills">
                <div class="d-flex justify-content-between mb-2">
                  <span class="fw-semibold">{{ skill.name }}</span>
                  <span class="text-muted">{{ skill.level }}%</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success" [style.width]="skill.level + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12">
            <div class="tools-section">
              <h4 class="fw-bold mb-4 text-center">
                <i class="bi bi-tools me-2 text-info"></i>Tools & Technologies
              </h4>
              
              <div class="row">
                <div class="col-md-3" *ngFor="let tool of tools">
                  <div class="tool-card text-center p-4 mb-4">
                    <div class="tool-icon mb-3">
                      <i [class]="tool.icon"></i>
                    </div>
                    <h6 class="fw-semibold">{{ tool.name }}</h6>
                    <p class="text-muted small">{{ tool.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-lg-8 mx-auto">
            <div class="certifications-card p-4">
              <h4 class="fw-bold mb-3">
                <i class="bi bi-award me-2 text-warning"></i>Certifications
              </h4>
              <div class="row">
                <div class="col-md-6" *ngFor="let cert of certifications">
                  <div class="cert-item d-flex align-items-start mb-3">
                    <i class="bi bi-patch-check-fill text-warning me-3 fs-4"></i>
                    <div>
                      <h6 class="fw-semibold">{{ cert.name }}</h6>
                      <p class="text-muted small">{{ cert.issuer }} • {{ cert.year }}</p>
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
    .skills-section {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .skills-category h4 {
      color: #333;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    
    .skill-item {
      transition: transform 0.3s ease;
    }
    
    .skill-item:hover {
      transform: translateX(5px);
    }
    
    .tool-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .tool-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .tool-icon i {
      font-size: 3rem;
      color: #667eea;
      transition: all 0.3s ease;
    }
    
    .tool-card:hover .tool-icon i {
      color: #764ba2;
      transform: rotate(5deg) scale(1.1);
    }
    
    .certifications-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .cert-item {
      transition: transform 0.3s ease;
    }
    
    .cert-item:hover {
      transform: translateX(5px);
    }
  `]
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'JavaScript (Node.js)', level: 95 },
    { name: 'Angular 10+', level: 90 },
    { name: 'Java Spring Boot', level: 90 },
    { name: 'TypeScript', level: 95 },
    { name: 'C++', level: 85 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'REST APIs', level: 90 },
    { name: 'Git & Version Control', level: 90 },
    { name: 'Microservices Architecture', level: 85 },
    { name: 'Section 508 Accessibility', level: 85 },
    { name: 'Elasticsearch', level: 80 },
    { name: 'SQL', level: 85 }
  ];

  professionalSkills = [
    { name: 'Full-Stack Development', level: 95 },
    { name: 'Agile/Scrum Methodology', level: 90 },
    { name: 'Technical Leadership', level: 88 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 95 },
    { name: 'Client Collaboration', level: 90 },
    { name: 'Performance Optimization', level: 90 },
    { name: 'Data Security & Compliance', level: 85 }
  ];

  tools = [
    { name: 'Angular 21', icon: 'bi bi-code-slash', description: 'Frontend Framework' },
    { name: 'Java Spring Boot', icon: 'bi bi-gear', description: 'Backend Framework' },
    { name: 'Node.js', icon: 'bi bi-terminal', description: 'JavaScript Runtime' },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx', description: 'Type-Safe JavaScript' },
    { name: 'C++', icon: 'bi bi-cpu', description: 'Performance-Critical Systems' },
    { name: 'HTML5/CSS3', icon: 'bi bi-file-earmark-code', description: 'Web Standards' },
    { name: 'Git', icon: 'bi bi-git', description: 'Version Control' },
    { name: 'Elasticsearch', icon: 'bi bi-search', description: 'Search & Analytics' },
    { name: 'Section 508', icon: 'bi bi-universal-access', description: 'Accessibility Compliance' },
    { name: 'Microservices', icon: 'bi bi-diagram-3', description: 'Architecture Pattern' },
    { name: 'Agile/Scrum', icon: 'bi bi-kanban', description: 'Development Methodology' },
    { name: 'REST APIs', icon: 'bi bi-plug', description: 'API Design' }
  ];

  certifications = [
    { name: 'AI Competency', issuer: 'CGI', year: '2025' },
    { name: 'SAFe 5 Agile Certification', issuer: 'Scaled Agile', year: '2020' },
    { name: 'SAFe® Scrum Master (5.0)', issuer: 'Scaled Agile', year: '2020' }
  ];
}
