import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-assignment-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './assignment-page.component.html',
  styleUrl: './assignment-page.component.css',
})
export class AssignmentPageComponent {
  products!: [];
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
