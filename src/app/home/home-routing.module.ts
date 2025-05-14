import { NgModule } from '@angular/core'; // Importando o módulo do Angular para definição de módulos
import { Routes, RouterModule } from '@angular/router'; // Importando as funcionalidades de roteamento do Angular
import { HomePage } from './home.page'; // Importando o componente HomePage, que será carregado nesta rota

// Definindo as rotas para a aplicação
const routes: Routes = [
  {
    path: '', // Rota padrão para a página inicial
    component: HomePage // Quando a rota '/' for acessada, será exibido o componente HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configurando o roteamento para o módulo específico, usando RouterModule.forChild()
  exports: [RouterModule], // Exportando o RouterModule para que a aplicação possa usá-lo
})
export class HomePageRoutingModule {} // Exportando o módulo de roteamento específico para a HomePage
