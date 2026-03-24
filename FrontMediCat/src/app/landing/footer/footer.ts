import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
    imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    newsletterEmail = '';

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  onNewsletter(): void {
    alert(`¡Gracias! Te has suscrito con: ${this.newsletterEmail}`);
    this.newsletterEmail = '';
  }
}
