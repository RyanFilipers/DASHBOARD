// home.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,  // ← Isso é crucial
  imports: [IonicModule, CommonModule, DashboardComponent]  // ← Importações diretas
})
export class HomePage {}