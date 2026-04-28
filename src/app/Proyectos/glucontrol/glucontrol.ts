import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-glucontrol',
  imports: [CommonModule],
  templateUrl: './glucontrol.html',
  styleUrl: './glucontrol.css',
})
export class Glucontrol implements OnInit {
  imageUrls: { [key: string]: string[] } = {};

  constructor(private assetsService: AssetsService) {}

  ngOnInit(): void {
    this.assetsService
      .getImageUrls()
      .then((urls) => {
        this.imageUrls = urls;
      })
      .catch((error) => {
        console.error('Error loading image URLs:', error);
      });
  }
}
