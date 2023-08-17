import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPageRoutingModule } from './doctor-routing.module';

import { DoctorPage } from './doctor.page';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { TypeaheadComponent } from './prescription-form/typeahead/typeahead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    DoctorPageRoutingModule
  ],
  declarations: [DoctorPage, SignupComponent, PatientComponent,PrescriptionComponent,PrescriptionFormComponent,TypeaheadComponent],

})
export class DoctorPageModule {}
