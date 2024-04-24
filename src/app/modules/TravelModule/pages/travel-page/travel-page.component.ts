import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TravelService } from '../../services/travel.service';
@Component({
  selector: 'app-travel-page',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './travel-page.component.html',
  styleUrl: './travel-page.component.css',
})
export class TravelPageComponent implements OnInit {
  travels!: [];

  visible: boolean = false;

  constructor(private travelService: TravelService) {}

  showDialog() {
    this.visible = true;
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
}
