import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {

  error = false;

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  verificar(nota:any){
    if(nota>5){
      this.error = true;
      
    }
    else{
      this.error = false;
    }
  }

  agregar(nombre:any, nota1:any, nota2:any, nota3:any){
    
    if(nota1>5){
      this.error = true;
      return;
    }
    
    let id = this.apiService.getEstudiantes().length + 1;

    let estudiante = {
      id, 
      nombre,
      nota1,
      nota2,
      nota3
    }

    this.apiService.getEstudiantes().push(estudiante);

    this.router.navigate(['/estudiantes']);
  }

}
