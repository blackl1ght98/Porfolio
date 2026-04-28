import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-gestor-citas',
  imports: [CommonModule],
  templateUrl: './gestor-citas.html',
  styleUrl: './gestor-citas.css',
})
export class GestorCitas implements OnInit {
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
