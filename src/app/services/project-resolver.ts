import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ProjectsService, Project } from './projects.service';

/**
 * Resolver que mapea el primer segmento de la URL al Project correspondiente.
 * La URL del proyecto debe coincidir con `project.key`.
 * Usado por las rutas /gestorinventario, /gestor-tareas, /glucontrol, etc.
 */
export const projectResolver: ResolveFn<Project> = (route: ActivatedRouteSnapshot) => {
    const key = route.url[0]?.path ?? '';
    const project = inject(ProjectsService).getProjectByKey(key);
    if (!project) {
        throw new Error(`Proyecto no encontrado: "${key}"`);
    }
    return project;
};