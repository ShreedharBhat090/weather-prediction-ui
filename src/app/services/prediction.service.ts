import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  apiUrl: string = environment.apiURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 params= new HttpParams().set("cnt",24);

  constructor(private http: HttpClient) {}

  getPrediction(city:string): Observable<any> {
    let API_URL = this.apiUrl;
    this.params = this.params.set("q", city);
    return this.http.get(API_URL + "/prediction", {params: this.params}).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
