import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { BreedService } from 'src/app/services/breed.service';

@Component({
  selector: 'app-cat-set',
  templateUrl: './cat-set.component.html',
  styleUrls: ['./cat-set.component.scss'],
})
export class CatSetComponent implements OnInit {

  public form!: FormGroup ;

  public allBreedsObj: any[] = [];

  constructor(
    public breedService: BreedService,
    public router: Router,
  ) {
    this.form = new FormGroup({});
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.form = new FormGroup({
      breed: new FormControl('', [
        Validators.required,
      ]),

      quantity: new FormControl(10, [
        Validators.required,
      ]),
    });

    this.breedService.getAllBreeds().subscribe( // load all the breeds in component variable
      (breedsResponse: any[]) => {
        console.log('breeds all->', breedsResponse[0].name);
        this.allBreedsObj = breedsResponse;
      },
    );


    this.breedService.breedInput.valueChanges.pipe(
      debounceTime(1500),
    ).subscribe(
      searchPhrase => {
        console.log('breed input->', searchPhrase);
        const foundBreed = this.breedService.findBreedIds(searchPhrase, this.allBreedsObj);
        console.log('found breed->', foundBreed);
        this.breedService.breed = foundBreed.id;
        this.breedService.getCatsPhotoSet();

      });

  }



}
