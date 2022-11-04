import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreedService } from 'src/app/services/breed.service';

@Component({
  selector: 'app-cat-set',
  templateUrl: './cat-set.component.html',
  styleUrls: ['./cat-set.component.scss'],
})
export class CatSetComponent implements OnInit {

  public form!: FormGroup ;

  constructor(
    public breedService: BreedService,
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

  }

}
