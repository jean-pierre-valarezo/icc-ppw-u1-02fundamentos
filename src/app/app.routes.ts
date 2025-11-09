import { Routes } from '@angular/router';
import { Homepage } from './features/homepage/homepage';
import { PerfilPage } from './features/perfilpage/perfilpage';
import { ProyectosPage } from './features/proyectos-page/proyectopage/proyectopage';
import { Proyectodospage } from './features/proyecto-dos-page/proyectodospage/proyectodospage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Homepage
  },
  {
    path: 'perfil',
    component: PerfilPage
  },
  {
    path: 'proyectos',
    component: ProyectosPage
  },
  { 
    path: 'proyecto-dos', 
    component: Proyectodospage
  },
];
