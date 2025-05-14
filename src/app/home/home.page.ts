import { Component } from '@angular/core';
import { 
  IonContent, 
  IonButton, 
  IonIcon,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
  constructor() { }
}