import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPage } from './patient.page';
import { SignupComponent } from './signup/signup.component';
import { PrescriptionComponent } from './prescription/prescription.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPage,   
  },
  { path: 'signup', component: SignupComponent},
  { path: 'prescription', component: PrescriptionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
