import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
    servicios = [
    { icono: 'fa-stethoscope', fondoClass: 'fondo-celeste', titulo: 'Consultas Generales', descripcion: 'Revisiones exhaustivas para mantener a tu mascota saludable y detectar cualquier problema a tiempo.' },
    { icono: 'fa-syringe', fondoClass: 'fondo-celeste', titulo: 'Vacunación y Desparasitación', descripcion: 'Planes preventivos personalizados para proteger a tus mascotas de las enfermedades más comunes.' },
    { icono: 'fa-heartbeat', fondoClass: 'fondo-crema', titulo: 'Cirugías Especializadas', descripcion: 'Contamos con quirófano equipado y tecnología láser para procedimientos quirúrgicos seguros.' },
    { icono: 'fa-bolt', fondoClass: 'fondo-rosa', titulo: 'Urgencias 24/7', descripcion: 'Atención inmediata para situaciones críticas con personal médico disponible las 24 horas.' },
    { icono: 'fa-flask', fondoClass: 'fondo-crema', titulo: 'Laboratorio Propio', descripcion: 'Resultados rápidos de análisis de sangre, orina y pruebas diagnósticas para decisiones precisas.' },
    { icono: 'fa-cut', fondoClass: 'fondo-celeste', titulo: 'Peluquería Canina y Felina', descripcion: 'Servicios de higiene y estética para que tus mascotas luzcan y se sientan siempre bien.' },
  ];
}
