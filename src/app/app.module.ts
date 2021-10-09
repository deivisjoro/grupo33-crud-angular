import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router'

import { RUTAS } from './app.routes' 

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';
import { EstudianteAddComponent } from './componentes/estudiante-add/estudiante-add.component';
import { CerrarSesionComponent } from './componentes/cerrar-sesion/cerrar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    EstudiantesComponent,
    AsignaturasComponent,
    EstudianteAddComponent,
    CerrarSesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS, {useHash: true})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
