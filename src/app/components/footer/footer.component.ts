import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer bg-dark text-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="fw-bold mb-3">
              <i class="bi bi-person-circle me-2"></i>Christian Archuleta
            </h5>
            <p class="text-light mb-3">
              Passionate professional dedicated to excellence in my field. 
              Let's connect and explore opportunities together.
            </p>
            <div class="social-icons d-flex gap-3">
              <a href="https://www.linkedin.com/in/christianarchuleta/" class="text-light text-decoration-none">
                <i class="bi bi-linkedin fs-4"></i>
              </a>
              <a href="https://github.com/CAmadeusA" class="text-light text-decoration-none">
                <i class="bi bi-github fs-4"></i>
              </a>
              <a href="mailto:hireme@christianarchuleta.com" class="text-light text-decoration-none">
                <i class="bi bi-envelope fs-4"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <h6 class="fw-bold mb-3 text-light">Quick Links</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Home</a></li>
              <li><a href="#" class="text-light text-decoration-none">About</a></li>
              <li><a href="#" class="text-light text-decoration-none">Skills</a></li>
              <li><a href="#" class="text-light text-decoration-none">Projects</a></li>
              <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: auto;
      background: linear-gradient(135deg, var(--text-color) 0%, #333 100%) !important;
    }
    
    .social-icons a:hover {
      transform: translateY(-2px);
      transition: transform 0.3s ease;
    }
    
    .footer a {
      transition: all 0.3s ease;
    }
    
    .footer a:hover {
      color: var(--accent-color) !important;
    }
  `]
})
export class FooterComponent {}
