import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-acerca-de-mi',
  imports: [CommonModule, RouterLink],
  templateUrl: './acerca-de-mi.html',
  styleUrl: './acerca-de-mi.css'
})
export class AcercaDeMi {
  frontendSkills: Skill[] = [
    { name: 'React.js', icon: 'bi bi-filetype-jsx', level: 80 },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap', level: 85 },
    { name: 'Angular', icon: 'bi bi-filetype-js', level: 75 },
  ];

  programmingSkills: Skill[] = [
    { name: 'JavaScript', icon: 'bi bi-filetype-js', level: 85 },
    { name: 'C#', icon: 'bi bi-code', level: 90 },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx', level: 80 },
    { name: 'Java', icon: 'bi bi-code', level: 70 },
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'bi bi-server', level: 80 },
    { name: 'MySQL', icon: 'bi bi-filetype-sql', level: 80 },
    { name: '.NET (MVC, Web API, Blazor)', icon: 'bi bi-hdd-network', level: 90 },
    { name: 'Express.js', icon: 'bi bi-server', level: 75 },
    { name: 'SQL Server', icon: 'bi bi-database', level: 85 },
    { name: 'MongoDB', icon: 'bi bi-database', level: 70 },
  ];

  toolsSkills: Skill[] = [
    { name: 'Docker', icon: 'bi bi-tools', level: 70 },
    { name: 'Redis', icon: 'bi bi-gear', level: 65 },
    { name: 'Entity Framework', icon: 'bi bi-code-slash', level: 85 },
    { name: 'JWT Authentication', icon: 'bi bi-shield-lock', level: 80 },
    { name: 'PayPal API', icon: 'bi bi-credit-card', level: 70 },
  ];

  /** Formación complementaria agrupada por categoría. */
  complementaryTraining: { category: string; items: string[] }[] = [
    {
      category: 'Ciberseguridad',
      items: [
        'Cisco Certified Support Technician Cybersecurity — Cisco Networking Academy',
        'Bootcamp en Ciberseguridad — Fundación Eurofirms (360 h)',
        'Seguridad Informática — Andalucía Compromiso Digital (30 h, 2020)',
      ],
    },
    {
      category: 'Desarrollo Web',
      items: [
        'Desarrollo Web Full Stack — Tech Academy de Eurofirms Foundation (480 h)',
        'Desarrollador Full Stack .NET — Fundación ONCE (465 h, 2023-2024)',
        'Mentorización .NET — Por Talento Digital, Fundación ONCE (125 h, 2024)',
        'Desarrollo JavaScript con Angular, React y Node.js — Fundación ONCE (320 h, 2023)',
        'Introducción a la Programación — Fundación ONCE (200 h, 2023)',
        'Introducción al Desarrollo Web I y II — Google Actívate (80 h, 2021)',
        'Iniciación a la Programación Web: PHP — Andalucía Compromiso Digital (30 h, 2020)',
      ],
    },
    {
      category: 'Habilidades Complementarias',
      items: [
        'Administración de Equipos Informáticos y Ofimática en la Nube — Andalucía Compromiso Digital (30 h, 2020-2021)',
        'Dinamizador de Cursos E-learning — Andalucía Compromiso Digital (30 h, 2020-2021)',
        'Introducción a la Inteligencia Artificial — Fundación ONCE (30 h, 2021)',
        'Community Manager: Profesional de Redes Sociales — Andalucía Compromiso Digital (30 h, 2020)',
      ],
    },
  ];
}
