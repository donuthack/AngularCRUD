import { Injectable } from '@angular/core';
import { catchError,retry } from 'rxjs/operators'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, pipe } from 'rxjs';
import { Customer } from './customer';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8000/api/customers';

  // handle errorrs, which can come from Django
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Back returned code ${error.status}, ' + 
        'body was: {error.error}');
    }
    return throwError(
      'Something awful happened, so you can try later:c ');
  };
  
  // POST req. - Adding new customer
  // http://localhost:8080/api/customers/create
  createObj(data) {
    return this.http.post(this.baseUrl, data)
  }
  createCustomer(data){
    return this.http.post(this.baseUrl, data)
                .pipe(
                  retry(5),
                  catchError(this.handleError)
                );
  }

  // GET req. - Retrieving customers
  // http://localhost:8080/api/customers/retrieveinfo
  retrieveAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/retrieveinfo')
                  .pipe(
                    retry(5),
                    catchError(this.handleError)
                  );
  }

  constructor(private http: HttpClient) { }
}
