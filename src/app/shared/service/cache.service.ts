import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {BaseUrl} from '../constant';

@Injectable()
export class CacheService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userDetail: any;
  processData: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(`${BaseUrl}/user`)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any[]>('getDataList', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  loginUser(user): Observable<any> {
    return this.http.post(`${BaseUrl}/user/login`, user, this.httpOptions)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any>('loginUser', null))
      );
  }

  registerUser(user): Observable<any> {
    return this.http.post(`${BaseUrl}/user/register`, user, this.httpOptions)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any>('registerUser', null))
      );
  }

  getUserMoneyData(type, userId): Observable<any[]> {
    return this.http.get<any[]>(`${BaseUrl}/${type}/user/${userId}`)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any[]>('getUserMoneyData', []))
      );
  }

  getAllPaymentHistory(type, user): Observable<any> {
    return this.http.get(`${BaseUrl}/payment/${type}/${user.userId}`)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any[]>('getAllPaymentHistory', []))
      );
  }

  getDashboardData(user): Observable<any> {
    return this.http.get(`${BaseUrl}/user/${user.userId}/dashboard`)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any[]>('getDashboardData', null))
      );
  }

  lendMoney(data): Observable<any> {
    return this.http.post(`${BaseUrl}/lend`, data, this.httpOptions)
      .pipe(
        map( response => {
          return response;
        }),
        catchError(this.handleError<any>('lendMoney', null))
      );
  }
}
