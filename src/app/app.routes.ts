import { Routes } from '@angular/router';
//import { Homepage } from './features/homepage/homepage';
import { PerfilPage } from './features/perfilpage/perfilpage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    component: PerfilPage
  }
];
