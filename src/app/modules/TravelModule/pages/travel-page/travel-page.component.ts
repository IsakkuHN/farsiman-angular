import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TravelService } from '../../services/travel.service';
import { processResponse } from '../../../../utils/extract';
import {
  Branch,
  Collaborator,
  Driver,
  Travel,
  User,
} from '../../../../interfaces/interfaces';
import { TravelFormComponent } from '../../components/travel-form/travel-form.component';
@Component({
  selector: 'app-travel-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, TravelFormComponent],
  templateUrl: './travel-page.component.html',
  styleUrl: './travel-page.component.css',
})
export class TravelPageComponent implements OnInit {
  travels!: [];
  travelDetail: any;

  user: User | null = null;
  branch: Branch | null = null;
  driver: Driver | null = null;
  travelers: Collaborator[] = [];
  viaje: Travel | null = null;

  visible: boolean = false;
  visibleTravelDetails: boolean = false;

  constructor(private travelService: TravelService) {}

  showDialog() {
    this.visible = true;
  }

  showTravelDetails(travelId: number) {
    this.visibleTravelDetails = true;
    this.getTravelDetails(travelId);
  }

  ngOnInit(): void {
    this.getAllTravels();
  }

  getAllTravels() {
    this.travelService.getAllTravels().subscribe(
      (response: any) => {
        this.travels = response;
        console.log(response);
      },
      (err: any) => {
        console.warn(err);
      }
    );
  }

  getTravelDetails(travelId: number) {
    this.travelService.getTravelersByTravelId(travelId).subscribe(
      (response: any) => {
        console.log(response);
        this.travelDetail = JSON.parse(processResponse(response));
        this.user = this.travelDetail.user;
        this.branch = this.travelDetail.branch;
        this.driver = this.travelDetail.driver;
        this.travelers = this.travelDetail.travelers;
        this.viaje = this.travelDetail.viaje;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
