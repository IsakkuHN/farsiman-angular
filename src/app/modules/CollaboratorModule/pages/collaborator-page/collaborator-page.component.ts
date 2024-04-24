import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CollaboratorService } from '../../services/collaborator.service';

@Component({
  selector: 'app-collaborator-page',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './collaborator-page.component.html',
  styleUrl: './collaborator-page.component.css',
})
export class CollaboratorPageComponent implements OnInit {
  collaborators!: [];

  constructor(private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    this.getAllCollaborators();
  }

  getAllCollaborators() {
    this.collaboratorService.getAllCollaborators().subscribe(
      (response: any) => {
        console.log(response);
        this.collaborators = response;
      },
      (error) => {
        console.warn(error);
      }
    );
  }
}
