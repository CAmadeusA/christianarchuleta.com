import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <i class="bi bi-person-circle me-2"></i>Christian Archuleta
        </a>
        
        <button class="navbar-toggler" type="button" (click)="toggleNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" [class.show]="isNavbarOpen" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeNavbar()">
                <i class="bi bi-house me-1"></i>Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active" (click)="closeNavbar()">
                <i class="bi bi-person me-1"></i>About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/skills" routerLinkActive="active" (click)="closeNavbar()">
                <i class="bi bi-tools me-1"></i>Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/projects" routerLinkActive="active" (click)="closeNavbar()">
                <i class="bi bi-folder me-1"></i>Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active" (click)="closeNavbar()">
                <i class="bi bi-envelope me-1"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%) !important;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      color: white !important;
      font-weight: 700;
    }
    
    .nav-link {
      color: rgba(255,255,255,0.95) !important;
      font-weight: 500;
      padding: 0.5rem 1rem !important;
      border-radius: 8px !important;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: white !important;
      background: rgba(255,255,255,0.15) !important;
      transform: translateY(-2px);
    }
    
    .nav-link.active {
      background: rgba(255,255,255,0.25) !important;
      color: white !important;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 991px) {
      .navbar-collapse {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        margin: 0 -15px;
        padding: 1rem 15px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      }
    }
  `]
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }
}
