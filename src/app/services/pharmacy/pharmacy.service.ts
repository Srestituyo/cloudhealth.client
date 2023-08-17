import { Subscription, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from '../base-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PharmacyService extends BaseService {

  createPharmacist(patientData:any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Pharmacist/Agregar`, patientData)); 
  }
 

}