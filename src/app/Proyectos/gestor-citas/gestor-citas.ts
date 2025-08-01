import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-gestor-citas',
  imports: [CommonModule],
  templateUrl: './gestor-citas.html',
  styleUrl: './gestor-citas.css'
})
export class GestorCitas implements OnInit{
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
