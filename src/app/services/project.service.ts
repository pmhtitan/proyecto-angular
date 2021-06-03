import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Global } from './global';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    public URL: string;

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _httpClient: HttpClient) { 
    this.URL = Global.url;
  }

  testService(){
    return "probando servicio de angular";
  }

  addProject(data: Project): Observable<any>{
    return this._httpClient.post(this.URL + 'save-project',JSON.stringify(data), {headers: this.httpHeaders});
  }
}
