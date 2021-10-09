import { Component, OnInit } from '@angular/core';

import { SesionService } from '../../servicios/sesion.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public sesionService:SesionService) { }

  ngOnInit(): void {
  }

}
