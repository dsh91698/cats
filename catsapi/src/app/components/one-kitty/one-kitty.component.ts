import { Component, OnInit } from '@angular/core';
import { IOneKitty } from '../../interfaces/IOneKitty';
import { OneKittyService } from '../../services/one-kitty.service';


@Component({
  selector: 'app-one-kitty',
  templateUrl: './one-kitty.component.html',
  styleUrls: ['./one-kitty.component.scss'],
})
export class OneKittyComponent implements OnInit {

  public oneRandomeKittyUrl = '';

  constructor(private oneKittyService: OneKittyService) {}

  ngOnInit(): void {
    this.getNewKitty();
  }

  public getNewKitty(): void {
    let oneRandomKitty = this.oneKittyService.getRandomKitty();
    oneRandomKitty.subscribe((respond: IOneKitty[]) => {
      console.log(respond);
      this.oneRandomeKittyUrl = respond[0].url;
    });
  }
}
