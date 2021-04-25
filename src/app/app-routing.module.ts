import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrayerRequestsFormComponent } from './prayer-requests-form/prayer-requests-form.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'home/pray-request',
    component: PrayerRequestsComponent,
  },
  {
    path: 'home/pray-request-form',
    component: PrayerRequestsFormComponent,
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
