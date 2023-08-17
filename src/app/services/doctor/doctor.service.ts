import { Subscription, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from '../base-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DoctorService extends BaseService {

  createDoctor(doctorData:any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Doctor/Agregar`, doctorData)); 
  }

  getDoctorByUserId(userId:any): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.backendServiceUrl}/Doctor/PorUserId?userId=${userId}`)); 
  }

  login(userData: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Authenticate/login`, userData)); 
  }

}