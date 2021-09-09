import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddBlogComponent } from './add-blog/add-blog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl: string = 'https://localhost:44356/blog';
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) {}

  ngOnit()
  {
   
  }

  //show list of items
  list(): Observable<any> {
    return this.http.get(this.apiurl).pipe(
      catchError(this.handleError)
    );
  }

  getItem(id: any): Observable<any> {
    return this.http.get(`${this.apiurl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data : any) : Observable<any>
  {
    return this.http.post(this.apiurl,data)
  }

  

  

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${this.apiurl}/${id}`, data).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${this.apiurl}/${id}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
