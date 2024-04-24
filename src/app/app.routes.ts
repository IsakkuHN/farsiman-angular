import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/AuthModule/pages/login-page/login-page.component';
import { HomePageComponent } from './modules/HomeModule/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/AuthModule/pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },

  {
    path: 'collaborator',
    loadChildren: () =>
      import(
        './modules/CollaboratorModule/pages/collaborator-page/collaborator-page.component'
      ).then((m) => m.CollaboratorPageComponent),
    outlet: 'main',
  },
  {
    path: 'branch',
    loadChildren: () =>
      import(
        './modules/BranchModule/pages/branch-page/branch-page.component'
      ).then((m) => m.BranchPageComponent),
    outlet: 'main',
  },
  {
    path: 'assignments',
    loadChildren: () =>
      import(
        './modules/AssignmentModule/pages/assignment-page/assignment-page.component'
      ).then((m) => m.AssignmentPageComponent),
    outlet: 'main',
  },
  {
    path: 'travel',
    loadChildren: () =>
      import(
        './modules/TravelModule/pages/travel-page/travel-page.component'
      ).then((m) => m.TravelPageComponent),
    outlet: 'main',
  },
  {
    path: 'report',
    loadChildren: () =>
      import(
        './modules/ReportModule/pages/report-page/report-page.component'
      ).then((m) => m.ReportPageComponent),
    outlet: 'main',
  },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];
