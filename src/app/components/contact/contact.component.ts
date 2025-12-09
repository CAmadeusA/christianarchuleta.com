import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center mb-5 mt-5">
              <h2 class="fw-bold">Get In Touch</h2>
              <p class="text-muted">Let's start a conversation about your project</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-5">
            <div class="contact-info">
              <h4 class="fw-bold mb-4">
                <i class="bi bi-info-circle me-2 text-primary"></i>Contact Information
              </h4>
              
              <div class="contact-item d-flex align-items-start mb-4">
                <div class="contact-icon me-3">
                  <i class="bi bi-geo-alt-fill text-primary" aria-hidden="true"></i>
                </div>
                <div>
                  <h6 class="fw-semibold">Location</h6>
                  <p class="text-muted mb-0">Jacksonville, Florida, United States</p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-start mb-4">
                <div class="contact-icon me-3">
                  <i class="bi bi-briefcase-fill text-success"></i>
                </div>
                <div>
                  <h6 class="fw-semibold">Company</h6>
                  <p class="text-muted mb-0">CGI Federal<br>Senior Software Engineer | Senior Technical Consultant</p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-start mb-4">
                <div class="contact-icon me-3">
                  <i class="bi bi-envelope-fill text-info"></i>
                </div>
                <div>
                  <h6 class="fw-semibold">Website</h6>
                  <p class="text-muted mb-0">http://christianarchuleta.com</p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-start mb-4">
                <div class="contact-icon me-3">
                  <i class="bi bi-linkedin text-primary"></i>
                </div>
                <div>
                  <h6 class="fw-semibold">LinkedIn</h6>
                  <p class="text-muted mb-0">290+ connections</p>
                </div>
              </div>
              
              <div class="social-links mt-4">
                <h6 class="fw-semibold mb-3">Connect with me</h6>
                <div class="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/christianarchuleta/" class="btn btn-primary btn-sm">
                    <i class="bi bi-linkedin me-2"></i>LinkedIn
                  </a>
                  <a href="https://github.com/CAmadeusA" class="btn btn-dark btn-sm align-content-center">
                    <i class="bi bi-github me-2"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7 mt-4 mt-lg-0">
            <div class="contact-form-card p-4">
              <h4 class="fw-bold mb-4">
                <i class="bi bi-chat-dots me-2 text-success"></i>Send me a Message
              </h4>
              
              <form #contactForm="ngForm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name" class="form-label fw-semibold">Full Name</label>
                    <input type="text" class="form-control" id="name" name="name" 
                           [(ngModel)]="formData.name" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label fw-semibold">Email Address</label>
                    <input type="email" class="form-control" id="email" name="email"
                           [(ngModel)]="formData.email" required>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="phone" class="form-label fw-semibold">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" name="phone"
                           [(ngModel)]="formData.phone">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="subject" class="form-label fw-semibold">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject"
                           [(ngModel)]="formData.subject" required>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label fw-semibold">Message</label>
                  <textarea class="form-control" id="message" name="message" rows="5"
                            [(ngModel)]="formData.message" required></textarea>
                </div>
                
                <a type="submit" class="btn btn-primary btn-lg" [class.disabled]="!contactForm.valid" [href]="getMailtoLink()">
                  <i class="bi bi-send me-2"></i>Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .contact-info h4 {
      color: #333;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    
    .contact-item {
      transition: transform 0.3s ease;
    }
    
    .contact-item:hover {
      transform: translateX(5px);
    }
    
    .contact-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(194, 1, 20, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .contact-form-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .form-control {
      border-radius: 8px;
      border: 1px solid #dee2e6;
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
      border: none;
      border-radius: 8px;
      padding: 10px 25px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(194, 1, 20, 0.4);
    }
    
    .map-section {
      background: white;
      border-radius: 15px;
      padding: 30px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .map-container {
      height: 400px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }
    
    .map-placeholder {
      height: 100%;
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .map-overlay {
      text-align: center;
      z-index: 1;
    }
    
    .map-overlay::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.2)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.2)"/><circle cx="60" cy="60" r="1.2" fill="rgba(255,255,255,0.2)"/></svg>');
      opacity: 0.3;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  getMailtoLink(): string {
    const subject = encodeURIComponent(`Contact: ${this.formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Email: ${this.formData.email}\n` +
      `Phone: ${this.formData.phone}\n\n` +
      `Message:\n${this.formData.message}\n\n` +
      `---\n` +
      `Best regards,\n` +
      `${this.formData.name}`
    );
    
    return `mailto:hireme@christianarchuleta.com?subject=${subject}&body=${body}`;
  }
}
