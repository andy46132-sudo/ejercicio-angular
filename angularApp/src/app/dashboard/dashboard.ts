import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  // Esta propiedad del .ts se muestra en el .html con interpolación {{ }}
  titulo = 'Panel principal';

  // Guarda la última opción seleccionada para mostrarla en pantalla (databinding)
  ultimaSeleccion = '';

  // Inyectamos el Router para poder navegar entre pantallas
  constructor(private router: Router) {}

  // Este método se ejecuta desde el HTML con event binding (click)
  irA(pantalla: string) {
    this.ultimaSeleccion = pantalla;
    this.router.navigate(['/' + pantalla]);
  }
}
