import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly START_YEAR = 2020;
  
  constructor() { }

  getYearsOfExperience(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.START_YEAR;
  }

  getExperienceText(): string {
    const years = this.getYearsOfExperience();
    return `${years}+`;
  }
}
