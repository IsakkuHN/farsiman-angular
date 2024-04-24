import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-branch-page',
  standalone: true,
  imports: [TableModule],
  templateUrl: './branch-page.component.html',
  styleUrl: './branch-page.component.css',
})
export class BranchPageComponent {
  products!: [];
}
