import { Component, OnInit } from '@angular/core';
import { OneKittyService } from './one-kitty.service';

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

  public getNewKitty(){
    
    let oneRandomKitty = this.oneKittyService.getRandomKitty();
    oneRandomKitty.subscribe((respond: any) => {
      console.log(respond[0].url);
      this.oneRandomeKittyUrl = respond[0].url;
    });

  }
}
