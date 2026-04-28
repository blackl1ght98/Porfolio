import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-gestor-inventario',
  imports: [CommonModule],
  templateUrl: './gestor-inventario.html',
  styleUrl: './gestor-inventario.css',
})
export class GestorInventario implements OnInit {
  imageUrls: { [key: string]: string[] } = {};

  constructor(private AssetsService: AssetsService) {}

  ngOnInit(): void {
    this.AssetsService.getImageUrls()
      .then((urls) => {
        this.imageUrls = urls;
      })
      .catch((error) => {
        console.error('Error loading image URLs:', error);
      });
  }
}
