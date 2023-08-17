import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { RouteReuseStrategy } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PrescriptionComponent } from './prescription/prescription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    PatientPageRoutingModule
  ],
  declarations: [PatientPage, SignupComponent,PrescriptionComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

})
export class PatientPageModule {}
