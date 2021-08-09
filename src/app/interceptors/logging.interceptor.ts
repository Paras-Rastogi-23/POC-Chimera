import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("HttpRequest Information" + request); //get the request details

    // //changing the value of Authhorization
    // let httpAuth = request.headers.get('Authorization');
    // httpAuth = 'AddingValueFromInterceptor' + httpAuth 
    // // request.headers.append('NewAuthorization',httpAuth);
    // console.log(httpAuth,'change in the value of Authorization')


    return next.handle(request);
  }
}
