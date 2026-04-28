import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-gestor-tareas',
  imports: [CommonModule],
  templateUrl: './gestor-tareas.html',
  styleUrl: './gestor-tareas.css'
})
export class GestorTareas implements OnInit{
imageUrls: { [key: string]: string[] } = {};

  constructor(private AssetsService: AssetsService) {}

  ngOnInit(): void {
    this.AssetsService.getImageUrls().then(urls => {
      this.imageUrls = urls;
    }).catch(error => {
      console.error('Error loading image URLs:', error);
    });
  }
}
