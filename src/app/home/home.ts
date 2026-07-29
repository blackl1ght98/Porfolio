import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../services/projects.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly projectsService = inject(ProjectsService);
  readonly projects: Project[] = this.projectsService.getProjects();

  /**
   * El proyecto destacado (highlight) ocupa el doble de ancho en el grid.
   * Los demás comparten el espacio con un col-lg-4 (3 por fila en desktop).
   */
  colClass(p: Project): string {
    if (p.highlight) {
      return 'col-md-6';
    }
    return 'col-md-6 col-lg-4';
  }
}