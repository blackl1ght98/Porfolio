import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gestor-citas',
  imports: [CommonModule],
  templateUrl: './gestor-citas.html',
  styleUrl: './gestor-citas.css'
})
export class GestorCitas implements OnInit{
 imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
