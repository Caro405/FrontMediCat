import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
    medicos = [
    { nombre: 'Dra. Elena Martínez', especialidad: 'Cirujana Veterinaria', imagen: 'assets/img/vet1.jpeg', descripcion: '"Especialista en cirugía de tejidos blandos y ortopedia con más de 10 años de experiencia."' },
    { nombre: 'Dr. Ricardo Sánchez', especialidad: 'Médico Internista',    imagen: 'assets/img/vet2.jpeg', descripcion: '"Experto en diagnóstico por imagen y medicina preventiva para animales exóticos y domésticos."' },
    { nombre: 'Dra. Carla Gómez',    especialidad: 'Dermatóloga Veterinaria', imagen: 'assets/img/vet4.jpeg', descripcion: '"Apasionada por la salud de la piel y el bienestar integral de perros y gatos."' },
  ];
}
