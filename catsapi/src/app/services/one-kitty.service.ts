import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class OneKittyService {

  constructor(private http: HttpClient) {}

  public getRandomKitty(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }

}
