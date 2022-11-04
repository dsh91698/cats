import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSetComponent } from './cat-set.component';

describe('CatSetComponent', () => {
  let component: CatSetComponent;
  let fixture: ComponentFixture<CatSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
