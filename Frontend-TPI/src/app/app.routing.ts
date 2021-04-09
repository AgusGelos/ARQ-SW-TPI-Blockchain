import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const appRoutes = [
    { path: 'login', component: LoginComponent,  pathMatch: 'full'},
    { path: 'profesores', component: ProfesoresComponent,  pathMatch: 'full'},
    { path: 'alumnos', component: AlumnosComponent,  pathMatch: 'full'}  
  ];

  export const routing = RouterModule.forRoot(appRoutes);