import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-asp',
  imports: [CommonModule],
  templateUrl: './intro-asp.html',
  styleUrl: './intro-asp.css'
})
export class IntroAsp implements OnInit {
imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
