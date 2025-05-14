import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent,
  IonProgressBar 
} from '@ionic/angular/standalone'; // Importando componentes do Ionic
import { CommonModule } from '@angular/common'; // Importando o módulo comum do Angular
import { Chart, registerables } from 'chart.js'; // Importando o Chart.js para gráficos

@Component({
  selector: 'app-dashboard', // Definindo o seletor do componente
  templateUrl: './dashboard.component.html', // Template HTML do componente
  styleUrls: ['./dashboard.component.scss'], // Arquivo de estilos do componente
  standalone: true, // Componente standalone (não precisa de módulo externo)
  imports: [ // Declarando os módulos necessários para este componente
    CommonModule,
    IonContent, IonGrid, IonRow, IonCol,
    IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonProgressBar
  ]
})
export class DashboardComponent implements AfterViewInit { 
  // Usando AfterViewInit para inicializar gráficos após a view ser renderizada
  @ViewChild('lineCanvas') lineCanvas!: ElementRef; // Referência para o canvas do gráfico de linha
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef; // Referência para o canvas do gráfico de rosca
  @ViewChild('barCanvas') barCanvas!: ElementRef; // Referência para o canvas do gráfico de barras

  constructor() {
    Chart.register(...registerables); // Registrando todos os tipos de gráficos disponíveis no Chart.js
  }

  // Método chamado após a visualização ser carregada
  ngAfterViewInit() {
    this.createCharts(); // Chamando a função para criar os gráficos
  }

  private createCharts() {
    // Gráfico de Linha (Vendas Mensais)
    new Chart(this.lineCanvas.nativeElement, {
      type: 'line', // Tipo de gráfico: linha
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'], // Rótulos para os meses
        datasets: [{
          label: 'Vendas 2024', // Legenda do gráfico
          data: [35, 20, 24, 36, 15], // Dados das vendas por mês
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
          borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
          borderWidth: 1, // Espessura da linha
          tension: 0.1 // Curvatura da linha
        }]
      },
      options: {
        responsive: true, // Gráfico se ajusta ao tamanho da tela
        maintainAspectRatio: false // Mantém a proporção do gráfico
      }
    });

    // Gráfico de Rosca (Dispositivos)
    new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut', // Tipo de gráfico: rosquinha
      data: {
        labels: ['Loja Física', 'Instagram', 'Whatsapp'], // Rótulos para os tipos de dispositivos
        datasets: [{
          data: [30, 60, 40], // Dados para os dispositivos
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)', // Cor para Desktop
            'rgba(54, 162, 235, 0.7)', // Cor para Mobile
            'rgba(255, 206, 86, 0.7)' // Cor para Tablet
          ]
        }]
      }
    });

    // Gráfico de Barras (Vendas por Produto)
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar', // Tipo de gráfico: barras
      data: {
        labels: ['iPhone XR', 'iPhone 12 Pro', 'Galaxy S23 Ultra', 'Galaxy Z Flip'], // Rótulos para os produtos
        datasets: [{
          label: 'Vendas por Produto', // Legenda do gráfico
          data: [12, 19, 3, 5], // Dados das vendas por produto
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Cor para Produto A
            'rgba(54, 162, 235, 0.2)', // Cor para Produto B
            'rgba(255, 206, 86, 0.2)', // Cor para Produto C
            'rgba(75, 192, 192, 0.2)'  // Cor para Produto D
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', // Cor da borda para Produto A
            'rgba(54, 162, 235, 1)', // Cor da borda para Produto B
            'rgba(255, 206, 86, 1)', // Cor da borda para Produto C
            'rgba(75, 192, 192, 1)'  // Cor da borda para Produto D
          ],
          borderWidth: 1 // Espessura das bordas das barras
        }]
      }
    });
  }
}
