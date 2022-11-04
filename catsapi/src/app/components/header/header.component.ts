import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOneKitty } from 'src/app/interfaces/IOneKitty';
import { BreedService } from 'src/app/services/breed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  public title = ' Nice cats app';

  // public setOfCats: IOneKitty[] = [];

  constructor(
    private breedService: BreedService,
    private router: Router,
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  public getCatsPhotoSet(): void {
    let cats = this.breedService.getCatPhotos();
    cats.subscribe((respond: IOneKitty[]) => {
      console.log('cats set ->', respond);
      this.breedService.setOfCats = respond;
      this.router.navigateByUrl('set');
    });
  }

  public navigateToMainpage(): void {
    this.router.navigateByUrl('');
  }


}
