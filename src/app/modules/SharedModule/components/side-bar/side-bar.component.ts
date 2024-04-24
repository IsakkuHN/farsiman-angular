import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, ButtonModule, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  logout() {
    this.localStorageService.remove('token');
    this.router.navigate(['/auth']);
  }
}
