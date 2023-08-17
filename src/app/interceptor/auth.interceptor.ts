import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let token = sessionStorage.getItem('token');
    if (token) {
        // If we have a token, we set it to the header
        request = request.clone({
           setHeaders: {Authorization: `bearer ${token}`}
        });
    }

    return next.handle(request).pipe(
        catchError((err) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                // redirect user to the logout page
             }
          }
          return throwError(err);
        })
    )
        
  }
}