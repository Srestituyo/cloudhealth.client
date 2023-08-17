import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyPage } from './pharmacy.page';
import { PatientComponent } from './patient/patient.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyPage
  },
  { path: 'patient/:id', component: PatientComponent},
  { path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyPageRoutingModule {}
