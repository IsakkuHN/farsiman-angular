import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AssignmentService } from '../../services/assignment.service';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CollaboratorService } from '../../../CollaboratorModule/services/collaborator.service';
import { BranchService } from '../../../BranchModule/services/branch.service';
import { DropdownModule } from 'primeng/dropdown';
import {
  AssignmentInterface,
  BranchInterface,
  CollaboratorInterface,
} from '../../../../interfaces/interfaces';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-assignment-page',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './assignment-page.component.html',
  styleUrl: './assignment-page.component.css',
})
export class AssignmentPageComponent implements OnInit {
  assignments!: [];
  visible: boolean = false;

  selectedBranch!: any;
  branches!: any[];

  selectedCollaborator!: any;
  collaborators!: any[];

  distance: number = 0;
  assigmentForm = new FormGroup({
    branch: new FormControl<BranchInterface | null>(null, Validators.required),
    collaborator: new FormControl<CollaboratorInterface | null>(
      null,
      Validators.required
    ),
    distance: new FormControl<number>(1, Validators.required),
  });

  showDialog() {
    this.visible = true;
    this.loadFormData();
  }

  constructor(
    private assignmentService: AssignmentService,
    private collaboratorService: CollaboratorService,
    private branchService: BranchService,
    private messageService: MessageService
  ) {}

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

  loadFormData() {
    this.branchService
      .getAllBranches()
      .subscribe((response: any) => (this.branches = response));
    this.collaboratorService
      .getAllCollaborators()
      .subscribe((response: any) => (this.collaborators = response));
  }

  onSubmit() {
    const { branch, collaborator, distance } = this.assigmentForm.value;
    if (
      this.assigmentForm.valid &&
      branch !== null &&
      collaborator !== null &&
      collaborator !== undefined &&
      branch !== undefined &&
      distance !== null &&
      distance !== undefined
    ) {
      const assignment: AssignmentInterface = {
        branchId: branch.id,
        collaboratorId: collaborator.id,
        distance,
      };
      this.assignmentService.createNewAssignment(assignment).subscribe(
        (response: any) => {
          this.getAllAssignments();
          this.messageService.add({
            severity: 'success',
            summary: 'Se ha agregado con exito',
          });
          this.assigmentForm.reset();
          this.visible = false;
        },
        (error: any) => {
          this.messageService.add({
            severity: 'warn',
            summary:
              'Ocurrio un error y no se pudo almacenar el trayecto de forma correcta.',
          });
        }
      );
    }
    console.log(this.assigmentForm.value);
  }
}
