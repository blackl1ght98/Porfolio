import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-inventario',
  imports: [CommonModule],
  templateUrl: './gestor-inventario.html',
  styleUrl: './gestor-inventario.css'
})
export class GestorInventario implements OnInit {
imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
