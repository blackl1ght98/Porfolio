import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-gestor-inventario',
  imports: [CommonModule],
  templateUrl: './gestor-inventario.html',
  styleUrl: './gestor-inventario.css'
})
export class GestorInventario implements OnInit {
  imageUrls: { [key: string]: string[] } = {};

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getImageUrls().then(urls => {
      this.imageUrls = urls;
    }).catch(error => {
      console.error('Error loading image URLs:', error);
    });
  }
}
