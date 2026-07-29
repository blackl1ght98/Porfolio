import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-gestor-citas',
  imports: [CommonModule],
  templateUrl: './gestor-citas.html',
  styleUrl: './gestor-citas.css',
})
export class GestorCitas {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = toSignal(
    this.route.data.pipe(map((d) => d['project'] as Project)),
    { initialValue: undefined }
  );
}
