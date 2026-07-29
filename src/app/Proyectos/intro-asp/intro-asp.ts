import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-intro-asp',
  imports: [CommonModule],
  templateUrl: './intro-asp.html',
  styleUrl: './intro-asp.css',
})
export class IntroAsp {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = toSignal(
    this.route.data.pipe(map((d) => d['project'] as Project)),
    { initialValue: undefined }
  );
}
