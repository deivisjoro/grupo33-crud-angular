import { Component, OnInit } from '@angular/core';

import { SesionService } from '../../servicios/sesion.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private sesionService:SesionService, private router:Router) {
    this.sesionService.permitido = false;
  }

  ngOnInit(): void {
  }

  login(username:any, password:any){
    
    let resultado = this.sesionService.checkLogin(username, password);

    if(resultado){
      this.router.navigate(['/estudiantes']);
    }

    
  }

}
