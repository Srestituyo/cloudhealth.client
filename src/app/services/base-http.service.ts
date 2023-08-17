import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root',
})
export abstract class BaseService {

    protected readonly backendServiceUrl: string;

  constructor(protected readonly httpClient: HttpClient) {
    this.backendServiceUrl = environment.BACKEND_SERVICE_URL;
  }
}