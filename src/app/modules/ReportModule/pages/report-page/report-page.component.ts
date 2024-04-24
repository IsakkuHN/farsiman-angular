import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css',
})
export class ReportPageComponent {
  products!: [];

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
