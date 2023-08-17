import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPage } from './doctor.page';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorPage
  },
  { path: 'signup', component: SignupComponent},
  { path: 'patient/:id', component: PatientComponent},
  { path: 'prescription-form/:id', component: PrescriptionFormComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule {}
