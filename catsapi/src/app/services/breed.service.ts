import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOneKitty } from '../interfaces/IOneKitty';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class BreedService {

  public breedInput = new FormControl();


  public searchLimit = 6;

  public breed = '';

  public setOfCats: IOneKitty[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  public getAllBreeds(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds',
    );
  }


  public findBreedIds(
    searchString: string,
    breedsArr: any[]) {

    const findBreeds = breedsArr.filter(a =>
      a.name.toLowerCase().includes(searchString.toLowerCase())
          || a.id.includes(searchString.toLowerCase()));

    return  findBreeds[0]; // final
  }

  public getCatPhotos(): Observable<any> {
    if (this.breed) {
      return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${this.searchLimit}&breed_ids=${this.breed}`);
    } else {
      return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${this.searchLimit}&has_breeds=1`);
    }
  }

  public getCatsPhotoSet(): void {
    let cats = this.getCatPhotos();
    cats.subscribe((respond: IOneKitty[]) => {
      this.setOfCats = respond;
    });
  }


}
