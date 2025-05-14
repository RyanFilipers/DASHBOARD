import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lineChart: any;
  public barChart: any;
  public doughnutChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createCharts();
  }

  createCharts() {
    // Gráfico de Linha
    this.lineChart = new Chart('lineCanvas', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [
          {
            label: 'Vendas 2023',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            tension: 0.1
          }
        ]
      }
    });

    // Gráfico de Barras
    this.barChart = new Chart('barCanvas', {
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

    // Gráfico de Rosca
    this.doughnutChart = new Chart('doughnutCanvas', {
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
  }
}