import { Routes } from '@angular/router';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';
import { CerrarSesionComponent } from './componentes/cerrar-sesion/cerrar-sesion.component';
import { EstudianteAddComponent } from './componentes/estudiante-add/estudiante-add.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { SesionGuard } from './guardianes/sesion.guard';

export const RUTAS: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'estudiantes', component: EstudiantesComponent, canActivate: [SesionGuard]},
    {path: 'asignaturas', component: AsignaturasComponent},
    {path: 'estudiante-add', component: EstudianteAddComponent},
    {path: 'cerrar-sesion', component: CerrarSesionComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];


