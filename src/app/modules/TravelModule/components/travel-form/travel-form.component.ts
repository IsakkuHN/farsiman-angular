import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {
  Branch,
  Collaborator,
  Driver,
  Assignment,
  TravelRequest,
} from '../../../../interfaces/interfaces';
import { BranchService } from '../../../BranchModule/services/branch.service';
import { CollaboratorService } from '../../../CollaboratorModule/services/collaborator.service';
import {
  TableModule,
  TableRowSelectEvent,
  TableRowUnSelectEvent,
} from 'primeng/table';
import { AssignmentService } from '../../../AssignmentModule/services/assignment.service';
import { DriverService } from '../../../DriverModule/services/driver.service';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    TableModule,
  ],
  templateUrl: './travel-form.component.html',
  styleUrl: './travel-form.component.css',
})
export class TravelFormComponent implements OnInit {
  constructor(
    private branchService: BranchService,
    private collaboratorService: CollaboratorService,
    private assignmentService: AssignmentService,
    private driverService: DriverService
  ) {}

  minDate: Date = new Date();
  unselectTravelers: boolean | null = null;

  collaborators: Collaborator[] = [];
  selectedCollaborators: Collaborator[] = [];

  assigments: Assignment[] = [];

  drivers: Driver[] = [];
  selectedDriver!: Driver;

  branches: Branch[] = [];
  selectedBranch!: Branch;
  travelRatePerKm!: number;
  travelDistance: number = 0;

  travelForm: FormGroup = new FormGroup({
    travelDate: new FormControl<string | null>(null),
    travelRate: new FormControl<number>(0),
    driverId: new FormControl<string | null>(null),
    branchId: new FormControl<number | null>(null),
  });

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData() {
    this.branchService.getAllBranches().subscribe((res: any) => {
      this.branches = res;
    });

    this.driverService.getAllDrivers().subscribe((res: any) => {
      this.drivers = res;
      console.log(res);
    });
  }

  loadCollaborators(branchId: number) {
    if (this.selectedBranch != null) {
      this.assignmentService
        .getAllAssignmentsByBranchId(branchId)
        .subscribe((res: any) => {
          this.assigments = res;
        });
    } else {
      this.assigments = [];
    }
  }

  sendTravel() {
    if (
      this.travelForm.valid &&
      this.selectedCollaborators.length > 0 &&
      this.travelDistance <= 100
    ) {
      const travelRequest: TravelRequest = {
        travelDate: this.travelForm.value.travelDate,
        travelDistance: this.travelDistance,
        driverId: this.travelForm.value.driverId.id,
        branchId: this.travelForm.value.branchId.id,
        travelers: this.selectedCollaborators.map((c) => c.id),
        travelRate: this.travelForm.value.travelRate,
      };
      console.log(travelRequest);
    }
  }

  selectedRow(selectEvent: TableRowSelectEvent) {
    const selectedAssignment = this.assigments.find((assigment) => {
      return assigment.key.collaboratorId == selectEvent.data.id;
    });
    if (selectedAssignment) {
      this.travelDistance += selectedAssignment.distance;
    }
  }

  unselectedRow(selectEvent: TableRowUnSelectEvent) {
    const selectedAssignment = this.assigments.find((assigment) => {
      return assigment.collaborator.id === selectEvent.data.id;
    });
    if (selectedAssignment) {
      this.travelDistance -= selectedAssignment.distance;
    }
  }

  clearSelectedCollaborators() {
    this.selectedCollaborators = [];
  }
}
