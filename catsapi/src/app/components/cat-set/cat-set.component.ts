import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/services/breed.service';

@Component({
  selector: 'app-cat-set',
  templateUrl: './cat-set.component.html',
  styleUrls: ['./cat-set.component.scss'],
})
export class CatSetComponent implements OnInit {

  constructor(
    public breedService: BreedService,
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
