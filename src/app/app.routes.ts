import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/AuthModule/pages/login-page/login-page.component';
import { HomePageComponent } from './modules/HomeModule/pages/home-page/home-page.component';
import { CollaboratorPageComponent } from './modules/CollaboratorModule/pages/collaborator-page/collaborator-page.component';
import { BranchPageComponent } from './modules/BranchModule/pages/branch-page/branch-page.component';
import { AssignmentPageComponent } from './modules/AssignmentModule/pages/assignment-page/assignment-page.component';
import { TravelPageComponent } from './modules/TravelModule/pages/travel-page/travel-page.component';
import { ReportPageComponent } from './modules/ReportModule/pages/report-page/report-page.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/AuthModule/pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },

  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'collaborator',
        component: CollaboratorPageComponent,
      },
      {
        path: 'branch',
        component: BranchPageComponent,
      },
      {
        path: 'assignment',
        component: AssignmentPageComponent,
      },
      {
        path: 'travel',
        component: TravelPageComponent,
      },
      {
        path: 'report',
        component: ReportPageComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];
