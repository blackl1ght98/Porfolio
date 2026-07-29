import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-gestor-tareas',
  imports: [CommonModule],
  templateUrl: './gestor-tareas.html',
  styleUrl: './gestor-tareas.css'
})
export class GestorTareas {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = toSignal(
    this.route.data.pipe(map((d) => d['project'] as Project)),
    { initialValue: undefined }
  );
}