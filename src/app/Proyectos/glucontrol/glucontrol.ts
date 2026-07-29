import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-glucontrol',
  imports: [CommonModule],
  templateUrl: './glucontrol.html',
  styleUrl: './glucontrol.css',
})
export class Glucontrol {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = toSignal(
    this.route.data.pipe(map((d) => d['project'] as Project)),
    { initialValue: undefined }
  );
}
