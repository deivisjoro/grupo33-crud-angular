import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  permitido = false;

  constructor() { }

  checkLogin(username:any, password:any):boolean{
    if(username==='admin' && password==='123'){
      this.permitido = true;
      return true;
    }
    return false;
  }

  
}
