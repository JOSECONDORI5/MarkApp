import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus: MenuItem[] = [
    {
      icon: 'home',
      name: 'Explorar',
      redirectTo: '/home',
    },
    {
      icon: 'search',
      name: 'Buscar',
      redirectTo: '/search',
    },
    {
      icon: 'notifications',
      name: 'Notificaciones',
      redirectTo: '/notifications',
      badge: true,
    },
    {
      icon: 'cart',
      name: 'Carrito de compras',
      redirectTo: '/shopping-cart',
    },
    {
      icon: 'megaphone',
      name: 'Aplicar promoción',
      redirectTo: '/promotions',
    },
    {
      icon: 'newspaper',
      name: 'Historial de pedidos',
      redirectTo: '/order',
    },
    {
      icon: 'chatbox-ellipses',
      name: 'Servicio al cliente',
      redirectTo: '/chatbot',
    },
    {
      icon: 'help-circle',
      name: 'Preguntas frecuentes',
      redirectTo: '/questions',
    },
    {
      icon: 'settings',
      name: 'Configuración',
      redirectTo: '/settings',
    },
  ];

  constructor(private menu: MenuController) {}

  ngOnInit() {}
}
