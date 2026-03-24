import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   formData = { nombre: '', email: '', asunto: 'Consulta General', mensaje: '' };
  mensajeExito = '';

  onSubmit(): void {
    console.log('Formulario enviado:', this.formData);
    this.mensajeExito = '¡Mensaje enviado correctamente! Te contactaremos pronto.';
    this.formData = { nombre: '', email: '', asunto: 'Consulta General', mensaje: '' };
    setTimeout(() => this.mensajeExito = '', 5000);
  }
}
