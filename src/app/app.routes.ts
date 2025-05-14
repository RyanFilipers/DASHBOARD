import { Routes } from '@angular/router';  // Importa o tipo Routes do Angular, que é necessário para definir as rotas do aplicativo

// Define as rotas do aplicativo
export const routes: Routes = [
  {
    path: 'home',  // Define a rota '/home'
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)  // Carrega o componente HomePage de forma dinâmica, usando lazy loading
  },
  {
    path: 'dashboard',  // Define a rota '/dashboard'
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)  // Carrega o componente DashboardComponent de forma dinâmica, usando lazy loading
  },
  {
    path: '',  // Define a rota raiz ('/')
    redirectTo: 'home',  // Redireciona a rota raiz para a rota '/home'
    pathMatch: 'full'  // Garantia de que a correspondência do caminho seja exata
  }
];
