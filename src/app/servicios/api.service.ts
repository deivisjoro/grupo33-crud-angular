import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private estudiantes:any[] = [
    {
      id: 1,
      nombre: "Maria",
      nota1: 1,
      nota2: 2,
      nota3: 2
    },
    {
      id: 2,
      nombre: "Jose",
      nota1: 2,
      nota2: 3,
      nota3: 3
    }
  ];

  constructor() {

  }

  getEstudiantes():any[]{
    return this.estudiantes;
  }
}
