import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-travel-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './travel-page.component.html',
  styleUrl: './travel-page.component.css',
})
export class TravelPageComponent {
  products!: [];

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
