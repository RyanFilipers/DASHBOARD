import { Component } from '@angular/core';  // Importa o decorador Component do Angular
import { 
  IonContent,  // Componente de conteúdo principal do Ionic
  IonButton,   // Componente de botão do Ionic
  IonIcon,     // Componente de ícone do Ionic
  IonImg,      // Componente de imagem do Ionic
  IonCard,     // Componente de card do Ionic
  IonCardHeader, // Cabeçalho do card
  IonCardTitle,  // Título do card
  IonCardContent // Conteúdo do card
} from '@ionic/angular/standalone';  // Importa os componentes necessários do Ionic
import { CommonModule } from '@angular/common';  // Importa o módulo comum do Angular (necessário para a funcionalidade do app)
import { RouterModule } from '@angular/router';  // Importa o módulo de roteamento do Angular

@Component({
  selector: 'app-home',  // Define o seletor para este componente
  templateUrl: './home.page.html',  // Define o caminho para o arquivo de template HTML
  styleUrls: ['./home.page.scss'],  // Define o caminho para os estilos CSS específicos do componente
  standalone: true,  // Declara o componente como standalone (pode ser utilizado de forma independente)
  imports: [  // Lista dos módulos que este componente importa
    CommonModule,
    RouterModule,  // Necessário para o uso de navegação entre páginas
    IonContent, 
    IonButton, 
    IonIcon,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class HomePage {
  constructor() { }  // Construtor vazio, sem lógica adicional no momento
}
