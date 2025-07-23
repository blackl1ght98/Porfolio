import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AcercaDeMi } from './acerca-de-mi/acerca-de-mi';
import { GestorTareas } from './Proyectos/gestor-tareas/gestor-tareas';
import { Glucontrol } from './Proyectos/glucontrol/glucontrol';
import { GestorCitas } from './Proyectos/gestor-citas/gestor-citas';
import { GestorInventario } from './Proyectos/gestor-inventario/gestor-inventario';
import { IntroAsp } from './Proyectos/intro-asp/intro-asp';

export const routes: Routes = [

 { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'acercaDeMi', component: AcercaDeMi },
  { path: 'proyectos', component: GestorTareas },
  { path: 'glucontrol', component: Glucontrol },
  { path: 'gestorCitas', component: GestorCitas },
  { path: 'gestorinventario', component: GestorInventario },
  { path: 'introASP', component: IntroAsp },

];
