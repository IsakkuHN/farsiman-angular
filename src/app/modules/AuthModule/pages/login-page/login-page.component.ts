import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { LoginService } from '../../services/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../../../SharedModule/services/local-storage.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  sendloginAttempt() {
    this.loginService.loginAttempt({ ...this.login.value }).subscribe(
      (response: any) => {
        this.login.reset();
        this.localStorageService.set('token', response.token);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Credenciales no validas',
          detail: 'Intente ingresar de nuevo con las credenciales correctas.',
        });
      }
    );
  }
}
