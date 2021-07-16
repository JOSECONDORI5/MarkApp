import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./pages/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./pages/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartPageModule
      ),
  },
  {
    path: 'promotions',
    loadChildren: () =>
      import('./pages/promotions/promotions.module').then(
        (m) => m.PromotionsPageModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderPageModule),
  },
  {
    path: 'chatbot',
    loadChildren: () =>
      import('./pages/chatbot/chatbot.module').then((m) => m.ChatbotPageModule),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./pages/questions/questions.module').then(
        (m) => m.QuestionsPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
