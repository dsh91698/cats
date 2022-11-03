import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OneKittyService {
  constructor(private http: HttpClient) {}

  public getRandomKitty(): any {
    return this.http.get(`https://api.thecatapi.com/v1/images/search`, {
      headers: {
        'x-api-key':
          'live_4wKIZj63d0cfWTAKiJDaQLQosdxjE8s8gDEFQaOOqnDDRaOrWDvtOBgUlGGK2hkO',
      },
    });
  }
}
