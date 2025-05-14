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
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonGrid, IonRow, IonCol,
    IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonProgressBar
  ]
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef;
  @ViewChild('barCanvas') barCanvas!: ElementRef;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createCharts();
  }

  private createCharts() {
    // Gráfico de Linha (Vendas Mensais)
    new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [{
          label: 'Vendas 2023',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    // Gráfico de Rosca (Dispositivos)
    new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
          data: [35, 45, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ]
        }]
      }
    });

    // Gráfico de Barras (Vendas por Produto)
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
          label: 'Vendas por Produto',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }
}