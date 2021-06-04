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

    public url: string;

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _httpClient: HttpClient) { 
    this.url = Global.url;
  }

  addProject(data: Project): Observable<any>{
    return this._httpClient.post(this.url + 'save-project',JSON.stringify(data), {headers: this.httpHeaders});
  }

  getProjects(): Observable<any>{
    return this._httpClient.get(this.url+'projects', {headers: this.httpHeaders});
  }
}
