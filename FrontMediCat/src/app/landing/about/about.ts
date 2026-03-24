import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    razones = [
    { icono: 'fa-solid fa-medal', titulo: 'Excelencia Médica', descripcion: 'Contamos con los certificados de calidad más exigentes del sector veterinario.' },
    { icono: 'fa-solid fa-clock', titulo: 'Disponibilidad Total', descripcion: 'Tu mascota nunca estará sola. Estamos disponibles las 24 horas, los 365 días del año.' },
    { icono: 'fa-solid fa-user-group', titulo: 'Equipo Humano', descripcion: 'Profesionales apasionados por los animales que brindan un trato empático y cariñoso.' },
    { icono: 'fa-solid fa-circle-check', titulo: 'Tecnología de Punta', descripcion: 'Equipamiento diagnóstico de última generación para diagnósticos precisos y rápidos.' },
  ];

  stats = [
    { numero: '+15k', label: 'Pacientes atendidos', clase: 'stat-oscuro' },
    { numero: '8+',   label: 'Especialidades médicas', clase: 'stat-crema' },
    { numero: '24/7', label: 'Servicio de emergencias', clase: 'stat-verde' },
    { numero: '98%',  label: 'Satisfacción de clientes', clase: 'stat-crema' },
  ];
}
