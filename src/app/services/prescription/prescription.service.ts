import { Subscription, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from '../base-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PrescriptionService extends BaseService {

  createPrescription(prescriptionData:any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Prescription/Agregar`, prescriptionData)); 
  }

  updatePrescription(prescriptionData:any): Promise<any> {
    return lastValueFrom(this.httpClient.put(`${this.backendServiceUrl}/Prescription/Actualizar`, prescriptionData)); 
  }

  getAllPatientPrescription(patientId:any): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.backendServiceUrl}/Prescription/PorPaciente/${patientId}`)); 
  }

  login(userData: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Authenticate/login`, userData)); 
  }

}