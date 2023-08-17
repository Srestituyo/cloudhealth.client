import { Subscription, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from '../base-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PatientService extends BaseService {

  createPatient(patientData:any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Patient/Agregar`, patientData)); 
  }

  getAllPatient(): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.backendServiceUrl}/Patient`)); 
  }


  getPatientByUserId(userId:any): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.backendServiceUrl}/Patient/PorUserId?userId=${userId}`)); 
  }


  login(userData: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Authenticate/login`, userData)); 
  }

}