import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AcercaDeMi } from './acerca-de-mi/acerca-de-mi';
import { GestorTareas } from './Proyectos/gestor-tareas/gestor-tareas';
import { Glucontrol } from './Proyectos/glucontrol/glucontrol';
import { GestorCitas } from './Proyectos/gestor-citas/gestor-citas';
import { GestorInventario } from './Proyectos/gestor-inventario/gestor-inventario';
import { IntroAsp } from './Proyectos/intro-asp/intro-asp';
import { projectResolver } from './services/project-resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home, pathMatch: 'full' },
    { path: 'acercaDeMi', component: AcercaDeMi },

    {
        path: 'gestorinventario',
        resolve: { project: projectResolver },
        component: GestorInventario,
    },
    {
        path: 'gestor-tareas',
        resolve: { project: projectResolver },
        component: GestorTareas,
    },
    {
        path: 'glucontrol',
        resolve: { project: projectResolver },
        component: Glucontrol,
    },
    {
        path: 'gestorCitas',
        resolve: { project: projectResolver },
        component: GestorCitas,
    },
    {
        path: 'introASP',
        resolve: { project: projectResolver },
        component: IntroAsp,
    },

    // Catch-all: redirige a home (cubre el antiguo /proyectos)
    { path: 'proyectos', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];
