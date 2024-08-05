import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    reasonForContact: ['', Validators.required],
    customMessage: ['', [Validators.required, Validators.minLength(10)]],
  });

  emailGenerateUrl = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(() => {
      const lineBreak = '%0D%0A'
      let params = `?subject=${this.contactForm.value.reasonForContact} from ${this.contactForm.value.firstName} ${this.contactForm.value.lastName} Via christianarchuleta.com&body=${this.contactForm.value.customMessage}${lineBreak}${lineBreak}Sincerely,${lineBreak}${this.contactForm.value.firstName} ${this.contactForm.value.lastName}${lineBreak}Via christianarchuleta.com.`
      this.emailGenerateUrl = `mailto:hireme@christianarchuleta.com${params}`
    })
  }
}
