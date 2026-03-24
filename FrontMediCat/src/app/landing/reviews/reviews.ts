import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
    resenas = [
    { texto: '"La atención en Medicat es insuperable. Operaron a Luna de urgencia y el equipo estuvo pendiente de ella las 24 horas. ¡Eternamente agradecida!"', autor: 'María García', mascota: 'Dueño de Luna (Golden Retriever)', imagen: 'assets/img/cliente1.jpeg' },
    { texto: '"Llevo años trayendo a mis mascotas aquí. Lo que más valoro es la honestidad de los médicos y lo modernos que son sus equipos."', autor: 'Juan Pérez', mascota: 'Dueño de Simba (Gato Persa)', imagen: 'assets/img/cliente2.jpeg' },
    { texto: '"Excelente servicio de peluquería y vacunas. Toby siempre sale feliz y yo tranquila sabiendo que está en las mejores manos."', autor: 'Laura Torres', mascota: 'Dueño de Toby (Bulldog Francés)', imagen: 'assets/img/cliente3.jpeg' },
  ];
}
