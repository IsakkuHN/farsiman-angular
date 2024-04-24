import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-collaborator-page',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './collaborator-page.component.html',
  styleUrl: './collaborator-page.component.css',
})
export class CollaboratorPageComponent {
  products!: [];

  constructor() {}
}
