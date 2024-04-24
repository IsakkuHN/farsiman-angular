import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignment-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './assignment-page.component.html',
  styleUrl: './assignment-page.component.css',
})
export class AssignmentPageComponent implements OnInit {
  assignments!: [];
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.getAllAssignments();
  }

  getAllAssignments() {
    this.assignmentService.getAllAssignments().subscribe(
      (response: any) => {
        console.log(response);
        this.assignments = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
