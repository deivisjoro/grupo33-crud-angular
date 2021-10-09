import { Component, OnInit } from '@angular/core';

import { SesionService } from '../../servicios/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private sesionService: SesionService, private router: Router) { 

    this.sesionService.permitido = false;
    this.router.navigate(['/inicio']);
  }

  ngOnInit(): void {
  }

}
