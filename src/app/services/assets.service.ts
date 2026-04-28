import { Injectable } from '@angular/core';
import { GestorCitas } from '../Proyectos/gestor-citas/gestor-citas';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  getImageUrls(): Promise<{ [key: string]: string[] }> {
    return Promise.resolve({
      gestorinventario: [
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
      glucontrol: ['assets/glucontrol/2.png', 'assets/glucontrol/4.png'],
      gestorCitas: [
        'assets/gestorCitas/citasUsuarios.png',
        'assets/gestorCitas/datosUsuarios.png',
        'assets/gestorCitas/login.png',
      ],
    });
  }
}
