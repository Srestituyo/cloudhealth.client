import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyPageRoutingModule } from './pharmacy-routing.module';

import { PharmacyPage } from './pharmacy.page';
import { PatientComponent } from './patient/patient.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    PharmacyPageRoutingModule
  ],
  declarations: [PharmacyPage,PatientComponent,PrescriptionComponent,SignupComponent]
})
export class PharmacyPageModule {}
