import { Subscription, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { BaseService } from '../base-http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {

  createUser(patientData:any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Authenticate/register`, patientData)); 
 
  }

  login(userData: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(`${this.backendServiceUrl}/Authenticate/login`, userData)); 
  }

//   login(userData:any): Promise<any> {
//     return new Promise((resolver) => {
//       let subscription: Subscription;
//       subscription = this.httpClient
//         .post(`${this.backendServiceUrl}/Authenticate/login`,userData)
//         .subscribe((services) => {

//             console.log(services);
//           if(subscription) {
//             subscription.unsubscribe();
//           }

//           return services;
//         })
//     });
//   }

  

}