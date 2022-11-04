import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BreedService {

  public searchLimit = 6;

  public breed = 'beng';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(private http: HttpClient) {}

  // public getAllBreeds(): Observable<any> {
    // return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${searchLimit}&breed_ids=${breed}`, {
    //   headers: {
    //     'x-api-key':
    //       'live_4wKIZj63d0cfWTAKiJDaQLQosdxjE8s8gDEFQaOOqnDDRaOrWDvtOBgUlGGK2hkO',
    //   },
    // });
  // }

  public getCatPhotos(): Observable<any> {
    return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${this.searchLimit}&breed_ids=${this.breed}`, {
      headers: {
        'x-api-key':
          'live_4wKIZj63d0cfWTAKiJDaQLQosdxjE8s8gDEFQaOOqnDDRaOrWDvtOBgUlGGK2hkO',
      },
    });
  }

}
