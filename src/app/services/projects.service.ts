import { Injectable } from '@angular/core';

export interface ProjectFeature {
    sectionTitle: string;
    description?: string;
    items: { label: string; detail?: string }[];
}

export interface Project {
    key: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    stack: string[];
    repoUrl: string;
    demoUrl?: string;
    images: string[];
    highlight?: boolean;
    /** Características opcionales, mostradas en la página de detalle */
    features?: ProjectFeature[];
}

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    /**
     * Catálogo único de proyectos del portfolio.
     * Consumido por home y por las páginas de detalle vía ProjectsResolver.
     */
    private readonly projects: Project[] = [
        {
            key: 'gestorinventario',
            title: 'Gestor de Inventario',
            shortDescription:
                'Aplicación web full stack para la gestión eficiente de inventarios en e-commerce, con PayPal, JWT y Docker.',
            longDescription:
                'Solución avanzada para la gestión de inventarios en plataformas de comercio electrónico, ' +
                'desarrollada con .NET 9.0 MVC para el frontend y backend, garantizando robustez, ' +
                'escalabilidad y seguridad.',
            stack: ['.NET 9.0 MVC', 'C#', 'Entity Framework Core', 'SQL Server', 'Redis', 'Docker', 'Bootstrap', 'JWT', 'PayPal API'],
            repoUrl: 'https://github.com/blackl1ght98/GestorInventario',
            images: [
                'assets/gestorInventario/carrito.png',
                'assets/gestorInventario/crear-usuario.png',
                'assets/gestorInventario/gestion-roles.png',
                'assets/gestorInventario/login.png',
                'assets/gestorInventario/panel-admin.png',
                'assets/gestorInventario/pedidos.png',
                'assets/gestorInventario/planes-paypal.png',
                'assets/gestorInventario/productos.png',
                'assets/gestorInventario/proveedores.png',
                'assets/gestorInventario/recuperar-contraseña.png',
                'assets/gestorInventario/rembolsos.png',
                'assets/gestorInventario/roles.png',
                'assets/gestorInventario/subscriptores.png',
            ],
            highlight: true,
        },
        {
            key: 'gestor-tareas',
            title: 'Gestor de Tareas',
            shortDescription:
                'Aplicación web para registrar, organizar y seguir tareas pendientes con sincronización en la nube.',
            longDescription:
                'Finalizado en agosto de 2023, este proyecto ofrece una interfaz moderna y funcional para ' +
                'mejorar la organización personal, evitando olvidos de tareas importantes mediante sincronización ' +
                'en la nube con Firebase.',
            stack: ['Angular', 'Bootstrap', 'HTML5', 'JavaScript', 'CSS3', 'Firebase'],
            repoUrl: 'https://github.com/blackl1ght98/gestortareas',
            demoUrl: 'https://tareas-66631.firebaseapp.com/home',
            images: [
                'assets/gestorTareas/gestor.png',
                'assets/gestorTareas/login.png',
                'assets/gestorTareas/registro.png',
            ],
        },
        {
            key: 'glucontrol',
            title: 'Gluco Control',
            shortDescription:
                'Proyecto colaborativo para el monitoreo de niveles de glucosa, con descarga de mediciones en PDF.',
            longDescription:
                'Aplicación web diseñada para personas diabéticas, desarrollada en equipo para facilitar el ' +
                'seguimiento y gestión de mediciones de glucosa de manera accesible. El frontend utiliza Angular, ' +
                'HTML, CSS3 y TypeScript, mientras que el backend se desarrolló con Entity Framework, C# y una ' +
                'base de datos.',
            stack: ['Angular', 'HTML5', 'CSS3', 'TypeScript', 'Entity Framework', 'C#'],
            repoUrl: 'https://github.com/3ntr0pia/Glucontrol_App',
            images: ['assets/glucontrol/2.png', 'assets/glucontrol/4.png'],
        },
        {
            key: 'gestorCitas',
            title: 'Gestor de Citas',
            shortDescription:
                'Agenda en línea con arquitectura separada: backend Node.js/Express y frontend Angular.',
            longDescription:
                'Aplicación para gestionar citas de manera eficiente, con un frontend dinámico en Angular y ' +
                'un backend robusto en .NET 7.0.',
            stack: ['Angular', 'Node.js', 'Express', '.NET 7.0'],
            repoUrl: 'https://github.com/blackl1ght98/GestorCitas',
            images: [
                'assets/gestorCitas/citasUsuario.png',
                'assets/gestorCitas/datosUsuario.png',
                'assets/gestorCitas/login.png',
            ],
        },
        {
            key: 'introASP',
            title: 'Introducción a MVC',
            shortDescription:
                'Proyecto educativo para aprender el patrón MVC con .NET MVC y Entity Framework.',
            longDescription:
                'Aplicación web para gestionar cervezas, desarrollada con .NET 7.0 MVC para el frontend y ' +
                'backend, ofreciendo una interfaz dinámica y un sistema robusto y escalable.',
            stack: ['.NET 7.0 MVC', 'Entity Framework', 'C#'],
            repoUrl: 'https://github.com/blackl1ght98/CRUD-Proyecto-MVC',
            images: [],
        },
    ];

    /** Todos los proyectos, ordenados (highlight primero). */
    getProjects(): Project[] {
        return [...this.projects].sort((a, b) => Number(!!b.highlight) - Number(!!a.highlight));
    }

    /** Recupera un proyecto por su key (usado por el resolver de rutas). */
    getProjectByKey(key: string): Project | undefined {
        return this.projects.find((p) => p.key === key);
    }
}