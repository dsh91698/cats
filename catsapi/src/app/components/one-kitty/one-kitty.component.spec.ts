import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneKittyComponent } from './one-kitty.component';

describe('OneKittyComponent', () => {
  let component: OneKittyComponent;
  let fixture: ComponentFixture<OneKittyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneKittyComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OneKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
