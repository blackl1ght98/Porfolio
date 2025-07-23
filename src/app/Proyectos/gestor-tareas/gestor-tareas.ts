import { Component, OnInit } from '@angular/core';
import { getImageUrls } from '../../environments/environments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-tareas',
  imports: [CommonModule],
  templateUrl: './gestor-tareas.html',
  styleUrl: './gestor-tareas.css'
})
export class GestorTareas implements OnInit{
imageUrls: { [key: string]: string[] } = {};
  async ngOnInit() {
    this.imageUrls = await getImageUrls();
  }
}
