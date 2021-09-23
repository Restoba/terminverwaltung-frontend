import { Injectable } from '@angular/core';
import { Vaccinecapacity } from './model/vaccinecapacity'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Meeting} from "./model/meeting";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/terminverwaltung/api/v1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getVaccinecapacitys(): Observable<Vaccinecapacity[]>{
    return this.http.get<Vaccinecapacity[]>(this.apiUrl + "/vaccinecapacity")
      .pipe(
        catchError(this.handleError<Vaccinecapacity[]>('getVaccinecapacity', []))
      );
  }

  public addVaccinecapacitys(vacc: Vaccinecapacity): Observable<Vaccinecapacity>{
    // @ts-ignore
    vacc.capacity += 1;
    return this.http.put<Vaccinecapacity>(this.apiUrl + "/vaccinecapacity/" + vacc.vaccinecapacityId, vacc, this.httpOptions)
      .pipe(
        catchError(this.handleError<Vaccinecapacity>('addVaccinecapacity', vacc))
      );
  }

  public subVaccinecapacitys(vacc: Vaccinecapacity): Observable<Vaccinecapacity>{
    // @ts-ignore
    vacc.capacity -= 1;
    return this.http.put<Vaccinecapacity>(this.apiUrl + "/vaccinecapacity/" + vacc.vaccinecapacityId, vacc, this.httpOptions)
      .pipe(
        catchError(this.handleError<Vaccinecapacity>('subVaccinecapacity', vacc))
      );
  }

  public getMeetings(): Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.apiUrl + "/meeting")
      .pipe(
        catchError(this.handleError<Meeting[]>('getMeeting', []))
      );
  }

  public deleteMeeting(meeting: Meeting) {
    return this.http.delete<Meeting>(this.apiUrl + "/meeting/" + meeting.meetingId)
      .pipe(
        catchError(this.handleError<Meeting>('getMeeting'))
      );
  }

  addMeeting(body: any) {
    console.log(body);
    return this.http.post<Meeting>(this.apiUrl + "/meeting", body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Meeting>('getMeeting'))
      );
  }

  public getAuth(username:string, userpasswort:string, userrolle:string): Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl + "/auth?" + "Username=" + username + "&Userpasswort=" + userpasswort + "&UserRolle=" + userrolle)
      .pipe(
        catchError(this.handleError<Boolean>('getAuth'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
