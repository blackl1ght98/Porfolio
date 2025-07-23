import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glucontrol',
  imports: [CommonModule],
  templateUrl: './glucontrol.html',
  styleUrl: './glucontrol.css'
})
export class Glucontrol implements OnInit {
imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
