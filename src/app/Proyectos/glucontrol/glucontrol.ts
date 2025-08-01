import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glucontrol',
  imports: [CommonModule],
  templateUrl: './glucontrol.html',
  styleUrl: './glucontrol.css'
})
export class Glucontrol implements OnInit {
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
