import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branch-page',
  standalone: true,
  imports: [TableModule],
  templateUrl: './branch-page.component.html',
  styleUrl: './branch-page.component.css',
})
export class BranchPageComponent implements OnInit {
  branches!: [];

  constructor(private branchService: BranchService) {}

  ngOnInit(): void {
    this.getAllBranches();
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe(
      (response: any) => {
        console.log(response);
        this.branches = response;
      },
      (err) => console.warn(err)
    );
  }
}
