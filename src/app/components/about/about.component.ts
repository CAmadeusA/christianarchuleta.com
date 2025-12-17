import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="about-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center mb-5 mt-5">
              <h2 class="fw-bold">About Me</h2>
              <p class="text-muted">Professional background and personal journey</p>
            </div>
          </div>
        </div>
        
        <div class="row align-items-top">
          <div class="col-lg-5">
            <div class="about-image">
              <div class="profile-photo">
                <div class="photo-overlay">
                  <img src="PFP.png" alt="Christian Archuleta - Professional headshot of Senior Software Engineer" class="img-fluid rounded-circle"/>
                </div>
              </div>
              <div class="about-stats mt-4">
                <div class="row">
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h4 class="text-primary fw-bold">94.8%</h4>
                      <p class="text-muted small">Client & Corporate Satisfaction</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h4 class="text-success fw-bold">125+</h4>
                      <p class="text-muted small">Iterations Completed</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-item text-center">
                      <h4 class="text-info fw-bold">{{ yearsOfExperience }}</h4>
                      <p class="text-muted small">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
          <div class="col-lg-7">
            <div class="about-content">
              <h3 class="fw-bold mb-3">Professional Summary</h3>
              <p class="text-muted mb-4">
                Senior Software Engineer with {{ yearsOfExperience }} years of experience delivering full-stack solutions 
                in enterprise and government environments. Skilled in building scalable web applications 
                using JavaScript (Node.js, Angular), Java/Spring Boot, and C++ for performance-critical systems.
              </p>
              
              <p class="text-muted mb-4">
                I specialize in designing and developing end-to-end systems, from modern frontends to secure 
                backend services, with a focus on clean architecture, reliability, and efficiency. Currently 
                working at CGI Federal as a Senior Consultant, driving software projects that impact 
                mission-critical operations.
              </p>
              
              <div class="about-philosophy mb-4">
                <h5 class="fw-bold mb-3">My Philosophy</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    Quality over quantity in every project
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    Client satisfaction is the top priority
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    Continuous learning and improvement
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    Transparent communication and collaboration
                  </li>
                </ul>
              </div>    
            </div>
          </div>
          <div class="about-education">
            <h5 class="fw-bold mb-3">Education</h5>
            <div class="education-item d-flex align-items-start">
              <div class="education-icon me-3">
                <i class="bi bi-mortarboard-fill text-primary"></i>
              </div>
              <div>
                <h6 class="fw-semibold">Bachelor's of Applied Mathematics - Computer Science Focus</h6>
                <p class="text-muted small mb-1">Texas A&M University • Mathematics and Computer Science</p>
                <p class="text-muted">Strong foundation in mathematical principles and computer science concepts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12">
            <div class="testimonials-section">
              <h4 class="fw-bold mb-2 text-center">
                <i class="bi bi-chat-square-quote me-2 text-info"></i>What Colleagues Say
              </h4>
              <p class="text-muted text-center"> Some information may be redacted or altered to protect non-disclosure agreements. </p>
              
              <div class="row">
                <div class="col-md-4 mb-4" *ngFor="let testimonial of testimonials; let i = index">
                  <div class="testimonial-card p-4">
                    <div class="testimonial-quote">
                      <i class="bi bi-quote text-primary"></i>
                    </div>
                    <div class="testimonial-author d-flex align-items-center">
                      <div class="author-avatar me-3">
                        <i class="bi bi-person-circle"></i>
                      </div>
                      <div>
                        <h6 class="fw-semibold mb-0 pt-3">{{ testimonial.author }}</h6>
                        <p class="text-muted small">{{ testimonial.position }}</p>
                      </div>
                    </div>
                    <p class="text-muted mb-3">{{ getTestimonialText(testimonial.quote, i) }}</p>
                    <div class="text-center" *ngIf="shouldShowReadMore(testimonial.quote, i)">
                      <button class="btn btn-outline-primary btn-sm" (click)="toggleTestimonial(i)">
                        <i class="bi bi-plus-circle me-2"></i>Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12">
            <div class="cta-section text-center">
              <h4 class="fw-bold mb-3">Ready to work together?</h4>
              <p class="text-light mb-4">
                Let's discuss your project and how I can help you achieve your goals.
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
    .about-section {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    }
    
    .about-content h3 {
      color: var(--text-color);
    }
    
    .about-image .profile-photo {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    .photo-overlay {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: 3px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .about-stats .stat-item {
      transition: transform 0.3s ease;
    }
    
    .about-stats .stat-item:hover {
      transform: translateY(-5px);
    }
    
    .about-philosophy ul li {
      transition: transform 0.3s ease;
    }
    
    .about-philosophy ul li:hover {
      transform: translateX(5px);
    }
    
    .education-item {
      transition: transform 0.3s ease;
      padding: 15px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.05);
      background: white;
    }
    
    .education-item:hover {
      transform: translateX(5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .education-icon i {
      font-size: 2rem;
    }
    
    .testimonial-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      height: 100%;
    }
    
    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .testimonial-quote i {
      font-size: 3rem;
      opacity: 0.3;
    }
    
    .author-avatar i {
      font-size: 2rem;
      color: #667eea;
    }
    
    .cta-section {
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
      padding: 40px;
      border-radius: 15px;
      color: white;
    }
    
    .cta-section h4 {
      color: white;
    }
  `]
})
export class AboutComponent {
  yearsOfExperience: string;

  constructor(private experienceService: ExperienceService) {
    this.yearsOfExperience = this.experienceService.getExperienceText();
  }

   testimonials = [
    {
      quote: "Christian has been instrumental in developing several shared components that are used throughout the PECOS 2.0 application, like [redacted] and [redacted]. He has contributed towards the development of a [redacted] framework that has allowed other application development teams to easily ingest the framework and extend it outside of [redacted]. He also took the initiative of re-designing a [redacted] feature. He came up with a solution extending the original framework that was an acceptable and workable solution to the business owners and design team. Christian strives towards quality deliverables. In the absence of a senior UI lead on his team, he has stepped up and taken the additional responsibilities to perform code reviews for other members on the team and has provided constructive feedback. In an effort towards code improvement and optimization he has re-factored and re-written the complex [redacted] section of the [redacted] application, allowing for easy code maintenance.​ Christian is a quick learner and is excited about learning new technologies and broadening his technical skills. When Christian identifies an issue/blocker that needs to be solved, he actively seeks learning and education in the area to improve his ability to solve the problem. Christian has guided several new team members joining the team and helped them quickly ramp up with the application development. His ability to problem-solve effectively through his quick learning agility has prevented and quickly removed impediments and blockers, and allowed him to continuously grow and improve. Christian is self-motivated, enthusiastic and will work independently towards his task assignments. He is truly a team player, while continuing to learn and grow, he supports his team members when they require assistance with issues.​​",
      author: "Anjali Tikhe",
      position: "Director, CGI Federal"
    },
    {
      quote: "Thank you for your commitment to the PECOS 2.0 project, you have demonstrated significant contributions to the program. I specifically wanted to thank you for your leadership in designing, demoing, and implementing micro-front-ends. The demo you provided to CMS was excellent and was well received. We received multiple compliments from CMS on the quality and depth of the presentation. In addition your validation of the proposed micro-front-end solution was critical to the project moving forward with implementation. You were instrumental in moving micro-front-ends forward, thank you for your commitment and partnership on PECOS 2.0.",
      author: "David Falke",
      position: "Vice President, CGI Federal"
    },
    {
      quote: "I'd like to recognize Christian Archuleta for his contributions to the team and program. He's always providing unbiased and transparent assessments of development tasks, seeking to understand more of the synergy of the project, and going about all of this in an honest and encouraging way. Thank you for living the value of Objectivity and integrity.",
      author: "Kerry Baker",
      position: "PO, CGI Federal"
    }
  ];

  expandedTestimonials: boolean[] = [false, false, false];

  toggleTestimonial(index: number): void {
    this.expandedTestimonials[index] = !this.expandedTestimonials[index];
  }

  getTestimonialText(quote: string, index: number): string {
    const maxLength = 500;
    if (this.expandedTestimonials[index] || quote.length <= maxLength) {
      return quote;
    }
    return quote.substring(0, maxLength) + '...';
  }

  shouldShowReadMore(quote: string, index: number): boolean {
    const maxLength = 500;
    return quote.length > maxLength && !this.expandedTestimonials[index];
  }
}
