import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  imports: [CommonModule],
  templateUrl: './acerca-de-mi.html',
  styleUrl: './acerca-de-mi.css'
})
export class AcercaDeMi {
 frontendSkills = [
    { name: 'React.js', icon: 'bi bi-filetype-jsx' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
    { name: 'Angular', icon: 'bi bi-filetype-js' }
  ];

  programmingSkills = [
    { name: 'JavaScript', icon: 'bi bi-filetype-js' },
    { name: 'C#', icon: 'bi bi-code' },
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
    { name: 'Java', icon: 'bi bi-code' }
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'bi bi-server' },
    { name: 'MySQL', icon: 'bi bi-filetype-sql' },
    { name: '.NET (MVC, Web API, Blazor)', icon: 'bi bi-hdd-network' },
    { name: 'Express.js', icon: 'bi bi-server' },
    { name: 'SQL Server', icon: 'bi bi-database' },
    { name: 'MongoDB', icon: 'bi bi-database' }
  ];

  toolsSkills = [
    { name: 'Docker', icon: 'bi bi-tools' },
    { name: 'Redis', icon: 'bi bi-gear' },
    { name: 'Entity Framework', icon: 'bi bi-code-slash' },
    { name: 'JWT Authentication', icon: 'bi bi-shield-lock' },
    { name: 'PayPal API', icon: 'bi bi-credit-card' }
  ];
}
